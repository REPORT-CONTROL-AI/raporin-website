import Link from "next/link";
import LegalSidebar from "./LegalSidebar";

export const LEGAL_COMPANY =
  "KAİROLABS SAĞLIK TEKNOLOJİLERİ ANONİM ŞİRKETİ";

export const LEGAL_ADDRESS =
  "Atatürk Mah. Ertuğrul Gazi Sk. Metropol İstanbul Sitesi C1 Blok No: 2B İç Kapı No: 376 Ataşehir / İstanbul";

export const LEGAL_MERSIS = "0489125575800001";

export const LEGAL_EMAIL = "info@raporin.com";

export function Heading({ children, id }) {
  return (
    <h2 id={id} className="text-xl md:text-2xl font-bold text-gray-900 pt-8 pb-1 scroll-mt-24">
      {children}
    </h2>
  );
}

export function SubHeading({ children }) {
  return <h3 className="text-lg font-semibold text-[#0F918B] pt-5 pb-1">{children}</h3>;
}

// Şirket iletişim bilgileri kutusu — sözleşme metinlerinin sonunda kullanılır.
export function CompanyInfo({ title = "İletişim Bilgileri", phone }) {
  const rows = [
    ["Unvanı", "Kairolabs Sağlık Teknolojileri Anonim Şirketi"],
    ["Adresi", LEGAL_ADDRESS],
    ["E-posta", LEGAL_EMAIL],
    phone ? ["Telefon", phone] : null,
    ["Mersis No", LEGAL_MERSIS],
    ["Web Sitesi", "https://raporin.com"],
  ].filter(Boolean);

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-teal-100 bg-white shadow-sm">
      {title ? (
        <p className="border-b border-teal-100 bg-[#E8FFFB] px-4 py-3 text-sm font-semibold text-gray-900">
          {title}
        </p>
      ) : null}
      <dl className="divide-y divide-gray-100 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:gap-4">
            <dt className="font-medium text-gray-900 sm:w-36 sm:shrink-0">{label}</dt>
            <dd className="text-gray-700">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// Sol panel + içerik düzenini kuran ortak kabuk.
export function LegalShell({ children }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E8FFFB] via-[#F9FFFD] to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[272px_minmax(0,1fr)] lg:gap-12">
          <LegalSidebar />
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </main>
  );
}

export function LegalPage({ title, subtitle, updatedAt, backHref = "/kvkk", children }) {
  return (
    <LegalShell>
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#0F918B] hover:underline lg:hidden"
      >
        <span aria-hidden="true">←</span> KVKK ve Hukuki Metinler
      </Link>

      <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B] lg:mt-0">
        {title}
      </h1>

      {subtitle ? (
        <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">{subtitle}</p>
      ) : null}

      {updatedAt ? (
        <p className="mt-2 text-sm text-gray-500">Son güncelleme: {updatedAt}</p>
      ) : null}

      <div className="mt-8 text-gray-700 text-[15px] leading-relaxed space-y-4">
        {children}
      </div>
    </LegalShell>
  );
}

export default LegalPage;
