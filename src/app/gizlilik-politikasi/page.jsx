export const metadata = {
  title: "Gizlilik Politikası",
  description:
    "RaporinAI gizlilik politikası: uygulamanın hangi verileri hangi amaçla işlediği ve kişisel bilgilerin üçüncü taraflarla paylaşılmaması.",
  alternates: {
    canonical: "https://raporin.com/gizlilik-politikasi",
  },
  openGraph: {
    title: "Gizlilik Politikası | RaporinAI",
    url: "https://raporin.com/gizlilik-politikasi",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function PrivacyPage() {
    return (
      <main className="max-w-3xl mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">Gizlilik Politikası</h1>
        <p className="text-gray-700 leading-relaxed">
          RaporinAI, kullanıcı verilerinin gizliliğini korumaya önem verir.
          Uygulama, yalnızca rapor analizi için gerekli verileri işler ve hiçbir kişisel bilgiyi
          üçüncü taraflarla paylaşmaz.
        </p>
      </main>
    );
  }
  