import React from "react";
import Navbar from "@/components/ows/Navbar";
import HeroSection from "@/components/ows/HeroSection";
import AboutSection from "@/components/ows/AboutSection";
import ProductsSection from "@/components/ows/ProductsSection";
import GlobalSection from "@/components/ows/GlobalSection";
import Footer from "@/components/ows/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GlobalSection />
      <Footer />
    </div>
  );
}