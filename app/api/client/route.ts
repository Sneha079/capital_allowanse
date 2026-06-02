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