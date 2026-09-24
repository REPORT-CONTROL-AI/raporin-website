"use client";
import { LogOut } from "lucide-react";

function initials(name) {
  return (name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toLocaleUpperCase("tr-TR"))
    .join("");
}

/**
 * Hesabım gezinmesi. Geniş ekranda solda yapışkan panel; mobilde üstte kullanıcı özeti
 * ve yatay kaydırılabilir bölüm menüsü.
 */
export default function AccountSidebar({ profile, pharmacy, sections, active, onSelect, onLogout, loggingOut }) {
  const roleLabel = profile.titleDisplay || profile.roles?.[0]?.name;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[20px] border border-[#e6edf1] bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.05)] lg:p-5">
        <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4 lg:border-b lg:border-slate-100 lg:pb-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#17C6A3] to-[#0F918B] text-base font-bold text-white lg:h-14 lg:w-14 lg:text-lg">
            {initials(profile.displayName || profile.username) || "?"}
          </span>
          <div className="min-w-0">
            <p className="truncate font-bold text-slate-900">{profile.displayName || profile.username}</p>
            <p className="truncate text-xs text-slate-500">{pharmacy?.name || profile.email}</p>
            {roleLabel && (
              <span className="mt-1.5 inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-semibold text-teal-700">
                {roleLabel}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onLogout}
            disabled={loggingOut}
            aria-label="Çıkış yap"
            className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-red-50 hover:text-red-600 lg:hidden"
          >
            <LogOut size={18} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Hesap bölümleri" className="-mx-1 mt-4 overflow-x-auto px-1 lg:mx-0 lg:mt-5 lg:overflow-visible lg:px-0">
          <ul className="flex gap-1.5 lg:flex-col lg:gap-1">
            {sections.map(({ id, label, description, icon: Icon, badge }) => {
              const isActive = id === active;
              return (
                <li key={id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => onSelect(id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
                      isActive ? "bg-teal-50 text-teal-900" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {isActive && <span className="absolute inset-y-2 left-0 hidden w-1 rounded-full bg-teal-500 lg:block" aria-hidden="true" />}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isActive ? "bg-white text-teal-600 shadow-sm" : "bg-slate-50 text-slate-500 group-hover:bg-white"
                      }`}
                    >
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 whitespace-nowrap lg:whitespace-normal">
                      <span className="flex items-center gap-2 text-sm font-semibold">
                        {label}
                        {badge ? (
                          <span className="rounded-full bg-amber-100 px-1.5 text-[11px] font-bold text-amber-700" aria-label={`${badge} eksik bilgi`}>
                            {badge}
                          </span>
                        ) : null}
                      </span>
                      <span className="hidden text-xs text-slate-400 lg:block">{description}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-5 hidden border-t border-slate-100 pt-4 lg:block">
          <button
            type="button"
            onClick={onLogout}
            disabled={loggingOut}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-60"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50">
              <LogOut size={17} aria-hidden="true" />
            </span>
            Çıkış yap
          </button>
        </div>
      </div>
    </aside>
  );
}
