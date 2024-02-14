import { NextRequest, NextResponse } from "next/server";
import { get, post } from "@/server/axios-serverside";

export async function POST(request: NextRequest) {
  const basicUser = process.env.username;
  const basicPass = process.env.password;

  const base64Credentials = Buffer.from(`${basicUser}:${basicPass}`).toString(
    "base64",
  );

  const maskinportenToken = await get(
    "http://lps-oppfolgingsplan-mottak/api/test/token",
    `Basic ${base64Credentials}`,
  );

  await post(
    "http://lps-oppfolgingsplan-mottak/api/test/token",
    request.body,
    `Bearer ${maskinportenToken}`,
  );

  return NextResponse.json({ message: "Woop" }, { status: 200 });
}
