// Blog yazılarının tek kaynağı. Hem /blog listesi hem de sitemap buradan beslenir,
// böylece yeni yazı eklendiğinde sitemap'e elle eklemek gerekmez.
export const blogPosts = [
  {
    slug: "fatura-donemi-oncesi-recete-kontrolu",
    title: "Eczanelerde Fatura Dönemi Öncesi Reçete Kontrolü: SGK Kesintisi Riskini Nasıl Azaltabilirsiniz?",
    excerpt:
      "Fatura dönemi kapanmadan önce rapor geçerliliği, ICD kodu, hekim branşı, doz ve ilaca özel SUT kriterleri nasıl kontrol edilir? Yüzlerce reçete için pratik bir kontrol rutini.",
    date: "19 Eylül 2026",
    publishedAt: "2026-09-19",
    category: "Rehber",
    image: "/blog2.png",
  },
  {
    slug: "sgk-rapor-kontrol-ve-sut-uyumlulugu",
    title: "SGK Rapor Kontrol Süreci ve SUT Uyumluluğu: Eczaneler İçin Rehber",
    excerpt:
      "SGK rapor kontrol süreçlerinde dikkat edilmesi gerekenler ve SUT (Sağlık Uygulama Tebliği) uyumluluğu hakkında kapsamlı bir rehber.",
    date: "27 Kasım 2025",
    publishedAt: "2025-11-27",
    category: "Rehber",
    image: "/blog1.png",
  },
];
