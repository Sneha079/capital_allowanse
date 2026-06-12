"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-teal-700 text-white px-6 py-4">
      <div className="flex items-center gap-6">
        {/* Home */}
        <Link
          href="/client"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 ${
            pathname === "/client" ? "bg-white/20" : ""
          }`}
        >
          <Home size={18} />
          <span>Home</span>
        </Link>

        {/* Client */}
        <Link
          href="/client/people"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 ${
            pathname === "/client/people" ? "bg-white/20" : ""
          }`}
        >
          <Users size={18} />
          <span>Client</span>
        </Link>

        {/* Administration Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <span>Administration</span>

            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
              <Link
                href="/main-group"
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-black hover:bg-gray-100 ${
                  pathname === "/main-group" ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                Main Group
              </Link>

              <Link
                href="/sub-group"
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-black hover:bg-gray-100 ${
                  pathname === "/sub-group" ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                Sub Group
              </Link>

              <Link
                href="/bcis-master"
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-black hover:bg-gray-100 ${
                  pathname === "/bcis-master" ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                BCIS Master
              </Link>
              <Link
                href="/rc-template"
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-black hover:bg-gray-100 ${
                  pathname === "/rc-template" ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                RC tamplate
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
