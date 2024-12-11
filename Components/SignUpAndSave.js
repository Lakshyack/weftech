"use client";
import { useState,useEffect } from "react";
import Image from 'next/image';


export default function SignUpAndSave() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const element = document.body; // Access the <body> tag
      const currentWidth = element ? 0 : element.offsetWidth;
      setWidth(currentWidth);
      console.log("Element width:", currentWidth);
    };

    const interval = setInterval(updateWidth, 200); // Check every 0.2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="container w-full mt-10 bg-white mb-12 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
      style={{ height: "" }}
    >
      <div className="SignUpAndSave flex gap-3">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            className="w-[95%]"
            src="/images/SignupBanner.png"
            alt="Signup Banner"
            style={{width:"540px", height:"250px"}}
            width={100} height={100}
          />
        </div>

        {/* Content Section */}
        <div className={`${width <= 970 ? 'flex-1' : 'w-1/2'} flex flex-col bg-[#FFF3F9] rounded-lg`}>
          <div className="p-4 ml-2 mt-2">
            <h1 className="text-2xl font-bold mb-2">
              S’inscrire & économiser{" "}
              <span className="text-[#5CD2DD]">10%</span>
            </h1>
            <p className="text-[#BDA2B0] text-xs mb-8">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn&apos;t. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
            <div>
              <div className="flex items-center rounded-lg bg-white-200 gap-2 p-1">
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="john@doe.com"
                  className="block min-w-0 grow pl-4 p-3 text-base text-gray-900 placeholder:text-[#A68A98] bg-white-100 border border-[#F5E1EB] focus:border-[#F5E1EB] focus:outline-none sm:text-sm rounded-md"
                />

                <button className="flex items-center justify-center bg-[#5CD2DD] text-white rounded-md text-sm gap-2 p-3">
                  S’INSCRIRE
                  <Image
                    src="/images/arrow-right.png"
                    className="h-4 w-4 align-middle"
                    alt="L"
                    width={200} height={100}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     <hr style={{marginTop:"100px"}} />
    </div>
  );
}
