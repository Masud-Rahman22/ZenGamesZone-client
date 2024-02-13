"use client"
import ShowCase from "@/ui/ShowCase/ShowCase";
import AboutUs from "@/ui/about/AboutUs";
import Banner from "@/ui/banner/Banner";
import CountSection from "@/ui/countUp/CountSection";
import GallerySection from "@/ui/gallery/GallerySection";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="h-screen">
        <Banner></Banner>
      </div>
      <GallerySection></GallerySection>
      <CountSection></CountSection>
      <AboutUs></AboutUs>
      <ShowCase></ShowCase>
    </div>
  );
};

export default HomePage;