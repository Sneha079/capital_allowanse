import { connectDB } from "@/lib/mongodb";
import Client from "@/models/User";

export async function GET() {

  try {

    await connectDB();

    await Client.create([
      {
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
        name: "Tech Solutions",
        company_number: "CMP002",
        contact_email: "test@gmail.com",
        contact_phone: "9876543211",
        address1: "Noida",
        address2: "",
        county: "UP",
        postcode: "201301",
        password: "1234",
      },

      {
        name: "Skyline Ltd",
        company_number: "CMP003",
        contact_email: "sneha@gmail.com",
        contact_phone: "9876543212",
        address1: "Gurgaon",
        address2: "",
        county: "Haryana",
        postcode: "122001",
        password: "12345",
      },
      {
  name: "Global Tech Ltd",
  company_number: "CMP004",
  contact_email: "rahul@gmail.com",
  contact_phone: "9876543213",
  address1: "Noida Sector 62",
  address2: "",
  county: "Uttar Pradesh",
  postcode: "201309",
  password: "12345",
},

{
  name: "Future Solutions Pvt Ltd",
  company_number: "CMP005",
  contact_email: "priya@gmail.com",
  contact_phone: "9876543214",
  address1: "Jaipur",
  address2: "Vaishali Nagar",
  county: "Rajasthan",
  postcode: "302021",
  password: "12345",
},

{
  name: "Innovate Systems",
  company_number: "CMP006",
  contact_email: "vikas@gmail.com",
  contact_phone: "9876543215",
  address1: "Mumbai",
  address2: "Andheri East",
  county: "Maharashtra",
  postcode: "400069",
  password: "12345",
},

{
  name: "Bright Star Enterprises",
  company_number: "CMP007",
  contact_email: "neha@gmail.com",
  contact_phone: "9876543216",
  address1: "Bangalore",
  address2: "Whitefield",
  county: "Karnataka",
  postcode: "560066",
  password: "12345",
},
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