
import { connectDB } from "@/lib/mongodb";
 import BCISMaster from "@/models/BCIS_Master";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const data = await BCISMaster.find();
    return NextResponse.json(data);
  } catch (error) {
    
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 },
    );
  }
}




























// import { connectDB } from "@/lib/mongodb";
// import BCISMaster from "@/models/BCIS_Master";

// export async function GET() {
//   try {
//     await connectDB();

  

//     await BCISMaster.insertMany([
//       {
//         BCIS_Code: "1",
//         BCIS_Description: "Substructure",
//       },
//       {
//         BCIS_Code: "2.01",
//         BCIS_Description: "Frame",
//       },
//       {
//         BCIS_Code: "2.02",
//         BCIS_Description: "Upper Floors",
//       },
//       {
//         BCIS_Code: "2.03",
//         BCIS_Description: "Roof",
//       },
//       {
//         BCIS_Code: "2.04",
//         BCIS_Description: "Stairs",
//       },
//       {
//         BCIS_Code: "2.05",
//         BCIS_Description: "External Walls",
//       },
//       {
//         BCIS_Code: "2.06",
//         BCIS_Description: "External Windows and Doors",
//       },
//       {
//         BCIS_Code: "2.07",
//         BCIS_Description: "External Walls and Partitions",
//       },
//       {
//         BCIS_Code: "2.08",
//         BCIS_Description: "Internal Doors",
//       },
//       {
//         BCIS_Code: "2",
//         BCIS_Description: "Superstructure",
//       },
//       {
//         BCIS_Code: "3.01",
//         BCIS_Description: "Wall Finishes",
//       },
//       {
//         BCIS_Code: "3.02",
//         BCIS_Description: "Floor Finishes",
//       },
//       {
//         BCIS_Code: "3.03",
//         BCIS_Description: "Ceiling Finishes",
//       },
//       {
//         BCIS_Code: "3",
//         BCIS_Description: "Finishes",
//       },
//       {
//         BCIS_Code: "4",
//         BCIS_Description: "Fittings, Furnishings and Equipment",
//       },
//       {
//         BCIS_Code: "5.01",
//         BCIS_Description: "Sanitary Installations",
//       },
//       {
//         BCIS_Code: "5.02",
//         BCIS_Description: "Services Equipment",
//       },
//       {
//         BCIS_Code: "5.03",
//         BCIS_Description: "Disposal Installations",
//       },
//       {
//         BCIS_Code: "5.04",
//         BCIS_Description: "Water Installations",
//       },
//       {
//         BCIS_Code: "5.05",
//         BCIS_Description: "Heat Source",
//       },
//       {
//         BCIS_Code: "5.06",
//         BCIS_Description: "Space Heating and Air Conditioning",
//       },
//       {
//         BCIS_Code: "5.07",
//         BCIS_Description: "Ventilating System",
//       },
//       {
//         BCIS_Code: "5.08",
//         BCIS_Description: "Electrical Installations",
//       },
//       {
//         BCIS_Code: "5.09",
//         BCIS_Description: "Fuel Installations",
//       },
//       {
//         BCIS_Code: "5.10",
//         BCIS_Description: "Lift and Conveyor Installations",
//       },
//       {
//         BCIS_Code: "5.11",
//         BCIS_Description: "Fire and Lighting Protection",
//       },
//       {
//         BCIS_Code: "5.12",
//         BCIS_Description: "Communications and Security Installations",
//       },
//       {
//         BCIS_Code: "5.13",
//         BCIS_Description: "Special Installations",
//       },
//       {
//         BCIS_Code: "5.14",
//         BCIS_Description:
//           "Builder's Work in Connection with Services (BWIC)",
//       },
//       {
//         BCIS_Code: "5",
//         BCIS_Description: "Services",
//       },
//     ]);

//     return Response.json({
//       success: true,
//       message: "BCIS Master data inserted successfully",
//     });
//   } catch (error: any) {
//     return Response.json({
//       success: false,
//       message: error.message,
//     });
//   }
// }