"use client";
import { useState } from "react";
import Image from 'next/image';


export default function RelatedProducts() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, name: "Art de la table", price: "$100", image: "/path/to/image1.jpg" },
    { id: 3, name: "Art de la table", price: "$150", image: "/path/to/image2.jpg" },
    { id: 4, name: "Art de la table", price: "$150", image: "/path/to/image2.jpg" },
  
    // ... rest of the products
  ];

  return (
    <div className="container mt-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="flex justify-between font-inter items-center mr-2 mb-5">
      <h1 className="text-[20px] text-gray-800">Ces produits pourraient vous intéresser</h1>
      <h1 className="text-[10px] text-gray-700"><u>Voir toute la collection</u></h1>
    </div>

    <div className="relative ml-1 mr-1">
        <div className="flex overflow-hidden w-full gap-3 translate-x-[px]">
          {products
            .slice(currentIndex, currentIndex + 5)
            .map((product, index) => (
              <div
                key={product.id}
                className={`bg-white ${
                  index === 4 ? "w-1/3 translate-x-[px]" : "w-1/3 "
                }`}
              >
                <div className="bg-[#F9F7F5] p-4 rounded-md">
                  <div className="flex justify-between items-center">
                  <Image
                      src="/images/vector.png"
                      alt={product.name}
                      className="w-4.5 h-4"
                    />
                    <h3 className="text-xs bg-white rounded-md pl-1 pr-1">{product.name}</h3>
                 
                   
                  </div>
                 <div className="flex items-center justify-center p-5 h-60">
                 <Image
                      src="/images/CardTable.png"
                      alt={product.name}
                      className="w-40 h-40"
                    />
                 </div>
                </div>

              <div className="ml-2 mr-2 mt-2">
                  <div className="flex Playfair items-center justify-between">
                    <h1 style={{ fontSize: "24px"}}>Title</h1>
                    <h1 style={{ fontSize: "24px", position: "relative" }}>
                    0
                    <sup
                      className="text"
                      style={{
                        fontSize: "12px",
                        position: "absolute",
                        top: "15px",
                      }}
                    >
                      €
                    </sup>
                  </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-sm text-gray-500 font-poppins" >0,35€/Pièce · <span className="text-[8px]">RÉF : VABGN5</span></h1>
                    <button className="rounded-full bg-[#F1F4F6] pl-2 pr-2 p-1 mb- text-[12px]">20 pièces</button>
                  </div>
              </div>
              </div>
            ))}
        </div>

        {/* Left and Right Buttons */}
       
      </div>
    </div>
  )
}
