import {NextRequest, NextResponse} from "next/server";
import {FollowUpPlanDTO} from "@/dto/FollowUpPlanDTO";

export async function POST(request: NextRequest) {
    const oppfolgingsplan: FollowUpPlanDTO = await request.json();

    const basicUser = process.env.username;
    const basicPass = process.env.password;

    return NextResponse.json({ message: "Woop" + basicUser }, { status: 200 });
}