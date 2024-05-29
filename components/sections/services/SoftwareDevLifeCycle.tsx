import React from "react";

const ServicesArrow: React.FC = () => {
  return (
    <img src="/devcyclearrow.svg" alt="devarrowcycle" className="w-[100%]" />
  );
};

const SoftwareDevLifeCycle: React.FC = () => {
  return (
    <div className="container mx-auto my-[7rem]">
      <div className="flex w-full justify-between lg:flex-row flex-col">
        <h1 className="text-[36px] xl:w-[25%] lg:w-[40%] w-[90%] font-semibold">
          Our software development flow
        </h1>
        <p className="xl:w-[30%] lg:w-[55%] w-[90%] leading-[28px] f-mon">
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
