// httpOnly oturum çerezlerini JavaScript okuyamaz. Navbar gibi yerlerin "giriş yapılmış mı"
// sorusunu sunucuya gitmeden cevaplayabilmesi için yanında token içermeyen bir işaret çerezi durur.
export const SESSION_FLAG_COOKIE = "rp_auth";

export function hasSessionFlag() {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((c) => c === `${SESSION_FLAG_COOKIE}=1`);
}
