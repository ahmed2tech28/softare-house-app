import React from "react";

const HaveAnyQuestions = () => {
  return (
    <div className="container mx-auto py-[3rem]">
      <div className="h-[248px] w-full blue-gradient rounded-[22px] flex justify-center items-center gap-x-[2rem] px-[4rem]">
        <h1 className="text-[36px] text-white font-semibold w-2/5">
          Have any questions?
        </h1>
        <p className="f-mon leading-[28px] text-white w-2/5">
          Our managers will consult you about choosing a web-based solution for
          your needs.
        </p>
        <div className="w-1/5 justify-end flex">
          <button className="text-[#0C8CE9] bg-white f-mon font-semibold px-3 py-2 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HaveAnyQuestions;
