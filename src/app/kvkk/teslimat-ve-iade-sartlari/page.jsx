import { CompanyInfo, Heading, LegalPage, SubHeading } from "../../../components/legal/LegalPage";

export const metadata = {
  title: "Teslimat ve İade Şartları",
  description:
    "RaporinAI dijital hizmetlerinin teslimat şartları, erişim sorunları, ödeme, cayma hakkı istisnası, abonelik iptali ve iade süreçlerine ilişkin koşullar.",
  alternates: {
    canonical: "https://raporin.com/kvkk/teslimat-ve-iade-sartlari",
  },
};

const REFUND_CASES = [
  "Kullanıcı’dan kaynaklanmayan, Platform’un teknik altyapısından doğan ve makul süre içerisinde çözülemeyen sürekli hizmet kesintileri.",
  "Ödeme altyapısından kaynaklı olarak aynı hizmet için mükerrer (çift) tahsilat yapılması durumu (fazla yapılan tahsilat derhal iade edilir).",
];

export default function TeslimatVeIadeSartlariPage() {
  return (
    <LegalPage
      title="Teslimat ve İade Şartları"
      subtitle="raporin.com üzerinden sağlanan dijital hizmetlerin teslimatı ile iade koşulları."
    >
      <p>
        Bu Teslimat ve İade Şartları metni, raporin.com (“Platform” ya da “Satıcı”) üzerinden
        sağlanan dijital hizmetler, yazılım çözümleri ve abonelik paketlerinin teslimatı ile iade
        koşullarını belirlemek amacıyla düzenlenmiştir.
      </p>
      <p>
        6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği
        hükümleri uyarınca; platformumuz üzerinden işlem yapan kişiler (Tüketici olsun ya da olmasın),
        işbu şartları kabul etmiş sayılır.
      </p>

      <Heading>1. Teslimat Şartları</Heading>

      <SubHeading>1.1. Dijital Hizmet Niteliği</SubHeading>
      <p>
        raporin.com üzerinden satışa sunulan ve Kullanıcı tarafından satın alınan RaporinAI
        uygulaması (Ürün) AI destekli analiz ve yazılım hizmeti niteliğindedir. Platform üzerinde
        herhangi bir fiziki ürün satışı yapılmamakta, dolayısıyla kargo ile fiziki teslimat
        gerçekleşmemektedir.
      </p>

      <SubHeading>1.2. Teslimat Süresi ve Yöntemi</SubHeading>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Ürün ile ilgili olarak Kullanıcı tarafından seçilen paket veya hizmete ilişkin ödeme
          işleminin başarıyla tamamlanmasının ardından Ürün en kısa süre içerisinde Kullanıcı’nın
          erişimine açık hale getirilir.
        </li>
        <li>
          Kullanıcı, satın aldığı yazılım ve analiz araçlarına Kullanıcı Adı ve Şifresi ile
          platforma giriş yaparak anında erişim sağlar.
        </li>
        <li>
          İşlemin tamamlandığına dair bilgilendirme ve e-fatura/arşiv faturası, Kullanıcı’nın kayıt
          esnasında belirttiği e-posta adresine iletilir.
        </li>
      </ul>

      <SubHeading>1.3. Erişim Sorunları</SubHeading>
      <p>
        Sistemsel veya teknik bir nedenden ötürü hizmete erişimde gecikme yaşanması halinde
        Kullanıcı,{" "}
        <a href="mailto:info@raporin.com" className="text-[#0F918B] hover:underline">
          info@raporin.com
        </a>{" "}
        üzerinden Platform yetkilileri ile iletişime geçebilir. Teknik aksaklıklar en kısa sürede
        giderilerek Kullanıcı’ya erişim hakkı tanınır.
      </p>

      <SubHeading>1.4. Ödeme</SubHeading>
      <p>
        Kullanıcı, ödemeyi kredi kartıyla yaptığı durumda temerrüde düştüğü takdirde, kart sahibi
        banka ile arasındaki kredi kartı sözleşmesi çerçevesinde faiz ödeyeceğini ve bankaya karşı
        sorumlu olacağını kabul, beyan ve taahhüt eder. Bu durumda ilgili banka hukuki yollara
        başvurabilir; doğacak masrafları ve vekâlet ücretini Kullanıcı’dan talep edebilir ve her
        koşulda Kullanıcı’nın borcundan dolayı temerrüde düşmesi halinde, Kullanıcı, borcun
        gecikmeli ifasından dolayı Platform’un uğradığı zarar ve ziyanını ödeyeceğini kabul eder.
      </p>
      <p>
        Ürün teslim edildikten sonra, Kullanıcı’nın ödeme yaptığı kredi kartının yetkisiz kişiler
        tarafından haksız olarak kullanıldığı tespit edilirse ve satılan ürün bedeli ilgili banka
        veya finans kuruluşu tarafından Platform’a ödenmez ise, Platform, sözleşme konusu ürünü
        Kullanıcı erişimine kapatır.
      </p>
      <p>
        Aynı şekilde Kullanıcı, satın aldığı Ürün bedelini ödemez veya banka kayıtlarında iptal
        ederse, Platform’un ürünü teslim yükümlülüğü sona erer.
      </p>

      <Heading>2. İptal ve İade Şartları</Heading>

      <SubHeading>2.1. Cayma Hakkı ve İstisnası (Dijital Hizmetler)</SubHeading>
      <p>
        6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği’nin
        “Cayma Hakkının İstisnaları” başlıklı 15. maddesinin (ğ) bendi uyarınca; “Elektronik ortamda
        anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayrimaddi mallara ilişkin
        sözleşmelerde cayma hakkı kullanılamaz.”
      </p>
      <p>
        Bu kapsamda, raporin.com üzerinden satın alınan ve anında kullanıma açılan dijital analiz,
        raporlama ve yazılım hizmetlerinde kural olarak yasal cayma (iade) hakkı bulunmamaktadır.
      </p>

      <SubHeading>2.2. İade Yapılabilecek İstisnai Durumlar</SubHeading>
      <p>Aşağıdaki hallerde Kullanıcı’ya iade veya kredi tanımlaması yapılabilir:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        {REFUND_CASES.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <SubHeading>2.3. Abonelik İptal Şartları</SubHeading>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Süreli/Abonelik modeli ile satın alınan hizmetlerde Kullanıcı, dilediği zaman aboneliğini
          sonraki dönemler için iptal edebilir.
        </li>
        <li>
          Abonelik iptali durumunda, mevcut dönemin sonuna kadar hizmetten yararlanılmaya devam
          edilir. İçinde bulunulan döneme ait ödenmiş ücretlerin kısmi veya tam iadesi yapılmaz.
        </li>
      </ul>

      <Heading>3. İade Süreci ve Geri Ödemeler</Heading>
      <p>
        3.1. İade talepleri{" "}
        <a href="mailto:info@raporin.com" className="text-[#0F918B] hover:underline">
          info@raporin.com
        </a>{" "}
        adresine yazılı olarak iletilmelidir.
      </p>
      <p>
        3.2. Talebin onaylanması durumunda geri ödeme, Kullanıcı’nın satın alma işleminde kullandığı
        ödeme yöntemi (kredi kartı / banka kartı) üzerinden gerçekleştirilir.
      </p>
      <p>
        3.3. Bankaların işlem sürelerine bağlı olarak iade tutarının hesabınıza veya kartınıza
        yansıması 3 ila 10 iş günü sürebilir.
      </p>

      <Heading>4. İletişim ve Destek</Heading>
      <p>
        Teslimat, erişim ve iade süreçlerine ilişkin her türlü soru ve talepleriniz için bizimle
        iletişime geçebilirsiniz:
      </p>
      <CompanyInfo title="İletişim Bilgileri" />
    </LegalPage>
  );
}
