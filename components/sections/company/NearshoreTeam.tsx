import React from "react";

const NearshoreTeam: React.FC = () => {
  return (
    <section className="w-screen lg:h-[377px] h-fit lg:py-0 py-[3rem] text-white near-share-teams-bg flex flex-col justify-center">
      <div className="container mx-auto flex lg:flex-row flex-col lg:h-[185px] h-fit lg:gap-y-0 gap-y-[2rem]">
        <div className="lg:w-1/2 w-full lg:border-r-[10px] lg:border-white">
          <h1 className="xl:text-[36px] text-[30px] leading-[46px] font-semibold">
            Our Nearshore Teams
          </h1>
          <p className="xl:leading-[38px] leading-[25px] f-mon 2xl:pr-[7rem] xl:pr-[5rem] lg:pr-[2rem]">
            With ELEKS nearshore software development team, you get access to a
            talent pool of 2000+ multiskilled specialists to plug any skill gaps
            within your in-house team. With our 20 offices distributed in key
            cities over three continents, our experts are positioned to a
            seamless working partnership.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-end items-center">
          <p className="text-[36px] leading-[46px] font-medium 2xl:ps-[7rem] xl:ps-[5rem] lg:ps-[2rem]">
            We offer flexible cooperation models that fit your goals, resources
            and timeline
          </p>
        </div>
      </div>
    </section>
  );
};

export default NearshoreTeam;
