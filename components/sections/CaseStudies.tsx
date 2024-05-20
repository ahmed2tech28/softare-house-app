"use client";
import React, { useState } from "react";

interface CaseStudy {
  projectname: string;
  percent1: string;
  percent2: string;
  img: string;
}

const TopSection: React.FC = () => {
  return (
    <div className="items-center flex justify-between container mx-auto">
      <h1 className="w-1/3 md:block hidden"></h1>
      <h1 className="md:w-1/3 w-2/3 text-center text-4xl font-semibold">
        Case studies
      </h1>
      <div className="w-1/3 flex justify-end gap-x-2">
        <button className="p-2 bg-[#F7F7F7] text-[#423ED6] rounded-md">
          ←
        </button>
        <button className="p-2 bg-[#F7F7F7] text-[#423ED6] rounded-md">
          →
        </button>
      </div>
    </div>
  );
};

const Line: React.FC = () => {
  return <div className="border-0 outline-none h-[0.1rem] bg-white w-full" />;
};

const Box: React.FC<CaseStudy> = ({ percent1, percent2, projectname, img }) => {
  return (
    <div className="w-[389px] h-[422px] flex flex-col gap-y-2 bg-[#F9F9F9] rounded-lg overflow-hidden">
      <img src={img} alt="img" width={"100%"} height={"276px"} />
      <div className="w-full h-[250px] px-4 py-4 flex flex-col justify-between">
        <h1>{projectname}</h1>
        <svg
          width="349"
          height="1"
          viewBox="0 0 349 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.25"
            y1="0.75"
            x2="348.75"
            y2="0.750031"
            stroke="#CBD1DC"
            stroke-width="0.5"
            stroke-linecap="round"
          />
        </svg>
        <div className="h-[30px] flex justify-between items-center">
          <div className="invert w-[50%]">
            <img src="/devLogo.png" width={"49px"} alt="logo" />
          </div>
          <div className="flex w-[50%] justify-end items-center">
            <span className="text-black text-[25px] font-bold">{percent1}</span>
            <span className="">
              Lorem <br /> ipsum dolor sit.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const casestudies: CaseStudy[] = [
    {
      projectname:
        "Developed Customized CSR System, Improved Workflow and Reporting",
      percent1: "31%",
      percent2: "23%",
      img: "/case-studies/1.png",
    },
    {
      projectname:
        "Developed Customized CSR System, Improved Workflow and Reporting",
      percent1: "31%",
      percent2: "23%",
      img: "/case-studies/2.png",
    },
    {
      projectname:
        "Developed Customized CSR System, Improved Workflow and Reporting",
      percent1: "31%",
      percent2: "23%",
      img: "/case-studies/3.png",
    },
    {
      projectname:
        "Developed Customized CSR System, Improved Workflow and Reporting",
      percent1: "31%",
      percent2: "23%",
      img: "/case-studies/4.png",
    },
  ];
  return (
    <section className="w-[90vw] h-[40rem] flex flex-col gap-y-[5rem] mt-[5rem]">
      <TopSection />
      <div className="overflow-x-auto w-full ms-[10vw]">
        <div className="flex gap-x-3 w-fit">
          {casestudies.map((item, i) => {
            return (
              <Box
                projectname={item.projectname}
                percent1={item.percent1}
                percent2={item.percent2}
                img={item.img}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
