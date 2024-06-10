import React from "react";
import Top from "./common/TopHiding";

interface types {
  name: string;
  description: string;
}

const appsdevelop: types[] = [
  {
    name: "Mobile",
    description:
      "Mobile testing refers to native and cross-platform mobile applications. QA engineers test User Interface, code logic, and compatibility with various devices",
  },
  {
    name: "Web",
    description:
      "This type of testing covers web applications and other web-related solutions. QA engineers check User Interface, compatibility with various browsers and screen resolutions.",
  },
  {
    name: "Backend",
    description:
      "QA engineers perform backend testing to check a backend or database. Backend testing also implies examining if business logic and third-party services work correctly.",
  },
];

const Ball: React.FC = () => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="11" height="8" rx="4" fill="#0C8CE9" />
    </svg>
  );
};

const WhatToDoWeTest = () => {
  return (
    <div className="w-screen py-[2rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <Top description="" hiding="What do we test?" />
        <div className="flex lg:flex-row flex-col h-fit w-ful justify-between">
          {appsdevelop.map((item, i) => {
            return (
              <div
                key={i}
                className="lg:w-[354.71px] w-full lg:h-[300px] lg:py-0 py-[1rem] h-fit flex flex-col gap-y-[0.2rem]"
              >
                {/* <div className="flex items-end"> */}
                <h1 className="text-[30px] font-semibold inline-flex items-end gap-x-2">
                  <span className="py-4">
                    <Ball />
                  </span>
                  {item.name}
                </h1>
                {/* </div> */}
                <p className="text-[16px] text-[#969FAF] leading-[30.4px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatToDoWeTest;
