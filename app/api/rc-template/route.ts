import { connectDB } from "@/lib/mongodb";
import RCTemplate from "@/models/RCTemplate";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB();
        const data = await RCTemplate.find();
        return NextResponse.json(data);

    }catch(error){
        return NextResponse.json({
            message:"error fatching data"
        })


    }
}