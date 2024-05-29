import React from "react";

const TechChallanges: React.FC = () => {
  return (
    <div className="container mx-auto h-[248px] blue-gradient rounded-[22px] mb-[3rem] flex flex-col justify-center items-center gap-y-3">
      <h1 className="text-center text-white mb:text-[36px] text-[30px]">
        Got any tech challenges?
      </h1>
      <p className="f-mon text-white text-center mb:w-full w-[90%] mx-auto">
        Schedule a meeting to get consulted about the software development
        services you need.
      </p>
      <button className="bg-white text-[#0C8CE9] px-10 py-3 rounded-full font-semibold f-mon">
        Let's Talk Now
      </button>
    </div>
  );
};

export default TechChallanges;
