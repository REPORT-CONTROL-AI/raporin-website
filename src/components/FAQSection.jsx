import Link from "next/link";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { homeFaqs } from "../lib/homeFaqs";

// Native details keeps every answer in server HTML and works without JavaScript.
export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#E8FFFB] via-white to-[#F9FFFD]" aria-labelledby="faq-title">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <FaQuestionCircle size={50} className="text-teal-600 mx-auto mb-4" aria-hidden="true" />
          <h2 id="faq-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-lg text-gray-600">RaporinAI hakkında merak ettikleriniz.</p>
        </div>
        <div className="space-y-8">
          {homeFaqs.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.questions.map((faq) => (
                  <details key={faq.q} name="home-faq" className="group bg-white rounded-xl shadow-md border border-teal-100 overflow-hidden">
                    <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-teal-50/50 focus-visible:outline-2 focus-visible:outline-teal-600 [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <FaChevronDown aria-hidden="true" className="shrink-0 text-teal-600 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="px-6 pb-5 pt-4 text-gray-700 leading-relaxed border-t border-teal-50">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center rounded-2xl p-8 border border-teal-100 bg-teal-50/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Sorunuza cevap bulamadınız mı?</h3>
          <p className="text-gray-600 mb-6">Destek ekibimizden bilgi alabilir, veri işleme koşullarını inceleyebilirsiniz.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700">Bize ulaşın</Link>
            <Link href="/kvkk" className="px-8 py-3 bg-white text-teal-700 font-semibold rounded-full border border-teal-600">KVKK ve hukuki metinler</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
