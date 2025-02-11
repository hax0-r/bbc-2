"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Define routes where Navbar and Footer should be hidden
  const noLayoutRoutes = ["/login", "/signup"];

  // Check if the current pathname matches any of the noLayoutRoutes
  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
