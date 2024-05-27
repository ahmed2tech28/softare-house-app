import React from "react";
import BreadCrumbComp from "@/components/common/BreadCrumbComp";

interface Path {
  label: string;
  path: string;
}

const IntroAboutProject: React.FC = () => {
  const path: Path[] = [
    { label: "Home", path: "/" },
    { label: "Case Studies", path: "/casestudies" },
    { label: "Detail", path: "/casestudies/detail" },
  ];
  return (
    <div className="h-[37rem] w-full border rounded-[3rem] overflow-hidden flex flex-col relative justify-center items-center">
      <img src="/case-studies-page/1.png" alt="bg-image" />
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-[#00000092] p-10 flex flex-col justify-between items-start">
        <BreadCrumbComp path={path} color="white" />
        <div>
          <h1 className="lg:text-[4.5rem] md:text-[3rem] sm:text-[2.5rem] mb:text-[2rem] text-[1.2rem] leading-tight text-white font-semibold">
            Developed Customized CSR System, Improved Workflow and Reporting
          </h1>
          <p className="text-white lg:text-2xl mb:text-xl text-base">
            Get rich web experience related to web application development, SaaS
            application development, single page application development
            services and more.
          </p>
        </div>
        <div className="flex w-fit h-fit text-white text-xl flex-wrap gap-x-8 gap-y-3">
          <div className="w-[10rem] h-[4rem] flex flex-col p-3">
            <span className="font-semibold uppercase">Industry</span>
            <span>Fintech</span>
          </div>
          <div className="w-[10rem] h-[4rem] flex flex-col p-3">
            <span className="font-semibold uppercase">Team</span>
            <span>8 members</span>
          </div>
          <div className="w-[10rem] h-[4rem] flex flex-col p-3">
            <span className="font-semibold uppercase">Started In</span>
            <span>2023</span>
          </div>
          <div className="w-[10rem] h-[4rem] flex flex-col p-3">
            <span className="font-semibold uppercase">Country</span>
            <span>Saudi Arabia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAboutProject;
