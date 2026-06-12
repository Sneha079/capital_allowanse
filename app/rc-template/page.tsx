"use client";

import {useEffect  , useState} from "react";

export default function RcTemplatePage(){
    const [rcTemplate , setRcTemplate] = useState([]);

    useEffect(()=>{
        fetch("/api/rc-template").then((res)=> res.json())
        .then((data)=> setRcTemplate(data));

    },[])

    return(
         <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        RC Template
      </h1>

       <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">

      <table className="w-full">
        <thead className="bg-teal-700 text-white">
          <tr>
            <th className="text-left p-4">
                 Main Group Code</th>
            <th className="text-left p-4">
                Sub Group Code</th>
                  <th className="text-left p-4">
                BCIS Code</th>
           
          </tr>
        </thead>

        <tbody>
          {rcTemplate.map((item: any) => (
            <tr key={item._id}
             className="border-b border-gray-300 hover:bg-gray-100">
              <td className="p-4 ">
                {item.main_group_code}</td>
              <td className="p-4">
                 {item.sub_group_code}
                 </td>
                  <td className="p-4">
                 {item.bcis_code}
                 </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    )

}


