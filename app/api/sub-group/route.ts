import { connectDB } from "@/lib/mongodb";
import SubGroup from "@/models/SubGroup";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const data = await SubGroup.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 },
    );
  }
}

// import { connectDB } from "@/lib/mongodb";
// import SubGroup from "@/models/SubGroup";

// export async function GET() {
//   try {
//     await connectDB();

//     await SubGroup.create([
//       {
//         Sub_Group_Code: "TELECOMSECURITY",
//         Sub_Group_Description: "Telecommunications & security installations",
//       },
//       {
//         Sub_Group_Code: "FIREALARM",
//         Sub_Group_Description: "Fire alarm system",
//       },
//       {
//         Sub_Group_Code: "FITTEDFIX",
//         Sub_Group_Description: "Fitted Fixtures and fittings",
//       },
//       {
//         Sub_Group_Code: "DISPOSALINST",
//         Sub_Group_Description: "Disposal installations",
//       },
//       {
//         Sub_Group_Code: "SANITARYAPP",
//         Sub_Group_Description: "Sanitary appliances",
//       },
//       {
//         Sub_Group_Code: "IRONEXTWINDOWDOORS",
//         Sub_Group_Description: "Ironmongery External windows and doors",
//       },
//       {
//         Sub_Group_Code: "IRONINTDOORS",
//         Sub_Group_Description: "Ironmongery Internal doors",
//       },
//       {
//         Sub_Group_Code: "VINCYLCARPETFLOOR",
//         Sub_Group_Description: "Vinyl/Carpet Floor finishes",
//       },
//       {
//         Sub_Group_Code: "WATERINSTALL",
//         Sub_Group_Description: "Water installations",
//       },
//       {
//         Sub_Group_Code: "SPEACEHEAT",
//         Sub_Group_Description: "Space heating",
//       },
//       {
//         Sub_Group_Code: "VENTILATIONSYS",
//         Sub_Group_Description: "Ventilation systems",
//       },
//       {
//         Sub_Group_Code: "ELECTRICALINST",
//         Sub_Group_Description: "Electrical installations",
//       },
//       {
//         Sub_Group_Code: "LIFTCONVEY",
//         Sub_Group_Description: "Lift and Conveyor Installations",
//       },
//       {
//         Sub_Group_Code: "EXTERNALWINDOWDOOR",
//         Sub_Group_Description: "External Windows and Doors",
//       },
//       {
//         Sub_Group_Code: "INTERNALDOORS",
//         Sub_Group_Description: "Internal Doors",
//       },
//       {
//         Sub_Group_Code: "FLOORFINISHES",
//         Sub_Group_Description: "Floor Finishes",
//       },
//       {
//         Sub_Group_Code: "SUBSTRUCTURE",
//         Sub_Group_Description: "Substructure",
//       },
//       {
//         Sub_Group_Code: "FRAME",
//         Sub_Group_Description: "Frame",
//       },
//       {
//         Sub_Group_Code: "UPPERFLOORS",
//         Sub_Group_Description: "Upper Floors",
//       },
//       {
//         Sub_Group_Code: "ROOF",
//         Sub_Group_Description: "Roof",
//       },
//       {
//         Sub_Group_Code: "STAIRS",
//         Sub_Group_Description: "Stairs",
//       },
//       {
//         Sub_Group_Code: "EXTERNALWALLS",
//         Sub_Group_Description: "External Walls",
//       },
//       {
//         Sub_Group_Code: "EXTERNALWALLSPARTITIONS",
//         Sub_Group_Description: "External Walls and Partitions",
//       },
//       {
//         Sub_Group_Code: "WALLFINISHES",
//         Sub_Group_Description: "Wall Finishes",
//       },
//       {
//         Sub_Group_Code: "CEILINGFINISHES",
//         Sub_Group_Description: "Ceiling Finishes",
//       },
//       {
//         Sub_Group_Code: "EXTERNALLANDSCAPING",
//         Sub_Group_Description: "External landscaping",
//       },
//     ]);

//     return Response.json({
//       success: true,
//       message: "Sub Groups Added Successfully",
//     });
//   } catch (error: any) {
//     return Response.json({
//       success: false,
//       message: error.message,
//     });
//   }
// }
