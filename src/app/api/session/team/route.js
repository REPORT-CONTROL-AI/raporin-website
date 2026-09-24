import { forwardAsUser } from "../../../../lib/auth/session";

// Masaüstü uygulamasıyla aynı endpoint: listeleme tüm çalışanlara, ekleme yalnızca yöneticiye açık.
export async function GET(request) {
  return forwardAsUser(request, "/api/team-members", "GET");
}

export async function POST(request) {
  return forwardAsUser(request, "/api/team-members", "POST");
}
