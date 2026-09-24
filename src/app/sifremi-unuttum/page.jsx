"use client";
import { useState } from "react";
import AuthShell, { AuthLink } from "../../components/auth/AuthShell";
import { Alert, Field, SubmitButton, TextInput } from "../../components/auth/FormControls";
import { postJson, readApiError } from "../../lib/auth/api";
import { validateEmail } from "../../lib/auth/validation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateEmail(email.trim());
    if (validationError) {
      setError(validationError);
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const response = await postJson("/api/auth/forgot-password", { email: email.trim() });
      if (response.ok) setSent(true);
      else setError((await readApiError(response)).message);
    } catch {
      setError("Sunucuya ulaşılamadı. İnternet bağlantınızı kontrol edin.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthShell
      title="Şifrenizi sıfırlayın"
      subtitle="Hesabınıza kayıtlı e-posta adresini girin, size bir sıfırlama linki gönderelim."
      footer={<>Şifrenizi hatırladınız mı? <AuthLink href="/giris">Giriş yapın</AuthLink></>}
    >
      {sent ? (
        <Alert tone="success">
          Şifre sıfırlama linki <strong>{email.trim()}</strong> adresine gönderildi. Link 1 saat geçerlidir.
        </Alert>
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          {error && <Alert>{error}</Alert>}
          <Field id="email" label="E-posta">
            <TextInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" autoFocus />
          </Field>
          <SubmitButton loading={submitting}>Sıfırlama linki gönder</SubmitButton>
        </form>
      )}
    </AuthShell>
  );
}
