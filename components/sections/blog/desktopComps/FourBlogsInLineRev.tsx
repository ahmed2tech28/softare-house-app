import React from "react";

import BoxTextBg from "./BoxTextBg";

const FourBlogsLineRev = () => {
  const WhiteBg: React.FC = () => {
    return <div className="w-full h-full bg-white"></div>;
  };

  return (
    <div className="w-full h-[306px] flex">
      <div className="relative w-[23.5%]">
        <BoxTextBg
          Component={WhiteBg}
          className="ps-[2rem] pe-[1rem]"
          description="Explore the dynamic landscape of MLOps vs DevOps, ...."
          hiding="Breaking it Down: MLOps vs DevOps"
          tooltip="ARTICLE"
          color="black"
        />
      </div>
      <div className="h-full w-[27.5%]">
        <img
          src="/latestblog/construction-side.jpeg"
          alt="AI Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-[23.8%]">
        <BoxTextBg
          Component={WhiteBg}
          className="ps-[2rem] pe-[1rem]"
          description="Explore the transformative impact of AI in supply chain management…"
          hiding="AI in Supply Chain: A Real-world Case Study"
          tooltip="R&D"
          color="black"
        />
      </div>
      <div className="h-full w-[27%]">
        <img
          src="/latestblog/construction-side.jpeg"
          alt="AI Image"
          className="w-[330px] h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FourBlogsLineRev;
