import Link from "next/link";
import { LegalShell } from "../../components/legal/LegalPage";
import { LEGAL_GROUPS } from "../../components/legal/documents";

export const metadata = {
  title: "KVKK ve Hukuki Metinler",
  description:
    "RaporinAI kullanım koşulları, üyelik sözleşmesi, mesafeli satış sözleşmesi, ön bilgilendirme formu, teslimat ve iade şartları ile KVKK kapsamındaki tüm hukuki dokümanlara buradan ulaşabilirsiniz.",
  alternates: {
    canonical: "https://raporin.com/kvkk",
  },
};

export default function KvkkPage() {
  return (
    <LegalShell>
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
        KVKK ve Hukuki Metinler
      </h1>
      <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
        6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki aydınlatma metinleri, gizlilik
        politikası ile RaporinAI internet sitesi ve uygulamasının kullanımına, satışına ve
        teslimatına ilişkin sözleşme ve koşulların tamamına aşağıdan ulaşabilirsiniz.
      </p>

      <div className="mt-10 space-y-10">
        {LEGAL_GROUPS.map((group) => (
          <section key={group.id}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
              {group.label}
            </h2>
            <div className="mt-4 grid gap-4">
              {group.documents.map((doc) => (
                <Link
                  key={doc.href}
                  href={doc.href}
                  className="group block rounded-2xl border border-teal-100 bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-[#17C6A3] hover:shadow-md"
                >
                  <span className="inline-block rounded-full bg-[#E8FFFB] px-3 py-1 text-xs font-semibold text-[#0F918B]">
                    {doc.tag}
                  </span>
                  <h3 className="mt-3 text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#0F918B]">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{doc.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0F918B]">
                    Metni oku
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </LegalShell>
  );
}
