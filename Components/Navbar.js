import React from "react";
import TopNavbar from "./TopNavbar";
import LinkNavBar from "./LinkNavBar";
import Image from 'next/image';


export default function Navbar() {
  return (
    <header className="mt-6 font-poppins font-medium">
      <TopNavbar />

      <LinkNavBar />
    </header>
  );
}
