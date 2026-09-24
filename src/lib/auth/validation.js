// Form içi anlık geri bildirim için kurallar. Otorite backend'dir; buradaki kurallar
// masaüstü uygulamasındaki kayıt formuyla (AuthController, GlnFormat) aynıdır.

const EMAIL_PATTERN = /^[\w.+-]+@[\w-]+(\.[\w-]+)+$/;

export function validateEmail(value) {
  if (!value) return "E-posta zorunludur";
  if (!EMAIL_PATTERN.test(value)) return "Geçerli bir e-posta adresi girin";
  return null;
}

/** Backend PasswordService ile aynı: en az 8 karakter, en az bir harf ve bir rakam. */
export function validatePassword(value) {
  if (!value) return "Şifre zorunludur";
  if (value.length < 8) return "Şifre en az 8 karakter olmalıdır";
  if (!/[a-zA-Z]/.test(value) || !/\d/.test(value)) return "Şifre en az bir harf ve bir rakam içermelidir";
  return null;
}

/** Boşluk, tire ve parantezleri atıp yalnızca rakamları bırakır: "0532 123 45 67" -> "05321234567". */
export function normalizePhone(value) {
  return value.replace(/\D/g, "");
}

/** Kişinin cep telefonu: 05 ile başlayan 11 hane (backend de aynı kuralı uygular). */
export function validateMobilePhone(value) {
  const digits = normalizePhone(value);
  if (!digits) return "Cep telefonu zorunludur";
  if (!digits.startsWith("05")) return "Cep telefonu 05 ile başlamalıdır";
  if (digits.length !== 11) return "Cep telefonu 11 haneli olmalıdır (05xx xxx xx xx)";
  return null;
}

/** Eczane telefonu (opsiyonel): boş bırakılabilir; doluysa sabit hat veya cep, 0 ile başlayan 11 hane. */
export function validatePharmacyPhone(value) {
  const digits = normalizePhone(value);
  if (!digits) return null;
  if (!digits.startsWith("0")) return "Telefon numarasını başında 0 olacak şekilde girin (ör. 0212… veya 05…)";
  if (digits.length !== 11) return "Telefon numarası 11 haneli olmalıdır";
  if (!/^0[2-5]/.test(digits)) return "Geçerli bir telefon numarası girin";
  return null;
}

/** GS1 GLN-13: 868/869 önekli, son hane mod-10 kontrol hanesi. */
export function validateGln(value) {
  const raw = value.replace(/\s/g, "");
  if (!raw) return "GLN numarası zorunludur";
  if (!/^\d+$/.test(raw)) return "GLN numarası yalnızca rakamlardan oluşmalıdır";
  if (raw.length !== 13) return `GLN numarası 13 haneli olmalıdır (girilen: ${raw.length})`;
  if (!raw.startsWith("868") && !raw.startsWith("869")) return "GLN numarası 868 veya 869 ile başlamalıdır";

  let sum = 0;
  for (let i = 0; i < 12; i++) sum += Number(raw[i]) * (i % 2 === 0 ? 1 : 3);
  if ((10 - (sum % 10)) % 10 !== Number(raw[12])) return "GLN numarası geçersiz, lütfen kontrol ediniz";
  return null;
}
