import React from "react";
import Header from "@/components/sections/casestudies/Header";
import DropDown from "@/components/common/DropDown";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";
import CaseStudiesComp from "@/components/sections/casestudies/CaseStudies";
import { Metadata } from "next";

const Top: React.FC = () => {
  return (
    <div className="top mt-8">
      <h1 className="text-center text-[40px] font-semibold">Case Studies</h1>
      <p className="text-center f-mon">
        See how Devhouse has helped its clients achieve their vision of digital
        innovation.
      </p>
    </div>
  );
};

const Filters: React.FC = () => {
  return (
    <div className="filters flex h-[62px] w-full gap-x-2 bg-[#F9F9F9] mt-10 mb-7">
      <DropDown className="w-1/3" options={["Insurance"]} />
      <DropDown className="w-1/3" options={["Insurance"]} />
      <DropDown className="w-1/3" options={["Insurance"]} />
    </div>
  );
};

export default function CaseStudies() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Top />
        <Filters />
        <CaseStudiesComp />
      </main>
      <main className="cover">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "CaseStudies - Software House App",
  description: "Softawre House",
};
