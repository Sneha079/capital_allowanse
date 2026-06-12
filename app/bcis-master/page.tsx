"use client";

import { useEffect, useState } from "react";

export default function BcisMasterPage() {
  const [bcisMaster, setBcisMaster] = useState([]);

  useEffect(() => {
    fetch("/api/bcis-master")
      .then((res) => res.json())
      .then((data) => setBcisMaster(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">BCIS Master</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="text-left p-4">BCIS Master Code</th>
              <th className="text-left p-4">BCIS Master Description</th>
            </tr>
          </thead>

          <tbody>
            {bcisMaster.map((item: any) => (
              <tr
                key={item._id}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="p-4 text-blue-600">{item.BCIS_Code}</td>
                <td className="p-4">{item.BCIS_Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
