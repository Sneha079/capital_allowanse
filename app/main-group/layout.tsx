"use client";
// import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
    
<Navbar/>
      

      <main>{children}</main>
    </>
  );
}