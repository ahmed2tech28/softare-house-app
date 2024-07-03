"use client";
import React from "react";
import Header from "@/components/sections/casestudiesdetail/Header";
import IntroAboutProject from "@/components/sections/casestudiesdetail/IntroAboutProject";
import AboutProject from "@/components/sections/casestudiesdetail/AboutProject";
import ClientArea from "@/components/sections/Home/ClientArea";
import Contact from "@/components/sections/Home/Contact";
import Footer from "@/components/sections/Home/Footer";
import { useParams } from "next/navigation";
import casestudies from "@/data/casestudies";

const CaseStudiesDetail = () => {
  const params = useParams<{ slug: string }>();
  const currentCaseStudy = casestudies.find(
    (caseStudy) => caseStudy.slug === params.slug
  );
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col gap-y-[4rem]">
        <IntroAboutProject
          title={currentCaseStudy?.title}
          desc={currentCaseStudy?.desc}
          country={currentCaseStudy?.country}
          industry={currentCaseStudy?.industry}
          startedIn={currentCaseStudy?.startedIn}
          team={currentCaseStudy?.team}
          img={currentCaseStudy?.img}
        />
        <AboutProject
          about={currentCaseStudy?.about}
          challanges={currentCaseStudy?.projectChallanges}
        />
      </main>
      <main className="cover">
        <ClientArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesDetail;
