import React from "react";
import Link from "next/link";
import Image from 'next/image';


export default function ItemCard() {
  return (
    <div className="container mt-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="flex font-poppins gap-2 items-center mt-5 mb-5 ml-2">
        <label className="text-xs">Home</label>
        <div className="rounded-full h-2 w-2 bg-gray-400"></div>
        <label className="text-xs">Art de la table</label>
      </div>

      <div className="ItemCrd-LeftSec flex justify-between gap-3">
        <div className="flex Product-Thumbnails justify-between bg-[#F8F6F4] rounded-lg pr-12">
          <div className="Item-Previews mt-3 ml-5 mr-0 flex flex-col gap-1">
            <div style={{ minHeight: "35px", minWidth: "35px" }} className="p-1 bg-white rounded-lg">
              {" "}
              <Image
                className="bg-[#F8F6F4] rounded-lg"
                style={{ minWidth: "35px" }}
                src="/images/Table165cm.png"
                alt="Table Image"
                width={20} height={9}
              />
            </div>
            <Image
              className="bg-[#F8F6F4] rounded-lg"
              style={{ height: "45px", minWidth: "45px" }}
              src="/images/Table165fade.png"
              alt="Table Image"
              width={20} height={10}
            />
            <Image
              className="bg-[#F8F6F4] rounded-lg"
              style={{ height: "45px", minWidth: "45px" }}
              src="/images/Table165fade.png"
              alt="Table Image"
              width={20} height={10}
            />
            <Image
              className="bg-[#F8F6F4] rounded-lg"
              style={{ height: "45px", minWidth: "45px" }}
              src="/images/Table165fade.png"
              alt="Table Image"
              width={20} height={10}
            />
          </div>
          <Image
            className="bg-[#F8F6F4] flex items-center justify-center p-8 rounded-lg"
            src="/images/CheeseMachine.png"
            alt="Cheese Machine"
            style={{ height: "550px", minWidth: "520px" }}
            width={200} height={100}
          />
        </div>

        <div className=" flex-1 ItemCardRightSec flex flex-col justify-between">
          <div className="">
            <div className="flex flex-1 justify-between Playfair mr-10">
              <h1 style={{ fontSize: "28px" }}>
                Cheese - appareil à raclette <span className="text-xl">1</span>/
                <span className="text-xl">2</span> roue
              </h1>
              <Image
                className=" mt-3"
                style={{ width: "27px", height: "25px" }}
                src="/images/Vector.png"
                alt="L"
                width={200} height={100}
              />
            </div>

            <div className="flex price mt-1 mb-1">
              <h1 className="" style={{ fontSize: "25px" }}>
                39,50€
              </h1>
              <span
                className="mt-2 ml-2 font-poppins text-gray-500"
                style={{ fontSize: "15px" }}
              >
                /piece
              </span>
            </div>
            <hr className="" />

            <div className="flex justify-between font-poppins mt-3 mb-3">
              <div className="flex gap-5">
                <div className="flex gap-2 items-center ">
                  <Image
                    className=""
                    style={{ width: "27px", height: "25px" }}
                    src="/images/scaleImg.png"
                    alt="L"
                    width={200} height={100}
                  />
                  <h1 style={{ fontSize: "20px", position: "relative" }}>
                    20
                    <sup
                      className="text-xs"
                      style={{
                        fontSize: "8px",
                        position: "absolute",
                        top: "2px",
                      }}
                    >
                      cm
                    </sup>
                  </h1>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    className=""
                    style={{ width: "27px", height: "25px" }}
                    src="/images/lineOnCircle.png"
                    alt="L"
                    width={200} height={100}
                  />
                  <h1 style={{ fontSize: "20px", position: "relative" }}>
                    50
                    <sup
                      className="text-xs"
                      style={{
                        position: "absolute",
                        top: "2px",
                        fontSize: "8px",
                      }}
                    >
                      cm
                    </sup>
                  </h1>
                </div>
              </div>
              <div>
                {" "}
                <span className="text-gray-400 text-xs">REF:VABGN5</span>
              </div>
            </div>
            <hr className="" />

            <div className="mt-3 font-poppins text-gray-500 text-xs">
              <p>
                {" "}
                Location appareil à raclette - Raclette traditionnelle 1/2 roue{" "}
                <br />
                Réglable en hauteur <br />
                Appareil à raclette professionnel <br />
                Boîtier de chauffe horizontal réglable en hauteur
              </p>
              <p className="mt-5">
                220V <br />
                900W
              </p>
            </div>
          </div>

          <div className=" font-poppins">
            <hr className="" />

            <div className="flex mt-5 gap-1">
              <button
                type="button"
                className="relative p-2 gap-8 flex items-center justify-center h-11 rounded-lg bg-white border border-gray-400 text-black focus:outline-gray focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <Link href="/about" className="mb-4">
                  <span className=" ml-2">_</span>
                </Link>{" "}
                {/* Left margin */}
                <span>1</span>
                <Link href="/about" className="mr-3">
                  +
                </Link>{" "}
                {/* Right margin */}
              </button>

              <button
                type="button"
                className="relative p-2 w-full flex flex-1 items-center justify-center h-11 rounded-lg bg-[#5CD2DD] text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
              >
                <span className="p-2 uppercase text-sm ">
                  Ajouter au panier
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="information-section" className="font-poppins mt-5" style={{height:"200px"}}>
      <div className="flex gap-10">
        <div className="Desc ml-1"  style={{ height: "", width: "620px" }}>
          <h1 className="Desc text-lg font-inter">Description produit</h1>
          <p className="text-xs font-inter">Festi vous propose à la location un/une &quot;Jewel – grand couteau/10pc&quot; pour votre évenement et ce dès 0,35€ /pièce (HTVA). Que ce soit pour votre mariage, une fête d&quot;anniversaire ou du personnel, ce produit a fait l&quot;objet d&quot;une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d&quot;autre produit à louer de ce type dans la catégorie &quot;Art de la Table&quot;.</p>
        </div>
        <div className="flex-1 mt-2 font-inter">
    
          <div className="flex bg-[#F8F6F4] justify-between  h-11 rounded-t-md">
            <span className="p-3">Livraisons</span>
            <span className="p-3 text-xl">+</span>
            </div> 
          <div className="flex bg-[#F8F6F4] justify-between h-12 rounded-b-md">
            <span className="p-3">Questions</span>
            <span className="p-3 text-xl">+</span>
            
            </div> 

    
          </div>
      </div>
      </div>
    </div>
  );
}
