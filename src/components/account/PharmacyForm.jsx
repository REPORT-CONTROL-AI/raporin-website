"use client";
import { useState } from "react";
import { Building2 } from "lucide-react";
import AccountCard, { FormActions, ReadOnlyValue } from "./AccountCard";
import { Alert, Field, SelectInput, TextInput } from "../auth/FormControls";
import { accountRequest } from "../../lib/auth/accountApi";
import { useLocationOptions } from "../../lib/auth/useLocationOptions";
import { normalizePhone, validateGln, validatePharmacyPhone } from "../../lib/auth/validation";

// Backend hata kodlarının ait olduğu alan; eşleşmeyenler formun üstünde gösterilir.
const ERROR_FIELDS = {
  REG_008: "gln",
  REG_009: "gln",
  LOC_001: "cityId",
  LOC_002: "districtId",
  LOC_003: "neighborhoodId",
  LOC_004: "neighborhoodId",
};

function toForm(pharmacy) {
  return {
    name: pharmacy.name || "",
    phone: normalizePhone(pharmacy.phone || ""),
    gln: pharmacy.gln || "",
    cityId: pharmacy.city?.id ? String(pharmacy.city.id) : "",
    districtId: pharmacy.district?.id ? String(pharmacy.district.id) : "",
    neighborhoodId: pharmacy.neighborhood?.id ? String(pharmacy.neighborhood.id) : "",
    address: pharmacy.address || "",
  };
}

function validate(form) {
  return {
    name: form.name.trim().length >= 2 ? null : "Eczane adı en az 2 karakter olmalıdır",
    phone: validatePharmacyPhone(form.phone),
    gln: validateGln(form.gln),
    cityId: form.cityId ? null : "İl seçimi zorunludur",
    districtId: form.districtId ? null : "İlçe seçimi zorunludur",
    neighborhoodId: form.neighborhoodId ? null : "Mahalle seçimi zorunludur",
    address: form.address.trim() ? null : "Açık adres zorunludur",
  };
}

export default function PharmacyForm({ pharmacy, canEdit, onSaved }) {
  const [form, setForm] = useState(() => toForm(pharmacy));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [saving, setSaving] = useState(false);
  const { cities, districts, neighborhoods, loadError } = useLocationOptions(form.cityId, form.districtId);

  const saved = toForm(pharmacy);
  const dirty = Object.keys(saved).some((key) => saved[key] !== form[key]);
  const reset = () => {
    setForm(saved);
    setErrors({});
  };

  if (!canEdit) {
    const info = pharmacy.addressInfo;
    const region = [info?.neighborhoodName, info?.districtName, info?.cityName].filter(Boolean).join(", ");
    const note = "Yalnızca yönetici";
    return (
      <AccountCard icon={Building2} title="Eczane bilgileri" subtitle="Eczane bilgilerini yalnızca eczane yöneticisi değiştirebilir">
        <div className="grid gap-5 sm:grid-cols-2">
          <ReadOnlyValue id="pharmacyName" label="Eczane adı" value={pharmacy.name} note={note} />
          <ReadOnlyValue id="pharmacyPhone" label="Telefon" value={pharmacy.phone} note={note} />
          <ReadOnlyValue id="pharmacyGln" label="GLN numarası" value={pharmacy.gln} note={note} />
          <ReadOnlyValue id="pharmacyRegion" label="Konum" value={region} note={note} />
          <div className="sm:col-span-2">
            <ReadOnlyValue id="pharmacyAddress" label="Adres" value={pharmacy.address} note={note} />
          </div>
        </div>
      </AccountCard>
    );
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: name === "phone" ? normalizePhone(value).slice(0, 11) : value };
      if (name === "cityId") Object.assign(next, { districtId: "", neighborhoodId: "" });
      if (name === "districtId") next.neighborhoodId = "";
      return next;
    });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setSaving(true);
    setStatus(null);
    const result = await accountRequest("pharmacy", {
      name: form.name.trim(),
      phone: form.phone,
      gln: form.gln.replace(/\s/g, ""),
      cityId: Number(form.cityId),
      districtId: Number(form.districtId),
      neighborhoodId: Number(form.neighborhoodId),
      address: form.address.trim(),
    });
    setSaving(false);

    if (result.ok) {
      onSaved(result.data);
      setForm(toForm(result.data));
      setStatus({ tone: "success", message: "Eczane bilgileri güncellendi." });
      return;
    }
    const field = ERROR_FIELDS[result.code];
    if (field) setErrors((prev) => ({ ...prev, [field]: result.message }));
    else setStatus({ tone: "error", message: result.message });
  };

  const props = (name) => ({ id: name, name, value: form[name], onChange, error: errors[name] });

  return (
    <AccountCard icon={Building2} title="Eczane bilgileri" subtitle="Eczane adı, iletişim ve konum bilgileri">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {status && <Alert tone={status.tone}>{status.message}</Alert>}
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field id="name" label="Eczane adı" error={errors.name}>
              <TextInput {...props("name")} autoComplete="organization" />
            </Field>
          </div>
          <Field id="phone" label="Eczane telefonu" error={errors.phone} hint="İsteğe bağlı">
            <TextInput {...props("phone")} type="tel" inputMode="numeric" placeholder="0XXXXXXXXXX" />
          </Field>
          <Field id="gln" label="GLN numarası" error={errors.gln}>
            <TextInput {...props("gln")} inputMode="numeric" maxLength={16} />
          </Field>
        </div>

        {loadError && <Alert>İl, ilçe veya mahalle listesi yüklenemedi. Sayfayı yenileyip tekrar deneyin.</Alert>}
        <div className="grid gap-5 sm:grid-cols-3">
          <Field id="cityId" label="İl" error={errors.cityId}>
            <SelectInput {...props("cityId")}>
              <option value="">Seçin</option>
              {cities.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </SelectInput>
          </Field>
          <Field id="districtId" label="İlçe" error={errors.districtId}>
            <SelectInput {...props("districtId")} disabled={!form.cityId}>
              <option value="">Seçin</option>
              {districts.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </SelectInput>
          </Field>
          <Field id="neighborhoodId" label="Mahalle" error={errors.neighborhoodId}>
            <SelectInput {...props("neighborhoodId")} disabled={!form.districtId}>
              <option value="">Seçin</option>
              {neighborhoods.map((n) => <option key={n.id} value={n.id}>{n.name}</option>)}
            </SelectInput>
          </Field>
        </div>
        <Field id="address" label="Açık adres" error={errors.address}>
          <TextInput {...props("address")} autoComplete="street-address" placeholder="Cadde, sokak, bina no" />
        </Field>

        <FormActions dirty={dirty} saving={saving} onReset={reset} />
      </form>
    </AccountCard>
  );
}
