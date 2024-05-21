import React from "react";
import Header from "@/components/sections/Home/Header";
import Services from "@/components/sections/Home/Services";
import MapArea from "@/components/sections/Home/MapArea";
import ClientArea from "@/components/sections/Home/ClientArea";
import Acievement from "@/components/sections/Home/Acievement";
import CaseStudies from "@/components/sections/Home/CaseStudies";
import LatestInsights from "@/components/sections/Home/LatestInsights";
import Contact from "@/components/sections/Home/Contact";
import CoreIndustries from "@/components/sections/Home/CoreIndustries";
import Footer from "@/components/sections/Home/Footer";
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
