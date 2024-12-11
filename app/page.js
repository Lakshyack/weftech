import Footer from "@/Components/Footer";
import FullService from "@/Components/FullService";
import ItemCard from "@/Components/ItemCard";
import Navbar from "@/Components/Navbar";
import ProductGallery from "@/Components/ProductGallery";
import RelatedProducts from "@/Components/RelatedProducts";
import SignUpAndSave from "@/Components/SignUpAndSave";
import Image from "next/image";

export default function Home() {
  return (
   <div className="overflow-x-hidden">
    <Navbar/>
    <ItemCard/>
    <ProductGallery/>
    <RelatedProducts/>
    <FullService/>
    <SignUpAndSave/>
    <Footer/>
   </div>
  );
}
