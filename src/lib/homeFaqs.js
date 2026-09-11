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
          a: "RaporinAI, tüm SGK Medula raporlarını kontrol edebilir. Bunlar arasında reçete raporları, kronik hastalık raporları, özel rapor gerektiren ilaç raporları ve diğer tüm SGK rapor türleri bulunmaktadır. Sistem, sürekli güncellenen SUT veritabanı ile tüm rapor türlerini destekler."
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
          a: "Sistemimiz, güncel SUT (Sağlık Uygulama Tebliği) veritabanını sürekli takip eder. Rapordaki ICD-10 tanı kodları, ilaç etkileşimleri, doz uygunluğu ve SUT'ta belirtilen kısıtlamalar otomatik olarak kontrol edilir. Uyumsuzluk tespit edildiğinde, detaylı açıklama ve düzeltme önerileri sunulur."
        },
        {
          q: "Reçete–rapor doz kontrolü nedir?",
          a: "SUT kriterlerinin tamamı karşılansa bile, reçetede yazılan doz rapordaki tedavi şemasının izin verdiği dozu aşıyorsa ilacın bedeli ödenmez. RaporinAI, reçetedeki doz ile rapordaki dozu otomatik karşılaştırır ve aşım olduğunda ilacı uygun saymayarak sizi uyarır."
        },
        {
          q: "SUT güncellemeleri nasıl takip edilir?",
          a: "RaporinAI ekibi, SGK tarafından yapılan tüm SUT güncellemelerini takip eder ve sistemimizi otomatik olarak günceller. Kullanıcıların herhangi bir işlem yapmasına gerek yoktur. Sistem her zaman en güncel SUT kurallarına göre analiz yapar."
        }
      ]
    },
    {
      category: "Güvenlik ve KVKK",
      questions: [
        {
          q: "Kişisel veriler nasıl korunur?",
          a: "RaporinAI, KVKK (Kişisel Verilerin Korunması Kanunu) standartlarına uygun şekilde çalışır. Hasta ve Doktora ait kişisel bilgiler (TC kimlik numarası, ad ve soyad, rapor numarası vb.)  hiçbir zaman sunucularımıza gönderilmez; Analiz yalnızca tanı kodları, etkin madde ve doz gibi klinik alanlarla tamamen anonim olarak yapılır."
        }
      ]
    },
    {
      category: "Fiyatlandırma ve Paketler",
      questions: [
        {
          q: "Ücretsiz deneme süresi var mı?",
          a: "Evet! RaporinAI şuan Beta sürecinde ve tüm özellikler tamamen ücretsizdir ve kredi kartı bilgisi gerektirmez."
        }
      ]
    }
  ];
