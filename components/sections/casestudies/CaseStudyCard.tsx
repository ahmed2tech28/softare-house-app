import React from "react";

interface casestudy {
  title: string;
  desc: string;
  category: string;
  percent: number;
  varient: "expanded" | "collapsed";
  img?: string;
}

const DevLogo: React.FC = () => {
  return (
    <img
      src="/devlogo-casestudies.png"
      width={"49px"}
      height={"27px"}
      alt="devhose logo"
    />
  );
};

export const ExpandedCaseStudy: React.FC<casestudy> = ({
  title,
  percent,
  category,
  desc,
  img,
}) => {
  return (
    <div className="w-[795px] h-[422px] bg-[#F9F9F9] overflow-hidden group rounded-md">
      <div className="h-[276px] group-hover:h-[100%] group-hover:relative overflow-hidden flex justify-center items-center">
        <img src={img} alt="expnaded-image" className="object-cover" />
        <div className="bg-[#00000095] hidden group-hover:block h-full w-full absolute z-20 top-0 left-0 p-5 cursor-pointer">
          <div className="flex w-full h-full flex-col">
            <div className="h-[30%] flex">
              <div className="w-1/2 text-white">
                <div className="flex gap-x-2 justify-start items-center">
                  <span className="inline-block w-[25px] h-[12px] rounded-full bg-[#0C8CE9]" />
                  <span className="text-[12px]">{category}</span>
                </div>
              </div>
              <div className="w-1/2 flex justify-end items-start">
                <DevLogo />
              </div>
            </div>
            <div className="h-[45%] text-white flex flex-col gap-y-3">
              <h1 className="text-[30px] w-[90%]">{title}</h1>
              <p>{desc}</p>
            </div>
            <div className="h-[25%] flex justify-between text-white items-center">
              <button>Explore more</button>
              <button className="bg-white w-[33px] h-[20px] rounded-full inline-flex justify-center items-center">
                <img src="/arrow-blue.svg" width={10} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[35%] w-full flex flex-col p-3 justify-between group-hover:hidden">
        <h2 className="w-[50%] h-[40px] font-semibold">{title}</h2>
        <hr />
        <div className="h-[30px] w-full flex justify-between">
          <DevLogo />
          <div className="w-[30%] h-full flex gap-x-2 justify-end f-mon">
            <h1 className="font-semibold text-[25px]">{percent}%</h1>
            <p className="text-[10px]">
              Lorem <br /> ipsum dolor sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CollapsedCaseStudy: React.FC<casestudy> = ({
  title,
  percent,
  category,
  desc,
  img,
}) => {
  return (
    <div className="w-[389px] h-[422px] bg-[#F9F9F9] overflow-hidden group rounded-md">
      <div className="h-[276px] group-hover:h-[100%] group-hover:relative overflow-hidden flex justify-center items-center relative">
        <img
          className="absolute inset-0 h-full w-auto object-cover"
          src={img}
          alt="collapsed-image"
        />
        <div className="bg-[#00000095] hidden group-hover:block h-full w-full absolute z-20 top-0 left-0 p-5 cursor-pointer">
          <div className="flex w-full h-full flex-col">
            <div className="h-[10%] flex">
              <div className="w-1/2 text-white">
                <div className="flex gap-x-2 justify-start items-center">
                  <span className="inline-block w-[25px] h-[12px] rounded-full bg-[#0C8CE9]" />
                  <span className="text-[12px]">{category}</span>
                </div>
              </div>
              <div className="w-1/2 flex justify-end items-start">
                <DevLogo />
              </div>
            </div>
            <div className="h-[65%] text-white flex flex-col gap-y-3">
              <h1 className="text-[25px]">{title}</h1>
              <p>{desc}</p>
            </div>
            <div className="h-[25%] flex justify-between text-white items-center">
              <button>Explore more</button>
              <button className="bg-white w-[33px] h-[20px] rounded-full inline-flex justify-center items-center">
                <img src="/arrow-blue.svg" width={10} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[35%] w-full flex flex-col p-3 justify-between  group-hover:hidden">
        <h2 className="h-[40px] font-semibold">{title}</h2>
        <hr />
        <div className="h-[30px] w-full flex justify-between">
          <DevLogo />
          <div className="w-[40%] h-full flex gap-x-2 justify-end f-mon">
            <h1 className="font-semibold text-[25px]">{percent}%</h1>
            <p className="text-[10px]">
              Lorem <br /> ipsum dolor sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
