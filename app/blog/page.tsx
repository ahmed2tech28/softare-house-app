import React from "react";
import Header from "@/components/sections/blog/desktopComps/Header";
// import BlogArea from "@/components/sections/blog/BlogArea";
// import BlogAreaMob from "@/components/sections/blog/BlogAreaMob";
import RenderOnWidthBase from "@/components/sections/blog/RenderOnWidthBase";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";

const page = () => {
  return (
    <>
      <Header />
      <RenderOnWidthBase />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
