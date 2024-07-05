import React from "react";
import Header from "@/components/sections/company/Header";
import ProblemsWeHelp from "@/components/sections/company/ProblemsWeHelp";
import ReadyToRealize from "@/components/sections/company/ReadyToRealize";
import Vision from "@/components/sections/company/Vision";
import NearshoreTeam from "@/components/sections/company/NearshoreTeam";
import DiiferenceAboutElex from "@/components/sections/company/DiiferenceAboutElex";
import Certifications from "@/components/sections/company/Certifications";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";
import Map from "@/components/sections/company/Map";

const page = () => {
  return (
    <>
      <Header />
      <ProblemsWeHelp />
      <ReadyToRealize />
      <Vision />
      <NearshoreTeam />
      <Map />
      <DiiferenceAboutElex />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
