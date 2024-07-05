import React from "react";
import BoxTextBg from "./BoxTextBg";

const EnergyAndPower = () => {
  const BlueBg: React.FC = () => {
    return (
      <svg
        width="307"
        height="291"
        viewBox="0 0 307 291"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.00244141 2.68386e-05L286.855 1.76109e-06L286.855 50.5807L307 65.2723L286.855 79.9638L286.856 291.805L0.00246692 291.805L0.00244141 2.68386e-05Z"
          fill="#0066FF"
        />
      </svg>
    );
  };
  return (
    <div className="container mx-auto h-[513px] relative">
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
  );
};

export default EnergyAndPower;
