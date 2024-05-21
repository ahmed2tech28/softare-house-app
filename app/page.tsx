import React from "react";
import Header from "@/components/sections/pages/Header";
import Services from "@/components/sections/pages/Services";
import MapArea from "@/components/sections/pages/MapArea";
import ClientArea from "@/components/sections/pages/ClientArea";
import Acievement from "@/components/sections/pages/Acievement";
import CaseStudies from "@/components/sections/pages/CaseStudies";
import LatestInsights from "@/components/sections/pages/LatestInsights";
import Contact from "@/components/sections/pages/Contact";
import CoreIndustries from "@/components/sections/pages/CoreIndustries";
import Footer from "@/components/sections/pages/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextProvider } from "@/context/MapContext";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="cover">
        <Services />
        <ContextProvider>
          <MapArea />
        </ContextProvider>
        <ClientArea />
        <Acievement />
        <CoreIndustries />
        <CaseStudies />
        <LatestInsights />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
