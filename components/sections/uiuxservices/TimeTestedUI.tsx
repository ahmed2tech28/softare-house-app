import React from "react";
import Top from "./common/TopHiding";

const TimeTestedUI: React.FC = () => {
  return (
    <div className="w-screen py-[4rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <Top
          hiding="Our time-tested UI/UX approach"
          description="User experience and user interface are inseparable and form an overall impression of your product"
        />
        <img src="/uiux.svg" alt="UIUX IMAGES" />
      </div>
    </div>
  );
};

export default TimeTestedUI;
