import React from "react";

const UxDesignStandOut = () => {
  return (
    <div className="container mx-auto md:py-[3rem] py-[1.5rem] h-fit my-[3rem]">
      <div className="md:h-[248px] h-fit md:py-0 py-[1rem] w-full blue-gradient rounded-[22px] flex lg:flex-row flex-col-reverse justify-center items-center gap-x-[2rem] md:px-[4rem] px-[2rem]">
        <div className="lg:w-1/5 w-full justify-center flex">
          <button className="text-[#0C8CE9] bg-white f-mon font-semibold px-4 py-2 rounded-full">
            Contact Us
          </button>
        </div>
        <div className="flex flex-col lg:w-4/5 w-full">
          <h1 className="text-[36px] text-white font-semibold w-full">
            UI/UX design services to stand out
          </h1>
          <p className="f-mon leading-[28px] text-white w-full">
            Contact us, we{"’"}ll analyze your business and help you deliver
            intuitive, vibrant, and fast-loading software design to ensure brand
            competitiveness and a high user satisfaction rate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UxDesignStandOut;
