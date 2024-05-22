import React, { useEffect, useRef, useState } from "react";
import ButtonComp from "../../common/ButtonComp";
import BlogCard from "../../common/BlogCard";
import LatestInsightCrowsel from "@/components/common/LatestInsightCrowsel";

const Top: React.FC = () => {
  return (
    <div className="items-center flex justify-between container mx-auto">
      <div className="w-1/3 lg:block hidden" />
      <h1 className="lg:w-1/3 w-2/3 text-center sm:text-[38px] text-[28px] font-semibold">
        Latest insights
      </h1>
      <div className="w-1/3 flex justify-end gap-x-2">
        <button className="text-[#423ED6] bg-[#F7F7F7] py-3 rounded-full w-[165.03px]">
          {"Read more →"}
        </button>
      </div>
    </div>
  );
};

const LatestInsights: React.FC = () => {
  return (
    <section
      className="w-full 2xl:h-[50rem] h-fit flex flex-col gap-y-14"
      id="blog"
    >
      <Top />
      <LatestInsightCrowsel />
    </section>
  );
};

export default LatestInsights;
