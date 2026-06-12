"use client";

import { useEffect, useState } from "react";
import MainGroupToolbar from "@/components/main-group/MainGroupToolbar";
type MainGroup = {
  _id: string;
  main_group_code: string;
  main_group_description: string;
};

export default function MainGroupPage() {
  const [groups, setGroups] = useState<MainGroup[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isNewMode, setIsNewMode] = useState(false);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    const res = await fetch("/api/main-group");
    const data = await res.json();
    if (data.success) {
      setGroups(data.data);
      if (data.data.length > 0 && !selectedGroup) {
        setSelectedGroup(data.data[0]);
      }
    }
  };
  // const handleSave = async () => {
  //   try {
  //     const url = isNewMode
  //       ? "/api/main-group"
  //       : `/api/main-group/${selectedGroup.main_group_code}`;

  //     const method = isNewMode ? "POST" : "PUT";

  //     const response = await fetch(url, {
  //       method,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         main_group_code: selectedGroup.main_group_code,
  //         main_group_description: selectedGroup.main_group_description,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       alert(
  //         isNewMode ? "Main Group Added Successfully" : "Updated Successfully",
  //       );

  //       fetchGroups();

  //       setIsEditMode(false);
  //       setIsNewMode(false);

  //       setSelectedGroup(null);
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     alert("Update failed");
  //   }
  // };

  // const handleDelete = async () => {
  //   if (!selectedGroup) {
  //     alert("please select a record");
  //     return;
  //   }
  //   const ok = confirm("Are you sure you want to delete this record?");

  //   if (!ok) return;
  //   try {
  //     const response = await fetch(`/api/main-group/${selectedGroup._id}`, {
  //       method: "DELETE",
  //     });
  //     const data = await response.json();

  //     if (data.success) {
  //       alert("Deleted Successfully");

  //       await fetchGroups();
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     alert("Delete failed");
  //   }
  // };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Main Groups</h1>

      {/* <MainGroupToolbar
        onNew={() => {
          setIsNewMode(true);
          setSelectedGroup({ main_group_code: "", main_group_description: "" });
        }}
        onEdit={() => {
          if (!selectedGroup) {
            alert("Please select a record");
            return;
          }
          setIsEditMode(true);
        }}
        onDelete={handleDelete}
        onSave={handleSave}
        showSave={isEditMode || isNewMode}
      /> */}

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-teal-700 text-white">
              <th className="p-4 text-left">Main Group Code</th>

              <th className="p-4 text-left">Main Group Description</th>
            </tr>
          </thead>

          <tbody>
            {groups.map((group) => (
              <tr
                key={group.main_group_code}
                onClick={() => setSelectedGroup(group)}
                style={{
                  backgroundColor:
                    selectedGroup?.main_group_code === group.main_group_code
                      ? "#dbeafe"
                      : "",
                }}
                className={`border-b cursor-pointer ${
                  selectedGroup?.main_group_code === group.main_group_code
                }`}
              >
                <td className="p-4 text-blue-600 cursor-pointer">
                  {isEditMode &&
                  selectedGroup?.main_group_code === group.main_group_code ? (
                    <input
                      type="text"
                      value={selectedGroup.main_group_code}
                      onChange={(e) =>
                        setSelectedGroup({
                          ...selectedGroup,
                          main_group_code: e.target.value,
                        })
                      }
                      className="w-full bg-gray-100 outline-none border-b border-teal-500"
                    />
                  ) : (
                    group.main_group_code
                  )}
                </td>
                <td className="p-4">
                  {isEditMode &&
                  selectedGroup?.main_group_code === group.main_group_code ? (
                    <input
                      type="text"
                      value={selectedGroup.main_group_description}
                      onChange={(e) =>
                        setSelectedGroup({
                          ...selectedGroup,
                          main_group_description: e.target.value,
                        })
                      }
                      className="w-full bg-gray-100 outline-none border-b border-teal-500"
                    />
                  ) : (
                    group.main_group_description
                  )}
                </td>
              </tr>
            ))}

            {isNewMode && (
              <tr>
                <td className="p-4">
                  <input
                    type="text"
                    value={selectedGroup?.main_group_code}
                    onChange={(e) =>
                      setSelectedGroup({
                        ...selectedGroup,
                        main_group_code: e.target.value,
                      })
                    }
                    className="w-full border-b outline-none"
                  />
                </td>

                <td className="p-4">
                  <input
                    type="text"
                    value={selectedGroup?.main_group_description}
                    onChange={(e) =>
                      setSelectedGroup({
                        ...selectedGroup,
                        main_group_description: e.target.value,
                      })
                    }
                    className="w-full border-b outline-none"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
