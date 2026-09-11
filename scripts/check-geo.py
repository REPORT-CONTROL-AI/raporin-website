#!/usr/bin/env python3
"""Check rendered GEO output: python3 scripts/check-geo.py http://localhost:3000"""
import json
import re
import sys
from html.parser import HTMLParser
from urllib.request import urlopen
from xml.etree import ElementTree

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000").rstrip("/")
CANONICAL = "https://raporin.com"


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.text = []
        self.schemas = []
        self.links = []
        self.metas = []
        self.faq_controls = []
        self.h1s = 0
        self.script = None
        self.script_text = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ("script", "style"):
            self.script = attrs.get("type", tag)
            self.script_text = []
        if tag == "link":
            self.links.append(attrs)
        if tag == "meta":
            self.metas.append(attrs)
        if tag == "button" and attrs.get("aria-controls", "").startswith("faq-answer-"):
            self.faq_controls.append(attrs)
        self.h1s += tag == "h1"

    def handle_data(self, data):
        if self.script:
            self.script_text.append(data)
        else:
            self.text.append(data)

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            if self.script == "application/ld+json":
                value = json.loads("".join(self.script_text))
                self.schemas.extend(value.get("@graph", [value]))
            self.script = None


def fetch(path):
    with urlopen(BASE + path, timeout=45) as response:
        assert response.status == 200, (path, response.status)
        return response.read().decode("utf-8"), response.headers


def normalize(text):
    return " ".join(text.split())


paths = ["/", "/eczane-rapor-kontrol-programi", "/recete-kontrol-programi"]
for path in paths:
    html, _ = fetch(path)
    page = Page(html)
    text = normalize(" ".join(page.text))
    assert page.h1s == 1, (path, "one H1 required")
    canonicals = [link.get("href") for link in page.links if link.get("rel") == "canonical"]
    assert canonicals == [CANONICAL + (path if path != "/" else "")], (path, canonicals)
    assert not any("noindex" in meta.get("content", "") for meta in page.metas if meta.get("name") in ("robots", "googlebot")), path
    faqs = [schema for schema in page.schemas if schema.get("@type") == "FAQPage"]
    assert len(faqs) == 1, (path, "FAQ duplication")
    for question in faqs[0]["mainEntity"]:
        assert normalize(question["name"]) in text, (path, "FAQ question missing from HTML")
        assert normalize(question["acceptedAnswer"]["text"]) in text, (path, "FAQ answer missing from HTML")
    software = [schema for schema in page.schemas if schema.get("@type") == "SoftwareApplication"]
    assert len(software) == 1, (path, "software duplication")
    assert normalize(software[0]["description"]) in text, (path, "invisible product description")
    assert software[0]["publisher"]["@id"] in [schema.get("@id") for schema in page.schemas], path
    assert "aggregateRating" not in software[0], (path, "unverified rating")
    assert 'id="raporinai-nedir"' not in html, (path, "removed product overview must not return")
    if path == "/":
        assert len(page.faq_controls) == len(faqs[0]["mainEntity"]), "each FAQ answer must have a toggle"
        assert all(button.get("aria-expanded") == "false" for button in page.faq_controls), "FAQ answers start collapsed"
    else:
        assert not any(link.get("hreflang") for link in page.links), (path, "unrelated homepage translations")

    print("PASS rendered HTML, metadata and JSON-LD:", path)

for path in ["/kvkk", "/en"]:
    html, _ = fetch(path)
    page = Page(html)
    assert not any(schema.get("@type") == "SoftwareApplication" for schema in page.schemas), path
    print("PASS site identity without inherited Turkish product schema:", path)

robots, _ = fetch("/robots.txt")
assert "Cloudflare Managed" not in robots, "CDN adds competing robots rules; review live Cloudflare settings"
for block in re.split(r"\n\s*\n", robots):
    if re.search(r"user-agent:", block, re.I):
        assert re.search(r"^allow:\s*/\s*$", block, re.I | re.M), block
        for private in ["/api/", "/private/", "/reset-password", "/verify-email"]:
            assert re.search(r"^disallow:\s*" + re.escape(private) + r"\s*$", block, re.I | re.M), block
print("PASS crawler rules and private route exclusions")

sitemap, _ = fetch("/sitemap.xml")
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
entries = ElementTree.fromstring(sitemap).findall("s:url", ns)
urls = [entry.findtext("s:loc", namespaces=ns) for entry in entries]
assert len(urls) == len(set(urls)), "duplicate sitemap URLs"
for path in paths:
    assert CANONICAL + (path if path != "/" else "") in urls, path
assert all("reset-password" not in url and "verify-email" not in url for url in urls)
print("PASS sitemap discovery")

llms, headers = fetch("/llms.txt")
assert headers.get_content_type() == "text/plain"
assert llms.startswith("# RaporinAI\n") and "SGK ödeme onayı" in llms
for url in re.findall(r"\]\((https://raporin\.com[^)]+)\)", llms):
    fetch(url.removeprefix(CANONICAL).split("#")[0] or "/")
print("PASS llms.txt content type and all linked pages")
