import { connectDB } from "@/lib/mongodb";
import MainGroup from "@/models/MainGroup";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const body = await request.json();

    const updatedGroup =
      await MainGroup.findOneAndUpdate(
        {
          main_group_code: id,
        },
        body,
        {
          new: true,
        }
      );

    return Response.json({
      success: true,
      data: updatedGroup,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

//delete api

export async function DELETE(
    request :Request,
    {params}: {params: Promise<{id:string}>}

){
    try{
        const {id} =await params;
        console.log("delete ID:", id)
        await connectDB();

        const deletedGroup = await MainGroup.findByIdAndDelete(id)

        return Response.json({
            success:true,
            data:deletedGroup,
        });
    }catch(error:any){
        return Response.json({
            success:false,
            message:error.message,
        });
    }

}