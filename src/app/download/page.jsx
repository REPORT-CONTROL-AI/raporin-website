"use client";

const VERSION = "1.1.23";
const DOWNLOAD_URL = `https://downloads.raporin.com/RaporinAI-${VERSION}.msi`;

function handleDownloadClick() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18025898979/GwJKCPTBh44cEOPHtZND",
      event_category: "download",
      event_label: "windows_msi",
    });
  }
}

export default function DownloadPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#F8FBFF] via-white to-[#E8FFFB] px-4 py-24">
      <div className="mx-auto w-full max-w-xl rounded-3xl border border-[#D6F8F2] bg-white p-10 text-center shadow-lg sm:p-12">

        <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-amber-700 ring-1 ring-amber-200">
          Şimdi tamamen ücretsiz
        </span>

        <h1 className="mt-4 text-3xl font-bold text-[#0F918B] sm:text-4xl">
          RaporinAI&apos;ı İndirin
        </h1>

        <p className="mt-3 text-sm font-medium text-gray-500">
          Eczaneler için yapay zeka destekli reçete ve rapor kontrol programı
        </p>

        <p className="mt-5 leading-relaxed text-gray-600">
          Masaüstü sürümünü indirerek reçete ve raporlarınızı güvenle analiz
          edebilirsiniz.
        </p>

        <a
          href={DOWNLOAD_URL}
          onClick={handleDownloadClick}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#17C6A3] to-[#0F918B] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="text-xl">💻</span>
          Hemen İndir
        </a>

        <p className="mt-4 text-xs text-gray-400">
          Windows 10 / 11 · Sürüm {VERSION} · Kredi kartı gerekmez
        </p>

        <p className="mt-8 border-t border-gray-100 pt-6 text-sm text-gray-500">
          Kurulum tamamlandıktan sonra hesabınıza giriş yaparak RaporinAI&apos;ın
          tüm özelliklerinden yararlanabilirsiniz.
        </p>
      </div>
    </main>
  );
}
