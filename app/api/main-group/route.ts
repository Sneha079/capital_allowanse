import { connectDB } from "@/lib/mongodb";
import MainGroup from "@/models/MainGroup";
export async function GET() {
  try {
    await connectDB();

    const groups = await MainGroup.find();
    return Response.json({
      success: true,
      data: groups,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      message: error.message,
    });
  
}
}

export async function POST (request: Request){
  try{
    await connectDB();
    const body = await request.json();
    const group= await MainGroup.create(body);
    return Response.json({
      success:true,
      data:group,

    });
  }catch(error:any){
    return Response.json({
      success:false,
      message: error.message,
    })
  }
}





// This file is currently not in use. It was used to add the main groups to the database. It can be deleted if not needed in the future.
// import { connectDB } from "@/lib/mongodb";
// import MainGroup from "@/models/MainGroup";

// export async function GET() {
//   try {
//     await connectDB();

//     await MainGroup.create([
//       {
//         main_group_code: "MAINPOOL",
//         main_group_description: "Main pool expenditure",
//       },
//       {
//         main_group_code: "SPECIALRATE",
//         main_group_description: "Special rate pool expenditure",
//       },
//       {
//         main_group_code: "RESIDUALBLDGEXP",
//         main_group_description: "Residual building expenditure",
//       },
//     ]);

//     return Response.json({
//       success: true,
//       message: "Main Groups Added",
//     });
//   } catch (error: any) {
//     return Response.json({
//       success: false,
//       message: error.message,
//     });
//   }
// }
