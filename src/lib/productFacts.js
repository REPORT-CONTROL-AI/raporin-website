export const SITE_URL = "https://raporin.com";

// SoftwareApplication ve llms.txt için kamuya açık ürün bilgileri.
export const product = {
  name: "RaporinAI",
  description: "RaporinAI, Türkiye’deki eczaneler için yapay zeka destekli bir reçete ve rapor kontrol programıdır. Medula’dan reçete aktarımı, PDF ile tekil rapor kontrolü, toplu analiz ve reçete–rapor doz karşılaştırması sunar; SUT kriterlerine göre değerlendirme sonuçlarını gösterir.",
  limitation: "RaporinAI eczacının kontrol sürecini destekler. Analiz sonuçları eczacı tarafından değerlendirilmelidir; SGK ödeme onayı veya kesintisizlik garantisi vermez.",
  facts: [
    { label: "Kimler için?", value: "Türkiye’deki eczacılar ve eczane ekipleri" },
    { label: "Platform", value: "Windows masaüstü uygulaması" },
    { label: "Veri aktarımı", value: "Medula’dan reçete aktarımı veya PDF rapor yükleme" },
    { label: "Kontrol kapsamı", value: "SUT kriterleri, rapor koşulları ve reçete–rapor doz uyumu" },
    { label: "Çalışma biçimi", value: "Tekil ilaç analizi ve fatura dönemindeki raporlu ilaçların toplu analizi" },
    { label: "Ücret", value: "Beta süresince ücretsiz; kredi kartı gerekmez. Beta sonrası koşullar ayrıca duyurulur." },
  ],
  features: [
    "Medula’dan reçete aktarımı",
    "PDF ile tekil rapor kontrolü",
    "Fatura dönemindeki raporlu ilaçların toplu analizi",
    "Reçete–rapor doz karşılaştırması",
    "SUT kriterlerine göre açıklamalı analiz sonuçları",
  ],
};

export const softwareSchema = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: product.name,
  url: SITE_URL,
  description: product.description,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Eczane reçete ve rapor kontrol programı",
  operatingSystem: "Windows",
  inLanguage: "tr-TR",
  audience: { "@type": "Audience", audienceType: "Eczacılar ve eczane ekipleri" },
  publisher: { "@id": `${SITE_URL}/#organization` },
  downloadUrl: `${SITE_URL}/download`,
  screenshot: `${SITE_URL}/screens/toplu-analiz.png`,
  featureList: product.features,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
    description: "Beta süresince ücretsiz; beta sonrası koşullar ayrıca duyurulur.",
    url: `${SITE_URL}/ucretsiz-eczane-rapor-programi`,
  },
};
