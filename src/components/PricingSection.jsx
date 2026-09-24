"use client";
import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section
      id="fiyatlandirma"
      className="py-24 bg-gradient-to-b from-white via-[#F8FFFD] to-[#E9FFFB]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#17C6A3] to-[#0F918B]"
        >
          Beta Sürümü
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative p-10 rounded-3xl shadow-xl border-2 border-[#17C6A3] bg-gradient-to-br from-[#E9FFFB] via-white to-[#D8FFF6] overflow-hidden"
        >
          {/* Dekoratif arka plan efektleri */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <span className="text-6xl">🎉</span>
            </div>
            
            <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium">
              Beta süreci boyunca <strong className="text-[#0F918B]">RaporinAI'nin tüm özellikleri</strong> tamamen <strong className="text-[#0F918B]">ücretsiz</strong> olarak kullanılabilir.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Fikir ve geri bildirimlerinizle bize destek olun, hizmetimizi birlikte geliştirelim.
            </p>
            
            <motion.a
              href="/kayit"
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-block px-10 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-2xl transition-all duration-300"
            >
              Hemen Başlayın - Ücretsiz
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
