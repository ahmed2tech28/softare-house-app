"use client";
import React, { useState } from "react";
import {
  AngularSvg,
  DotNetSvg,
  JavaSvg,
  NodeJsSvg,
  PythonSvg,
  ReactSvg,
  TypeScriptSvg,
  RubySvg,
  VueJsSvg,
} from "./AboutProjecttemsSvgs";

const TechnologyStack: React.FC = () => {
  const [sideBarItemSelected, setSideBarItemSelected] = useState(
    "Web App Development"
  );
  const sideBarItems: string[] = [
    "Web App Development",
    "Mobile App Development",
    "IOS Development",
    "Android Development",
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="lg:h-[138px] h-fit lg:w-[50%] w-full">
        <h1 className="text-[30px] font-semibold">Technology Stack</h1>
        <p>
          We&apos;ve successfully developed a TVOD streaming service with
          cross-platform capabilities that allows our customer to cater to a
          large audience and achieve goals set
        </p>
      </div>
      <div className="tech-box bg-[#F9F9F9] lg:h-[449px] h-fit rounded-2xl flex p-5 items-center">
        <div className="flex lg:flex-row flex-col w-full xl:justify-center justify-between gap-y-5">
          <div className="left xl:w-[368px] lg:w-[312px] w-full lg:h-[409px] h-[150px] bg-[#FFFFFF] rounded-2xl p-5 flex flex-col justify-between">
            <h3 className="text-[30px] font-semibold">Technologies</h3>
            <div className="h-[288px] md:w-full w-full lg:mx-auto mx-0 flex lg:flex-col flex-row justify-between overflow-x-auto">
              {sideBarItems.map((item, i) => (
                <button
                  key={i}
                  className={`inline-flex justify-start items-center h-[48px] md:w-full w-auto ${
                    item == sideBarItemSelected ? "bg-[#0C8CE9] text-white" : ""
                  } hover:bg-[#0C8CE9] transition-all duration-75 hover:text-white px-4 rounded-full`}
                  onClick={(e) => setSideBarItemSelected(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="right lg:w-[calc(100%-368px)] w-full flex justify-center items-center">
            {sideBarItemSelected == "Web App Development" && (
              <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-wrap gap-x-[3rem]">
                <NodeJsSvg />
                <TypeScriptSvg />
                <JavaSvg />
                <ReactSvg />
                <AngularSvg />
                <DotNetSvg />
                <PythonSvg />
                <RubySvg />
                <VueJsSvg />
              </div>
            )}
            {sideBarItemSelected == "Mobile App Development" && (
              <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-wrap gap-x-[3rem]">
                <ReactSvg />
                <NodeJsSvg />
                <TypeScriptSvg />
                <DotNetSvg />
                <RubySvg />
                <AngularSvg />
                <VueJsSvg />
                <JavaSvg />
                <PythonSvg />
              </div>
            )}
            {sideBarItemSelected == "IOS Development" && (
              <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-wrap gap-x-[3rem]">
                <RubySvg />
                <NodeJsSvg />
                <TypeScriptSvg />
                <DotNetSvg />
                <AngularSvg />
                <ReactSvg />
                <VueJsSvg />
                <JavaSvg />
                <PythonSvg />
              </div>
            )}
            {sideBarItemSelected == "Android Development" && (
              <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-wrap gap-x-[3rem]">
                <NodeJsSvg />
                <TypeScriptSvg />
                <AngularSvg />
                <ReactSvg />
                <RubySvg />
                <VueJsSvg />
                <JavaSvg />
                <DotNetSvg />
                <PythonSvg />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
