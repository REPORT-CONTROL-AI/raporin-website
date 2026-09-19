"use client";

import { motion } from "framer-motion";
import {
  FaSignInAlt,
  FaCalendarAlt,
  FaFileDownload,
  FaPrescriptionBottleAlt,
  FaLayerGroup,
  FaCheckCircle,
  FaFilePdf,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import Screenshot from "./Screenshot";

export default function HowItWorks() {
  const [selectedImage, setSelectedImage] = useState(null);

  const steps = [
    {
      icon: <FaSignInAlt size={30} className="text-teal-600" />,
      title: "Medula'ya Giriş Yapın",
      desc: "RaporinAI'nin içindeki Medula ekranından her zamanki gibi giriş yapın. Dilerseniz bilgilerinizi kaydedip sonraki girişleri otomatik hale getirebilirsiniz.",
      gradient: "from-teal-100 via-emerald-50 to-cyan-100",
      image: "/screens/medula-giris.png",
      stepNumber: "01",
    },
    {
      icon: <FaCalendarAlt size={30} className="text-teal-600" />,
      title: "Reçete Kontrol'ü Açın, Dönem Seçin",
      desc: "Sol menüden Reçete Kontrol sekmesine geçin. Ardından kontrol etmek istediğiniz fatura türünü (A Grubu / C Grubu) ve dönemi seçin. Dönemler arasında istediğiniz zaman geçiş yapabilirsiniz.",
      gradient: "from-emerald-100 via-cyan-50 to-teal-100",
      image: "/screens/fatura-donem-secimi.png",
      stepNumber: "02",
    },
    {
      icon: <FaFileDownload size={30} className="text-teal-600" />,
      title: "Reçeteleri Medula'dan Aktarın",
      desc: "Tek tuşla o dönemin reçeteleri Medula'dan RaporinAI'ye aktarılır; ilerlemeyi ekranda görürsünüz. Sonradan eklenen reçeteler için \"Aktarımı Güncelle\" demeniz yeterli.",
      gradient: "from-cyan-100 via-emerald-50 to-teal-100",
      image: "/screens/recete-aktarimi.png",
      stepNumber: "03",
    },
    {
      icon: <FaPrescriptionBottleAlt size={30} className="text-teal-600" />,
      title: "Reçete Detayında Tekil Analiz",
      desc: "Listeden bir reçeteye tıklayın; içindeki ilaçları ve raporlarını görün. Tek bir ilacı hemen kontrol etmek için \"Analiz Et\" demeniz yeterli.",
      gradient: "from-teal-100 via-emerald-50 to-cyan-100",
      image: "/screens/recete-detay.png",
      stepNumber: "04",
    },
    {
      icon: <FaLayerGroup size={30} className="text-teal-600" />,
      title: "Tek Tıkla Toplu Analiz",
      desc: "Dönemdeki tüm raporlu ilaçları tek tıkla analize gönderin. Analiz arka planda sürerken uygulamayı kullanmaya devam edebilirsiniz.",
      gradient: "from-emerald-100 via-cyan-50 to-teal-100",
      image: "/screens/toplu-analiz.png",
      stepNumber: "05",
    },
    {
      icon: <FaCheckCircle size={30} className="text-teal-600" />,
      title: "Sonuçları Görün, Kesintiyi Önleyin",
      desc: "Her ilaç için net bir sonuç: Uygun, Uygun Değil veya Dikkat. Uygun olmayanları tek filtreyle listeleyip fatura teslim etmeden önce düzeltin.",
      gradient: "from-teal-100 via-cyan-50 to-emerald-100",
      image: "/screens/analiz-sonuclari.png",
      stepNumber: "06",
    },
  ];

  const pdfSteps = [
    {
      icon: <FaFilePdf size={22} className="text-teal-600" />,
      title: "Raporu Yükleyin",
      desc: "Medula'dan PDF olarak aldığınız raporu ve kontrol edilecek ilacı seçin.",
      image: "/screens/rapor-yukleme-1.png",
    },
    {
      icon: <FaFilePdf size={22} className="text-teal-600" />,
      title: "Otomatik Maskeleme",
      desc: "Hasta ve doktor kişisel bilgileri, rapor gönderilmeden önce kendi bilgisayarınızda maskelenir.",
      image: "/screens/pdf-mask-3.png",
    },
    {
      icon: <FaFilePdf size={22} className="text-teal-600" />,
      title: "Sonucu Görün",
      desc: "Rapor, güncel SUT kurallarına göre analiz edilir ve kriter bazlı sonuç sunulur.",
      image: "/screens/detay-2.png",
    },
  ];

  return (
    <section id="nasil-calisir" className="py-28 bg-gradient-to-b from-white via-[#F9FFFD] to-[#E8FFFB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nasıl{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
              Çalışır?
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reçeteleri Medula&apos;dan aktarın, tek tıkla tüm dönemi analiz edin.
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Görsel Alanı */}
              <div className="flex-1 w-full">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-teal-100 bg-white cursor-pointer hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group"
                  onClick={() => step.image && setSelectedImage(step.image)}
                >
                  <Screenshot
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain p-4"
                    placeholderLabel={`${step.title} — ekran görüntüsü eklenecek`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium text-gray-700">🔍 Büyütmek için tıkla</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* İçerik Alanı */}
              <div className="flex-1 w-full">
                <div className={`relative overflow-hidden p-8 rounded-2xl shadow-sm border border-teal-100 bg-gradient-to-br ${step.gradient}`}>
                  {/* Highlight efekti */}
                  <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/40 blur-3xl rounded-full opacity-60" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/30 blur-2xl rounded-full opacity-60" />

                  <div className="relative">
                    {/* Adım Numarası */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#17C6A3] to-[#0F918B] text-white font-bold text-xl mb-4 shadow-lg">
                      {step.stepNumber}
                    </div>

                    {/* İkon ve Başlık */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0">{step.icon}</div>
                      <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                    </div>

                    {/* Açıklama */}
                    <p className="text-gray-700 text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alternatif akış: PDF ile tekil rapor kontrolü */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-3xl border border-teal-100 bg-white/70 p-8 sm:p-10 shadow-sm">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                PDF ile{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
                  Tekil Rapor Kontrolü
                </span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Elinizdeki tek bir raporu hızlıca kontrol etmek istediğinizde,
                Medula&apos;dan PDF olarak indirdiğiniz raporu doğrudan yükleyebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pdfSteps.map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden"
                >
                  <div
                    className="relative aspect-[4/3] bg-white cursor-pointer group"
                    onClick={() => step.image && setSelectedImage(step.image)}
                  >
                    <Screenshot
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain p-3"
                      placeholderLabel={`${step.title} — ekran görüntüsü eklenecek`}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      {step.icon}
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <IoClose size={32} />
          </button>

          <div
            className="relative w-full max-w-7xl h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      )}
    </section>
  );
}
