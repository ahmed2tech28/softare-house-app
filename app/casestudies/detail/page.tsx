import React from "react";
import Header from "@/components/sections/casestudiesdetail/Header";
import IntroAboutProject from "@/components/sections/casestudiesdetail/IntroAboutProject";
import AboutProject from "@/components/sections/casestudiesdetail/AboutProject";
import ClientArea from "@/components/sections/Home/ClientArea";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";
import { Metadata } from "next";

const CaseStudiesDetail = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col gap-y-[4rem]">
        <IntroAboutProject />
        <AboutProject />
      </main>
      <main className="cover">
        <ClientArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesDetail;

export const metadata: Metadata = {
  title: "CaseStudies Detail - Software House App",
  description: "Softawre House",
};
