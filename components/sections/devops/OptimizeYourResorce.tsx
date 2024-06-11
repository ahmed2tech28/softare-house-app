import React from "react";

const OptimizeYourResource: React.FC = () => {
  return (
    <div className="container mx-auto md:py-[3rem] py-[1.5rem] h-fit">
      <div className="md:h-[248px] h-fit md:py-0 py-[1rem] w-full blue-gradient rounded-[22px] flex lg:flex-row flex-col justify-center items-center gap-x-[2rem] md:px-[4rem] px-[2rem]">
        <div className="lg:w-1/2 w-full justify-start flex">
          <h1 className="text-white text-[36px] font-semibold">
            Optimize your resources with DevOps services
          </h1>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full gap-y-2">
          <p className="f-mon leading-[28px] text-white w-full">
            Start saving time and money with Cleveroad’s DevOps team. Schedule a
            consultation with our specialists to improve your IT environment.
          </p>
          <button className="text-[#0C8CE9] bg-white f-mon font-semibold px-5 py-3 rounded-full w-fit">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptimizeYourResource;
