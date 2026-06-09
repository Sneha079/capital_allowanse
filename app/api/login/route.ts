
import {connectDB} from "@/lib/mongodb";
import Client from "@/models/User";

export async function POST(req: Request) {
    try{
        await connectDB();
        const body = await req.json();
        const {contact_email, password} = body;
        const user = await Client.findOne({
           contact_email: contact_email,
             password,
            
        });
        if(!user){
            
        return Response.json({
        success: false,
        message: "Invalid User",
      });
            
        }
         return Response.json({
      success: true,
      message: "Login Success",
      user,
    });

  } catch (error: any) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }

    }
  

  

  
