import React from "react";

const ServicesArrow: React.FC = () => {
  return (
    <img src="/devcyclearrow.svg" alt="devarrowcycle" className="w-[100%]" />
  );
};

const SoftwareDevLifeCycle: React.FC = () => {
  return (
    <div className="container mx-auto my-[7rem]">
      <div className="flex w-full justify-between">
        <h1 className="text-[36px] w-[25%] font-semibold">
          Our software development flow
        </h1>
        <p className="w-[30%] leading-[28px] f-mon">
          We follow an established software development life cycle (SDLC) to
          build a cost-effective product that meets your requirements and market
          demands
        </p>
      </div>
      <ServicesArrow />
    </div>
  );
};

export default SoftwareDevLifeCycle;
