import React from "react";

const CoreIndustries: React.FC = () => {
  return (
    <section className="w-screen h-[60rem] bg-[#111827] mb-4 py-10 flex flex-col gap-y-4">
      <h1 className="text-center text-white text-[36px]">
        Core Industries we Serve
      </h1>
      <p className="text-center text-white text-[16px] font-light w-[684px] mx-auto leading-[28px]">
        We provide web and mobile app development services to a wide range of
        industries based on the latest industry trends.
      </p>
      <div className="container mx-auto h-[670px] border border-white mt-7 grid grid-cols-5">
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
        <div className="border-[0.4px] border-white"></div>
      </div>
    </section>
  );
};

export default CoreIndustries;
