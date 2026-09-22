import { CompanyInfo, Heading, LegalPage, SubHeading } from "../../../components/legal/LegalPage";

export const metadata = {
  title: "Ön Bilgilendirme Formu",
  description:
    "RaporinAI ön bilgilendirme formu: hizmetin temel nitelikleri ve fiyatı, teslimat ve ifa usulü, cayma hakkı istisnası ile uyuşmazlıkların çözümüne dair yasal bilgilendirme.",
  alternates: {
    canonical: "https://raporin.com/kvkk/on-bilgilendirme-formu",
  },
};

const BUYER_FIELDS = ["Adı / Soyadı / Unvanı", "Adresi", "Telefon", "E-posta"];

const SERVICE_FIELDS = [
  ["Uygulama Adı / Tanımı", "Satın alınan paket / kredi / abonelik adı"],
  ["Kullanım Süresi / Türü", "Aylık / Yıllık / Tek seferlik kullanım"],
  ["Satış Bedeli (Vergiler Dahil)", "Sipariş sırasında belirtilen tutar (TL)"],
  ["Ödeme Şekli", "Kredi Kartı / Banka Kartı / Banka Havalesi / EFT"],
];

export default function OnBilgilendirmeFormuPage() {
  return (
    <LegalPage
      title="RaporinAI Ön Bilgilendirme Formu"
      subtitle="Satın alma öncesinde hizmetin temel nitelikleri, fiyatı, teslimat usulü ve cayma hakkına dair yasal bilgilendirme."
    >
      <Heading>1. Taraflar</Heading>

      <SubHeading>1.1. Satıcı Bilgileri</SubHeading>
      <CompanyInfo title="Satıcı Bilgileri" />

      <SubHeading>1.2. Alıcı Bilgileri</SubHeading>
      <p>
        Alıcı’ya ait aşağıdaki bilgiler, sipariş sırasında ALICI tarafından elektronik ortamda
        beyan edilen bilgilerden oluşur:
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        {BUYER_FIELDS.map((field) => (
          <li key={field}>{field}</li>
        ))}
      </ul>

      <Heading>2. Sözleşme Konusu Hizmetin Temel Nitelikleri ve Fiyatı</Heading>
      <p>
        2.1. İşbu metin ALICI’nın 6502 sayılı Kanun kapsamında tüketici olduğu durumlarda
        uygulanacaktır. İşbu Ön Bilgilendirme Formu&apos;nun konusunu, ALICI&apos;nın
        SATICI&apos;ya ait raporin.com alan adlı web sitesinden (“Platform”) elektronik ortamda
        siparişini verdiği aşağıda nitelikleri ve satış fiyatı belirtilen yapay zeka destekli analiz
        yazılımı olan RaporinAI uygulamasının satışı ve teslimi ile ilgili olarak 6502 sayılı
        Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince
        bilgilendirilmesidir.
      </p>

      <div className="overflow-x-auto my-4 rounded-xl border border-teal-100 bg-white shadow-sm">
        <table className="w-full min-w-[480px] text-sm text-left">
          <tbody>
            {SERVICE_FIELDS.map(([label, value]) => (
              <tr key={label} className="border-t border-gray-100 first:border-t-0 align-top">
                <th scope="row" className="w-1/3 bg-[#E8FFFB]/50 px-4 py-3 font-medium text-gray-900">
                  {label}
                </th>
                <td className="px-4 py-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        2.2. Satın alınan hizmetler tamamen dijital ortamda sunulan yazılım/içerik niteliğinde
        olduğundan herhangi bir fiziki kargo veya teslimat kısıtlaması bulunmamaktadır; hizmete
        erişim internet bağlantısı olan her yerden sağlanabilir.
      </p>
      <p>
        2.3. Ödemeler raporin.com üzerinden Kredi Kartı, Banka Kartı, Banka Havalesi, EFT yöntemleri
        ile güvenli ödeme altyapısı (SSL/TLS) kullanılarak yapılabilmektedir.
      </p>

      <Heading>3. Hizmetin Teslimatı ve İfa Usulü</Heading>
      <p>
        3.1. Sözleşme konusu hizmet, gayrimaddi ve dijital nitelikte bir SaaS (Yazılım Hizmeti) /
        dijital içerik olduğundan fiziki kargo teslimatı yapılmaz.
      </p>
      <p>
        3.2. Satın alınan dijital hizmet, ödeme onayının alınmasını müteakip anında ALICI’nın
        platform üzerindeki kullanıcı hesabına tanımlanır ve kullanıma açılır.
      </p>
      <p>
        3.3. Hizmet kapsamındaki dijital içerik ve yazılımlar; yetkisiz erişim, kopyalama ve
        paylaşımı önlemek amacıyla lisans doğrulama sistemleri, IP ve oturum sınırlamaları, SSL/TLS
        şifreleme protokolleri ve dinamik filigran (watermark) gibi teknik koruma tedbirleriyle
        korunmaktadır.
      </p>
      <p>
        3.4. Dijital hizmet ve içerikler; güncel web tarayıcılarına (Google Chrome, Mozilla Firefox,
        Microsoft Edge vb.) sahip, kesintisiz internet bağlantısı bulunan ve güncel bir işletim
        sistemi (Windows 10 ve üzeri; macOS uyumluluğu bulunmamaktadır) çalıştıran standart
        masaüstü, tablet veya mobil cihazlar ile uyumlu şekilde çalışmaktadır.
      </p>

      <Heading>4. Cayma Hakkı ve Kullanım Şartları</Heading>
      <p>
        4.1. 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler
        Yönetmeliği’nin “Cayma Hakkının İstisnaları” başlıklı 15. maddesinin 1. fıkrasının (ğ) bendi
        uyarınca; “Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim
        edilen gayrimaddi mallara ilişkin sözleşmelerde cayma hakkı kullanılamaz.”
      </p>
      <p>
        4.2. Bu kapsamda, raporin.com üzerinden satın alınan ve ödemenin tamamlanmasıyla anında
        ALICI&apos;nın erişimine/kullanımına açılan dijital hizmetler, analiz raporları ve
        paketlerde cayma ve iade hakkı bulunmamaktadır.
      </p>
      <p>
        4.3. ALICI, işbu formu elektronik ortamda onaylayarak cayma hakkı bulunmayan bir hizmet
        satın aldığını kabul, beyan ve taahhüt eder.
      </p>

      <Heading>5. Uyuşmazlıkların Çözümü</Heading>
      <p>
        İşbu Ön Bilgilendirme Formu’nun uygulanmasında, Ticaret Bakanlığınca her yıl ilan edilen
        değere kadar ALICI’nın yerleşim yerindeki Tüketici Hakem Heyetleri ile Tüketici Mahkemeleri
        yetkilidir.
      </p>
    </LegalPage>
  );
}
