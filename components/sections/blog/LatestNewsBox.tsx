import React from "react";
import BoxTextBg from "./BoxTextBg";

const LatestNewsBox: React.FC = () => {
  const BlueBg: React.FC = () => {
    return (
      <svg
        width="334"
        height="306"
        viewBox="0 0 334 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M333.999 0H21.918V53.0399L0 68.4473L21.918 83.8548V306H333.999V0Z"
          fill="#0066FF"
        />
      </svg>
    );
  };

  const WhiteBg: React.FC = () => {
    return (
      <svg
        width="335"
        height="306"
        viewBox="0 0 335 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.05176e-05 2.92866e-05L313.016 1.92193e-06L313.016 53.0394L335 68.4473L313.016 83.8553L313.016 306L5.72689e-05 306L3.05176e-05 2.92866e-05Z"
          fill="white"
        />
      </svg>
    );
  };

  return (
    <div className="h-[597px] w-full flex">
      <div className="w-[46%] h-full relative">
        <img
          src="/latestblog/bookcover.png"
          alt="bookcoverimage"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 w-fit h-fit">
          <BoxTextBg
            Component={BlueBg}
            tooltip="WHITEPAPER"
            hiding="How to Get <br> Legacy Software Modernisation Right"
            description="Whitepaper How to Get Legacy Software Modernisation Right…"
            color="white"
            className="ps-[2rem] pe-[1rem]"
          />
        </div>
      </div>
      <div className="w-[54%] h-full flex flex-col bg-[#111827]">
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
        <div className="flex w-full h-[306px]">
          <div className="bg-white relative w-[47%]">
            <BoxTextBg
              Component={WhiteBg}
              tooltip="ARTICLE"
              hiding="on Time Delivery: We Ensure Timely Software Releases"
              description="Article Guaranteed Delivery: How We Ensure On-Time Software…"
              color="black"
              className="ps-[2rem] pe-[1rem]"
            />
          </div>
          <div className="bg-white h-full w-[53%]">
            <img
              src="/latestblog/hify-person.png"
              alt="Hifying Person"
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsBox;
