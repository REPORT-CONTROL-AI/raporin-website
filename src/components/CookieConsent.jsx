"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ALL_GRANTED,
  DEFAULT_CONSENT,
  OPEN_SETTINGS_EVENT,
  readConsent,
  writeConsent,
} from "../lib/cookieConsent";

const TR = {
  policyHref: "/kvkk/cerez-politikasi",
  policyLabel: "Çerez Politikası",
  bannerText:
    "İnternet sayfamızda çerezler yoluyla kişisel veri işlenmekte olup, zorunlu çerezler internet sitemizin çalışması amacıyla gerekli olan çerezlerdir ve kapatılamaz. Diğer çerezler ise açık rıza vermeniz halinde kullanılacaktır. Bu çerezlerin türlerine ve işlevlerine çerez yönetim panelinden erişebilirsiniz. Çerezlere dair tercihlerinizi panel vasıtasıyla yönetmeniz mümkün olup çerezlerle ilgili detaylı bilgi içeren aydınlatma metnine buradan ulaşabilirsiniz.",
  accept: "Kabul Et",
  reject: "Reddet",
  settings: "Ayarlar",
  panelTitle: "Çerez İzleme Tercihleri",
  panelSubtitle: "Lütfen Tercihlerinizi Yapınız",
  acceptAll: "Tümünü Kabul Et",
  rejectAll: "Tümünü Reddet",
  save: "Değişiklikleri Kaydet",
  required: "Zorunlu",
  close: "Kapat",
  reopen: "Çerez ayarları",
  cookiesUsedLabel: "Bu kategoride kullanılan çerezler:",
  categories: [
    {
      key: "necessary",
      title: "Zorunlu Çerezler",
      description:
        "Bu çerezler internet sitemizin çalışması amacıyla gerekli olan çerezlerdir. Söz konusu çerezler birinci taraf çerezler olup oturum süresince (gizlilik tercihlerinize dair çerezler hariç olmak üzere, zira bu çerezler oturum süresinden daha uzun ömürlüdür) kişisel veri işlemekte, oturum sonlandığında otomatikman silinmektedirler. Söz konusu çerezler talep etmiş olduğunuz bir bilgi toplumu hizmetinin (log-in olma, form doldurma ve gizlilik tercihlerinin hatırlanması) yerine getirilebilmesi için zorunlu olarak kullanılmaktadır.",
      cookies:
        "raporin_cookie_consent (yerel depolama — çerez tercihinizin hatırlanması), __cf_bm / _cfuvid (Cloudflare — güvenlik ve bot yönetimi).",
    },
    {
      key: "performance",
      title: "Performans Çerezleri",
      description:
        "İnternet sitelerinde kullanıcıların davranışlarını analiz etmek amacıyla istatistiki ölçümüne imkân veren çerezlerdir. Bu çerezler, sitenin iyileştirilmesi için sıklıkla kullanılmakta olup bu duruma reklamların ilgili kişiler üzerindeki etkisinin ölçümü de dâhildir. Tekil ziyaretçilerin sayısını tahmin etmek, bir internet sayfasına götüren en önemli arama motoru anahtar kelimelerini tespit etmek veya internet sitesinde gezinme durumunu izlemek için kullanılmaktadır.",
      cookies:
        "Google Analytics 4 (Google): _ga, _ga_* (ziyaretçileri ayırt etmek ve oturumları ölçmek, 2 yıla kadar). Bu kategoriyi kapalı tuttuğunuzda bu çerezler yerleştirilmez; Google'a yalnızca çerez içermeyen ve sizi tanımlamayan toplu ölçüm sinyalleri iletilir.",
    },
    {
      key: "functional",
      title: "Fonksiyonel Çerezler",
      description:
        "Bu tür çerezler, internet sitemizi daha işlevsel kılmak ve kişiselleştirme amaçlarıyla (gizlilik tercihleriniz hariç olmak üzere diğer tercihlerinizin siteye tekrar girdiğinizde hatırlanmasını sağlamak) kullanılmaktadır. Bu kategoriyi kapalı tuttuğunuzda internet sitemizdeki gömülü YouTube videoları yüklenmez.",
      cookies:
        "YouTube gömülü oynatıcısı (YouTube / Google): YSC, VISITOR_INFO1_LIVE, PREF, __Secure-ROLLOUT_TOKEN.",
    },
    {
      key: "marketing",
      title: "Pazarlama Çerezleri",
      description:
        "Bu çerezler internet sitemiz aracılığıyla reklam ortaklarımızın yerleştirdikleri çerezler olup üçüncü taraf çerezlerdir. Bu çerezler iş ortaklarımız tarafından ilgi alanlarınıza göre profilinizin çıkarılması ve size ilgili reklamlar göstermek üzere kullanılmaktadır. Bu kategoriyi kapalı tuttuğunuzda reklam çerezleri yerleştirilmez ve Meta etiketleri hiç çalıştırılmaz; Google'a yalnızca çerez içermeyen ve sizi tanımlamayan toplu ölçüm sinyalleri iletilir.",
      cookies:
        "Google Ads: _gcl_au, _gcl_aw, _gcl_dc, _gcl_gs, _gcl_ls (yerel depolama); IDE ve test_cookie (doubleclick.net); NID (google.com). Meta Pixel (Facebook / Instagram): _fbp, _fbc; fr (facebook.com).",
    },
  ],
};

const EN = {
  policyHref: "/kvkk/cerez-politikasi",
  policyLabel: "Cookie Policy",
  bannerText:
    "We process personal data through cookies on our website. Strictly necessary cookies are required for the website to function and cannot be switched off. All other cookies are used only if you give your explicit consent. You can review the types and functions of these cookies in the cookie management panel and change your preferences there at any time. Detailed information is available in our cookie notice.",
  accept: "Accept",
  reject: "Reject",
  settings: "Settings",
  panelTitle: "Cookie Preferences",
  panelSubtitle: "Please set your preferences",
  acceptAll: "Accept All",
  rejectAll: "Reject All",
  save: "Save Changes",
  required: "Required",
  close: "Close",
  reopen: "Cookie settings",
  cookiesUsedLabel: "Cookies used in this category:",
  categories: [
    {
      key: "necessary",
      title: "Strictly Necessary Cookies",
      description:
        "These cookies are required for our website to work. They are first-party cookies and are used to deliver the information society service you requested (logging in, submitting forms and remembering your privacy preferences). They cannot be switched off.",
      cookies:
        "raporin_cookie_consent (local storage — remembers your cookie preference), __cf_bm / _cfuvid (Cloudflare — security and bot management).",
    },
    {
      key: "performance",
      title: "Performance Cookies",
      description:
        "These cookies allow statistical measurement of how visitors use our website. They help us estimate the number of unique visitors, identify the search terms that lead to our pages and understand how visitors navigate the site, so that we can improve it.",
      cookies:
        "Google Analytics 4 (Google): _ga, _ga_* (distinguish visitors and measure sessions, up to 2 years). If you keep this category off, these cookies are not set; only cookieless, aggregate measurement signals that do not identify you are sent to Google.",
    },
    {
      key: "functional",
      title: "Functional Cookies",
      description:
        "These cookies make our website more functional and enable personalisation by remembering your preferences (other than your privacy preferences) when you return to the site. If you keep this category off, the embedded YouTube videos on our website will not load.",
      cookies:
        "YouTube embedded player (YouTube / Google): YSC, VISITOR_INFO1_LIVE, PREF, __Secure-ROLLOUT_TOKEN.",
    },
    {
      key: "marketing",
      title: "Marketing Cookies",
      description:
        "These are third-party cookies placed by our advertising partners through our website. They are used by our partners to build a profile of your interests and to show you relevant advertising. If you keep this category off, advertising cookies are not set and Meta tags are never run; only cookieless, aggregate measurement signals that do not identify you are sent to Google.",
      cookies:
        "Google Ads: _gcl_au, _gcl_aw, _gcl_dc, _gcl_gs, _gcl_ls (local storage); IDE and test_cookie (doubleclick.net); NID (google.com). Meta Pixel (Facebook / Instagram): _fbp, _fbc; fr (facebook.com).",
    },
  ],
};

function Toggle({ checked, disabled, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F918B] focus-visible:ring-offset-2 ${
        checked ? "bg-gradient-to-r from-[#17C6A3] to-[#0F918B]" : "bg-gray-300"
      } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default function CookieConsent() {
  const pathname = usePathname();
  const t = pathname?.startsWith("/en") ? EN : TR;

  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [draft, setDraft] = useState(DEFAULT_CONSENT);
  const [expanded, setExpanded] = useState(null);

  // İlk yüklemede kayıtlı rızayı oku. Consent Mode'a uygulanması layout.js'teki
  // head script'inde, GTM yüklenmeden önce yapılır.
  useEffect(() => {
    const stored = readConsent();

    if (stored) {
      setDraft(stored);
    } else {
      setShowBanner(true);
    }

    setReady(true);
  }, []);

  // Footer bağlantısı / sabit ikon paneli açabilsin
  useEffect(() => {
    const handleOpen = () => {
      setDraft(readConsent() || DEFAULT_CONSENT);
      setShowPanel(true);
    };

    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpen);
  }, []);

  // Panel açıkken arka plan kaydırmasını kilitle + ESC ile kapat
  useEffect(() => {
    if (!showPanel) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowPanel(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPanel]);

  const commit = useCallback((categories) => {
    const saved = writeConsent(categories);
    setDraft(saved);
    setShowBanner(false);
    setShowPanel(false);
  }, []);

  return (
    <>
      {/* Sabit çerez ayarları ikonu — rıza verildikten sonra görünür */}
      {ready && !showBanner && (
        <button
          type="button"
          onClick={() => {
            setDraft(readConsent() || DEFAULT_CONSENT);
            setShowPanel(true);
          }}
          aria-label={t.reopen}
          title={t.reopen}
          className="fixed bottom-4 left-4 z-40 w-11 h-11 rounded-full bg-white border border-teal-200 shadow-lg text-[#0F918B] flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3a9 9 0 1 0 9 9 3.5 3.5 0 0 1-4.6-4.6A3.5 3.5 0 0 1 12 3Z"
            />
            <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
            <circle cx="13.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="8.5" cy="15" r="1" fill="currentColor" stroke="none" />
          </svg>
        </button>
      )}

      {/* Çerez bilgilendirme bandı */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="region"
            aria-label={t.panelTitle}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-teal-100 bg-white/95 backdrop-blur shadow-[0_-8px_30px_rgba(15,145,139,0.12)]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col lg:flex-row lg:items-center gap-5">
              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                {t.bannerText}{" "}
                <Link href={t.policyHref} className="text-[#0F918B] font-semibold underline hover:text-[#17C6A3]">
                  {t.policyLabel}
                </Link>
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 lg:w-52 shrink-0">
                <button
                  type="button"
                  onClick={() => commit(ALL_GRANTED)}
                  className="px-6 py-2.5 rounded-full font-semibold text-white text-sm bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-lg hover:shadow-[#0F918B]/30 transition-all"
                >
                  {t.accept}
                </button>
                <button
                  type="button"
                  onClick={() => commit(DEFAULT_CONSENT)}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  {t.reject}
                </button>
                <button
                  type="button"
                  onClick={() => setShowPanel(true)}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm text-[#0F918B] border border-[#0F918B]/40 hover:bg-[#0F918B]/5 transition-all"
                >
                  {t.settings}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Çerez yönetim paneli */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowPanel(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-panel-title"
              className="relative w-full max-w-3xl max-h-[88vh] flex flex-col bg-gray-50 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Başlık */}
              <div className="flex items-start justify-between gap-4 px-6 py-5 bg-gradient-to-r from-[#0F918B] to-[#17C6A3] text-white">
                <div>
                  <h2 id="cookie-panel-title" className="text-lg md:text-xl font-bold">
                    {t.panelTitle}
                  </h2>
                  <p className="text-sm text-white/85 mt-0.5">{t.panelSubtitle}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={t.policyHref}
                    className="hidden sm:inline text-sm font-semibold underline hover:text-white/80"
                  >
                    {t.policyLabel}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setShowPanel(false)}
                    aria-label={t.close}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Kategoriler */}
              <div className="overflow-y-auto px-5 sm:px-6 py-5 space-y-3">
                <div className="flex flex-wrap justify-end gap-2.5 pb-1">
                  <button
                    type="button"
                    onClick={() => setDraft(ALL_GRANTED)}
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-md transition-all"
                  >
                    {t.acceptAll}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDraft(DEFAULT_CONSENT)}
                    className="px-5 py-2 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 transition-all"
                  >
                    {t.rejectAll}
                  </button>
                </div>

                {t.categories.map((category) => {
                  const isNecessary = category.key === "necessary";
                  const isOpen = expanded === category.key;

                  return (
                    <div key={category.key} className="bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between gap-4 px-5 py-4">
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : category.key)}
                          aria-expanded={isOpen}
                          className="flex items-center gap-2 text-left font-semibold text-gray-900 hover:text-[#0F918B] transition-colors"
                        >
                          {category.title}
                          <svg
                            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {isNecessary ? (
                          <span className="text-sm text-gray-400 font-medium shrink-0">{t.required}</span>
                        ) : (
                          <Toggle
                            checked={Boolean(draft[category.key])}
                            label={category.title}
                            onChange={(value) => setDraft((prev) => ({ ...prev, [category.key]: value }))}
                          />
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-0 text-sm text-gray-600 leading-relaxed space-y-3 border-t border-gray-100 mt-0">
                              <p className="pt-4">{category.description}</p>
                              <p className="text-xs text-gray-500">
                                <span className="font-semibold text-gray-700">{t.cookiesUsedLabel}</span>{" "}
                                {category.cookies}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Alt */}
              <div className="px-6 py-4 border-t border-gray-200 bg-white flex items-center justify-between gap-4">
                <Link
                  href={t.policyHref}
                  className="sm:hidden text-sm font-semibold text-[#0F918B] underline"
                >
                  {t.policyLabel}
                </Link>
                <button
                  type="button"
                  onClick={() => commit(draft)}
                  className="ml-auto px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-lg hover:shadow-[#0F918B]/30 transition-all"
                >
                  {t.save}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
