"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

export default function LayoutWrapper() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  if (isEnglish) return null;

  return (
    <>
      {/* ✅ Navbar tüm sayfalarda görünür */}
      <Navbar />

      {/* 🎭 Sabit Maskot - Sağ tarafta scroll ile birlikte hareket eder */}
      <div className="fixed right-4 lg:right-8 top-24 z-40 hidden lg:block">
        <Link href="/indir" className="block cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="animate-float">
            <Image
              src="/raporin-mascot.png"
              alt="RaporinAI Maskot"
              width={112}
              height={112}
              className="w-28 h-28 drop-shadow-2xl"
              loading="lazy"
              sizes="112px"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
