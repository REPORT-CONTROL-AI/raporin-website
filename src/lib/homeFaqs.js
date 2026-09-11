// Görünür SSS ve JSON-LD aynı içerikten üretilir.
export const homeFaqs = [
    {
      category: "Genel",
      questions: [
        {
          q: "RaporinAI nedir ve nasıl çalışır?",
          a: "RaporinAI, eczaneler için geliştirilmiş yapay zeka destekli bir reçete ve rapor kontrol programıdır. Uygulama içindeki Medula ekranından giriş yapar, fatura türü ve dönem seçip o dönemin reçetelerini RaporinAI'ye aktarırsınız. Sonrasında ister bir reçeteye girip tek bir ilacı kontrol edersiniz, ister tek tıkla dönemin tamamını analize gönderirsiniz. Raporlar güncel SUT kurallarına göre değerlendirilir; tanı uyumu ve reçete–rapor doz uyumu da kontrol edilir."
        },
        {
          q: "Medula entegrasyonu nasıl çalışıyor? Medula şifremi vermem gerekiyor mu?",
          a: "RaporinAI, uygulamanın içinde açılan güvenli bir tarayıcı üzerinden Medula Eczane'ye kendi kullanıcı bilgilerinizle giriş yapmanızı sağlar. Giriş bilgileriniz bizim sunucularımıza gönderilmez ve orada saklanmaz. İsterseniz otomatik giriş özelliğini açabilirsiniz; bu durumda kullanıcı adı ve şifreniz şifrelenerek yalnızca kendi bilgisayarınızda saklanır ve dilediğiniz zaman Profil ekranından silebilirsiniz."
        },
        {
          q: "Her seferinde reçeteleri baştan mı aktarmam gerekiyor?",
          a: "Hayır. Bir dönemi bir kez aktarmanız yeterli. Sonradan yeni reçeteler eklendiğinde \"Aktarımı Güncelle\" demeniz yeterlidir; sadece eksik olanlar tamamlanır."
        },
        {
          q: "Toplu analiz nedir, tekil analizden farkı ne?",
          a: "Tekil analizde bir reçeteye girip tek bir ilacı kontrol edersiniz. Toplu analizde ise dönemdeki tüm raporlu ilaçlar tek tıkla analize gider ve arka planda ilerler; bu sırada uygulamayı kullanmaya devam edebilirsiniz. Analiz bittiğinde uygun olmayanları tek filtreyle listeleyebilirsiniz."
        },
        {
          q: "Tek bir raporu PDF yükleyerek kontrol edebilir miyim?",
          a: "Evet. Medula'dan PDF olarak indirdiğiniz bir raporu doğrudan yükleyip kontrol edebilirsiniz. Elinizdeki tekil bir raporu hızlıca değerlendirmek istediğinizde bu yol daha pratiktir."
        },
        {
          q: "Hangi rapor türlerini kontrol edebilirim?",
          a: "RaporinAI, Medula’dan aktarılan reçetelerdeki raporlu ilaçların ve PDF olarak yüklenen ilaç kullanım raporlarının kontrolüne odaklanır. Kullanacağınız ilaç ve raporun analiz kapsamını uygulama üzerinden değerlendirebilirsiniz."
        },
        {
          q: "Sistemi kullanmak için teknik bilgiye ihtiyacım var mı?",
          a: "Hayır. Medula'ya her zamanki gibi giriş yapıyor, fatura türü ile dönemi seçip aktarımı başlatıyorsunuz; gerisini RaporinAI hallediyor. Analizi başlatmak için tek bir tıklama yeterli. Sonuçlar anlaşılır ve kriter bazında sunulur; herhangi bir teknik bilgiye ihtiyaç duymadan kullanabilirsiniz."
        }
      ]
    },
    {
      category: "SUT ve Uyumluluk",
      questions: [
        {
          q: "SUT uyumsuzlukları nasıl tespit edilir?",
          a: "Sistemimiz, güncel SUT (Sağlık Uygulama Tebliği) veritabanını sürekli takip eder. Rapordaki tanı kodları, rapor koşulları ve reçete–rapor doz uyumu SUT kriterleri üzerinden değerlendirilir. Uyumsuzluk tespit edildiğinde, detaylı açıklama ve düzeltme önerileri sunulur."
        },
        {
          q: "Reçete–rapor doz kontrolü nedir?",
          a: "Reçetede yazılan dozun rapordaki tedavi şemasıyla uyuşmaması, geri ödeme değerlendirmesinde sorun oluşturabilir. RaporinAI, reçetedeki doz ile rapordaki dozu otomatik karşılaştırır ve aşım olduğunda ilacı uygun saymayarak sizi uyarır."
        },
        {
          q: "SUT güncellemeleri nasıl takip edilir?",
          a: "RaporinAI ekibi, SGK tarafından yapılan tüm SUT güncellemelerini takip eder ve sistemimizi otomatik olarak günceller. Kullanıcıların herhangi bir işlem yapmasına gerek yoktur. Analiz sonuçlarını değerlendirirken ilgili güncel resmi metinler ve eczacının mesleki kontrolü esas alınmalıdır."
        }
      ]
    },
    {
      category: "Güvenlik ve KVKK",
      questions: [
        {
          q: "Kişisel veriler nasıl korunur?",
          a: "PDF rapor akışında hasta ve hekim bilgileri analiz öncesinde maskelenir. Medula giriş bilgileri sunucularımızda saklanmaz; isteğe bağlı otomatik giriş bilgileri kendi bilgisayarınızda şifreli tutulur. İşlenen veri kategorileri ve hizmet sağlayıcılar hakkında ayrıntılar KVKK ve hukuki metinler sayfasında açıklanır."
        }
      ]
    },
    {
      category: "Fiyatlandırma ve Paketler",
      questions: [
        {
          q: "Ücretsiz deneme süresi var mı?",
          a: "RaporinAI beta sürecinde tüm özellikleriyle ücretsizdir ve kredi kartı bilgisi gerektirmez. Beta sonrası koşullar ayrıca duyurulur."
        }
      ]
    }
  ];
