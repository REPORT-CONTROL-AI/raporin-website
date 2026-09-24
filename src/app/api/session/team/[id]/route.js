import { NextResponse } from "next/server";
import { forwardAsUser } from "../../../../../lib/auth/session";

async function forwardToMember(request, params, method) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) {
    return NextResponse.json({ message: "Geçersiz üye" }, { status: 400 });
  }
  return forwardAsUser(request, `/api/team-members/${id}`, method);
}

export async function PUT(request, { params }) {
  return forwardToMember(request, params, "PUT");
}

export async function DELETE(request, { params }) {
  return forwardToMember(request, params, "DELETE");
}
