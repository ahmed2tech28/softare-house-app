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
  ResultObtained,
} from "./AboutProjecttems";

import TechnologyStack from "./TechnologyStack";

interface Props {
  about?: string;
  challanges?: string[];
}

const AboutProject: React.FC<Props> = ({ about, challanges }) => {
  return (
    <>
      <main className="w-full h-fit bg-[#F9F9F9] rounded-2xl overflow-hidden">
        <div className="w-[80%] mx-auto py-[4rem] flex flex-col gap-y-[2rem]">
          <AboutProjecttems about={about} />
          <ProjectIdea />
          <ProjectChallanges challanges={challanges} />
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
