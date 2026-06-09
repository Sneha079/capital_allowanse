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