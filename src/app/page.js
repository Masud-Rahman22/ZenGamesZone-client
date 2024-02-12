"use client"
import Banner from "@/ui/banner/Banner";
import GallerySection from "@/ui/gallery/GallerySection";

const HomePage = () => {
  return (
    <div style={{backgroundColor: "black"}}>
      <div className="h-screen">
      <Banner></Banner>
      </div>
      <GallerySection></GallerySection>
    </div>
  );
};

export default HomePage;