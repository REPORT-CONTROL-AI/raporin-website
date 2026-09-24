"use client";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Eye, EyeOff, Loader2 } from "lucide-react";

const inputBase =
  "block w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 disabled:bg-slate-50";
const inputState = (error) =>
  error ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-teal-500 focus:ring-teal-100";

export function Field({ id, label, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-slate-400">{hint}</p>
      ) : null}
    </div>
  );
}

export function TextInput({ id, error, ...props }) {
  return (
    <input
      id={id}
      name={id}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${inputBase} ${inputState(error)}`}
      {...props}
    />
  );
}

export function PasswordInput({ id, error, initiallyVisible = false, ...props }) {
  const [visible, setVisible] = useState(initiallyVisible);
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={visible ? "text" : "password"}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} ${inputState(error)} pr-12`}
        {...props}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Şifreyi gizle" : "Şifreyi göster"}
        className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 hover:text-slate-600"
      >
        {visible ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
      </button>
    </div>
  );
}

export function SelectInput({ id, error, children, ...props }) {
  return (
    <select
      id={id}
      name={id}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`${inputBase} ${inputState(error)} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22><path d=%22m4 6 4 4 4-4%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SubmitButton({ loading, disabled, children, ...props }) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#008C87] to-[#00A58E] px-6 py-3 font-semibold text-white shadow-lg shadow-teal-700/10 transition-colors hover:from-teal-800 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    >
      {loading && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

export function Alert({ tone = "error", children }) {
  const styles =
    tone === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-red-200 bg-red-50 text-red-700";
  const Icon = tone === "success" ? CheckCircle2 : AlertCircle;
  return (
    <div role={tone === "error" ? "alert" : "status"} className={`flex gap-2.5 rounded-xl border px-4 py-3 text-sm ${styles}`}>
      <Icon size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}
