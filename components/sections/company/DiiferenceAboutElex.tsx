import React from "react";

interface role {
  type: string;
  description: string;
}

const roles: role[] = [
  {
    type: "Engineering with passion",
    description:
      "We're a network of innovators. We devise bold solutions to the most intricate client challenges. It's our ability to explore new technologies to design best-fit solutions that has 96% of our clients ready to recommend us.",
  },
  {
    type: "Performance focus",
    description:
      "We become your dedicated partner. Which means we won’t finish a project until both we, and you, are 100% happy. With a client satisfaction rate of over 97%, we're considered a key strategic technology partner.",
  },
  {
    type: "Dedication to success",
    description:
      "We drive innovations that help our clients stay ahead of the curve. We care about your immediate needs and your long-term goals. We believe that success is three-fold: for our clients, their customers and the communities they influence.",
  },
];

const DiiferenceAboutElex = () => {
  return (
    <div className="flex flex-col container mx-auto pt-[4rem]">
      <h1 className="text-[36px] font-semibold text-center">
        What{"'"}s Different About ELEKS?
      </h1>
      <div className="flex lg:flex-row flex-col h-fit w-full justify-center py-[2rem]">
        {roles.map((role, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-start gap-[1rem] lg:w-[399px] w-full 2xl:h-[331px] h-fit border border-[#DEDEDE] px-[1.6rem] py-[3rem]"
            >
              <h2 className="text-[30px] font-semibold">{role.type}</h2>
              <p className="f-mon leading-[30.4px] text-[#111827]">
                {role.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiiferenceAboutElex;
