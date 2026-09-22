import Link from "next/link";
import { CompanyInfo, Heading, LegalPage } from "../../components/legal/LegalPage";

export const metadata = {
  title: "Gizlilik Politikası",
  description:
    "RaporinAI gizlilik politikası: raporin.com internet sitesi ve uygulamasında kişisel bilgilerinizin nasıl korunduğu, ödeme güvenliği, çerezler ve iletişim bilgileri.",
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
    <LegalPage
      title="Gizlilik Politikası"
      subtitle="raporin.com internet sitesi ve RaporinAI uygulamasında kişisel bilgilerinizin korunmasına dair politikamız."
    >
      <p>
        KAİROLABS SAĞLIK TEKNOLOJİLERİ ANONİM ŞİRKETİ tarafından sağlanan{" "}
        <span className="whitespace-nowrap">https://raporin.com/</span> adresindeki internet
        sitesine (Site) erişiminizden veya siteyi kullanımınızdan önce lütfen bu sözleşmeyi dikkatle
        okuyunuz.
      </p>
      <p>
        Siteye erişmekle veya siteyi kullanmakla, aşağıda belirtilen şartlar ve hükümlerle bağlı
        olmayı kabul etmektesiniz. Eğer bu şartlar ve hükümlerle bağlı olmak istemezseniz, siteye
        erişmeyebilir veya siteyi kullanmayabilirsiniz.
      </p>
      <p>
        Bu beyan <span className="whitespace-nowrap">https://raporin.com/</span> adlı internet
        sitesinin gizlilik politikasını içerir.{" "}
        <span className="whitespace-nowrap">https://raporin.com/</span> internet sitesini ziyaret
        ederek aşağıdaki şartları ve kuralları uygulamayı kabul etmiş sayılmaktasınız.
      </p>

      <Heading>Kişisel Bilgilerinizin Kullanımı</Heading>
      <p>
        <span className="whitespace-nowrap">https://raporin.com/</span> üyelik ve/veya RaporinAI
        adlı uygulamanın (Uygulama) kullanımı aşamasında ve daha sonrasında sizden bazı kişisel
        bilgilerinizi talep eder. Kişisel bilgilerinizin korunması ve gizliliğinizin
        sürdürülebilmesi birinci önceliğimizdir. Bu nedenle vermiş olduğunuz bilgiler, Üyelik
        Sözleşmesi ve Aydınlatma Metni’nde belirtilen kurallar ve amaçlar dışında herhangi bir
        kapsamda kullanılmayacak, üçüncü şahıslarla paylaşılmayacaktır. Kişisel verilerle ilgili
        daha detaylı bilgiye Site’de yer alan{" "}
        <Link
          href="/kvkk/eczaneler-icin-aydinlatma-metni"
          className="text-[#0F918B] hover:underline"
        >
          Aydınlatma Metinleri
        </Link>{" "}
        ve{" "}
        <Link href="/kvkk" className="text-[#0F918B] hover:underline">
          diğer metinlerden
        </Link>{" "}
        ulaşabilirsiniz.
      </p>

      <Heading>Ödeme ve Kredi Kartı Güvenliği</Heading>
      <p>
        İnternet Sitesi’nden alışveriş yapan kart sahiplerinin güvenliğini önemsemekteyiz. Kredi
        kartı bilgileriniz hiçbir şekilde sistemimizde saklanmamaktadır. Bu bilgiler sadece ödeme
        sayfasında, bankadan ödeme onayı alımında kullanılacaktır. Alışveriş sırasında kullanılan
        kredi kartı ile ilgili bilgiler alışveriş sitelerimizden bağımsız olarak SSL (Secure Sockets
        Layer) protokolü ile şifrelenip sorgulanmak üzere ilgili bankaya ulaştırılır. Kartın
        kullanılabilirliği onaylandığı takdirde alışverişe devam edilir. Kartla ilgili hiçbir bilgi
        tarafımızdan görüntülenemediğinden ve kaydedilmediğinden, üçüncü şahısların herhangi bir
        koşulda bu bilgileri ele geçirmesi engellenmiş olur.
      </p>
      <p>
        İnternet Sitesi’nin sipariş sayfalarında site ile ziyaretçi arasındaki haberleşme SSL
        standardında gerçekleşmektedir. Kredi kartı bilgilerinin verileceği sırada sayfada bu
        haberleşme biçiminin bulunup bulunmadığı, ödeme sayfasına erişildiğinde adres çubuğunda
        yazan ifadenin <span className="whitespace-nowrap">http://</span> biçiminde değil,{" "}
        <span className="whitespace-nowrap">https://</span> biçiminde oluşu ile ifade edilmektedir.
      </p>

      <Heading>Üçüncü Taraf Bağlantıları</Heading>
      <p>
        Site, başka internet sitelerine link verebilir. Linkler vasıtasıyla erişilen sitelerin
        gizlilik uygulamaları ve içeriklerine yönelik herhangi bir sorumluluk taşımamaktayız. Site’de
        yer alan Gizlilik Politikası, Çerez Politikası, Aydınlatma Metinleri, Üyelik Sözleşmesi vb.
        metinler sadece <span className="whitespace-nowrap">https://raporin.com/</span> Sitesi
        kullanımına ilişkindir ve üçüncü taraf web sitelerini kapsamaz.
      </p>

      <Heading>E-posta Güvenliği</Heading>
      <p>
        Bizlere göndereceğiniz e-postalarda, kredi kartı bilgilerinizi veya Uygulama kullanıcı adı
        ve şifrelerinizi yazmayınız. E-postalarda yer alan bilgiler üçüncü şahıslar tarafından
        görülebilir. E-postalardan aktarılan bilgilerin güvenliğini hiçbir koşulda garanti
        etmemekteyiz.
      </p>

      <Heading>Çerezler</Heading>
      <p>
        Site ve Uygulama’yı ziyaret eden/kullanan kullanıcılar, Site ve Uygulama’nın çerez (cookie)
        kullandığını bilmelidir. Kullanılan çerezlerle ilgili detaylı bilgiye{" "}
        <Link href="/kvkk/cerez-politikasi" className="text-[#0F918B] hover:underline">
          Çerez Politikası
        </Link>
        ’nı okuyarak ulaşabilirsiniz.
      </p>

      <Heading>Değişiklikler</Heading>
      <p>
        İşbu Gizlilik Politikası hükümlerini dilediğimiz zaman sitede yayımlamak veya kullanıcılara
        elektronik posta göndermek suretiyle değiştirebiliriz. Gizlilik Politikası hükümleri
        değiştiği takdirde, yayımlandığı tarihte yürürlük kazanır.
      </p>

      <Heading>Bize Ulaşın</Heading>
      <p>
        İşbu metin ile ilgili her türlü soru ve önerileriniz için{" "}
        <a href="mailto:info@raporin.com" className="text-[#0F918B] hover:underline">
          info@raporin.com
        </a>{" "}
        adresine e-posta gönderebilir veya aşağıdaki iletişim bilgilerinden bizlere
        ulaşabilirsiniz.
      </p>
      <CompanyInfo title="İletişim Bilgileri" />
    </LegalPage>
  );
}
