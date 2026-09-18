// Çerez rızası yönetimi — KVKK / Google Consent Mode v2
// Rıza bilgisi tarayıcının local storage alanında saklanır (zorunlu/gizlilik tercihi çerezi).

export const CONSENT_STORAGE_KEY = "raporin_cookie_consent";
export const CONSENT_VERSION = 1;

// Rıza değiştiğinde tetiklenir (script yükleme, video gömme vb. dinler)
export const CONSENT_EVENT = "raporin:cookie-consent";
// Footer / ikon üzerinden paneli açmak için tetiklenir
export const OPEN_SETTINGS_EVENT = "raporin:cookie-settings-open";

export const CATEGORY_KEYS = ["necessary", "performance", "functional", "marketing"];

export const DEFAULT_CONSENT = {
  necessary: true,
  performance: false,
  functional: false,
  marketing: false,
};

export const ALL_GRANTED = {
  necessary: true,
  performance: true,
  functional: true,
  marketing: true,
};

/** Kayıtlı rızayı okur. Rıza verilmemişse veya sürüm eskiyse null döner. */
export function readConsent() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== CONSENT_VERSION || !parsed.categories) return null;

    return { ...DEFAULT_CONSENT, ...parsed.categories, necessary: true };
  } catch {
    return null;
  }
}

/** Rızayı kaydeder, Consent Mode'u günceller ve dinleyicileri bilgilendirir. */
export function writeConsent(categories) {
  const value = { ...DEFAULT_CONSENT, ...categories, necessary: true };

  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_VERSION,
        updatedAt: new Date().toISOString(),
        categories: value,
      })
    );
  } catch {
    // Local storage kapalıysa rıza yalnızca bu oturum için geçerli olur.
  }

  applyConsentToGtag(value);
  // GTM'de rızaya bağlı etiketlerin (ör. Meta Pixel) aynı sayfada tetiklenebilmesi için
  window.dataLayer.push({ event: "cookie_consent_update", cookie_consent: value });
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));

  return value;
}

/** Google Consent Mode v2 sinyallerini kullanıcının tercihine göre günceller. */
export function applyConsentToGtag(consent) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag("consent", "update", {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.performance ? "granted" : "denied",
    functionality_storage: consent.functional ? "granted" : "denied",
    personalization_storage: consent.functional ? "granted" : "denied",
    security_storage: "granted",
  });
}

/** Çerez yönetim panelini herhangi bir yerden açar. */
export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
