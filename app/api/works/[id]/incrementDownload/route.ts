export const runtime = "nodejs";

import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoDB";
import Work from "@/app/models/Work";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params; // unwrap the promise

    const work = await Work.findById(id);
    if (!work) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    // Increment downloads
    work.downloads = (work.downloads || 0) + 1;
    await work.save();

    return NextResponse.json(
      { success: true, downloads: work.downloads },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error incrementing download count", err },
      { status: 500 }
    );
  }
}
