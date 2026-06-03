import { connectDB } from "@/lib/mongodb";
import Client from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const clients = await Client.find();

    return Response.json({
      success: true,
      data: clients,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}


//post api

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const client = await Client.create(body);

    return Response.json({
      success: true,
      data: client,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

