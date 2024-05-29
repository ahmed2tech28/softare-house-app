import React from "react";
import Header from "@/components/sections/services/Header";
import CustomServices from "@/components/sections/services/CustomServices";
import TechChallanges from "@/components/sections/services/TechChallanges";
import SoftwareDevLifeCycle from "@/components/sections/services/SoftwareDevLifeCycle";
import CoreIndustries from "@/components/sections/Home/CoreIndustries";
import Footer from "@/components/sections/Home/Footer";
import Contact from "@/components/sections/Home/Contact";
import FeauredPartner from "@/components/sections/services/FeauredPartner";
import Experties from "@/components/sections/services/Experties";

const Services = () => {
  return (
    <>
      <Header />
      <CustomServices />
      <TechChallanges />
      <SoftwareDevLifeCycle />
      <FeauredPartner />
      <CoreIndustries />
      <Experties />
      <main className="cover">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Services;
