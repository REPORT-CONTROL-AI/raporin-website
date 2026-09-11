import { softwareSchema } from "../lib/productFacts";

// Ürün bilgileri görünür olan sayfalarda kullanılır; hukuki sayfalarda basılmaz.
export default function ProductSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...softwareSchema }).replace(/</g, "\\u003c") }} />;
}
