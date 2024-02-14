import { NextRequest, NextResponse } from "next/server";
import { get, post } from "@/server/axios-serverside";
import { FollowUpPlanDTO } from "@/dto/FollowUpPlanDTO";

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

  const plan: FollowUpPlanDTO = await request.json();

  await post(
    "http://lps-oppfolgingsplan-mottak/api/v1/followupplan/write",
    plan,
    `Bearer ${maskinportenToken}`,
  );

  return NextResponse.json({ message: "Woop" }, { status: 200 });
}
