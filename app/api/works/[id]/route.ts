import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import Work from '../../../models/Work.js';
import connectDB from "@/app/lib/mongoDB.js";


export async function PUT(req: Request, context: { params: { id: string | Promise<string> } }) {
  try {
    await connectDB();

    // Unwrap the id if it's a Promise
    const { id } = await context.params;

    const body = await req.json();

    const updatedWork = await Work.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedWork) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    return NextResponse.json(updatedWork, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error updating work", err }, { status: 500 });
  }
}

export async function DELETE(req: Request, context: { params: { id: string } }) {
  try {
    await connectDB();

    // Next.js now requires `params` to be awaited
    const { id } = await context.params; // ✅ unwrap the promise

    const deletedWork = await Work.findByIdAndDelete(id);

    if (!deletedWork) {
      return NextResponse.json({ message: "Work not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Work deleted successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error deleting work", err }, { status: 500 });
  }
}
