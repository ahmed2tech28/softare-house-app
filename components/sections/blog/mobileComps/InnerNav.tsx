import React from "react";

const InnerNav = () => {
  return (
    <div className="w-[90%] mx-auto h-[136px] flex items-center justify-between text-white xl:px-12 px-4">
      <div className="flex xl:gap-x-10 gap-x-4 w-fit">
        <select className="bg-[#111827] text-white" name="category">
          <option className="" value={"All"}>
            All
          </option>
          <li className="" value={"Insights"}>
            Insights
          </li>
          <li className="" value={"R&D"}>
            R&D
          </li>
          <li className="" value={"Whitepapers"}>
            Whitepapers
          </li>
          <li className="" value={"News"}>
            News
          </li>
          <li className="" value={"In"}>
            In the Media
          </li>
        </select>
      </div>
      <div className="flex xl:gap-x-10 md:gap-x-4 gap-y-4 sm:flex-row flex-col">
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
