import React from "react";

const GotAnyQuestions: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem]">
      <div className="h-[248px] w-full blue-gradient rounded-[22px] flex lg:flex-row flex-col-reverse justify-center items-center gap-x-[2rem] px-[4rem]">
        <div className="lg:w-1/5 w-full justify-end flex">
          <button className="text-[#0C8CE9] bg-white f-mon font-semibold px-4 py-2 rounded-full">
            Get Free Consultation
          </button>
        </div>
        <div className="flex flex-col lg:w-4/5 w-full">
          <h1 className="text-[36px] text-white font-semibold w-full">
            Got any questions to ask?
          </h1>
          <p className="f-mon leading-[28px] text-white w-full">
            Ask our managers anything you want to know about software
            development, and they'll answer your question within 24 hours. It's
            free of charge and commitment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GotAnyQuestions;
