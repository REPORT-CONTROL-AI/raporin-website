"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Screenshot from "./Screenshot";
import { FaGlobe, FaLayerGroup, FaPills, FaBolt } from "react-icons/fa";

const screenshots = [
  { id: 1, src: "/screens/toplu-analiz.png", alt: "Tek Tıkla Toplu Analiz" },
  { id: 2, src: "/screens/recete-detay.png", alt: "Reçete Detayı ve Tekil Analiz" },
  { id: 3, src: "/screens/analiz-sonuclari.png", alt: "Analiz Sonucu" },
];

const chips = [
  { icon: <FaGlobe size={12} />, label: "Medulaya Entegre" },
  { icon: <FaLayerGroup size={12} />, label: "Tek tıkla toplu analiz" },
  { icon: <FaPills size={12} />, label: "Reçete–rapor doz kontrolü" },
];

export default function HeroSection() {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const getSlidePosition = (index) => {
    const diff = index - activeIndex;
    const total = screenshots.length;
    const normalizedDiff = ((diff + total) % total);

    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === 1) return 'right';
    if (normalizedDiff === total - 1) return 'left';
    return 'hidden';
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8FFFB] via-[#F9FFFD] to-white py-8 sm:py-10 lg:py-14">
      {/* Dekoratif arka plan */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal-300/20 blur-3xl" />
        <div className="absolute top-1/4 -right-40 h-[30rem] w-[30rem] rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 grid items-center gap-10 lg:gap-14 lg:grid-cols-2">

        {/* SOL TARAF */}
        <div className="min-w-0 text-center lg:text-left">
          {/* Başlık — LCP elemanı: animasyonsuz, ilk boyamada tam görünür */}
          <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] xl:text-5xl font-extrabold leading-[1.15] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0F918B] via-[#12A897] to-[#17C6A3]">
            <span className="flex items-center justify-center lg:justify-start gap-1">
              <Image
                src="/eczane-logo.png"
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              />
              {/* Görsel "E" harfi bir logo; metin karşılığı taramaya açık kalsın */}
              <span className="sr-only">E</span>
              <span>czaneler İçin</span>
            </span>
            <span className="block">Yapay Zeka Destekli Reçete ve Rapor Kontrol Programı</span>
          </h1>

          {/* Değer Önerisi */}
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            <strong>RaporinAI</strong>, eczanenin <strong>reçete ve rapor kontrol</strong> yükünü
            üstlenen <strong>yapay zeka destekli bir eczane programı</strong>dır. Reçeteleri ve
            raporları güncel{" "}
            <strong>SUT</strong> kurallarına göre saniyeler içinde değerlendirir; uygunsuzlukları
             tespit ederek{" "}
            kesintilerin önüne geçer. Beta sürecinde tamamen{" "}
            <strong>ÜCRETSİZ</strong>.
          </p>

          {/* Somut Fayda */}
          <div className="mt-5 max-w-xl mx-auto lg:mx-0">
            <div className="relative overflow-hidden rounded-2xl border border-teal-100 bg-white/85 p-5 shadow-lg shadow-teal-900/5 backdrop-blur-sm">
              <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-amber-100/50 blur-2xl" />

              <div className="relative flex items-start gap-4 text-left">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 text-amber-600 ring-1 ring-amber-200/70">
                  <FaBolt size={18} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg">
                    Kesintilerinizi %98&apos;e Kadar Azaltın
                  </h3>
                  <p className="mt-1.5 text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Yapay zeka destekli analiz ile hatalı reçete ve raporları önceden tespit edin, mali kayıplarınızı önleyin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Butonları */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <motion.a
              href="/download"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="relative inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full overflow-hidden group cursor-pointer shadow-lg shadow-emerald-500/25 transition-shadow hover:shadow-xl hover:shadow-emerald-500/35"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />

              {/* Content */}
              <div className="relative flex items-center gap-2.5">
                <span className="text-xl">🎉</span>
                <div className="flex flex-col items-start">
                  <span className="text-white/90 font-bold text-[10px] uppercase tracking-[0.14em] leading-none">
                    BETA - ÜCRETSİZ
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base mt-1">
                    Hemen Deneyin
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.a>

            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full text-[#0F918B] bg-white/70 border border-teal-200 hover:border-[#17C6A3] hover:bg-white transition-all duration-300 backdrop-blur-sm"
            >
              <span>Nasıl Çalışır?</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* SAĞ TARAF - EKRAN GÖRÜNTÜLERİ */}
        <div className="relative flex w-full min-w-0 flex-col items-center">
          {/* Özellik çipleri */}
          <ul className="mb-5 flex flex-wrap justify-center gap-2">
            {chips.map((chip) => (
              <li
                key={chip.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white/90 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-teal-800 shadow-sm backdrop-blur-sm"
              >
                <span className="text-teal-600">{chip.icon}</span>
                {chip.label}
              </li>
            ))}
          </ul>

          {/* 💻 Masaüstü görünüm - 3D Carousel */}
          <div className="hidden lg:block relative w-full">
            {/* Arkadaki yumuşak parıltı */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-6 bottom-14 rounded-[2.5rem] bg-gradient-to-tr from-teal-200/50 via-emerald-100/40 to-transparent blur-2xl"
            />

            <div className="relative h-[360px] xl:h-[420px] flex items-center justify-center perspective-1000">
              {screenshots.map((shot, index) => {
                const position = getSlidePosition(index);
                return (
                  <motion.div
                    key={shot.id}
                    initial={false}
                    animate={{
                      x: position === 'center' ? 0 : position === 'left' ? -275 : position === 'right' ? 275 : 0,
                      scale: position === 'center' ? 1 : position === 'hidden' ? 0.5 : 0.72,
                      opacity: position === 'center' ? 1 : position === 'hidden' ? 0 : 0.35,
                      filter: position === 'center' ? 'blur(0px)' : 'blur(2px)',
                      zIndex: position === 'center' ? 20 : position === 'hidden' ? 0 : 10,
                      rotateY: position === 'left' ? 22 : position === 'right' ? -22 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute cursor-pointer rounded-2xl bg-white p-1.5 shadow-2xl shadow-teal-900/20 ring-1 ring-teal-100"
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={() => {
                      if (position === 'center') {
                        setSelected(shot);
                      } else if (position === 'right') {
                        nextSlide();
                      } else if (position === 'left') {
                        prevSlide();
                      }
                    }}
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <Screenshot
                        src={shot.src}
                        alt={shot.alt}
                        width={400}
                        height={270}
                        className="object-cover rounded-xl"
                      />
                      {position === 'center' && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-3">
                          <p className="text-white text-sm font-semibold text-center drop-shadow">
                            {shot.alt}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigasyon */}
            <button
              onClick={prevSlide}
              aria-label="Önceki görsel"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-teal-100 bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:text-[#0F918B]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Sonraki görsel"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-teal-100 bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:text-[#0F918B]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Noktalar */}
            <div className="mt-4 flex justify-center gap-1.5">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${index + 1}. görsele geç`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex ? 'bg-[#17C6A3] w-7' : 'bg-teal-200 hover:bg-teal-300 w-1.5'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 📱 Mobil görünüm – Kaydırılabilir galeri */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-3 w-full min-w-0 px-1 scrollbar-hide"
          >
            {screenshots.map((shot) => (
              <motion.div
                key={shot.id}
                whileTap={{ scale: 0.97 }}
                className="snap-center shrink-0 w-64 sm:w-72 rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-teal-100 cursor-pointer transition-shadow hover:shadow-xl"
                onClick={() => setSelected(shot)}
              >
                <Screenshot
                  src={shot.src}
                  alt={shot.alt}
                  width={280}
                  height={190}
                  className="w-full object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MODAL - TAM BOY GÖRÜNTÜ */}
      <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-3 sm:p-4">
          <Dialog.Panel className="relative max-w-4xl w-full">
            {selected && (
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1000}
                height={700}
                className="rounded-lg sm:rounded-xl shadow-2xl object-contain"
              />
            )}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl font-light hover:opacity-80 bg-black/30 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
            >
              ✕
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
