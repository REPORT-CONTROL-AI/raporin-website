import { forwardAsUser } from "../../../../lib/auth/session";

// Backend yalnızca PHARMACY_ADMIN / SYSTEM_ADMIN rolüne izin verir; diğerleri 403 alır.
export async function PUT(request) {
  return forwardAsUser(request, "/api/profile/pharmacy");
}
