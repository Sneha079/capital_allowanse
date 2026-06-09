import { connectDB } from "@/lib/mongodb";
import Client from "@/models/User";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const body = await request.json();

    const updatedClient = await Client.findOneAndUpdate(
        { company_id: id },
      body,
      {
        new: true,
         runValidators: true,
      }
    );

    return Response.json({
      success: true,
      data: updatedClient,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

//delete 
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const deletedClient =
      await Client.findOneAndDelete({
        company_id: id,
      });

    return Response.json({
      success: true,
      data: deletedClient,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}