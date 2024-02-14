import { NextRequest, NextResponse } from "next/server";
import { get } from "@/server/axios-serverside";

export async function POST(request: NextRequest) {
  const tokenResponse = await get(
    "https://lps-oppfolgingsplan-mottak.ekstern.dev.nav.no/api/test/token",
  );

  return NextResponse.json(
    { message: "Woop " + tokenResponse },
    { status: 200 },
  );
}
