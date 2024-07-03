import React from "react";
import { findFlagUrlByNationality } from "country-flags-svg";

interface Props {
  img: string;
  name: string;
  callangesSolved: string[];
  bg: string;
}

const Card: React.FC<Props> = ({ img, name, callangesSolved, bg }) => {
  return (
    <div className="w-full lg:h-[491.76px] h-fit flex gap-x-6 lg:flex-row flex-col lg:gap-y-0 gap-y-4">
      <div
        className="h-[491.76px] md:w-[577px] w-full rounded-[2rem] flex flex-col justify-center items-center overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="h-full flex flex-col justify-center gap-y-2 lg:w-[60%] w-full">
        <h2 className="text-[30px] font-semibold">{name}</h2>
        <h3 className="text-[#0C8CE9] text-[24px] font-semibold">
          Challanges Solved :
        </h3>
        <ul className="list-disc ps-4 h-[10rem] overflow-hidden w-full">
          {callangesSolved.map((item, i) => (
            <li key={i} className="leading-[38px]">
              {item}
            </li>
          ))}
        </ul>
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
