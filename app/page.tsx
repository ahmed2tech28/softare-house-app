import React from "react";
import Header from "@/components/sections/Header";
import Services from "@/components/sections/Services";
import MapArea from "@/components/sections/MapArea";
import ClientArea from "@/components/sections/ClientArea";
import Acievement from "@/components/sections/Acievement";
import CaseStudies from "@/components/sections/CaseStudies";
import LatestInsights from "@/components/sections/LatestInsights";
import Contact from "@/components/sections/Contact";
import CoreIndustries from "@/components/sections/CoreIndustries";
import Footer from "@/components/sections/Footer";
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
