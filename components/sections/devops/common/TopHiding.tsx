import React from "react";

interface props {
  hiding: string;
  description: string;
}

const Top: React.FC<props> = ({ hiding, description }) => {
  return (
    <div className="w-full flex md:flex-row flex-col">
      <div className="w-full md:text-[36px] text-[26px] font-semibold md:w-1/2">
        <span className="clg:w-[65%] w-full inline-block leading-[46px]">
          {hiding}
        </span>
      </div>
      <div className="w-full f-mon flex justify-end md:w-1/2">
        <span className="md:w-[80%] w-full inline-block">{description}</span>
      </div>
    </div>
  );
};

export default Top;
