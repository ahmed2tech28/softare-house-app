import React from "react";
import Header from "@/components/sections/devops/Header";
import UnloackExperience from "@/components/sections/devops/UnloackExperience";
import ReliableDevServices from "@/components/sections/devops/ReliableDevServices";
import DevOpsValue from "@/components/sections/devops/DevOpsValue";
import OptimizeYourResource from "@/components/sections/devops/OptimizeYourResorce";
import BetterProject from "@/components/sections/devops/BetterProject";
import LearnMoreInPortfolio from "@/components/sections/mobileappservicescomp/LearnMoreInPortfolio";
import IndustryCountrybution from "@/components/sections/devops/IndustryCountrybutionAward";
import DevOpsTechnology from "@/components/sections/devops/DevOpsTechnology";
import Certifications from "@/components/sections/webappservices/Certifications";
import QuestionMayYouHave from "@/components/sections/services/QuestionMayYouHave";
import LatestInsights from "@/components/sections/Home/LatestInsights";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";
import { Metadata } from "next";

function DevOpsServicesPage() {
  return (
    <>
      <Header />
      <UnloackExperience />
      <ReliableDevServices />
      <DevOpsValue />
      <OptimizeYourResource />
      <BetterProject />
      <LearnMoreInPortfolio />
      <IndustryCountrybution />
      <DevOpsTechnology />
      <Certifications />
      <QuestionMayYouHave />
      <LatestInsights />
      <Contact />
      <Footer />
    </>
  );
}

export default DevOpsServicesPage;

export const metadata: Metadata = {
  title: "DevOps Sevices - Software House App",
  description: "Softawre House",
};
