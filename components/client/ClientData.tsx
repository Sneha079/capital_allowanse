"use client";

import ClientForm from "./ClientForm";
import ClientsideBar from "./ClientsideBar";


export default function ClientData({
  client,
}: {
  client?: any;
}) {
  
  return (
    <div className="min-h-screen bg-grey-300 p-3">
      <h2 className="text-3xl font-bold mb-6">
        Client Details
      </h2>

      <div className="flex gap-6 items-start">
        <ClientsideBar />

        <div className="flex-1">
          <ClientForm client={client}  />
        </div>
      </div>
    </div>
  );
}