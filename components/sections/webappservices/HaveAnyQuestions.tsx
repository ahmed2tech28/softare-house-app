import React from "react";

const HaveAnyQuestions: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem]">
      <div className="sm:h-[248px] h-fit w-full blue-gradient rounded-[22px] flex lg:flex-row flex-col justify-center items-center gap-x-[2rem] md:px-[4rem] px-[2rem] sm:py-0 md:py-[3rem] py-[1.5rem]">
        <h1 className="text-[36px] text-white font-semibold lg:w-2/5 w-full">
          Have any questions?
        </h1>
        <p className="f-mon leading-[28px] text-white lg:w-2/5 w-full">
          Our managers will consult you about choosing a web-based solution for
          your needs.
        </p>
        <div className="lg:w-1/5 w-full justify-end flex">
          <button className="text-[#0C8CE9] bg-white f-mon font-semibold px-3 py-2 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HaveAnyQuestions;
