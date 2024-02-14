import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const basicUser = process.env.username;
  const basicPass = process.env.password;

  const base64Credentials = Buffer.from(`${basicUser}:${basicPass}`).toString(
    "base64",
  );

  const response = await fetch("/oppfolgingsplan-lps/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add Authorization header
      Authorization: `Basic ${base64Credentials}`,
    },
    body: request.body,
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Failed to submit form" },
      { status: 500 },
    );
  }

  const maskinportenToken = await response.json();

  return NextResponse.json(
    { message: "Woop " + maskinportenToken },
    { status: 200 },
  );
}
