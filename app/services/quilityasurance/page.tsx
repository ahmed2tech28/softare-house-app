import React from "react";
import Header from "@/components/sections/qualityassurance/Header";
import HightQualityTest from "@/components/sections/qualityassurance/HIghtQualityTest";
import WhatToDoWeTest from "@/components/sections/qualityassurance/WhatToDoWeTest";
import TypeOfSoftware from "@/components/sections/qualityassurance/TypeOfSoftware";
import SoftwareTestingProcess from "@/components/sections/qualityassurance/SoftwareTestingProcess";
import AutomationTesting from "@/components/sections/qualityassurance/AutomationTesting";
import QuestionMayYouHave from "@/components/sections/services/QuestionMayYouHave";
import LatestInsights from "@/components/sections/Home/LatestInsights";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";

function QAServicesPage() {
  return (
    <>
      <Header />
      <HightQualityTest />
      <WhatToDoWeTest />
      <TypeOfSoftware />
      <SoftwareTestingProcess />
      <AutomationTesting />
      <QuestionMayYouHave />
      <LatestInsights />
      <Contact />
      <Footer />
    </>
  );
}

export default QAServicesPage;
