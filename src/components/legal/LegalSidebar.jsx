"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LEGAL_GROUPS, findLegalDocument } from "./documents";

function NavList({ pathname, onNavigate }) {
  return (
    <nav aria-label="Hukuki metinler" className="space-y-6">
      <Link
        href="/kvkk"
        onClick={onNavigate}
        className={`block rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
          pathname === "/kvkk"
            ? "bg-[#E8FFFB] text-[#0F918B]"
            : "text-gray-700 hover:bg-gray-50 hover:text-[#0F918B]"
        }`}
      >
        Tüm Hukuki Metinler
      </Link>

      {LEGAL_GROUPS.map((group) => (
        <div key={group.id}>
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
            {group.label}
          </p>
          <ul className="mt-2 space-y-0.5">
            {group.documents.map((doc) => {
              const isActive = pathname === doc.href;
              return (
                <li key={doc.href}>
                  <Link
                    href={doc.href}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
                    className={`block border-l-2 py-2 pl-3 pr-2 text-sm leading-snug transition-colors ${
                      isActive
                        ? "border-[#17C6A3] bg-[#E8FFFB]/60 font-semibold text-[#0F918B]"
                        : "border-transparent text-gray-600 hover:border-teal-200 hover:text-[#0F918B]"
                    }`}
                  >
                    {doc.navTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function LegalSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeDoc = findLegalDocument(pathname);
  const activeLabel = activeDoc ? activeDoc.navTitle : "Tüm Hukuki Metinler";

  return (
    <>
      {/* Mobil: açılır menü */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-xl border border-teal-100 bg-white px-4 py-3 text-left text-sm font-semibold text-gray-900 shadow-sm"
        >
          <span className="truncate pr-3">{activeLabel}</span>
          <span
            aria-hidden="true"
            className={`text-[#0F918B] transition-transform ${open ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </button>
        {open ? (
          <div className="mt-2 rounded-xl border border-teal-100 bg-white p-3 shadow-sm">
            <NavList pathname={pathname} onNavigate={() => setOpen(false)} />
          </div>
        ) : null}
      </div>

      {/* Masaüstü: sabit sol panel */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-teal-100 bg-white p-4 shadow-sm">
          <NavList pathname={pathname} />
        </div>
      </aside>
    </>
  );
}
