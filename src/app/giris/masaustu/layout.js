export const metadata = {
  title: "Hesabınıza bağlanılıyor",
  robots: { index: false, follow: false },
  // Kod URL'nin # kısmında gelir (sunucuya ve Referer'a gitmez); yine de hiçbir yere sızmasın.
  referrer: "no-referrer",
};

export default function DesktopHandoffLayout({ children }) {
  return children;
}
