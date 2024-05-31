import React from "react";
import Header from "@/components/sections/webappservices/Header";
import FastModernApps from "@/components/sections/webappservices/FastModernApps";
import WebAppNeed from "@/components/sections/webappservices/WebAppNeed";
import CoreIndustryExperience from "@/components/sections/webappservices/CoreIndustryExperience";
import CustomerInDomain from "@/components/sections/webappservices/CustomerInDomain";
import HaveAnyQuestions from "@/components/sections/webappservices/HaveAnyQuestions";
import WebAppDevServices from "@/components/sections/webappservices/WebAppDevServices";
import ClientArea from "@/components/sections/Home/ClientArea";

import QuestionMayYouHave from "@/components/sections/services/QuestionMayYouHave";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";

function WebServicesPage() {
  return (
    <>
      <Header />
      <FastModernApps />
      <WebAppNeed />
      <CoreIndustryExperience />
      <CustomerInDomain />
      <HaveAnyQuestions />
      <WebAppDevServices />
      <ClientArea />
      <QuestionMayYouHave />
      <main className="cover">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default WebServicesPage;
