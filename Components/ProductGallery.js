"use client";
import { useState,useEffect } from "react";
import Image from 'next/image';


export default function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Art de la table",
      price: "$100",
      image: "/path/to/image1.jpg",
    },
    {
      id: 3,
      name: "Art de la table",
      price: "$150",
      image: "/path/to/image2.jpg",
    },
    {
      id: 4,
      name: "Art de la table",
      price: "$150",
      image: "/path/to/image2.jpg",
    },
    {
      id: 5,
      name: "Art de la table",
      price: "$150",
      image: "/path/to/image2.jpg",
    },
    {
      id: 6,
      name: "Art de la table",
      price: "$150",
      image: "/path/to/image2.jpg",
    },
    {
      id: 2,
      name: "Art de la table",
      price: "$150",
      image: "/path/to/image2.jpg",
    },
    {
      id: 8,
      name: "Art de la table",
      price: "$150",
      image: "/path/to/image2.jpg",
    },
    // ... rest of the products
  ];

  // Track width of a specific element every second
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

  const nextSlide = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="font-inter items-center mb-5">
        <h1 className="text-[20px] text-gray-700">Articles similaires</h1>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden w-full gap-3 translate-x-[px]">
          {products
            .slice(currentIndex, currentIndex + (width <= 970 ? 5 : 4))

            .map((product, index) => (
              <div
                key={product.id}
                className={`bg-white ${
                  index === 4 ? "w-1/4 translate-x-[px]" : "w-1/4 "
                }`}
              >
                <div className="bg-[#F9F7F5] p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <Image
                      src="/images/vector.png"
                      alt={product.name}
                      className="w-4.5 h-4"
                    />
                    <h3 className="text-xs bg-white rounded-md pl-1 pr-1">
                      {product.name}
                    </h3>
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
                    <h1 style={{ fontSize: "24px" }}>Title</h1>
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
                    <h1 className="text-sm text-gray-500 font-poppins">
                      0,35€/Pièce ·{" "}
                      <span className="text-[8px]">RÉF : VABGN5</span>
                    </h1>
                    <button className="rounded-full bg-[#F1F4F6] pl-2 pr-2 p-1 mb- text-[12px]">
                      20 pièces
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Left and Right Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/3 mt-3 transform -translate-y-1/2 translate-x-[-13px] z-10 bg-[#5CD2DD]  text-white font-bold py-2 px-2 "
        >
          <Image src="/images/arrow-left.png" alt="L" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/3 mt-3 transform -translate-y-1/2 translate-x-3 z-10 bg-[#5CD2DD]  text-white font-bold py-2 px-2"
        >
          <Image src="/images/arrow-right.png" alt="L" />
        </button>
      </div>
    </div>
  );
}
