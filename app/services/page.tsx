import React from "react";
import Header from "@/components/sections/services/Header";
import CustomServices from "@/components/sections/services/CustomServices";
import TechChallanges from "@/components/sections/services/TechChallanges";
import SoftwareDevLifeCycle from "@/components/sections/services/SoftwareDevLifeCycle";
import CoreIndustries from "@/components/sections/Home/CoreIndustries";

const Services = () => {
  return (
    <>
      <Header />
      <CustomServices />
      <TechChallanges />
      <SoftwareDevLifeCycle />
      <CoreIndustries />
    </>
  );
};

export default Services;
