"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';


export default function LinkNavBar() {
  const [activeLink, setActiveLink] = useState("ART DELA TABLE"); // Tracks the active link

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Sets the active link
  };

  return (
    <div className="mt-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <ul className="NavLinks-Row flex text-gray-500 text-xs font-small ml-2 space-x-5">
        {[
          "ART DELA TABLE",
          "MOBILIER",
          "NAPPAGE",
          "MATÉRIEL DE SALLE",
          "CUSISINE",
          "BARBECUE",
          "TENTE",
          "CHAUFFAGE",
          "PODIUM-PISTE DE DANSE",
          "SON ET LUMIÉRE",
          "PACKS",
          "CONSOMMABLES",
        ].map((linkName) => (
          <li key={linkName} style={{ cursor: "pointer" }}>
            <Link
              href="#"
              onClick={() => handleLinkClick(linkName)}
              className={`${
                activeLink === linkName
                  ? "text-[#0093D0] font-bold"
                  : "font-medium"
              }`}
            >
              {linkName}
            </Link>
            {activeLink === linkName && (
              <div
                className="bg-[#0093D0] mt-3"
                style={{ height: "2px" }}
              ></div>
            )}
          </li>
        ))}
      </ul>

      {/* // this UL is used when width is less then 970 */}
      <ul className="NavLinks-Col gap-3 text-gray-500 text-xs font-small space-x-3">
      <div className="NavLinks-Col1 flex gap-3">
      {[
          "ART DELA TABLE",
          "MOBILIER",
          "NAPPAGE",
          "MATÉRIEL DE SALLE",
          "CUSISINE",
          "BARBECUE"
        ].map((linkName) => (
          <li  className="NavLink-List" key={linkName} style={{ cursor: "pointer",minWidth:"70px" }}>
            <Link
              href="#"
              onClick={() => handleLinkClick(linkName)}
              className={`${
                activeLink === linkName
                  ? "text-[#0093D0] font-bold"
                  : "font-medium"
              }`}
            >
              {linkName}
            </Link>
            {activeLink === linkName && (
              <div
                className="bg-[#0093D0] mt-3"
                style={{ height: "2px" }}
              ></div>
            )}
          </li>
        ))}
      </div>

      <div className="NavLinks-Col1 flex gap-2" >  {[
          "TENTE",
          "CHAUFFAGE",
          "PODIUM-PISTE DE DANSE",
          "SON ET LUMIÉRE",
          "PACKS",
          "CONSOMMABLES",
        ].map((linkName) => (
          <li className="NavLink-List" key={linkName} style={{ cursor: "pointer", minWidth:"70px" }}>
            <Link
              href="#"
              onClick={() => handleLinkClick(linkName)}
              className={`${
                activeLink === linkName
                  ? "text-[#0093D0] font-bold"
                  : "font-medium"
              }`}
            >
              {linkName}
            </Link>
            {activeLink === linkName && (
              <div
                className="bg-[#0093D0] mt-3"
                style={{ height: "2px" }}
              ></div>
            )}
          </li>
        ))}</div>
      </ul>

      <div className="bg-gray-400" style={{ height: "1px" }}></div>
    </div>
  );
}
