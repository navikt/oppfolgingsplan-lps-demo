import { NextRequest, NextResponse } from "next/server";
import { get } from "@/server/axios-serverside";
import {logger} from "@navikt/next-logger";

export async function POST(request: NextRequest) {
  logger.info("Forsøker å hente token")
  const tokenResponse = await get(
    "http://lps-oppfolgingsplan-mottak/api/test/token",
  );

  return NextResponse.json(
    { message: "Woop " + tokenResponse },
    { status: 200 },
  );
}
