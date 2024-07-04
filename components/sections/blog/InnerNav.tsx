import React from "react";

const InnerNav = () => {
  return (
    <div className="w-full h-[136px] flex items-center justify-between text-white xl:px-12 px-4">
      <ul className="flex xl:gap-x-10 gap-x-4 w-1/2">
        <li className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-[#0C8CE9]">
          All
        </li>
        <li className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-[#0C8CE9]">
          Insights
        </li>
        <li className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-[#0C8CE9]">
          R&D
        </li>
        <li className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-[#0C8CE9]">
          Whitepapers
        </li>
        <li className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-[#0C8CE9]">
          News
        </li>
        <li className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-[#0C8CE9]">
          In the Media
        </li>
      </ul>
      <div className="flex xl:gap-x-10 gap-x-4">
        <p>Filter by</p>
        <select
          name="category"
          id="category"
          className="bg-[#111827] text-white"
        >
          <option value="Categories" selected className="">
            Categories
          </option>
          <option value="Hellow" className="">
            Hellow
          </option>
        </select>
        <select
          name="category"
          id="category"
          className="bg-[#111827] text-white"
        >
          <option value="Indutries" selected className="">
            Indutries
          </option>
          <option value="Hellow" className="">
            Hellow
          </option>
        </select>
        <select
          name="category"
          id="category"
          className="bg-[#111827] text-white"
        >
          <option value="Expertises" selected className="">
            Expertises
          </option>
          <option value="Hellow" className="">
            Hellow
          </option>
        </select>
      </div>
    </div>
  );
};

export default InnerNav;
