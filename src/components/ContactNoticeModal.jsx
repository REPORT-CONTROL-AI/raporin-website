"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function ContactNoticeModal({ open, onClose }) {
  // ESC ile kapat + arka plan kaydırmasını kilitle
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-notice-title"
            className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Başlık */}
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-gray-100">
              <h2
                id="contact-notice-title"
                className="text-lg md:text-xl font-bold text-[#0F918B]"
              >
                İletişim Formu Aydınlatma Metni
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Kapat"
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* İçerik */}
            <div className="overflow-y-auto px-6 py-6 text-left text-gray-700 text-sm leading-relaxed space-y-4">
              <p>
                İşbu Kişisel Veriler Aydınlatma Metni, 6698 sayılı Kişisel Verilerin
                Korunması Kanunu (“Kanun”) uyarınca kişisel verilerinizin toplanması,
                işlenmesi, aktarılması ve Kanun kapsamındaki haklarınıza dair sizleri
                bilgilendirmek amacıyla hazırlanmıştır.
              </p>
              <p>
                ATATÜRK MAH. ERTUĞRUL GAZİ SK. METROPOL ISTANBUL SİTESİ C1 BLOK NO: 2B İÇ
                KAPI NO: 376 ATAŞEHİR / İSTANBUL adresinde bulunan 0489125575800001 Mersis
                numaralı KAİROLABS SAĞLIK TEKNOLOJİLERİ ANONİM ŞİRKETİ (“Şirket” veya
                “biz”) olarak veri sorumlusu sıfatıyla sizi belirli hale getiren bilgileri
                (“kişisel verileriniz”) işlemekteyiz.
              </p>

              <h3 className="text-base font-semibold text-gray-900 pt-2">
                İşlediğimiz Bilgileriniz
              </h3>
              <p>
                Şirket olarak kurumsal internet sitemiz olan{" "}
                <a
                  href="https://raporin.com/#iletisim"
                  className="text-[#0F918B] hover:underline break-all"
                >
                  https://raporin.com/#iletisim
                </a>{" "}
                adresinde yer alan iletişim formunu kullanarak bizlerle iletişime geçmeniz
                ve talep-şikayet-görüş-önerilerinizi iletmeniz halinde kişisel verileriniz
                toplanmakta ve işlenmektedir. Bu süreçte toplanan/işlenen kişisel
                verilerinizi aşağıda görebilirsiniz.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] border border-gray-200 rounded-lg text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200 align-top">
                      <th
                        scope="row"
                        className="w-1/3 text-left font-semibold text-gray-900 bg-gray-50 px-4 py-3"
                      >
                        Kimlik Bilgileri
                      </th>
                      <td className="px-4 py-3">Ad-Soyad</td>
                    </tr>
                    <tr className="border-b border-gray-200 align-top">
                      <th
                        scope="row"
                        className="text-left font-semibold text-gray-900 bg-gray-50 px-4 py-3"
                      >
                        İletişim Bilgileri
                      </th>
                      <td className="px-4 py-3">Telefon, E-posta</td>
                    </tr>
                    <tr className="align-top">
                      <th
                        scope="row"
                        className="text-left font-semibold text-gray-900 bg-gray-50 px-4 py-3"
                      >
                        Müşteri İşlem Bilgileri
                      </th>
                      <td className="px-4 py-3">
                        Talep, şikâyet, öneri gibi iletmiş olduğunuz mesaj içeriğinde yer
                        alan kişisel veriler ile iletişim talebinizi ilettiğiniz tarih,
                        saat vs bilgileri
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-semibold text-gray-900 pt-2">
                Bilgilerinizi Nasıl Topluyor ve İşliyoruz?
              </h3>
              <p>
                Kişisel verilerinizi internet sitemizde yer alan iletişim formu vasıtasıyla
                elektronik olarak tamamen veya kısmen otomatik yollarla toplamakta ve
                işlemekteyiz.
              </p>

              <h3 className="text-base font-semibold text-gray-900 pt-2">
                Bilgilerinizi Toplama Amaçlarımız
              </h3>
              <p>
                Yukarıda belirtilen kişisel verilerinizi esas olarak{" "}
                <a
                  href="https://raporin.com/#iletisim"
                  className="text-[#0F918B] hover:underline break-all"
                >
                  https://raporin.com/#iletisim
                </a>{" "}
                adresinde yer alan form vasıtasıyla ileteceğiniz taleplerinizi karşılamak
                amacıyla Kanun’un 5. maddesinde belirtilen hukuki sebeplere dayalı olarak
                işliyoruz.
              </p>
              <p>
                Yukarıda belirtilen kimlik, iletişim ve müşteri işlem kategorilerindeki
                kişisel verileriniz talep / şikayetlerin takibi amacıyla Kanun’un 5.
                Maddesinin 2. Fıkrasında yer alan “İlgili kişinin temel hak ve
                özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri
                için veri işlenmesinin zorunlu olması” ile “İlgili kişinin kendisi
                tarafından alenileştirilmiş olması” hukuki sebebine dayalı olarak
                işlenmektedir.
              </p>

              <h3 className="text-base font-semibold text-gray-900 pt-2">
                Kişisel Verilerinizin Paylaşılması
              </h3>
              <p>
                Yukarıda izah ettiğimiz süreçlerde toplanıp işlenen kişisel verileriniz veri
                sorumlusu Şirket tarafından işlenmekte, üçüncü kişilerle
                paylaşılmamaktadır.
              </p>

              <h3 className="text-base font-semibold text-gray-900 pt-2">
                Kişisel Verilerinizin Korunması, Saklanması ve İmhası
              </h3>
              <p>
                Şirket olarak kişisel verilerinizin hukuka aykırı olarak işlenmesini
                önlemek, kişisel verilerinize hukuka aykırı olarak erişilmesini önlemek ve
                kişisel verilerinizin muhafazasını sağlamak amacıyla uygun güvenlik düzeyini
                temin etmeye yönelik gerekli her türlü teknik ve idari tedbirleri
                almaktayız. Şirketimiz tarafından kişisel verileriniz kişisel verilerinizin
                işlenmesini gerektiren sebeplerin ortadan kalkması ile ya da talebiniz
                üzerine takip eden 6 (altı) ay içerisinde silinir, yok edilir veya anonim
                hale getirilir.
              </p>

              <h3 className="text-base font-semibold text-gray-900 pt-2">
                Kişisel Verilerinize İlişkin Haklarınız Neler?
              </h3>
              <p>
                Kanun’un 11. maddesi hükümleri uyarınca kişisel verilerinize ilişki olarak
                aşağıdaki haklarınız bulunmaktadır.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Kişisel verinin işlenip işlenmediğini öğrenme,</li>
                <li>Kişisel verileri işlenmişse; buna ilişkin bilgi talep etme,</li>
                <li>
                  Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp
                  kullanılmadığını öğrenme,
                </li>
                <li>
                  Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü
                  kişileri bilme,
                </li>
                <li>
                  Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların
                  düzeltilmesini isteme,
                </li>
                <li>Kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
                <li>
                  Kişisel verilerin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu
                  işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini
                  isteme,
                </li>
                <li>
                  İşlenen kişisel verilerin münhasıran otomatik sistemler vasıtasıyla analiz
                  edilmesi suretiyle veri sahibinin aleyhine bir sonucun ortaya çıkmasına
                  itiraz etme,
                </li>
                <li>
                  Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması
                  hâlinde zararın giderilmesini talep etme.
                </li>
              </ul>

              <h3 className="text-base font-semibold text-gray-900 pt-2">Bize Ulaşın</h3>
              <p>
                Kişisel verilerinizle ilgili sorularınızı ve yukarıda yer alan hak ve
                taleplerinizi aşağıdaki yöntemlerle ileterek bize her zaman
                ulaşabilirsiniz.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] border border-gray-200 rounded-lg text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th
                        scope="col"
                        className="w-1/3 text-left font-semibold text-gray-900 px-4 py-3"
                      >
                        Başvuru Yöntemi
                      </th>
                      <th
                        scope="col"
                        className="text-left font-semibold text-gray-900 px-4 py-3"
                      >
                        Başvurunun Yapılacağı Adres
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 align-top">
                      <th
                        scope="row"
                        className="text-left font-medium text-gray-900 px-4 py-3"
                      >
                        Şahsen Yazılı Başvuru
                      </th>
                      <td className="px-4 py-3">
                        ATATÜRK MAH. ERTUĞRUL GAZİ SK. METROPOL ISTANBUL SİTESİ C1 BLOK NO:
                        2B İÇ KAPI NO: 376 ATAŞEHİR / İSTANBUL
                      </td>
                    </tr>
                    <tr className="align-top">
                      <th
                        scope="row"
                        className="text-left font-medium text-gray-900 px-4 py-3"
                      >
                        Noter
                      </th>
                      <td className="px-4 py-3">
                        ATATÜRK MAH. ERTUĞRUL GAZİ SK. METROPOL ISTANBUL SİTESİ C1 BLOK NO:
                        2B İÇ KAPI NO: 376 ATAŞEHİR / İSTANBUL
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Alt */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/60 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-lg hover:shadow-[#0F918B]/30 transition-all duration-300"
              >
                Kapat
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
