"use client";

import React, { useState } from "react";
import ButtonComp from "../common/ButtonComp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface PaginationBAllProps {
  index: number;
  paginationClicked: number;
  onClick: (index: number) => void;
}

const PaginationBAll: React.FC<PaginationBAllProps> = ({
  index,
  paginationClicked,
  onClick,
}) => {
  if (index == paginationClicked) {
    return (
      <span className="w-[0.8rem] h-[0.8rem] bg-[#423ED6] rounded-[0.3rem] cursor-pointer"></span>
    );
  }
  return (
    <span
      className="w-[0.8rem] h-[0.8rem] bg-[#DFDFDF] rounded-[0.3rem] cursor-pointer"
      onClick={(e) => onClick(index)}
    ></span>
  );
};

const ClientArea: React.FC = () => {
  const [paginationClicked, setPaginationClicked] = useState(0);
  return (
    <section className="bg-gray-200 w-screen lg:h-[40rem] h-fit" id="portfolio">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between justify-center gap-y-3 items-center h-36">
          <h1 className="font-semibold lg:text-4xl text-2xl">
            Our Clinet Say About Us
          </h1>
          <ButtonComp
            text="More reviews →"
            variant="text"
            edges="rounded"
            type="button"
          />
        </div>
        <div className="flex lg:justify-between items-center lg:h-[27rem] h-[40rem] lg:flex-row flex-col w-full">
          <div className="lg:w-[40%] w-[80%] h-[25rem] overflow-hidden group relative rounded-3xl">
            <img
              src="/client.png"
              alt="client"
              className="w-full h-full object-cover "
            />
            <div className="hidden group-hover:flex cursor-pointer transition-all duration-100 ease-in absolute top-0 left-0 w-full h-full bg-[#00000069] justify-center items-center">
              <span className="player bg-[#ffffff51] w-16 h-16 rounded-2xl flex justify-center items-center">
                <PlayArrowIcon sx={{ color: "white", fontSize: "3rem" }} />
              </span>
            </div>
          </div>
          <div className="lg:w-[50%] h-[100%] flex flex-col gap-y-4 justify-center w-[90%] md:mx-0 mx-auto">
            <div className="flex justify-between items-center">
              <div className="w-2/3">
                <h1 className="font-bold text-2xl">Henrik Loop</h1>
                <h1 className="text-2xl">CTO at Blockbuster, TDC</h1>
              </div>
              <div className="w-1/3 flex gap-x-2 items-center">
                <div>
                  <img src="/flag.png" width={"30"} alt="flag" />
                </div>
                <h1 className="text-xl">Denmark</h1>
              </div>
            </div>
            <p className="font-semibold md:text-2xl text-xl">
              &quot;We&apos;re very happy with Cleveroad. They seem to work in
              the way that we do, and we have a close collaboration with them.
              Every day we talk to the developers and outline what needs to be
              done.&quot;
            </p>
            <div>
              <ButtonComp
                text="View Case Study →"
                variant="text"
                edges="rounded"
                type="button"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full gap-x-2 h-20">
          {Array.from({ length: 7 }).map((item, i) => (
            <PaginationBAll
              key={i}
              index={i}
              paginationClicked={paginationClicked}
              onClick={(index) => setPaginationClicked(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientArea;
