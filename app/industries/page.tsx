import React from "react";
import Header from "@/components/sections/industries/Header";
import CoreIndustries from "@/components/sections/Home/CoreIndustries";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";

const page = () => {
  return (
    <>
      <Header />
      <CoreIndustries />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
