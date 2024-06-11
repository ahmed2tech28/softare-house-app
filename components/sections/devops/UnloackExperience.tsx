import React from "react";

const points: string[] = [
  "Cloud cost optimization",
  "CI/CD as a service",
  "Cloud infrastructure services",
];

const Tick: React.FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.875 6.875L10.5469 23.125L3.125 15.7386"
        stroke="#0C8CE9"
        strokeWidth="4.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const UnloackExperience: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem]">
      <div className="lg:h-[147px] h-fit flex lg:flex-row flex-col lg:gap-y-0 gap-y-8 gap-x-3 font-semibold">
        <div className="lg:w-[64%] w-full">
          <p className="text-[30px] leading-[49px]">
            Unlock seamless product evolution with our dedicated DevOps team.
            Fast-track time-to-market while ensuring reliability, security, and
            compliance.
          </p>
        </div>
        <div className="lg:w-[36%] w-full">
          <ul className="text-[30px] flex flex-col gap-y-4">
            {points.map((item, i) => (
              <li key={i} className="leading-[28px] flex gap-x-[1rem]">
                <span>
                  <Tick />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UnloackExperience;
