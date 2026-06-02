"use client";

import { useEffect, useState } from "react";

export default function PeoplePage() {
  useEffect(() => {
    fetchClients();
  }, []);
  const [clients, setClients] = useState([]);
  const fetchClients = async () => {
    const res = await fetch("/api/client");
    const data = await res.json();
    if (data.success) {
      setClients(data.data);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Clients</h1>

      {/* <pre>
        {JSON.stringify(clients, null, 2)}
      </pre> */}
      <table className="w-full border">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Company No.</th>
            <th className="p-3 text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: any) => (
            <tr key={client._id} className="border-b border-gray-300 hover:bg-gray-100">
              <td className="p-3">{client.name}</td>

              <td className="p-3">{client.contact_email}</td>

              <td className="p-3">{client.contact_phone}</td>

              <td className="p-3">{client.company_number}</td>
              <td className="p-3">{client.address1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
