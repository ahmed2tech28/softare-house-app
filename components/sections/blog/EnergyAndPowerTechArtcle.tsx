import React from "react";
import BoxTextBg from "./BoxTextBg";

const EnergyAndPowerTechArticle: React.FC = () => {
  const BlueBg: React.FC = () => {
    return (
      <svg
        width="307"
        height="320"
        viewBox="0 0 307 291"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.00244141 2.68386e-05L286.855 1.76109e-06L286.855 50.5807L307 65.2723L286.855 79.9638L286.856 320.805L0.00246692 320.805L0.00244141 2.68386e-05Z"
          fill="#0066FF"
        />
      </svg>
    );
  };

  const WhiteBg: React.FC = () => {
    return <div className="w-full h-full bg-white"></div>;
  };

  return (
    <div className="h-[597px] w-full flex">
      <div className="w-[50%] h-full flex flex-col">
        <div className="flex w-full h-[calc(100%-306px)]">
          <div className="bg-white relative w-[47%]">
            <BoxTextBg
              Component={WhiteBg}
              tooltip="ARTICLE"
              hiding="Harnessing Technology in Oil and Gas Industry"
              description="Explore how technology in oil and gas industry helps to address…"
              color="black"
              className="ps-[1rem] pe-[1rem]"
            />
          </div>
          <div className="bg-white h-full w-[53%]">
            <img
              src="/latestblog/construction-side.jpeg"
              alt="star-like"
              className="h-full object-cover w-full"
            />
          </div>
        </div>
        <div className="flex w-full h-[306px]">
          <div className="bg-white h-full w-[47%]">
            <img
              src="/latestblog/person-wearing-vision-pro.jpeg"
              alt="doctor"
              className="h-full object-cover w-full"
            />
          </div>
          <div className="bg-white relative w-[53%]">
            <BoxTextBg
              Component={WhiteBg}
              tooltip="NEWS"
              hiding="The Game Changing Nature of AR Safety Training"
              description="Discover how AR safety training is enhancing workplace safety in…"
              color="black"
              className="ps-[2rem] pe-[1rem]"
            />
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full relative">
        <img
          src="/latestblog/flower-road.jpeg"
          alt="bookcoverimage"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-fit h-fit">
          <BoxTextBg
            Component={BlueBg}
            tooltip="ARTICLE"
            hiding="Energy and Power Technology:"
            description="Learn about AI, automation, and other energy and power…"
            color="white"
            className="ps-[1rem] pe-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default EnergyAndPowerTechArticle;
