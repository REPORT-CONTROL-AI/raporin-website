// Google Ads "Enhanced Conversions" ve Meta "Advanced Matching" için kullanıcı verisi.
//
// Ham veri (e-posta, telefon, ad) dataLayer'a hiçbir zaman girmez: tarayıcıda normalize edilip
// SHA-256 ile hash'lenir, platformlar yalnızca hash'i alır ve kendi kullanıcılarıyla eşleştirir.
// Normalizasyon kuralları platformların belgelerine göre; hash'in tutması için birebir uyulmalı.

const TR_LOCALE = "tr-TR";

/** Türkçe kurallı küçük harf: "İ" → "i", "I" → "ı" (toLowerCase() "İ"yi "i̇" yapar). */
function lowerTr(value) {
  return value.trim().toLocaleLowerCase(TR_LOCALE);
}

/**
 * E-posta: boşluk temizlenir, küçük harfe çevrilir. Google, gmail.com / googlemail.com
 * adreslerinde @ öncesindeki noktaların silinmesini ister (Gmail bunları yok sayar).
 */
export function normalizeEmail(email) {
  const value = (email || "").trim().toLowerCase();
  const at = value.lastIndexOf("@");
  if (at < 1) return null;
  const local = value.slice(0, at);
  const domain = value.slice(at + 1);
  const isGmail = domain === "gmail.com" || domain === "googlemail.com";
  return `${isGmail ? local.replace(/\./g, "") : local}@${domain}`;
}

/**
 * Türkiye cep telefonu → E.164 ("+905321234567"). Formda yalnızca "05XXXXXXXXX" kabul edilir;
 * başka biçimler eşleşmeyi bozacağı için gönderilmez (null).
 */
export function normalizePhoneE164(phone) {
  const digits = (phone || "").replace(/\D/g, "");
  if (/^05\d{9}$/.test(digits)) return `+9${digits}`;
  if (/^905\d{9}$/.test(digits)) return `+${digits}`;
  return null;
}

/**
 * Tek "Ad soyad" alanını ayırır: son kelime soyad, öncesi ad
 * ("Ayşe Nur Kaya" → { firstName: "ayşe nur", lastName: "kaya" }). Tek kelimede soyad yoktur.
 */
export function splitFullName(fullName) {
  const words = lowerTr(fullName || "").split(/\s+/).filter(Boolean);
  if (words.length === 0) return { firstName: null, lastName: null };
  if (words.length === 1) return { firstName: words[0], lastName: null };
  return { firstName: words.slice(0, -1).join(" "), lastName: words[words.length - 1] };
}

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

async function hashOrUndefined(value) {
  return value ? sha256Hex(value) : undefined;
}

/**
 * Kayıt olan kullanıcının hash'lenmiş eşleştirme verisi.
 *
 * - user_data: Google Ads Enhanced Conversions (GTM "Kullanıcı tarafından sağlanan veriler"
 *   değişkeninin beklediği sha256_* alan adları; telefon "+90…" biçiminde hash'lenir).
 * - meta_user_data: Meta Advanced Matching (em, ph, fn, ln; telefon "+" olmadan "90…").
 *
 * Tarayıcı Web Crypto desteklemiyorsa (çok eski tarayıcı / güvenli olmayan bağlam) null döner.
 */
export async function buildHashedUserData({ email, phone, fullName }) {
  if (typeof crypto === "undefined" || !crypto.subtle) return null;

  const normalizedEmail = normalizeEmail(email);
  const e164 = normalizePhoneE164(phone);
  const { firstName, lastName } = splitFullName(fullName);

  const [emailHash, googlePhoneHash, metaPhoneHash, firstNameHash, lastNameHash] = await Promise.all([
    hashOrUndefined(normalizedEmail),
    hashOrUndefined(e164),
    hashOrUndefined(e164 && e164.slice(1)),
    hashOrUndefined(firstName),
    hashOrUndefined(lastName),
  ]);

  const address = firstNameHash || lastNameHash
    ? { sha256_first_name: firstNameHash, sha256_last_name: lastNameHash }
    : undefined;

  return {
    user_data: {
      sha256_email_address: emailHash,
      sha256_phone_number: googlePhoneHash,
      address,
    },
    meta_user_data: {
      em: emailHash,
      ph: metaPhoneHash,
      fn: firstNameHash,
      ln: lastNameHash,
    },
  };
}
