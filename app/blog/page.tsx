import React from "react";
import Header from "@/components/sections/blog/Header";
import BlogArea from "@/components/sections/blog/BlogArea";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BlogArea />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
