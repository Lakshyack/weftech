import React from "react";
import Image from 'next/image';

export default function FullService() {
  return (
    <div
      className="container w-full mt-10 mb-10 mx-auto max-w-7xl gradient-background px-2 sm:px-6 lg:px-8"
      style={{ height: "px" }}
    >
      <div
        className="flex flex-col justify-center gap-10"
        style={{ alignItems: "center", marginTop: "20px" }}
      >
        <div
          className="flex flex-col justify-center"
          style={{ alignItems: "center", fontSize: "25px" }}
        >
          {" "}
          <h1>
            On s’occupe de{" "}
            <span className="text-[#5CD2DD]">
              <b>tout</b>
            </span>
          </h1>
          <p className="text-xs">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>

        <div className="mb-8">
          <ul
            className="flex FullService-Container justify-center  relative"
            style={{ alignItems: "center" }}
          >
            {/* First Item */}
            <li className="flex flex-1 flex-col items-center text-center relative gap-3">
              <Image width={50} height={35} src="/images/Groupe_25.png" alt="Livraison & Reprise" />
              <h1>Livraison & Reprise</h1>
             <h3 className="text-xs text-gray-400">Selon vos besoins</h3>
            </li>

            {/* Line between first and second */}
            <li
              className="Line absolute bg-gray-500"
              style={{
                height: "1px",
                width: "95px",
                top: "35%", // Align with the middle of the previous <li>
                left: "108px", // Adjust position relative to the previous <li>
                transform: "translateY(-50%)", // Center vertically
              }}
            ></li>

            {/* Second Item */}
            <li className="flex flex-col items-center text-center gap-3 relative">
              <Image width={50} height={35} src="/images/dish.png" alt="Nettoyage" />
              <h1>Nettoyage</h1>
             <h3 className="text-xs text-gray-400">Selon vos besoins</h3>
            </li>

            {/* Line between second and third */}
            <li
              className="Line absolute bg-gray-500"
              style={{
                height: "1px",
                width: "95px",
                top: "35%", // Align with the middle of the previous <li>
                left: "310px", // Adjust position relative to the previous <li>
                transform: "translateY(-50%)", // Center vertically
              }}
            ></li>

            {/* Third Item */}
            <li className="flex flex-col items-center text-center relative gap-3">
              <Image width={50} height={35} src="/images/Groupe_56.png" alt="Commande Illimitée" />
              <h1>Commande Illimitée</h1>
             <h3 className="text-xs text-gray-400">Selon vos besoins</h3>
            </li>

            {/* Line between third and fourth */}
            <li
              className="Line absolute bg-gray-500"
              style={{
                height: "1px",
                width: "95px",
                top: "35%", // Align with the middle of the previous <li>
                left: "520px", // Adjust position relative to the previous <li>
                transform: "translateY(-50%)", // Center vertically
              }}
            ></li>
            {/* Fourth Item */}
            <li className="flex flex-col items-center text-center gap-3 relative">
              <Image width={50} height={35} src="/images/Groupe_123.png" alt="Transport & Enlèvement" />
              <h1>Transport & Enlèvement</h1>
             <h3 className="text-xs text-gray-400">Selon vos besoins</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
