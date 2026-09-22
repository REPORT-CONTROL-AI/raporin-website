import Link from "next/link";
import { CompanyInfo, Heading, LegalPage, SubHeading } from "../../../components/legal/LegalPage";

export const metadata = {
  title: "Mesafeli Satış Sözleşmesi",
  description:
    "raporin.com üzerinden satın alınan RaporinAI hizmetlerine ilişkin mesafeli satış sözleşmesi: sözleşmenin konusu, hizmetin ifası, cayma hakkı istisnası, abonelik ve iptal koşulları.",
  alternates: {
    canonical: "https://raporin.com/kvkk/mesafeli-satis-sozlesmesi",
  },
};

const BUYER_FIELDS = [
  "Adı / Soyadı / Unvanı",
  "Adresi",
  "Telefon",
  "E-posta",
];

const SERVICE_FIELDS = [
  ["Uygulama Adı / Tanımı", "Satın alınan paket / kredi / abonelik adı"],
  ["Kullanım Süresi / Türü", "Aylık / Yıllık / Tek seferlik kullanım"],
  ["Satış Bedeli (Vergiler Dahil)", "Sipariş sırasında belirtilen tutar (TL)"],
  ["Ödeme Şekli", "Kredi Kartı / Banka Kartı / Banka Havalesi / EFT"],
];

export default function MesafeliSatisSozlesmesiPage() {
  return (
    <LegalPage
      title="Mesafeli Satış Sözleşmesi"
      subtitle="raporin.com üzerinden verilen siparişlerde tarafların hak ve yükümlülüklerini düzenleyen sözleşme metni."
    >
      <Heading>Madde 1 – Taraflar</Heading>

      <SubHeading>1.1. Satıcı</SubHeading>
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

      <Heading>Madde 2 – Sözleşmenin Konusu ve Kapsamı</Heading>
      <p>
        İşbu metin ALICI’nın 6502 sayılı Kanun kapsamında tüketici olduğu durumlarda
        uygulanacaktır. İşbu Sözleşme, ALICI&apos;nın SATICI&apos;ya ait raporin.com alan adlı web
        sitesinden (“Platform”) elektronik ortamda siparişini verdiği aşağıda nitelikleri ve satış
        fiyatı belirtilen yapay zeka destekli analiz yazılımı olan RaporinAI uygulamasının (Ürün)
        hizmetinin satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında
        Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve
        yükümlülüklerini düzenler.
      </p>

      <Heading>Madde 3 – Sözleşme Konusu Hizmet ve Ödeme Bilgileri</Heading>
      <p>
        3.1. Hizmetin türü, kapsamı, satış bedeli ve ödeme koşulları aşağıda belirtildiği gibidir:
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

      <Heading>Madde 4 – Hizmetin İfası ve Teslimat Şekli</Heading>
      <p>
        4.1. Sözleşme konusu Ürün, dijital ortamda sunulan bir yazılım niteliğindedir. İşbu nedenle
        fiziki kargo veya kurye teslimatı yapılmaz.
      </p>
      <p>
        4.2. Hizmet, ALICI tarafından ödemenin başarıyla tamamlanmasını müteakip en kısa süre
        içerisinde ALICI’nın raporin.com üzerindeki kullanıcı hesabına ve/veya paylaştığı e-posta
        adresine tanımlanarak ifa edilmiş sayılır.
      </p>
      <p>
        4.3. SATICI, altyapı kaynaklı teknik aksaklıklar hariç olmak üzere, hizmeti kesintisiz ve
        taahhüt edilen niteliklere uygun şekilde sunmakla yükümlüdür.
      </p>

      <Heading>Madde 5 – Cayma Hakkı ve İstisnaları</Heading>
      <SubHeading>5.1. Cayma Hakkının Kullanılamayacağı Durumlar</SubHeading>
      <p>
        Mesafeli Sözleşmeler Yönetmeliği&apos;nin “Cayma Hakkının İstisnaları” başlıklı 15.
        maddesinin 1. fıkrasının (ğ) bendi uyarınca; “Elektronik ortamda anında ifa edilen
        hizmetler veya tüketiciye anında teslim edilen gayrimaddi mallara ilişkin sözleşmelerde
        cayma hakkı kullanılamaz.” ALICI, bu sözleşme kapsamında satın aldığı hizmetin elektronik
        ortamda anında ifa edilen bir dijital içerik/yazılım hizmeti olduğunu, bu nedenle
        sözleşmenin kurulması ve ödemenin gerçekleşmesiyle birlikte cayma (iade) hakkının
        bulunmadığını bildiğini ve bunu kabul ettiğini beyan eder.
      </p>

      <Heading>Madde 6 – Abonelik ve İptal Koşulları</Heading>
      <p>
        6.1. ALICI, tekrarlayan abonelik modelli bir paket satın alması halinde, aboneliğini{" "}
        <Link
          href="/kvkk/kullanim-kosullari-ve-uyelik-sozlesmesi"
          className="text-[#0F918B] hover:underline"
        >
          Uygulama (App) Kullanım Koşulları ve Üyelik Sözleşmesi
        </Link>
        ’nde belirtilen şekilde iptal edebilir.
      </p>

      <Heading>Madde 7 – Genel Hükümler</Heading>
      <p>
        7.1. ALICI, raporin.com internet sitesinde sözleşme konusu Ürün’ün temel nitelikleri, satış
        fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve
        elektronik ortamda gerekli teyidi verdiğini kabul eder.
      </p>
      <p>
        7.2. SATICI, sözleşme konusu hizmetin teknik aksaklıklar sebebiyle verilememesi halinde
        duruma ilişkin ALICI’yı bilgilendirmekle yükümlüdür.
      </p>
      <p>
        7.3. ALICI, işbu sözleşmeyi ve{" "}
        <Link href="/kvkk/on-bilgilendirme-formu" className="text-[#0F918B] hover:underline">
          Ön Bilgilendirme Formu
        </Link>
        nu elektronik ortamda teyit etmekle, mesafeli sözleşmelerin akdinden önce SATICI tarafından
        ALICI&apos;ya verilmesi gereken adres, satın alınan hizmete ait temel özellikler, vergiler
        dahil fiyat ve cayma hakkı bilgilerini de doğru ve eksiksiz olarak edindiğini teyit etmiş
        olur.
      </p>

      <Heading>Madde 8 – Yetkili Mahkeme</Heading>
      <p>
        İşbu Sözleşme’den doğan uyuşmazlıklarda, ALICI’nın tüketici olması halinde Ticaret
        Bakanlığı’nca her yıl belirlenen parasal sınırlar dahilinde ALICI’nın veya SATICI’nın
        yerleşim yerindeki Tüketici Hakem Heyetleri, bu sınırları aşan durumlarda ise Tüketici
        Mahkemeleri yetkilidir. ALICI’nın tüketici vasfını haiz olmaması halinde ise 6100 sayılı
        Hukuk Muhakemeleri Kanunu uygulama alanı bulacaktır.
      </p>

      <Heading>Madde 9 – Yürürlük</Heading>
      <p>
        ALICI, Site üzerinden sipariş verdiğinde ve ödemeyi gerçekleştirdiğinde işbu Sözleşme’nin
        tüm koşullarını kabul etmiş sayılır. Sözleşme, ALICI tarafından elektronik ortamda
        onaylandığı an yürürlüğe girer.
      </p>
    </LegalPage>
  );
}
