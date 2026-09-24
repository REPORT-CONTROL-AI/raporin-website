"use client";
import { useState } from "react";
import { KeyRound } from "lucide-react";
import AccountCard, { FormActions } from "./AccountCard";
import { Alert, Field, PasswordInput } from "../auth/FormControls";
import { accountRequest } from "../../lib/auth/accountApi";
import { validatePassword } from "../../lib/auth/validation";

const empty = { currentPassword: "", newPassword: "", confirmPassword: "" };

export default function PasswordForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [saving, setSaving] = useState(false);

  const dirty = Object.values(form).some(Boolean);
  const reset = () => {
    setForm(empty);
    setErrors({});
  };

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {
      currentPassword: form.currentPassword ? null : "Mevcut şifrenizi girin",
      newPassword: validatePassword(form.newPassword),
      confirmPassword: form.confirmPassword === form.newPassword ? null : "Şifreler eşleşmiyor",
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setSaving(true);
    setStatus(null);
    const result = await accountRequest("password", {
      currentPassword: form.currentPassword,
      newPassword: form.newPassword,
    });
    setSaving(false);
    if (result.ok) {
      setForm(empty);
      setStatus({ tone: "success", message: "Şifreniz değiştirildi." });
    } else if (result.code === "PROF_011") {
      setErrors({ currentPassword: result.message });
    } else {
      setStatus({ tone: "error", message: result.message });
    }
  };

  const props = (name) => ({ id: name, value: form[name], onChange, error: errors[name] });

  return (
    <AccountCard icon={KeyRound} title="Şifre değiştir" subtitle="Yeni şifre en az 8 karakter olmalı, harf ve rakam içermeli. Masaüstü uygulamasında da yeni şifre geçerli olur.">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {status && <Alert tone={status.tone}>{status.message}</Alert>}
        <Field id="currentPassword" label="Mevcut şifre" error={errors.currentPassword}>
          <PasswordInput {...props("currentPassword")} autoComplete="current-password" />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="newPassword" label="Yeni şifre" error={errors.newPassword}>
            <PasswordInput {...props("newPassword")} autoComplete="new-password" />
          </Field>
          <Field id="confirmPassword" label="Yeni şifre (tekrar)" error={errors.confirmPassword}>
            <PasswordInput {...props("confirmPassword")} autoComplete="new-password" />
          </Field>
        </div>
        <FormActions dirty={dirty} saving={saving} label="Şifreyi değiştir" onReset={reset} />
      </form>
    </AccountCard>
  );
}
