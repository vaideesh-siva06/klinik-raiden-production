export const runtime = "nodejs"; // required for MongoDB

import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoDB";
import Work from "@/app/models/Work";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    // ✅ Use $inc to atomically increment
    const work = await Work.findByIdAndUpdate(
      id,
      { $inc: { downloads: 1 } },
      { new: true } // Return updated document
    );

    if (!work) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Download count incremented successfully",
      downloads: work.downloads,
    });
  } catch (err) {
    console.error("Error incrementing downloads:", err);
    return NextResponse.json(
      { message: "Error incrementing download count" },
      { status: 500 }
    );
  }
}
