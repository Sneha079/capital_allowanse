"use client";

import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
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

        {pathname !== "/client/new" && (
          <Link
            href={`${pathname}?edit=true`}
            className="flex items-center gap-2 text-slate-700 hover:text-teal-700"
          >
            <Pencil size={18} />
            <span>Edit</span>
          </Link>
        )}
      </div>
    </div>
  );
}
