export const runtime = "experimental-edge";

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import Work from '../../models/Work.js';
import connectDB from "@/app/lib/mongoDB.js";

export async function GET() {
    
    try {

        await connectDB();

        const works = await Work.find({});

        return NextResponse.json(works, { status: 200 });
        
    } catch (error) {
        console.error("Error fetching works:", error);
        return NextResponse.json(
        { message: "Error fetching works", error },
        { status: 500 }
        );
    }

}

export async function POST(req: Request) {
    
    try {

        await connectDB();

        // parse JSON body (Next.js Request doesn't have .body populated)
        const body = await req.json();
        const { title, img, bookCoverImg, quote, description, downloadLink, newRelease } = body || {};

        // Basic server-side validation to give a clearer error than Mongoose validation
        if (!title || !img || !description || !downloadLink) {
            return NextResponse.json(
                { message: "Missing required fields: title, img, description and downloadLink are required." },
                { status: 400 }
            );
        }

        const work = await Work.create({
            title,
            img,
            bookCoverImg,
            quote,
            description,
            downloadLink,
            newRelease
        });

        return NextResponse.json(work, { status: 201 });
        
    } catch (error) {
        console.error("Error creating work:", error);
        return NextResponse.json(
        { message: "Error creating work:", error },
        { status: 500 }
        );
    }

}
