import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const basicUser = process.env.username;
  const basicPass = process.env.password;

  const base64Credentials = Buffer.from(`${basicUser}:${basicPass}`).toString(
    "base64",
  );

  const tokenResponse = await fetch("https://lps-oppfolgingsplan-mottak.ekstern.dev.nav.no/api/test/token", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Add Authorization header
      Authorization: `Basic ${base64Credentials}`,
    },
  });

  if (!tokenResponse.ok) {
    return NextResponse.json(
      { message: "Failed to submit form" },
      { status: 500 },
    );
  }

  const maskinportenToken = await tokenResponse.json();

  return NextResponse.json(
    { message: "Woop " + maskinportenToken },
    { status: 200 },
  );
}
