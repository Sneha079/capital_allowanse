"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />

      {pathname !== "/client" && <Header />}

      <main>{children}</main>
    </>
  );
}