import React from "react";
import Header from "@/components/sections/mobileappservicescomp/Header";
import LifeCycle from "@/components/sections/mobileappservicescomp/LifeCycle";
import QuestionMayYouHave from "@/components/sections/services/QuestionMayYouHave";
import CustomMobileApp from "@/components/sections/mobileappservicescomp/CustomMobileApp";
import AppCoast from "@/components/sections/mobileappservicescomp/AppCoast";
import FeaturedMobDev from "@/components/sections/mobileappservicescomp/FeaturedMobDev";
import LearnMoreInPortfolio from "@/components/sections/mobileappservicescomp/LearnMoreInPortfolio";
import LatestInsights from "@/components/sections/Home/LatestInsights";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";
import FeaturedMobDevProjects from "@/components/sections/mobileappservicescomp/FeaturedMobDevProjects";

function MobileAppPage() {
  return (
    <>
      <Header />
      <LifeCycle />
      <CustomMobileApp />
      <AppCoast />
      <FeaturedMobDev />
      <LearnMoreInPortfolio />
      <FeaturedMobDevProjects />
      <QuestionMayYouHave />
      <main className="cover">
        <LatestInsights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default MobileAppPage;
