import React from "react";
import LatestNewsBox from "./LatestNewsBox";
import InnerNav from "./InnerNav";
import FourBlogsInOneLine from "./FourBlogsInOneLine";
import EnergyAndPowerTech from "./EnergyAndPowerTech";
import EnergyAndPowerTechArticle from "./EnergyAndPowerTechArtcle";
import FourBlogsLineRev from "./FourBlogsInLineRev";

const BlogArea: React.FC = () => {
  return (
    <main className="h-[2777px] w-screen relative flex flex-col">
      <div className="w-full h-[816px] bg-[#111827] mt-[20.2rem]"></div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center py-[2rem]">
        <div className="xl:w-[1204px] w-[95vw] flex flex-col mx-auto h-full ">
          <div className="flex flex-col w-full gap-y-[2.1rem]">
            <LatestNewsBox />
            <InnerNav />
            <FourBlogsInOneLine />
          </div>
          <EnergyAndPowerTech />
          <EnergyAndPowerTechArticle />
          <FourBlogsLineRev />
        </div>
      </div>
    </main>
  );
};

export default BlogArea;
