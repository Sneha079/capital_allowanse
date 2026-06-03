import ClientData from "@/components/client/ClientData";

import { connectDB } from "@/lib/mongodb";
import Client from "@/models/User";

export default async function ClientDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectDB();

  const client = await Client.findById(id);

  return (
     <ClientData
      client={JSON.parse(JSON.stringify(client))}
    />
  )
}



