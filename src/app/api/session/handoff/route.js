import { NextResponse } from "next/server";
import { backendFetch, isSameOrigin, setSessionCookies } from "../../../../lib/auth/session";

// Masaüstü uygulamasının ürettiği tek kullanımlık kodu oturuma çevirir (bkz. /giris/masaustu).
export async function POST(request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: "Geçersiz istek" }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  const code = typeof body?.code === "string" ? body.code : "";
  if (!/^[A-Za-z0-9_-]{20,128}$/.test(code)) {
    return NextResponse.json({ errorCode: "AUTH_014", message: "Bağlantı geçersiz." }, { status: 400 });
  }

  let backendResponse;
  try {
    backendResponse = await backendFetch("/api/auth/web-handoff/exchange", {
      method: "POST",
      body: JSON.stringify({ code }),
    });
  } catch {
    return NextResponse.json({ message: "Sunucuya ulaşılamadı. Lütfen tekrar deneyin." }, { status: 502 });
  }

  const data = await backendResponse.json().catch(() => null);
  if (!backendResponse.ok || !data?.accessToken) {
    return NextResponse.json(
      { errorCode: data?.errorCode ?? null, message: data?.message || "Giriş yapılamadı." },
      { status: backendResponse.ok ? 502 : backendResponse.status }
    );
  }

  const response = NextResponse.json({ success: true });
  setSessionCookies(response, data);
  return response;
}
