import Link from "next/link";
import { product } from "../lib/productFacts";

export default function ProductOverview() {
  return (
    <section id="raporinai-nedir" aria-labelledby="product-overview-title" className="rounded-2xl border border-teal-100 bg-teal-50/40 p-6 sm:p-8">
      <h2 id="product-overview-title" className="text-2xl font-bold text-gray-900">RaporinAI hangi ihtiyaçları karşılar?</h2>
      <p className="mt-4 leading-relaxed text-gray-700">{product.description}</p>
      <dl className="mt-6 grid gap-x-8 sm:grid-cols-2">
        {product.facts.map(({ label, value }) => (
          <div key={label} className="border-t border-teal-100 py-4">
            <dt className="font-semibold text-gray-900">{label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-gray-600">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{product.limitation}</p>
      <nav aria-label="RaporinAI ürün bilgileri" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-teal-800">
        <Link href="/eczane-rapor-kontrol-programi" className="underline underline-offset-4">Rapor kontrolü</Link>
        <Link href="/recete-kontrol-programi" className="underline underline-offset-4">Reçete kontrolü</Link>
        <Link href="/referanslar" className="underline underline-offset-4">Hakkımızdaki haber ve duyurular</Link>
        <Link href="/download" className="underline underline-offset-4">Windows için indirin</Link>
      </nav>
    </section>
  );
}
