"use client";
import { useState } from "react";
import { UserRound } from "lucide-react";
import AccountCard, { FormActions, ReadOnlyValue } from "./AccountCard";
import { Alert, Field, TextInput } from "../auth/FormControls";
import { accountRequest } from "../../lib/auth/accountApi";
import { normalizePhone, validateMobilePhone } from "../../lib/auth/validation";

export default function ProfileForm({ profile, onSaved }) {
  const [displayName, setDisplayName] = useState(profile.displayName || "");
  const [phone, setPhone] = useState(normalizePhone(profile.phone || ""));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { tone, message }
  const [saving, setSaving] = useState(false);

  const initialPhone = normalizePhone(profile.phone || "");
  const dirty = displayName !== (profile.displayName || "") || phone !== initialPhone;
  const reset = () => {
    setDisplayName(profile.displayName || "");
    setPhone(initialPhone);
    setErrors({});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {
      displayName: displayName.trim().length >= 2 ? null : "Ad soyad en az 2 karakter olmalıdır",
      phone: validateMobilePhone(phone),
    };
    setErrors(nextErrors);
    if (nextErrors.displayName || nextErrors.phone) return;

    setSaving(true);
    setStatus(null);
    const result = await accountRequest("profile", { displayName: displayName.trim(), phone });
    setSaving(false);
    if (result.ok) {
      onSaved(result.data);
      setDisplayName(result.data.displayName || "");
      setPhone(normalizePhone(result.data.phone || ""));
      setStatus({ tone: "success", message: "Kişisel bilgileriniz güncellendi." });
    } else {
      setStatus({ tone: "error", message: result.message });
    }
  };

  return (
    <AccountCard icon={UserRound} title="Kişisel bilgiler" subtitle="Hesabınızda görünen ad ve iletişim bilgileri">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {status && <Alert tone={status.tone}>{status.message}</Alert>}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="displayName" label="Ad soyad" error={errors.displayName}>
            <TextInput
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              error={errors.displayName}
              autoComplete="name"
            />
          </Field>
          <Field id="phone" label="Cep telefonu" error={errors.phone}>
            <TextInput
              id="phone"
              value={phone}
              onChange={(e) => setPhone(normalizePhone(e.target.value).slice(0, 11))}
              error={errors.phone}
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="05XXXXXXXXX"
            />
          </Field>
          <ReadOnlyValue id="email" label="E-posta" value={profile.email} />
          {/* Kullanıcı adı oturum kimliğidir; değişirse web oturumu geçersiz kalır. Giriş e-posta ile de yapılır. */}
          <ReadOnlyValue id="username" label="Kullanıcı adı" value={profile.username} />
        </div>
        <FormActions dirty={dirty} saving={saving} onReset={reset} />
      </form>
    </AccountCard>
  );
}
