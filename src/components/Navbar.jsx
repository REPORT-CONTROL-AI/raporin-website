"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Download, Menu, Sparkles, X } from "lucide-react";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/#ozellikler", label: "Özellikler" },
  { href: "/#fiyatlandirma", label: "Fiyatlandırma" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/blog", label: "Blog" },
  { href: "/#iletisim", label: "İletişim" },
];
const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700";
const downloadStyle = `min-h-12 items-center justify-center gap-2.5 rounded-xl border border-teal-600/10 bg-gradient-to-r from-[#008C87] to-[#00A58E] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/10 transition-colors hover:from-teal-800 hover:to-teal-700 ${focusStyle}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-sans">
      {isHome && (
        <div className="flex h-8 items-center justify-center gap-2 bg-gradient-to-r from-[#076E6B] via-[#009A87] to-[#076E6B] px-2 text-[11px] font-medium text-white sm:gap-3 sm:text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C5FFE7] px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-[#075F55] sm:text-xs">
            <Sparkles aria-hidden="true" size={13} /> ŞİMDİ ÜCRETSİZ
          </span>
          <span>Beta süresince tüm özellikler açık</span>
        </div>
      )}
    <nav aria-label="Ana menü" className="border-b border-teal-100/60 bg-white/90 font-sans backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1536px] items-center justify-between gap-6 px-6 lg:px-10">
        <Link href="/" aria-label="RaporinAI ana sayfa" className={`shrink-0 rounded ${focusStyle}`}>
          <Image src="/logo.png" alt="RaporinAI" width={200} height={60} priority className="h-auto w-[174px] xl:w-[190px]" />
        </Link>
        <div className="hidden items-center gap-5 text-[13px] font-medium text-slate-600 xl:flex 2xl:gap-7">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`relative py-3 transition-colors hover:text-teal-700 ${focusStyle} ${pathname === href ? "font-semibold text-teal-700 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-teal-500" : ""}`}>
              {label}
            </Link>
          ))}
        </div>
        <Link href="/indir" className={`hidden xl:inline-flex ${downloadStyle}`}><Download aria-hidden="true" size={18} />Uygulamayı indir</Link>
        <button type="button" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-700 hover:bg-teal-50 xl:hidden ${focusStyle}`}>
          {menuOpen ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="flex flex-col gap-1 overflow-y-auto border-t border-teal-100 bg-white px-6 py-4 shadow-xl shadow-teal-900/5 xl:hidden" style={{ maxHeight: `calc(100dvh - ${isHome ? 112 : 80}px)` }} onKeyDown={(event) => { if (event.key === "Escape") { setMenuOpen(false); document.querySelector('[aria-controls="mobile-navigation"]')?.focus(); } }}>
          {links.map(({ href, label }) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={`rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-700 ${focusStyle}`}>{label}</Link>)}
          <Link href="/indir" onClick={() => setMenuOpen(false)} className={`mt-2 inline-flex ${downloadStyle}`}><Download aria-hidden="true" size={18} />Uygulamayı indir</Link>
        </div>
      )}
    </nav>
    </header>
  );
}
