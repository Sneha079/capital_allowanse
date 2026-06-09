"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Users } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-teal-700 text-white px-6 py-4">
      <div className="flex items-center gap-6">

        <Link
          href="/client"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            pathname === "/client"
              ? "bg-white/20"
              : ""
          }`}
        >
            <Home size={18}/>
        <span>Home</span>
        </Link>

        <Link
          href="/client/people"
          className={` flex items-center gap-2 px-4 py-2 rounded-lg ${
            pathname === "/client/people"
              ? "bg-white/20"
              : ""
          }`}
        >
            <Users size={18}/>
            <span>Client</span>
          
        </Link>

        <Link
          href="/main-group"
          className={` flex items-center gap-2 px-4 py-2 rounded-lg ${
            pathname === "/main-group"
              ? "bg-white/20"
              : ""
          }`}
        >
            <Layers size={18}/>
            <span>Main Group</span>
          
        </Link>

      </div>
    </nav>
  );
}