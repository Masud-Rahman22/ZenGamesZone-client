"use client"
import Banner from "@/ui/banner/Banner";
import CountSection from "@/ui/countUp/CountSection";
import GallerySection from "@/ui/gallery/GallerySection";

const HomePage = () => {
  return (
    <div style={{backgroundColor: "black"}}>
      <div className="h-screen">
      <Banner></Banner>
      </div>
      <GallerySection></GallerySection>
      <div style={{height: "400px"}}>
        <CountSection></CountSection>
      </div>
    </div>
  );
};

export default HomePage;