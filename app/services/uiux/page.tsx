import React from "react";
import Header from "@/components/sections/uiuxservices/Header";
import DesignForMobileProducts from "@/components/sections/uiuxservices/DesignForMobileProducts";
import DesignRecongnition from "@/components/sections/uiuxservices/DesignRecongnition";
import TimeTestedUI from "@/components/sections/uiuxservices/TimeTestedUI";
import BetterProject from "@/components/sections/uiuxservices/BetterProject";
import LearnMoreInPortfolio from "@/components/sections/mobileappservicescomp/LearnMoreInPortfolio";
import UiUxDesignProcess from "@/components/sections/uiuxservices/UiUxDesignProcess";
import ExpertiesInSoftware from "@/components/sections/uiuxservices/ExpertiesInSoftware";
import UxDesignStandOut from "@/components/sections/uiuxservices/UxDesignStandOut";
import QuestionMayYouHave from "@/components/sections/services/QuestionMayYouHave";
import LatestInsights from "@/components/sections/Home/LatestInsights";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";

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
      <UxDesignStandOut />
      <ExpertiesInSoftware />
      <QuestionMayYouHave />
      <LatestInsights />
      <Contact />
      <Footer />
    </>
  );
}

export default page;
