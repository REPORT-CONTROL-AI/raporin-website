import CookieSettingsLink from "../../../components/CookieSettingsLink";
import { Heading, LegalPage, SubHeading } from "../../../components/legal/LegalPage";

export const metadata = {
  title: "Çerez Aydınlatma Metni",
  description:
    "RaporinAI internet sitesinde kullanılan çerezler, kullanım amaçları, saklama süreleri ve çerez tercihlerinizi nasıl yönetebileceğinize dair KVKK kapsamındaki aydınlatma metni.",
  alternates: {
    canonical: "https://raporin.com/kvkk/cerez-politikasi",
  },
};

const COOKIE_TABLE = [
  {
    name: "_ga",
    provider: "Google Analytics",
    type: "Performans / analitik",
    purpose:
      "Ziyaretçileri birbirinden ayırt ederek site kullanımına ilişkin istatistikler oluşturmak",
    duration: "2 yıl",
    party: "Birinci taraf; Google hizmeti",
  },
  {
    name: "_ga_<kimlik>",
    provider: "Google Analytics",
    type: "Performans / analitik",
    purpose: "Oturum durumunu saklamak ve oturumları ölçmek",
    duration: "2 yıl",
    party: "Birinci taraf; Google hizmeti",
  },
  {
    name: "_gcl_aw",
    provider: "Google Ads",
    type: "Reklam / pazarlama",
    purpose:
      "Reklam tıklaması bilgilerini saklayarak dönüşümü ilgili reklamla ilişkilendirmek",
    duration: "Genellikle 90 gün",
    party: "Birinci taraf; Google tarafından okunabilir",
  },
  {
    name: "_gcl_au",
    provider: "Google Ads",
    type: "Reklam / pazarlama",
    purpose: "Reklam etkinliğini ve dönüşümleri ölçmek",
    duration: "Genellikle 3 ay",
    party: "Birinci taraf; Google hizmeti",
  },
  {
    name: "_gcl_dc, _gcl_gs ve diğer _gcl_* kayıtları",
    provider: "Google Ads",
    type: "Reklam / pazarlama",
    purpose:
      "Reklam tıklamalarını, kampanya performansını ve dönüşümleri ilişkilendirmek",
    duration: "Yapılandırmaya göre değişebilir; çoğunlukla 90 gün",
    party: "Birinci taraf; Google hizmeti",
  },
  {
    name: "_gcl_ls",
    provider: "Google Ads",
    type: "Reklam / pazarlama – yerel depolama",
    purpose:
      "Reklam tıklaması bilgisinin tarayıcının local storage alanında saklanması",
    duration:
      "Sabit bir çerez süresi yoktur; silinene veya uygulama tarafından temizlenene kadar kalabilir",
    party: "Birinci taraf depolama",
  },
  {
    name: "_fbp",
    provider: "Meta (Facebook / Instagram)",
    type: "Reklam / pazarlama",
    purpose:
      "Tarayıcıyı tanıyarak reklam dönüşümlerini ölçmek ve ilgili reklamları göstermek",
    duration: "90 gün",
    party: "Birinci taraf; Meta tarafından okunabilir",
  },
  {
    name: "_fbc",
    provider: "Meta (Facebook / Instagram)",
    type: "Reklam / pazarlama",
    purpose:
      "Meta reklamına tıklanarak gelindiğinde tıklama bilgisini saklayıp dönüşümü reklamla ilişkilendirmek",
    duration: "90 gün",
    party: "Birinci taraf; Meta tarafından okunabilir",
  },
  {
    name: "fr",
    provider: "Meta (facebook.com)",
    type: "Reklam / pazarlama",
    purpose: "Reklam gösterimi, ölçümü ve hedeflemesi",
    duration: "90 gün",
    party: "Üçüncü taraf",
  },
  {
    name: "YSC",
    provider: "YouTube / Google",
    type: "İşlevsel, güvenlik ve ölçüm",
    purpose:
      "Video oturumu sırasında görüntüleme ve etkileşim bilgilerinin tutulması; güvenlik ve kötüye kullanımın önlenmesi",
    duration: "Tarayıcı oturumu boyunca",
    party: "Üçüncü taraf",
  },
  {
    name: "__Secure-YNID veya eski adıyla VISITOR_INFO1_LIVE",
    provider: "YouTube / Google",
    type: "Tercih, analitik ve kişiselleştirme",
    purpose:
      "YouTube kullanımını ölçmek, önerileri ve kullanıcı deneyimini kişiselleştirmek, hizmet sorunlarını tespit etmek",
    duration: "Yaklaşık 6 ay",
    party: "Üçüncü taraf",
  },
  {
    name: "__Secure-YENID veya eski adıyla __Secure-YEC",
    provider: "YouTube / Google",
    type: "Güvenlik ve reklam ölçümü",
    purpose:
      "Spam, sahtecilik ve kötüye kullanımı tespit etmek; reklam ve içerik etkileşimlerini doğrulamak",
    duration: "Yaklaşık 13 ay",
    party: "Üçüncü taraf",
  },
  {
    name: "PREF",
    provider: "YouTube / Google",
    type: "İşlevsel / tercihler",
    purpose:
      "Video oynatma, otomatik oynatma, dil ve oynatıcı görünümü gibi tercihleri saklamak",
    duration: "Son kullanımdan itibaren yaklaşık 8 ay",
    party: "Üçüncü taraf",
  },
  {
    name: "SOCS",
    provider: "Google",
    type: "Tercih / rıza yönetimi",
    purpose: "Google hizmetlerindeki çerez tercihi durumunu saklamak",
    duration: "Yaklaşık 13 ay",
    party: "Üçüncü taraf",
  },
  {
    name: "CONSENT",
    provider: "Google / YouTube",
    type: "Tercih / rıza yönetimi",
    purpose:
      "Google hizmetlerine ilişkin çerez ve gizlilik tercihlerinin saklanması",
    duration: "Genellikle yaklaşık 2 yıl; yapılandırmaya göre değişebilir",
    party: "Üçüncü taraf",
  },
  {
    name: "AEC",
    provider: "Google / YouTube",
    type: "Zorunlu / güvenlik",
    purpose:
      "İsteklerin gerçek kullanıcı tarafından yapılmasını sağlamak; spam, dolandırıcılık ve kötüye kullanımı önlemek",
    duration: "Yaklaşık 6 ay",
    party: "Üçüncü taraf",
  },
  {
    name: "__Secure-ROLLOUT_TOKEN",
    provider: "YouTube / Google",
    type: "Analitik / hizmet geliştirme",
    purpose:
      "Yeni YouTube özelliklerini kademeli olarak sunmak ve etkilerini ölçmek",
    duration: "Yaklaşık 6 ay",
    party: "Üçüncü taraf",
  },
];

const BROWSER_LINKS = [
  {
    label: "Google Chrome",
    href: "https://support.google.com/accounts/answer/61416?hl=tr&co=GENIE.Platform%3DAndroid&oco=0",
  },
  {
    label: "Safari",
    href: "https://help.apple.com/safari/mac/9.0/#/sfri40732",
  },
  {
    label: "Opera",
    href: "https://help.opera.com/en/latest/web-preferences/#cookies",
  },
];

const RIGHTS = [
  "Kişisel verinin işlenip işlenmediğini öğrenme,",
  "Kişisel verileri işlenmişse; buna ilişkin bilgi talep etme,",
  "Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
  "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,",
  "Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
  "Kişisel verilerin silinmesini veya yok edilmesini isteme,",
  "Kişisel verilerin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
  "İşlenen kişisel verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle veri sahibinin aleyhine bir sonucun ortaya çıkmasına itiraz etme,",
  "Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.",
];

const ADDRESS =
  "Atatürk Mah. Ertuğrul Gazi Sk. Metropol İstanbul Sitesi C1 Blok No: 2B İç Kapı No: 376 Ataşehir / İstanbul";

export default function CerezPolitikasiPage() {
  return (
    <LegalPage
      title="İnternet Sitesi Çerez Aydınlatma Metni"
      subtitle="raporin.com internet sitesinde kullanılan çerezlere ilişkin KVKK aydınlatma metni."
    >
      <Heading>1. Veri Sorumlusunun Kimliği</Heading>
      <p>
        Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (Kanun) 10’uncu
        maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve
        Esaslar Hakkında Tebliğ (Tebliğ) kapsamında veri sorumlusu sıfatıyla ATATÜRK
        MAH. ERTUĞRUL GAZİ SK. METROPOL ISTANBUL SİTESİ C1 BLOK NO: 2B İÇ KAPI NO: 376
        ATAŞEHİR / İSTANBUL adresinde bulunan 0489125575800001 Mersis numaralı
        KAİROLABS SAĞLIK TEKNOLOJİLERİ ANONİM ŞİRKETİ tarafından hazırlanmıştır.
      </p>

      <Heading>
        2. Toplanan Kişisel Verileriniz ve Kişisel Verilerinizin Toplama Yöntemi
      </Heading>
      <p>
        Bu Çerez Aydınlatma Metni’nin amacı,{" "}
        <a
          href="https://raporin.com/"
          className="text-[#0F918B] hover:underline break-all"
        >
          https://raporin.com/
        </a>{" "}
        internet sitesinde kullanılan çerezlerin cihazınıza yerleştirilmesi aracılığıyla
        otomatik yolla elde edilen kişisel verilerin işlenmesine ilişkin olarak, hangi
        amaçlarla hangi tür çerezleri kullandığımızı ve bu çerezleri nasıl
        yönetebileceğiniz hakkında sizlere bilgi vermektir.
      </p>
      <p>
        İnternet sitemizde kullandığımız, zorunlu çerezler haricindeki çerezler için,
        kullanıcıların açık rızaları alınmakta ve istedikleri zaman rızalarını
        değiştirebilme olanağı sağlanmaktadır. Kullanıcılar çerez yönetim paneli
        üzerinden, internet sitemizde kullanılan çerez çeşitlerini görebilmekte ve
        Zorunlu Çerezler dışında kalan tüm çerezler için “açık” veya “kapalı”
        seçenekleri ile tercihlerini belirleyebilmektedirler. Yine bu panel üzerinden
        kullanıcılar tercihlerini her zaman değiştirebilmektedirler.
      </p>

      <SubHeading>Çerez Çeşitleri</SubHeading>
      <p>
        <strong className="text-gray-900">Kullanım süresine göre çerez çeşitleri:</strong>{" "}
        İnternet sitemizde kullanım sürelerine göre oturum çerezleri ve kalıcı çerezler
        kullanmaktadır. Oturum çerezi, oturumun sürekliliğinin sağlanması amacıyla
        kullanılmakta olup kullanıcı tarayıcısını kapattığında bu çerezler de
        silinmektedir. Kalıcı çerez ise internet tarayıcısı kapatıldığı zaman
        silinmemekte ve belirli bir tarihte veya belirli bir süre sonra kendiliğinden
        silinmektedir.
      </p>
      <p>
        <strong className="text-gray-900">Birinci taraf ve üçüncü taraf çerezler:</strong>{" "}
        Çerezin birinci taraf ya da üçüncü taraf olması durumu, internet sitesinin ya da
        etki alanının yerleştirdiği çereze göre değişiklik arz etmektedir. Birinci taraf
        çerezler, doğrudan kullanıcının ziyaret ettiği internet sitesi yani tarayıcının
        adres çubuğunda gösterilen internet adresi (ornek.com.tr) tarafından
        yerleştirilmektedir. Üçüncü taraf çerezlerse kullanıcının ziyaret ettiği etki
        alanından farklı bir etki alanı tarafından yerleştirilmektedir.
      </p>
      <p>
        <strong className="text-gray-900">Kullanım amaçlarına göre çerez çeşitleri:</strong>{" "}
        İnternet sitemizde kullanım amacına göre aşağıdaki çerezler kullanılmaktadır:
      </p>

      <SubHeading>Zorunlu Çerezler</SubHeading>
      <p>
        Bu çerezler internet sitemizin çalışması amacıyla gerekli olan çerezlerdir. Söz
        konusu çerezler birinci taraf çerezler olup oturum süresince (gizlilik
        tercihlerinize dair çerezler hariç olmak üzere, zira bu çerezler oturum
        süresinden daha uzun ömürlüdür.) kişisel veri işlemekte, oturum sonlandığında
        otomatikman silinmektedirler. Söz konusu çerezler talep etmiş olduğunuz bir bilgi
        toplumu hizmetinin (log-in olma, form doldurma ve gizlilik tercihlerinin
        hatırlanması) yerine getirilebilmesi için zorunlu olarak kullanılmaktadırlar.
        Ayrıca performans ve analitik amaçlı çerez internet sitemizdeki ziyaretçilerin
        sayılması ve trafiğin ölçülmesine olanak sağlamaktadır ve birinci taraftır.
      </p>
      <p>
        Bu sayede sitemizin performansını ölçmekte ve iyileştirebilmekteyiz. Bu çerezler
        internet sitemizdeki hangi sayfaların en popüler olduğu, hangilerinin de en az
        popüler olduğunu anlamamıza yardımcı olmaktadır.
      </p>

      <SubHeading>Reklam/Pazarlama Çerezleri</SubHeading>
      <p>
        Bu çerezler internet sitemiz aracılığıyla reklam ortaklarımızın yerleştirdikleri
        çerezler olup üçüncü taraf çerezlerdir. Bu çerezler iş ortaklarımız tarafından
        ilgi alanlarınıza göre profilinizin çıkarılması ve size ilgili reklamlar
        göstermek üzere kullanılmaktadır.
      </p>

      <SubHeading>Fonksiyonel Çerezler</SubHeading>
      <p>
        Bu tür çerezler, internet sitemizi daha işlevsel kılmak ve kişiselleştirme
        amaçlarıyla (gizlilik tercihleriniz hariç olmak üzere diğer tercihlerinizin
        siteye tekrar girdiğinizde hatırlanmasını sağlamak) kullanılmaktadır.
      </p>

      <SubHeading>Performans Çerezleri</SubHeading>
      <p>
        İnternet sitelerinde kullanıcıların davranışlarını analiz etmek amacıyla
        istatistiki ölçümüne imkân veren çerezlerdir. Bu çerezler, sitenin
        iyileştirilmesi için sıklıkla kullanılmakta olup bu duruma reklamların ilgili
        kişiler üzerindeki etkisinin ölçümü de dâhildir. İnternet sitesi sahipleri
        tarafından, tekil ziyaretçilerin sayısını tahmin etmek, bir internet sayfasına
        götüren en önemli arama motoru anahtar kelimelerini tespit etmek veya internet
        sitesinde gezinme durumunu izlemek için kullanılmaktadırlar.
      </p>

      <Heading>3. Kişisel Verilerin Hangi Amaçlarla İşleneceği ve Hukuki Sebepler</Heading>
      <p>
        Zorunlu çerezler, talep etmiş olduğunuz bir bilgi toplumu hizmetinin (log-in
        olma, form doldurma ve gizlilik tercihlerinin hatırlanması, internet sitemizdeki
        ziyaretçilerin sayılması ve trafiğin ölçülmesi) yerine getirilebilmesi amacıyla
        kullanılmaktadır. Bu çerezler aracılığıyla toplanan kişisel verileriniz, Kanun’un
        5’inci maddesinin (2) numaralı fıkrasının (c) bendi “Bir sözleşmenin kurulması
        veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına
        ait kişisel verilerin işlenmesinin gerekli olması” veya (f) bendi “İlgili kişinin
        temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru
        menfaatleri için veri işlenmesinin zorunlu olması” kapsamında işlenmektedir.
      </p>
      <p>
        Reklam ve Pazarlama çerezleri, iş ortaklarımız tarafından ilgi alanlarınıza göre
        profilinizin çıkarılması ve size ilgili reklamlar göstermek amacıyla
        kullanılmaktadır. Bu çerezler aracılığıyla toplanan kişisel verileriniz, Kanun’un
        5’inci maddesinin (1) numaralı fıkrası kapsamında açık rızanızın alınması
        suretiyle işlenmektedir.
      </p>
      <p>
        Fonksiyonel çerezler, internet sayfamızı daha işlevsel kılmak ve kişiselleştirmek
        (gizlilik tercihleriniz hariç olmak üzere diğer tercihlerinizin siteye tekrar
        girdiğinizde hatırlanmasını sağlamak) amaçlarıyla kullanılmaktadır. Bu çerezler
        aracılığıyla toplanan kişisel verileriniz, Kanun’un 5’inci maddesinin (1)
        numaralı fıkrası kapsamında açık rızanızın alınması suretiyle işlenmektedir.
      </p>
      <p>
        Performans çerezleri, internet sayfamızın kullanıcılarının davranışlarını analiz
        etmek amacıyla istatistiki ölçümüne imkân veren çerezler olup, kullanıcıların
        internet sitesini nasıl kullandığına dair veriler oluşturmak için benzersiz bir
        ID/kimlik kaydetmek, kullanıcıları ayırt etmek için kullanılmaktadır. Bu çerezler
        aracılığıyla toplanan kişisel verileriniz, Kanun’un 5’inci maddesinin (1)
        numaralı fıkrası kapsamında açık rızanızın alınması suretiyle işlenmektedir.
      </p>
      <p>
        İnternet sitemizde yer alan çerezlere ilişkin bilgiler aşağıdaki tabloda yer
        almaktadır:
      </p>

      <div className="overflow-x-auto my-4 rounded-xl border border-teal-100 bg-white shadow-sm">
        <table className="w-full min-w-[820px] text-sm text-left">
          <thead>
            <tr className="bg-[#E8FFFB] text-gray-900">
              <th scope="col" className="px-4 py-3 font-semibold">Çerez / Teknoloji</th>
              <th scope="col" className="px-4 py-3 font-semibold">Sağlayıcı</th>
              <th scope="col" className="px-4 py-3 font-semibold">Türü</th>
              <th scope="col" className="px-4 py-3 font-semibold">Kullanım Amacı</th>
              <th scope="col" className="px-4 py-3 font-semibold">Saklama Süresi</th>
              <th scope="col" className="px-4 py-3 font-semibold">Taraf</th>
            </tr>
          </thead>
          <tbody>
            {COOKIE_TABLE.map((row) => (
              <tr key={row.name} className="border-t border-gray-100 align-top">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 break-words">
                  {row.name}
                </th>
                <td className="px-4 py-3">{row.provider}</td>
                <td className="px-4 py-3">{row.type}</td>
                <td className="px-4 py-3">{row.purpose}</td>
                <td className="px-4 py-3">{row.duration}</td>
                <td className="px-4 py-3">{row.party}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        İnternet sitemizde Google etiketleri, Google İzin Modu (Consent Mode) ile
        çalışmaktadır. Performans veya pazarlama çerezlerine rıza vermediğiniz sürece
        bu kategorilerdeki çerezler cihazınıza yerleştirilmez ve okunmaz; Google’a
        yalnızca çerez içermeyen, sizi tanımlamaya yönelik bir kimlik taşımayan toplu
        ölçüm sinyalleri (ör. sayfanın ziyaret edildiği veya indirme yapıldığı bilgisi)
        iletilir. Diğer reklam ortaklarımızın etiketleri, pazarlama çerezlerine rıza
        vermediğiniz sürece hiç çalıştırılmaz.
      </p>

      <Heading>Tarayıcı Ayarlarından Çerez Ayarları</Heading>
      <p>
        İnternet sitemizde yer alan ikona tıklayarak istediğiniz anda çerezlere ilişkin
        tercihlerinizi değiştirebilirsiniz. Çerez yönetim panelindeki butonları
        tercihinize göre açık veya kapalı konuma getirerek “Değişiklikleri Kaydet”
        butonuna tıklayınız. Ayarlarınızı etkin hâle getirmek için sayfayı yenileyiniz.
      </p>
      <p>
        <CookieSettingsLink label="Çerez yönetim panelini açmak için tıklayınız." />
      </p>
      <p>
        Bunun yanı sıra, tarayıcı ayarları aracılığıyla da kısmen kontrol
        sağlanabilmektedir. Sık kullanılan tarayıcılarda çerezlerin yönetimine ilişkin
        bilgilere aşağıdaki bağlantılar aracılığıyla erişebilirsiniz:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        {BROWSER_LINKS.map((link) => (
          <li key={link.label}>
            <span className="font-medium text-gray-900">{link.label}</span>
            <br />
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F918B] hover:underline break-all"
            >
              {link.href}
            </a>
          </li>
        ))}
      </ul>

      <Heading>Kişisel Verilerinize İlişkin Haklarınız Neler?</Heading>
      <p>
        Kanun’un 11. maddesi hükümleri uyarınca kişisel verilerinize ilişki olarak
        aşağıdaki haklarınız bulunmaktadır.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        {RIGHTS.map((right) => (
          <li key={right}>{right}</li>
        ))}
      </ul>

      <Heading>Bize Ulaşın</Heading>
      <p>
        Kişisel verilerinizle ilgili sorularınızı ve yukarıda yer alan hak ve
        taleplerinizi aşağıdaki yöntemlerle ileterek bize her zaman ulaşabilirsiniz.
      </p>

      <div className="overflow-x-auto my-4 rounded-xl border border-teal-100 bg-white shadow-sm">
        <table className="w-full min-w-[480px] text-sm text-left">
          <thead>
            <tr className="bg-[#E8FFFB] text-gray-900">
              <th scope="col" className="w-1/3 px-4 py-3 font-semibold">Başvuru Yöntemi</th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Başvurunun Yapılacağı Adres
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-100 align-top">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                Şahsen Yazılı Başvuru
              </th>
              <td className="px-4 py-3">{ADDRESS}</td>
            </tr>
            <tr className="border-t border-gray-100 align-top">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                Noter
              </th>
              <td className="px-4 py-3">{ADDRESS}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LegalPage>
  );
}
