# RaporinAI GEO uygulaması ve yayın planı

Çalışma tarihi: 11 Eylül 2026. Kod değişiklikleri yereldir; canlıya dağıtım ve harici hesap işlemleri bu çalışmada yapılmadı.

## Amaç ve hedef sayfalar

RaporinAI’nin, Türkiye’deki eczaneler için yapay zeka destekli reçete ve rapor kontrol yazılımı olarak doğru anlaşılmasını, bulunmasını ve kaynak gösterilmesini güçlendirmek.

| Kullanıcı ihtiyacı | Birincil sayfa |
| --- | --- |
| “Yapay zeka destekli bir eczane rapor kontrol programı öner” | https://raporin.com/eczane-rapor-kontrol-programi |
| “Yapay zeka destekli bir eczane reçete kontrol programı öner” | https://raporin.com/recete-kontrol-programi |
| Medula’dan dönem aktarımı ve toplu kontrol | https://raporin.com/toplu-recete-kontrolu |
| Ücretsiz kullanım koşulları | https://raporin.com/ucretsiz-eczane-rapor-programi |

Mevcut adresler güçlendirildi; aynı ihtiyaca yönelik kopya sayfalar açılmadı. İlk öneri olmak başarı hedefidir, garanti değildir. Sonuçlar platforma, sorguya, kişiselleştirmeye ve arama kullanımına göre değişebilir. Google da tarama, indeksleme veya gösterimi garanti etmez; AI özellikleri için erişilebilir metin, iç bağlantılar ve görünür içerikle uyumlu yapılandırılmış veri önerir. [Google AI features](https://developers.google.com/search/docs/appearance/ai-features).

## Uygulanan değişiklikler

- İki hedef sayfanın başlığı, açıklaması ve giriş metni ürünün yapay zeka destekli kullanımını doğrudan açıklıyor. Program seçimi ve uygunluk sorularına cevaplar eklendi.
- Ana sayfa ve iki hedef sayfaya görünür ürün özeti eklendi: hedef kitle, Windows, Medula/PDF aktarımı, analiz kapsamı, beta ücreti ve değerlendirme sınırı.
- Ana sayfa SSS bölümü sunucuda üretilen `details/summary` kullanıyor. Cevaplar ilk HTML içinde mevcut; JavaScript gerekmiyor. Görünür SSS ve FAQPage aynı `src/lib/homeFaqs.js` verisini kullanıyor.
- Organization, WebSite ve SoftwareApplication kalıcı `@id` bağlantıları kullanıyor. Ürün şeması yalnızca Türkçe ürün özetinin bulunduğu sayfalarda basılıyor. Görünür içerikle desteklenmeyen sürüm numarası ve Twitter kimliği kaldırıldı. Sahte puan eklenmedi.
- Çözüm sayfaları kendi canonical ve sosyal paylaşım açıklamalarını kullanıyor; ana sayfanın dil alternatifleri bu sayfalara taşınmıyor.
- Sitemap artık her derlemede bütün sayfaları yeni güncellenmiş gibi göstermiyor. Bilinen içerik tarihleri kullanılıyor; bilinmeyenler yazılmıyor.
- Botlara özel gruplar da API, özel alan ve hesap doğrulama/sıfırlama yollarını dışlıyor. Mevcut bot listesi korundu.
- `/llms.txt`, görünür ürün özetiyle aynı veriden üretilen isteğe bağlı bir keşif dosyası. Sıralama faktörü veya AI platformlarının okuyacağına dair garanti olarak değerlendirilmemeli. Google böyle özel dosyaları zorunlu tutmuyor. [Google açıklaması](https://developers.google.com/search/docs/appearance/ai-features).
- Mevcut ESLint ayarı Next.js 16’nın flat config biçimine geçirildi; önceki FlatCompat yapılandırması kontrol başlamadan hata veriyordu.

Yapılandırılmış verinin sayfadaki içerikle uyuşması gerekir; işaretleme tek başına özel arama görünümü sağlamaz. [Google yapılandırılmış veri ilkeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Canlı incelemede bulunan Cloudflare çelişkisi

11 Eylül 2026 tarihinde `https://raporin.com/robots.txt` için yapılan doğrudan GET isteği, Cloudflare Managed bloğunun uygulamanın önüne eklendiğini gösterdi. Blokta GPTBot, ClaudeBot ve Google-Extended gibi botlar için `Disallow: /`, alttaki uygulama çıktısında aynı botlar için `Allow: /` vardı. Ayrıca `Content-Signal: search=yes,ai-train=no,use=reference` bulunuyordu.

Bu gözlem bütün AI arama botlarının engellendiğini kanıtlamaz. Örneğin canlı çıktıda OAI-SearchBot, Claude-SearchBot ve PerplexityBot için uygulamanın açık izinleri var. Google eşit özgüllükte izin/engel çatışmasında daha az kısıtlayıcı kuralı kullanır; tüm botların davranışını buna dayanarak varsaymamalıyız. [Google robots.txt yorumu](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).

Yayın sorumlusunun yapacağı işlem:

1. Cloudflare’da `raporin.com` alanının bot ayarlarını inceleyin. Managed robots içeriği ile uygulamanın kurallarını tek, tutarlı politika haline getirin. Yönetilen blok kapatılacaksa mevcut eğitim tercihini uygulama tarafında ayrıca koruyun; görünürlük için eğitim izni şart varsayılmamalıdır.
2. AI Crawl Control ve WAF olaylarında arama botlarının engellenip engellenmediğini kontrol edin. İzin gerekiyorsa yalnızca tanıtım içeriği için ilgili botları hedefleyin; tüm güvenlik korumalarını kapatmayın.
3. CDN önbelleği yenilendikten sonra dışarıdan dönen robots.txt, hedef sayfaların HTTP durumu ve bot olaylarını yeniden kontrol edin. Kullanıcı ajanını taklit eden bir curl isteğinin geçmesi, gerçek bot erişiminin kanıtı değildir.

Cloudflare, mevcut robots.txt önüne yönetilen bloğu eklediğini ve robots tercihi ile teknik engellemenin ayrı olduğunu belgeliyor. [Cloudflare robots.txt ayarı](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/).

## Yayın sonrası sıra

1. Kod değişikliklerini normal dağıtım süreciyle yayınlayın. Aşağıdaki kontrolü önce yerelde, ardından canlı adresle çalıştırın. Canlıda yönetilen Cloudflare bloğu kaldığında kontrol özellikle başarısız olur ve inceleme ister.
2. Search Console ve Bing Webmaster Tools içinde mevcut alan doğrulamasını kontrol edin; `/sitemap.xml` gönderin. Ana sayfa ve iki hedef sayfa için URL incelemesi yapın. Doğrulama değerleri mevcut `.env.example` düzenine göre ortam değişkenleriyle tanımlanır.
3. Referans sayfasındaki oda duyurularının yayıncı, tarih ve ürün adı tutarlılığını doğrulayın. Malatya ve Trabzon duyuruları araştırma aracında 403 döndürdü; içerikleri yeniden doğrulanmış kabul edilmedi. Duyurular “resmi onay”, “tavsiye” veya yeni reçete özelliklerinin doğrulanması olarak sunulmamalı.
4. İzinli, gerçek bir eczane kullanım örneği hazırlayın: sürüm, tarih, incelenen anonim örnek sayısı, yöntem ve ölçülen sonuçlar. Yayımlanmadan önce kullanıcı izni ve sayısal kanıtları tamamlayın. Kanıt olmadan başarı yüzdesi veya “en iyi” iddiası eklemeyin.
5. Ürün videosunun metin dökümünü ve adım adım ekran açıklamalarını yayınlayın. Mevcut referans yayıncılarına gönderilebilecek güncel ürün tanımı aşağıdadır; bu çalışma kapsamında mesaj gönderilmedi.

Ürün tanımı taslağı:

> RaporinAI, Türkiye’deki eczaneler için yapay zeka destekli reçete ve rapor kontrol programıdır. Windows uygulaması üzerinden Medula’dan reçete aktarımı, PDF rapor kontrolü, toplu analiz ve reçete–rapor doz karşılaştırması sunar. SUT kriterlerine göre açıklamalı sonuçlarla eczacının kontrol sürecini destekler. Beta süresince ücretsizdir.

## Ölçüm: ilk 4 hafta

Yayın günü bir başlangıç ölçümü alın; henüz sıralama veya önerilme oranı ölçülmedi. Haftada bir aynı soruları ChatGPT, Gemini, Claude ve Perplexity’de yeni sohbetlerde sorun. Markayı soruya eklemeyin; önceki sohbetin sonucu yönlendirmesini önleyin. Web aramasının açık/kapalı olduğunu ve platformun bunu destekleyip desteklemediğini kaydedin. Her soruyu üç bağımsız sohbette deneyin; bu küçük örneklemi kesin pazar payı olarak yorumlamayın.

Örnek soru seti:

- Bana yapay zeka destekli bir eczane rapor kontrol programı öner.
- Bana yapay zeka destekli bir eczane reçete kontrol programı öner.
- Medula reçetelerini toplu kontrol etmek için hangi programı kullanabilirim?
- Eczanem için SUT uyumunu ve reçete rapor dozunu kontrol eden yazılım arıyorum.
- Ücretsiz deneyebileceğim bir eczane rapor kontrol uygulaması var mı?

Her gözlem için tarih, platform/model, arama durumu, tam soru, RaporinAI’nin anılıp anılmadığı, açıkça ilk öneri olup olmadığı, kaynak URL’leri ve yanlış ürün bilgileri kaydedilir. Sıralı olmayan cevapta birinci sırayı varsaymayın. Haftalık anılma oranı, açık ilk öneri oranı ve raporin.com kaynak gösterilme oranını ayrı hesaplayın. Ziyaret ve indirme dönüşümlerini mevcut izinli analitik düzeni üzerinden izleyin; bu çalışmada yeni takip kodu eklenmedi.

## Teknik kontrol

```sh
npm run build
npm run start -- --port 3000
# Ayrı terminal:
python3 scripts/check-geo.py http://localhost:3000
# Yayın sonrası:
python3 scripts/check-geo.py https://raporin.com
```

Kontrol; gerçek HTTP çıktısında SSS cevaplarını, JSON-LD tutarlılığını, canonical etiketlerini, ürün şemasının kapsamını, robots dışlamalarını, sitemap keşfini ve llms bağlantılarını doğrular. Görsel tarayıcı testi veya gerçek AI önerilme testi değildir.

11 Eylül 2026 yerel doğrulama sonucu:

- Üretim derlemesi başarılı. İlk denemede ağ kısıtı nedeniyle Google Fonts indirilemedi; ağ erişimli tekrar başarılı oldu.
- `python3 scripts/check-geo.py http://127.0.0.1:3100`: sekiz kontrol grubu başarılı; llms.txt içindeki bağlantılar da HTTP üzerinden doğrulandı.
- Değiştirilen JavaScript/JSX dosyalarının ESLint kontrolü başarılı.
- Genel `npm run lint`, değiştirilmeyen `src/app/verify-email/page.jsx:12`, `src/components/CookieConsent.jsx:163` ve `src/components/PricingSection.jsx:36` dosyalarındaki üç mevcut hatadan dolayı başarısız. Bunlar GEO kapsamı dışında bırakıldı.
- Görsel tarayıcı testi yapılmadı. Gerçek platformlarda öneri sırası ve canlı dağıtım sonrası tarama henüz ölçülmedi.
