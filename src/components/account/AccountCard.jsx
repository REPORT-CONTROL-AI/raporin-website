import { SubmitButton } from "../auth/FormControls";

export default function AccountCard({ icon: Icon, title, subtitle, children }) {
  return (
    <section className="rounded-[20px] border border-[#e6edf1] bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:p-8">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
          <Icon size={18} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

/** Düzenlenemeyen alan: input görünümünde, gri ve "Değiştirilemez" etiketli. */
export function ReadOnlyValue({ id, label, value, note = "Değiştirilemez" }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center justify-between text-sm font-medium text-slate-700">
        {label}
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">{note}</span>
      </label>
      <input
        id={id}
        value={value || ""}
        readOnly
        className="block w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] text-slate-500"
      />
    </div>
  );
}

/** Form alt çubuğu: kaydedilmemiş değişiklik uyarısı + yalnızca değişiklik varken aktif kaydet butonu. */
export function FormActions({ dirty, saving, label = "Değişiklikleri kaydet", onReset }) {
  return (
    <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-slate-400" aria-live="polite">
        {dirty ? (
          <>
            Kaydedilmemiş değişiklikleriniz var.{" "}
            {onReset && (
              <button type="button" onClick={onReset} className="font-semibold text-slate-500 underline-offset-4 hover:underline">
                Geri al
              </button>
            )}
          </>
        ) : (
          "Tüm değişiklikler kaydedildi."
        )}
      </p>
      <div className="w-full sm:w-auto">
        <SubmitButton loading={saving} disabled={!dirty}>{label}</SubmitButton>
      </div>
    </div>
  );
}
