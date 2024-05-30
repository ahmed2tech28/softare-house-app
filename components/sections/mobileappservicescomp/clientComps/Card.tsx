import React from "react";
import { findFlagUrlByNationality } from "country-flags-svg";

interface Props {
  img: string;
  name: string;
  description: string;
  categorie: string;
  bg: string;
  country: string;
  flag: string;
  industry: string;
}

const Card: React.FC<Props> = ({
  img,
  name,
  description,
  categorie,
  bg,
  country,
  flag,
  industry,
}) => {
  return (
    <div className="w-full lg:h-[300px] h-fit flex gap-x-6 lg:flex-row flex-col lg:gap-y-0 gap-y-4">
      <img
        src={img}
        alt={name}
        className="lg:w-auto w-[30rem] rounded-[2rem]"
        style={{ backgroundColor: bg }}
      />
      <div className="h-full flex flex-col justify-center gap-y-2">
        <div className="flex items-center justify-end gap-x-3">
          <div>
            <button className="bg-[#F4F4F4] px-3 py-3 rounded-full text-[#969FAF] inline-flex items-center gap-x-2">
              <span className="rounded-full w-[2rem] h-[2rem] overflow-hidden flex justify-center items-center ">
                <img
                  src={findFlagUrlByNationality(flag)}
                  alt={country}
                  className="object-cover w-full h-full"
                />
              </span>
              {country}
            </button>
          </div>
          <div>
            <button className="bg-[#F4F4F4] px-3 py-3 rounded-full text-[#969FAF] inline-flex items-center gap-x-2">
              {industry}
            </button>
          </div>
        </div>
        <p className="leading-[30px] f-mon font-extralight">{categorie}</p>
        <h2 className="text-[30px] font-semibold">{name}</h2>
        <p className="leading-[30px] f-mon font-extralight">{description}</p>
        <div>
          <button className="px-10 py-3 bg-[#0066ff2b] rounded-full font-semibold text-[#0066FF]">
            Explore more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
