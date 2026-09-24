import { forwardAsUser } from "../../../../lib/auth/session";

export async function PUT(request) {
  return forwardAsUser(request, "/api/profile/password");
}
