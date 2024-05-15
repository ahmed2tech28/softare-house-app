import React from "react";
import ButtonComp from "../common/ButtonComp";
import BlogCard from "../common/BlogCard";

const Top: React.FC = () => {
  return (
    <div className="items-center flex justify-between w-[73vw] mx-auto">
      <h1 className="w-1/2 text-left text-[38px] font-semibold">
        Latest insights
      </h1>
      <div className="w-1/2 flex justify-end gap-x-2">
        <ButtonComp
          text="Read more →"
          variant="text"
          edges="rounded"
          type="button"
        />
      </div>
    </div>
  );
};

const LatestInsights: React.FC = () => {
  return (
    <section
      className="w-full 2xl:h-[50rem] h-fit flex flex-col gap-y-14"
      id="blog"
    >
      <Top />
      <div className="w-fit mx-auto grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default LatestInsights;
