import React from "react";

import BoxTextBg from "./BoxTextBg";

const FourBlogsInOneLine = () => {
  const WhiteBg: React.FC = () => {
    return (
      <svg
        // width="334"
        className="xl:w-[334px] w-[320px]"
        height="306"
        viewBox="0 0 334 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M333.999 0H21.918V53.0399L0 68.4473L21.918 83.8548V306H333.999V0Z"
          fill="white"
        />
      </svg>
    );
  };

  return (
    <div className="w-full h-[306px] flex">
      <div className="h-full w-1/4">
        <img
          src="/latestblog/Ai.jpeg"
          alt="AI Image"
          className="w-[330px] h-full object-cover"
        />
      </div>
      <div className="relative left-[-2rem] w-1/4">
        <BoxTextBg
          Component={WhiteBg}
          className="ps-[2rem] pe-[1rem]"
          description="Dive into the world of generative AI with ELEKS' expert analysis,…"
          hiding="Expert Insights on Generative AI: Future Trends"
          tooltip="R&D"
          color="black"
        />
      </div>
      <div className="h-full w-1/4">
        <img
          src="/latestblog/person-on-computer.png"
          alt="AI Image"
          className="w-[330px] h-full object-cover"
        />
      </div>
      <div className="relative left-[-2rem] w-1/4">
        <BoxTextBg
          Component={WhiteBg}
          className="ps-[2rem] pe-[1rem]"
          description="Discover how AI test automation is redefining the landscape of…"
          hiding="Test Automation: Driving Innovation in Software Testing"
          tooltip="R&D"
          color="black"
        />
      </div>
    </div>
  );
};

export default FourBlogsInOneLine;
