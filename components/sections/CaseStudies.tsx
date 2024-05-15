"use client";
import React, { useState } from "react";

interface CaseStudy {
  projectname: string;
  percent1: string;
  percent2: string;
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

const Box: React.FC<CaseStudy> = ({ percent1, percent2, projectname }) => {
  const [blur, setBlur] = useState(false);
  return (
    <div className="w-[489px] h-[302px] bg-[#9eb6e9] rounded-2xl relative overflow-hidden cursor-pointer group">
      {blur ? (
        <img
          src="/case-studies/1.png"
          style={{ filter: "blur(5px)", transition: "all 0.3s" }}
          alt=""
        />
      ) : (
        <img src="/case-studies/1.png" alt="" />
      )}

      <div
        className="absolute top-0 z-20 h-full w-full bg-[#0000002a] hover:bg-[#00000045] flex flex-col items-start gap-y-4 justify-end p-5 transition-colors duration-300 ease-linear"
        onMouseEnter={(e) => setBlur(true)}
        onMouseLeave={(e) => setBlur(false)}
      >
        <h1 className="text-[18px] font-bold text-white">{projectname}</h1>
        <Line />
        <div className="flex h-[3rem] justify-between w-full group-hover:hidden transition-all duration-100 ease-out">
          <div className="w-[70%]">
            <img src="/devLogo.png" width={"80"} height={"30"} alt="DevLogo" />
          </div>
          <div className="right flex w-[30%] gap-x-2 items-center text-white">
            <span className="text-[25px] font-bold">{percent1}</span>
            <span className="text-[10px]">Lorem ipsum dolor sit.</span>
          </div>
        </div>
        <div className="hidden group-hover:flex h-[50%] flex-col w-full transition-all duration-100 ease-out">
          <div className="flex h-[50%] justify-between w-full gap-x-4">
            <div className="flex w-[50%] items-center text-white gap-x-2">
              <span className="text-[25px] font-bold">{percent1}</span>
              <span className="text-[10px]">Lorem ipsum dolor sit.</span>
            </div>
            <div className="flex w-[50%] items-center text-white gap-x-2">
              <span className="text-[25px] font-bold">{percent2}</span>
              <span className="text-[10px]">Lorem ipsum dolor sit.</span>
            </div>
          </div>
          <div className="flex h-[50%] w-full items-center">
            <div className="w-1/2 flex gap-x-3">
              <button className="font-bold bg-white px-3 rounded-3xl text-[12px] h-[32px] w-[106px]">
                See Design
              </button>
              <div className="w-[30%]">
                <img
                  src="/devLogo.png"
                  width={"100"}
                  height={"20"}
                  alt="DevLogo"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-end h-full items-center">
              <button className="bg-white h-[21px] w-[21px] text-[10px] rounded-md">
                →
              </button>
            </div>
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
    },
    {
      projectname:
        "Developed Customized CSR System, Improved Workflow and Reporting",
      percent1: "31%",
      percent2: "23%",
    },
    {
      projectname:
        "Developed Customized CSR System, Improved Workflow and Reporting",
      percent1: "31%",
      percent2: "23%",
    },
  ];
  return (
    <section className="w-screen h-[40rem] flex flex-col gap-y-[5rem] mt-[5rem]">
      <TopSection />
      <div className="overflow-x-auto w-full ms-[10vw]">
        <div className="flex gap-x-3 w-fit">
          {casestudies.map((item, i) => {
            return (
              <Box
                projectname={item.projectname}
                percent1={item.percent1}
                percent2={item.percent2}
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
