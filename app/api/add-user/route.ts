import { connectDB } from "@/lib/mongodb";
import Client from "@/models/User";

export async function GET() {

  try {

    await connectDB();

   await Client.create([
  {
    company_id: "COMP001",
    name: "ABC Pvt Ltd",
    company_number: "CMP001",
    contact_email: "admin@gmail.com",
    contact_phone: "9876543210",
    address1: "Delhi",
    address2: "Near Metro",
    county: "Delhi",
    postcode: "110001",
    password: "1234",
  },
  {
    company_id: "COMP002",
    name: "Tech Solutions",
    company_number: "CMP002",
    contact_email: "test@gmail.com",
    contact_phone: "9876543211",
    address1: "Noida",
    county: "UP",
    postcode: "201301",
    password: "1234",
  },
  {
    company_id: "COMP003",
    name: "Skyline Ltd",
    company_number: "CMP003",
    contact_email: "sneha@gmail.com",
    contact_phone: "9876543212",
    address1: "Gurgaon",
    county: "Haryana",
    postcode: "122001",
    password: "12345",
  }
]);
    

    return Response.json({
      success: true,
      message: "Dummy Users Added",
    });

  } catch (error: any) {

    return Response.json({
      success: false,
      message: error.message,
    });

  }
}



// import { connectDB } from "@/lib/mongodb";
// import RCTemplate from "@/models/RCTemplate";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await connectDB();

//     await RCTemplate.insertMany([
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "DISPOSALINST",
//     bcis_code: "5.03",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "FIREALARM",
//     bcis_code: "5.11",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "FITTEDFIX",
//     bcis_code: "4",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "FITTEDFIX",
//     bcis_code: "5.02",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "FITTEDFIX",
//     bcis_code: "5.13",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "IRONEXTWINDOWDOORS",
//     bcis_code: "2.06",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "IRONINTDOORS",
//     bcis_code: "2.08",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "SANITARYAPP",
//     bcis_code: "5.01",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "TELECOMSECURITY",
//     bcis_code: "5.12",
//   },
//   {
//     main_group_code: "MAINPOOL",
//     sub_group_code: "VINCYLCARPETFLOOR",
//     bcis_code: "3.02",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "CEILINGFINISHES",
//     bcis_code: "3.03",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "EXTERNALWALLS",
//     bcis_code: "2.05",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "EXTERNALWALLSPARTITIONS",
//     bcis_code: "2.7",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "FLOORFINISHES",
//     bcis_code: "3.02",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "FRAME",
//     bcis_code: "2.01",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "INTERNALDOORS",
//     bcis_code: "2.08",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "ROOF",
//     bcis_code: "2.03",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "STAIRS",
//     bcis_code: "2.04",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "SUBSTRUCTURE",
//     bcis_code: "1",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "UPPERFLOORS",
//     bcis_code: "2.02",
//   },
//   {
//     main_group_code: "RESIDUALBLDGEXP",
//     sub_group_code: "WALLFINISHES",
//     bcis_code: "3.01",
//   },
//   {
//     main_group_code: "SPECIALRATE",
//     sub_group_code: "ELECTRICALINST",
//     bcis_code: "5.08",
//   },
//   {
//     main_group_code: "SPECIALRATE",
//     sub_group_code: "SPEACEHEAT",
//     bcis_code: "5.05",
//   },
//   {
//     main_group_code: "SPECIALRATE",
//     sub_group_code: "SPEACEHEAT",
//     bcis_code: "5.06",
//   },
//   {
//     main_group_code: "SPECIALRATE",
//     sub_group_code: "SPEACEHEAT",
//     bcis_code: "5.09",
//   },
//   {
//     main_group_code: "SPECIALRATE",
//     sub_group_code: "VENTILATIONSYS",
//     bcis_code: "5.07",
//   },
//   {
//     main_group_code: "SPECIALRATE",
//     sub_group_code: "WATERINSTALL",
//     bcis_code: "5.04",
//   },
// ]);

//     return NextResponse.json({
//       message: "Data Inserted Successfully",
//     });
//   } catch (error) {
//     return NextResponse.json(error);
//   }
// }