import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "SGK Rapor Kontrol Süreci ve SUT Uyumluluğu",
    description: "Eczaneler için SGK rapor kontrol süreci nasıl işler? SUT (Sağlık Uygulama Tebliği) uyumluluğu neden önemlidir? Kesintileri önlemek için ipuçları.",
    keywords: ["SGK rapor kontrol", "SUT uyumluluğu", "eczane rapor analizi", "medula rapor kontrol", "sağlık uygulama tebliği", "eczane kesinti önleme"],
    alternates: {
        canonical: "https://raporin.com/blog/sgk-rapor-kontrol-ve-sut-uyumlulugu",
    },
    openGraph: {
        title: "SGK Rapor Kontrol Süreci ve SUT Uyumluluğu | RaporinAI Blog",
        description: "Eczaneler için SGK rapor kontrol süreci nasıl işler? SUT uyumluluğu neden önemlidir? Kesintileri önlemek için ipuçları.",
        url: "https://raporin.com/blog/sgk-rapor-kontrol-ve-sut-uyumlulugu",
        type: "article",
        publishedTime: "2025-11-27",
        images: [{ url: "/blog1.png", width: 1672, height: 941 }],
    },
};

export default function BlogPost() {
    return (
        <main className="pt-32 pb-20 bg-white min-h-screen">
            <article className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <header className="mb-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full">
                            Rehber
                        </span>
                        <span className="text-gray-500 text-sm">27 Kasım 2025</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        SGK Rapor Kontrol Süreci ve SUT Uyumluluğu: Eczaneler İçin Kapsamlı Rehber
                    </h1>

                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                            💊
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-semibold text-gray-900">RaporinAI Ekibi</p>
                            <p className="text-xs text-gray-500">Eczacılık & Teknoloji Editörleri</p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg prose-teal mx-auto text-gray-700">
                    <p className="lead text-xl text-gray-600 mb-8">
                        Eczaneler için en büyük mali risklerden biri, SGK (Sosyal Güvenlik Kurumu) tarafından yapılan rapor kontrolleri sonucunda oluşan kesintilerdir. Bu yazımızda, SGK rapor kontrol sürecinin nasıl işlediğini ve SUT (Sağlık Uygulama Tebliği) uyumluluğunun önemini ele alacağız.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SGK Rapor Kontrolü Nedir?</h2>
                    <p>
                        SGK rapor kontrolü, eczaneler tarafından Medula sistemine girilen reçete ve raporların, kurumun belirlediği kurallara (SUT) uygun olup olmadığının denetlenmesi sürecidir. Bu süreçte yapılan en ufak bir hata, eczaneler için ciddi maddi kesintilere (rücu) neden olabilir.
                    </p>
                    <p>
                        Manuel olarak yapılan kontrollerde insan hatası riski her zaman mevcuttur. Özellikle yoğun eczane ortamında, karmaşık SUT kurallarını her an takip etmek ve her rapora uygulamak oldukça zordur.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SUT (Sağlık Uygulama Tebliği) Uyumluluğu Neden Kritik?</h2>
                    <p>
                        SUT, sağlık hizmetlerinin finansmanını sağlayan SGK&apos;nın, hangi tedavileri ve ilaçları, hangi koşullarda ödeyeceğini belirleyen kurallar bütünüdür. SUT sürekli güncellenen dinamik bir yapıya sahiptir.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Teşhis Uyumu:</strong> Rapordaki ICD-10 kodlarının, ilacın endikasyonu ile uyumlu olması gerekir.</li>
                        <li><strong>Doz ve Süre:</strong> İlacın kullanım dozu ve tedavi süresi, SUT limitleri dahilinde olmalıdır.</li>
                        <li><strong>Doktor Branşı:</strong> Raporu düzenleyen doktorun branşı, o ilacı yazmaya yetkili olmalıdır.</li>
                        <li><strong>Ek Açıklamalar:</strong> Bazı ilaçlar için raporda özel açıklamaların (örn: &quot;Endikasyon dışı onay&quot;, &quot;Hasta katılım payından muaf&quot;) bulunması zorunludur.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rapor Hatalarını Önlemenin Yolları</h2>
                    <p>
                        Geleneksel yöntemlerle rapor kontrolü yapmak hem zaman alıcı hem de risklidir. İşte hataları minimize etmek için bazı ipuçları:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-6">
                        <li><strong>SUT Değişikliklerini Takip Edin:</strong> Resmi Gazete ve SGK duyurularını düzenli olarak kontrol edin.</li>
                        <li><strong>Çift Kontrol Sistemi:</strong> Raporları sisteme girmeden önce ikinci bir kişinin kontrol etmesini sağlayın.</li>
                        <li><strong>Teknoloji Kullanın:</strong> <strong>RaporinAI</strong> gibi yapay zeka destekli rapor kontrol programları, SUT kurallarını saniyeler içinde tarayarak insan gözünden kaçabilecek hataları tespit eder.</li>
                    </ol>

                    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8 rounded-r-lg">
                        <h3 className="text-lg font-bold text-teal-800 mb-2">RaporinAI ile Kesintilere Son Verin</h3>
                        <p className="text-teal-700 mb-4">
                            RaporinAI, güncel SUT kurallarını anlık olarak takip eder ve raporlarınızı yapay zeka ile analiz eder. Hatalı raporları Medula&apos;ya girmeden tespit ederek sizi olası kesintilerden korur.
                        </p>
                        <Link href="/kayit" className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition-colors">
                            Ücretsiz Deneyin
                        </Link>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sonuç</h2>
                    <p>
                        Eczane işletmeciliğinde karlılığı korumanın en önemli yollarından biri, SGK kesintilerini minimize etmektir. SUT uyumluluğuna dikkat etmek ve teknolojiden faydalanmak, bu süreçte en büyük yardımcınız olacaktır.
                    </p>
                </div>

                {/* Footer Navigation */}
                <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
                    <Link href="/blog" className="text-teal-600 font-medium hover:underline flex items-center gap-2">
                        ← Tüm Yazılar
                    </Link>
                    <div className="flex gap-4">
                        <span className="text-gray-500 text-sm">Paylaş:</span>
                        <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">Facebook</a>
                    </div>
                </div>
            </article>
        </main>
    );
}
