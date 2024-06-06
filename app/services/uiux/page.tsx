import React from "react";
import Header from "@/components/sections/uiuxservices/Header";
import DesignForMobileProducts from "@/components/sections/uiuxservices/DesignForMobileProducts";
import DesignRecongnition from "@/components/sections/uiuxservices/DesignRecongnition";
import TimeTestedUI from "@/components/sections/uiuxservices/TimeTestedUI";
import BetterProject from "@/components/sections/uiuxservices/BetterProject";
import LearnMoreInPortfolio from "@/components/sections/mobileappservicescomp/LearnMoreInPortfolio";
import Footer from "@/components/sections/Home/Footer";
import UiUxDesignProcess from "@/components/sections/uiuxservices/UiUxDesignProcess";

function page() {
  return (
    <>
      <Header />
      <DesignForMobileProducts />
      <DesignRecongnition />
      <TimeTestedUI />
      <BetterProject />
      <LearnMoreInPortfolio />
      <UiUxDesignProcess />
      <Footer />
    </>
  );
}

export default page;
