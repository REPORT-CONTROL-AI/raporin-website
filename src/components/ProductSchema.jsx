import { softwareSchema } from "../lib/productFacts";
import { homeFaqs } from "../lib/homeFaqs";

// Ürün bilgileri görünür olan sayfalarda kullanılır; hukuki sayfalarda basılmaz.
export default function ProductSchema({ description = homeFaqs[0].questions[0].a }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...softwareSchema, description }).replace(/</g, "\\u003c") }} />;
}
