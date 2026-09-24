import { NextResponse } from "next/server";
import { backendFetch, setSessionCookies } from "../../../../lib/auth/session";

export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (!body?.username || !body?.password) {
    return NextResponse.json({ message: "Kullanıcı adı veya şifre hatalı" }, { status: 400 });
  }

  let backendResponse;
  try {
    backendResponse = await backendFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username: body.username.trim(), password: body.password }),
    });
  } catch {
    return NextResponse.json({ message: "Sunucuya ulaşılamadı. Lütfen tekrar deneyin." }, { status: 502 });
  }

  const data = await backendResponse.json().catch(() => null);
  if (!backendResponse.ok || !data?.accessToken) {
    // Backend'in errorCode'u korunur: istemci AUTH_008'de "doğrulama mailini tekrar gönder" sunar.
    return NextResponse.json(
      { errorCode: data?.errorCode ?? null, message: data?.message || "Giriş yapılamadı" },
      { status: backendResponse.ok ? 502 : backendResponse.status }
    );
  }

  const response = NextResponse.json({ user: data.user });
  setSessionCookies(response, data);
  return response;
}
