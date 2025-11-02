import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const { password } = await req.json();

    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_PASSWORD) {
      return NextResponse.json({ message: "Server misconfigured" }, { status: 500 });
    }

    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: "Incorrect password" }, { status: 401 });
    }
  } catch (err) {
    console.error("Error in admin login:", err);
    return NextResponse.json({ success: false, message: "Error processing request" }, { status: 500 });
  }
}
