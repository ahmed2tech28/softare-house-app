import React from "react";
import {
  AboutProjecttems,
  ProjectIdea,
  ProjectChallanges,
  Results,
  BusinessChallanges,
  ProjectInDetails,
  BusinessArchitecture,
  ProductEssentials,
  DevelopmentDetail,
  TechnologyStack,
  ResultObtained,
} from "./AboutProjecttems";

const AboutProject: React.FC = () => {
  return (
    <>
      <main className="w-full h-fit bg-[#F9F9F9] rounded-2xl overflow-hidden">
        <div className="w-[80%] mx-auto py-[4rem] flex flex-col gap-y-[2rem]">
          <AboutProjecttems />
          <ProjectIdea />
          <ProjectChallanges />
          <Results />
        </div>
      </main>
      <main className="w-full h-fit flex flex-col gap-y-5">
        <BusinessChallanges />
      </main>
      <main className="w-full h-fit flex flex-col gap-y-5">
        <ProjectInDetails />
        <BusinessArchitecture />
      </main>
      <main className="w-full h-fit flex flex-col gap-y-5">
        <ProductEssentials />
      </main>
      <main className="w-full h-fit flex flex-col gap-y-5">
        <DevelopmentDetail />
      </main>
      <main className="w-full h-fit flex flex-col gap-y-5">
        <TechnologyStack />
      </main>
      <main className="w-full h-fit flex flex-col gap-y-5">
        <ResultObtained />
      </main>
    </>
  );
};

export default AboutProject;
