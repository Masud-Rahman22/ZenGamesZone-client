"use client"
import 'tailwindcss/tailwind.css'
import ShowCase from "@/ui/ShowCase/ShowCase";
import AboutUs from "@/ui/about/AboutUs";
import Banner from "@/ui/banner/Banner";
import CountSection from "@/ui/countUp/CountSection";
import GallerySection from "@/ui/gallery/GallerySection";
import FAQ from '@/ui/faq/FAQ';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="h-screen">
        <Banner></Banner>
      </div>
      <GallerySection></GallerySection>
      <ShowCase></ShowCase>
      <AboutUs></AboutUs>
      <CountSection></CountSection>
      <FAQ></FAQ>
    </div>
  );
};

export default HomePage;