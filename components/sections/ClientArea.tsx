"use client";

import React, { useState } from "react";
import ButtonComp from "../common/ButtonComp";

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
      <span className="w-[1rem] h-[1rem] bg-[#423ED6] rounded-sm cursor-pointer"></span>
    );
  }
  return (
    <span
      className="w-[1rem] h-[1rem] bg-[#DFDFDF] rounded-sm cursor-pointer"
      onClick={(e) => onClick(index)}
    ></span>
  );
};

const ClientArea: React.FC = () => {
  const [paginationClicked, setPaginationClicked] = useState(0);
  return (
    <section className="bg-gray-200 w-screen lg:h-[40rem] h-fit">
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
          <div className="lg:w-[40%] w-[80%] h-[25rem] overflow-hidden">
            <img
              src="/client.png"
              alt="client"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="lg:w-[50%] h-[100%] flex flex-col gap-y-4 justify-center w-[90%] md:mx-0 mx-auto">
            <div>
              <h1 className="font-bold text-2xl">Henrik Loop</h1>
              <h1 className="text-2xl">CTO at Blockbuster, TDC</h1>
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
