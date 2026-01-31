import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Program from "@/components/Program";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <Program />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
    
    </main>
  );
};

export default Home;
