import React from "react";
import BoxTextBg from "./BoxTextBg";
import InnerNav from "./InnerNav";

const GetLegacySoftware = () => {
  const BlueBg: React.FC = () => {
    return (
      <svg
        width="307"
        height="292"
        viewBox="0 0 307 292"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M307 0H0V277H19.0355L29.5 292L39.9645 277H307V0Z"
          fill="#0066FF"
        />
      </svg>
    );
  };
  const WhiteBg: React.FC = () => {
    return <div className="w-[307px] h-[292px] bg-white"></div>;
  };
  return (
    <section className="w-fit h-fit mx-auto">
      <div className="w-fit mx-auto md:pt-[2rem] py-[2rem] flex md:flex-row flex-col h-fit">
        <div className="relative w-fit">
          <BoxTextBg
            Component={BlueBg}
            hiding="How to Get Legacy Software Modernisation Right"
            description="Whitepaper How to Get Legacy Software Modernisation Right…"
            color="white"
            tooltip="WHITEPAPER"
            className="px-[1rem]"
          />
        </div>
        <div className="md:w-[370px] w-[309px] md:mt-0 -mt-5">
          <img src="/latestblog/bookcover.png" alt="bookcover" />
        </div>
      </div>
      <div className="md:container w-screen mx-auto h-full flex flex-col mt-[-0.9rem] bg-[#111827] pb-[3rem]">
        <div className="flex flex-col gap-y-5 w-full h-[calc(100%-306px)] text-white px-8 py-10">
          <h1 className="text-[36px] font-semibold">Latest News</h1>
          <div className="flex w-full gap-x-5 items-center">
            <p className="border-[1px] px-2 h-fit">NEWS</p>
            <p>
              ELEKS Expands Global Health Technology Offerings with CHA
              Partnership and eMIS Rollout
            </p>
          </div>
          <div className="flex w-full gap-x-5 items-center">
            <p className="border-[1px] px-2 h-fit">NEWS</p>
            <p>
              ELEKS Achieves ISO 9001:2015 and ISO 27001:2013 Certifications,
              Signifying Commitment to Quality and Security
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto md:pt-[2rem] py-[2rem] flex md:flex-row flex-col">
          <div className="relative w-fit">
            <BoxTextBg
              Component={WhiteBg}
              hiding="on Time Delivery: We Ensure Timely Software Releases"
              description="Article Guaranteed Delivery: How We Ensure On-Time Software…"
              color="black"
              tooltip="ARTICLE"
              className="px-[1rem]"
            />
          </div>
          <div className="md:w-[300px] w-[306px] h-[290px]">
            <img
              src="/latestblog/hify-person.png"
              alt="bookcover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <InnerNav />
      </div>
    </section>
  );
};

export default GetLegacySoftware;
