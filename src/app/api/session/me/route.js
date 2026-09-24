import { NextResponse } from "next/server";
import { backendFetch, callAsUser, setSessionCookies, unauthorized } from "../../../../lib/auth/session";

export async function GET() {
  let call;
  try {
    call = await callAsUser((accessToken) =>
      Promise.all([
        backendFetch("/api/profile/me", { accessToken }),
        backendFetch("/api/profile/pharmacy", { accessToken }),
      ])
    );
  } catch {
    return NextResponse.json({ message: "Sunucuya ulaşılamadı" }, { status: 502 });
  }
  if (!call) return unauthorized();

  const [profileResponse, pharmacyResponse] = call.result;
  if (profileResponse.status === 401 || profileResponse.status === 403) return unauthorized();
  if (!profileResponse.ok) {
    return NextResponse.json({ message: "Hesap bilgileri alınamadı" }, { status: 502 });
  }

  const profile = await profileResponse.json();
  const pharmacy = pharmacyResponse.ok ? await pharmacyResponse.json() : null;

  const response = NextResponse.json({ profile, pharmacy });
  if (call.refreshedAccessToken) setSessionCookies(response, { accessToken: call.refreshedAccessToken });
  return response;
}
