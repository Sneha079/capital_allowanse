"use client";

import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const companyId = pathname.split("/")[2];
  

  const handleDelete = async () => {
  
    const ok = confirm("Are you sure you want to delete this client?");
    if (!ok) return;
    try {
      const response = await fetch(`/api/client/${companyId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (data.success) {
        alert("Client deleted successfully");
        router.push("/client/people");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div className="bg-grey-200 border-b border-gray-100 px-6 py-4">
      <div className="flex items-center gap-15">
        <Link
          href="/client/new"
          className="flex items-center gap-2 text-slate-700 hover:text-teal-700"
        >
          <Plus size={18} />
          <span>New</span>
        </Link>

        {pathname !== "/client/new" &&  (
          <Link
            href={`${pathname}?edit=true`}
            className="flex items-center gap-2 text-slate-700 hover:text-teal-700"
          >
            <Pencil size={18} />
            <span>Edit</span>
          </Link>
        )}
        {companyId && companyId !== "people" && companyId !== "new" && (
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 text-red-600 hover:text-red-700"
          >
            <Trash2 size={18} />
            <span>Delete</span>
          </button>
        )}
      </div>
    </div>
  );
}
