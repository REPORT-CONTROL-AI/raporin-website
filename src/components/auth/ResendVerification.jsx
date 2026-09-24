"use client";
import { useEffect, useState } from "react";
import { postJson } from "../../lib/auth/api";

const COOLDOWN_SECONDS = 60;

/** Doğrulama mailini yeniden gönderir. Backend de adres başına 60 sn bekletir. */
export default function ResendVerification({ email }) {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    if (secondsLeft <= 0) return undefined;
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const resend = async () => {
    setStatus("sending");
    try {
      const response = await postJson("/api/auth/resend-verification", { email });
      setStatus(response.ok ? "sent" : "error");
      if (response.ok) setSecondsLeft(COOLDOWN_SECONDS);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="text-sm text-slate-500">
      {status === "sent" && <p className="mb-2 text-emerald-700">Yeni aktivasyon linki gönderildi.</p>}
      {status === "error" && <p className="mb-2 text-red-600">Gönderilemedi, lütfen tekrar deneyin.</p>}
      Mail gelmedi mi?{" "}
      <button
        type="button"
        onClick={resend}
        disabled={status === "sending" || secondsLeft > 0 || !email}
        className="font-semibold text-teal-700 underline-offset-4 hover:underline disabled:cursor-not-allowed disabled:text-slate-400 disabled:no-underline"
      >
        {secondsLeft > 0 ? `Tekrar gönder (${secondsLeft} sn)` : "Tekrar gönder"}
      </button>
    </div>
  );
}
