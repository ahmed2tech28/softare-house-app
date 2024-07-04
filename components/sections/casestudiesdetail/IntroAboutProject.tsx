import React from "react";
import BreadCrumbComp from "@/components/common/BreadCrumbComp";

interface Path {
  label: string;
  path: string;
}

interface Props {
  title: string | undefined;
  desc: string | undefined;
  img?: string;
  industry: string | undefined;
  team: number | undefined;
  startedIn: number | undefined;
  country: string | undefined;
  slug?: string;
}

const IntroAboutProject: React.FC<Props> = ({
  title,
  desc,
  industry,
  country,
  startedIn,
  team,
  img,
  slug,
}) => {
  const path: Path[] = [
    { label: "Home", path: "/" },
    { label: "Case Studies", path: "/casestudies" },
    { label: title!, path: `/casestudies/${slug}` },
  ];
  return (
    <div className="h-[37rem] w-full border rounded-[3rem] overflow-hidden flex flex-col relative justify-center items-center">
      <img src={img} alt="bg-image" className="blur-[2px]" />
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-[#00000092] p-10 flex flex-col justify-between items-start">
        <BreadCrumbComp path={path} color="white" />
        <div>
          <h1 className="lg:!text-[4.5rem] md:!text-[3rem] sm:text-[2.5rem] mb:text-[2rem] text-[1.2rem] leading-tight text-white font-semibold">
            {title}
          </h1>
          <p className="text-white lg:text-2xl mb:text-xl text-base">{desc}</p>
        </div>
        <div className="flex w-fit h-fit text-white text-xl flex-wrap gap-x-8 gap-y-3">
          <div className="w-[10rem] h-[4rem] flex flex-col p-3">
            <span className="font-semibold uppercase">Industry</span>
            <span>{industry}</span>
          </div>
          <div className="w-[10rem] h-[4rem] flex flex-col p-3">
            <span className="font-semibold uppercase">Team</span>
            <span>{team} members</span>
          </div>
          <div className="w-[10rem] h-[4rem] flex flex-col p-3">
            <span className="font-semibold uppercase">Started In</span>
            <span>{startedIn}</span>
          </div>
          <div className="w-[10rem] h-[4rem] flex flex-col p-3">
            <span className="font-semibold uppercase">Country</span>
            <span>{country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAboutProject;
