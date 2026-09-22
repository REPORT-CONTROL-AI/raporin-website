// Hukuki metinlerin tek kaynağı. Sol panel, /kvkk listesi ve sitemap buradan beslenir.
// ÖNEMLİ: Mevcut URL'ler masaüstü uygulamasından link verildiği için DEĞİŞTİRİLMEMELİDİR.

export const LEGAL_GROUPS = [
  {
    id: "sozlesmeler",
    label: "Sözleşmeler ve Koşullar",
    documents: [
      {
        href: "/kvkk/kullanim-kosullari-ve-uyelik-sozlesmesi",
        navTitle: "Kullanım Koşulları ve Üyelik Sözleşmesi",
        title: "Web Sitesi & Uygulama Kullanım Koşulları ve Üyelik Sözleşmesi",
        description:
          "RaporinAI internet sitesi ve masaüstü uygulamasının kullanım koşulları ile üyelik sözleşmesinin tam metni.",
        tag: "Sözleşme",
      },
      {
        href: "/kvkk/mesafeli-satis-sozlesmesi",
        navTitle: "Mesafeli Satış Sözleşmesi",
        title: "Mesafeli Satış Sözleşmesi",
        description:
          "raporin.com üzerinden verilen siparişlerde tarafların hak ve yükümlülüklerini düzenleyen mesafeli satış sözleşmesi.",
        tag: "Sözleşme",
      },
      {
        href: "/kvkk/on-bilgilendirme-formu",
        navTitle: "Ön Bilgilendirme Formu",
        title: "RaporinAI Ön Bilgilendirme Formu",
        description:
          "Satın alma öncesinde hizmetin temel nitelikleri, fiyatı, teslimat usulü ve cayma hakkına dair yasal bilgilendirme.",
        tag: "Bilgilendirme",
      },
      {
        href: "/kvkk/teslimat-ve-iade-sartlari",
        navTitle: "Teslimat ve İade Şartları",
        title: "Teslimat ve İade Şartları",
        description:
          "Dijital hizmetlerin teslimatı, abonelik iptali, cayma hakkı istisnası ve iade süreçlerine dair şartlar.",
        tag: "Bilgilendirme",
      },
    ],
  },
  {
    id: "gizlilik",
    label: "Gizlilik ve KVKK",
    documents: [
      {
        href: "/gizlilik-politikasi",
        navTitle: "Gizlilik Politikası",
        title: "Gizlilik Politikası",
        description:
          "raporin.com internet sitesi ve RaporinAI uygulamasında kişisel bilgilerinizin nasıl korunduğuna dair gizlilik politikası.",
        tag: "Politika",
      },
      {
        href: "/kvkk/eczaneler-icin-aydinlatma-metni",
        navTitle: "Eczaneler İçin Aydınlatma Metni",
        title: "Kişisel Verilerin İşlenmesine Dair Aydınlatma Metni",
        description:
          "RaporinAI uygulamasını kullanan eczanelerin kişisel verilerinin hangi amaçlarla, hangi hukuki sebeplere dayalı olarak işlendiğine ve KVKK kapsamındaki haklarınıza dair aydınlatma metni.",
        tag: "Aydınlatma Metni",
      },
    ],
  },
  {
    id: "cerez",
    label: "Çerez Metinleri",
    documents: [
      {
        href: "/kvkk/cerez-politikasi",
        navTitle: "İnternet Sitesi Çerez Aydınlatma Metni",
        title: "İnternet Sitesi Çerez Aydınlatma Metni",
        description:
          "raporin.com internet sitesinde kullanılan çerezler, kullanım amaçları, saklama süreleri ve çerez tercihlerinizin yönetimi.",
        tag: "Aydınlatma Metni",
      },
      {
        href: "/kvkk/uygulama-cerez-aydinlatma-metni",
        navTitle: "Uygulama Çerez Aydınlatma Metni",
        title: "RaporinAI Uygulaması Çerez Aydınlatma Metni",
        description:
          "Masaüstü uygulamada kullanılan çerezler, saklama süreleri, hukuki sebepler ve tercihlerinizi nasıl yöneteceğinize dair aydınlatma metni.",
        tag: "Aydınlatma Metni",
      },
    ],
  },
];

export const LEGAL_DOCUMENTS = LEGAL_GROUPS.flatMap((group) => group.documents);

export function findLegalDocument(href) {
  return LEGAL_DOCUMENTS.find((doc) => doc.href === href);
}
