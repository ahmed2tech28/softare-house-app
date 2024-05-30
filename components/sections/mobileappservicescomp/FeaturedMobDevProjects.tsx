"use client";
import React, { useState } from "react";
import BoxInside from "./clientComps/BoxInside";

const options: string[] = ["Language", "Database", "Frameworks"];

const FeaturedMobDevProjects: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState("Language");
  return (
    <div className="container mx-auto py-[3rem]">
      <h1 className="text-[36px] leading-[46px] font-semibold">
        Featured Mobile <br /> Development Projects
      </h1>
      <div className="flex sm:gap-x-3 gap-x-1 my-[4rem] mb:flex-nowrap flex-wrap">
        {options.map((item, i) => (
          <button
            key={i}
            className={`hover:bg-[#0C8CE9] font-semibold transition-all duration-150 hover:text-white sm:text-[30px] text-[20px] px-5 py-2 rounded-full ${
              optionSelected == item
                ? "bg-[#0C8CE9] text-white"
                : "bg-[#F9F9F9]"
            }`}
            onClick={(e) => setOptionSelected(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="xl:h-[476px] h-fit w-full featured-projects-gradient rounded-[22px] py-[3rem] px-[5rem]">
        <BoxInside />
      </div>
    </div>
  );
};

export default FeaturedMobDevProjects;
