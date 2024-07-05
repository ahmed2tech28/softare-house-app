import React from "react";

interface types {
  name: string;
  description: string;
}

const appsdevelop: types[] = [
  {
    name: "Build your perfect development team",
    description:
      "Our team of more than 2000 software experts are able to tailor our core services to fit your business requirements. And for those most complex of challenges, we'll engage experts with a grounding in physics and mathematics – to guarantee success where software expertise alone might not be enough.",
  },
  {
    name: "Adopt digital transformations",
    description:
      "Adapt to changing demands with agile, innovative, technologies – like blockchain, Data Science and Cloud. We will translate your needs into transparent and scalable custom enterprise solution tailored to your customers’ needs and your unique business environment and goals.",
  },
  {
    name: "Unify your enterprise's digital ecosystem",
    description:
      "We build scalable software solutions that provide an integrated digital environment for the enterprise's dispersed IT systems, geo-diverse site locations and fragmented remote teams. Optimize and unify your digital ecosystem to enable your enterprise's continued growth and ensure its scalability for the future.",
  },
];

const Ball: React.FC = () => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="11" height="8" rx="4" fill="#0C8CE9" />
    </svg>
  );
};

const ProblemsWeHelp = () => {
  return (
    <div className="w-screen py-[2rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem] h-fit">
        <h1 className="w-full block text-center leading-[46px] text-[36px] font-semibold">
          {"Problems We'll Help You Solve"}
        </h1>
        <div className="flex lg:flex-row flex-col h-fit w-ful justify-between">
          {appsdevelop.map((item, i) => {
            return (
              <div
                key={i}
                className="lg:w-[354.71px] w-full lg:h-[300px] lg:py-0 py-[1rem] h-fit flex flex-col gap-y-[0.2rem]"
              >
                {/* <div className="flex items-end"> */}
                <h1 className="text-[30px] font-semibold inline-flex items-center gap-x-2">
                  <span className="py-4">
                    <Ball />
                  </span>
                  {item.name}
                </h1>
                {/* </div> */}
                <p className="text-[16px] text-[#969FAF] leading-[30.4px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProblemsWeHelp;
