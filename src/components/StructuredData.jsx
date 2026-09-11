import { SITE_URL } from "../lib/productFacts";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "RaporinAI",
        legalName: "KairoLabs Sağlık Teknolojileri Anonim Şirketi",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        sameAs: [
          "https://www.linkedin.com/company/raporinai/",
          "https://www.instagram.com/raporinai",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "RaporinAI",
        url: SITE_URL,
        inLanguage: ["tr-TR", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
