"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { homeFaqs } from "../lib/homeFaqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = homeFaqs;

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#E8FFFB] via-white to-[#F9FFFD]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaQuestionCircle size={50} className="text-teal-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sıkça Sorulan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Sorular
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            RaporinAI hakkında merak ettiğiniz her şeyi burada bulabilirsiniz.
          </p>
        </motion.div>

        {/* FAQ Kategorileri */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Kategori Başlığı */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-teal-500 to-emerald-600 rounded-full"></span>
                {category.category}
              </h3>

              {/* Sorular */}
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-xl shadow-md border border-teal-100 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {/* Soru */}
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-teal-50/50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <FaChevronDown className="text-teal-600" size={20} />
                        </motion.div>
                      </button>

                      {/* Cevap */}
                      <motion.div
                        id={`faq-answer-${index}`}
                        aria-hidden={!isOpen}
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-teal-50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alt CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Sorunuza Cevap Bulamadınız mı?
          </h3>
          <p className="text-gray-600 mb-6">
            Destek ekibimiz size yardımcı olmaktan mutluluk duyar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              Bize Ulaşın
            </Link>
            <Link
              href="/download"
              className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-all"
            >
              Ücretsiz Deneyin
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
