import React from "react";
import BoxTextBg from "./BoxTextBg";

const ExpertInsightsPosts: React.FC = () => {
  const whiteBg = () => (
    <svg
      width="307"
      height="292"
      viewBox="0 0 307 292"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M307 0H0V277H19.0355L29.5 292L39.9645 277H307V0Z"
        fill="white"
      />
    </svg>
  );

  return (
    <section className="w-fit h-fit mx-auto">
      <div className="w-fit mx-auto md:pt-[2rem] py-[2rem] flex md:flex-row flex-col h-fit">
        <div className="relative w-fit">
          <BoxTextBg
            Component={whiteBg}
            hiding="Expert Insights on Generative AI: Future Trends"
            description="Whitepaper How to Get Legacy Software Modernisation Right…"
            color="black"
            tooltip="R&D"
            className="px-[1rem]"
          />
        </div>
        <div className="w-[370px]">
          <img src="/latestblog/Ai.jpeg" alt="bookcover" />
        </div>
      </div>
      <div className="w-fit mx-auto md:pt-[2rem] py-[2rem] flex md:flex-row flex-col h-fit">
        <div className="relative w-fit">
          <BoxTextBg
            Component={whiteBg}
            hiding="Test Automation: Driving Innovation in Software Testing"
            description="Discover how AI test automation is redefining the landscape of…"
            color="black"
            tooltip="R&D"
            className="px-[1rem]"
          />
        </div>
        <div className="w-[370px]">
          <img src="/latestblog/bookcover.png" alt="bookcover" />
        </div>
      </div>
    </section>
  );
};

export default ExpertInsightsPosts;
