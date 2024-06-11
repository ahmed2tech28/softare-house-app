import React from "react";
import Top from "./common/TopHiding";

interface types {
  name: string;
  points: string[];
}

const appsdevelop: types[] = [
  {
    name: "Infrastructure as a Code",
    points: [
      "Stay consistent with the unified infrastructure setup",
      "Onboard new staff with clear documentation reducing related risks",
      "Accelerate development with easily deployable architectures",
      "Save costs minimizing manual work of engineers",
    ],
  },
  {
    name: "Delivery Pipeline and CI/CD",
    points: [
      "Accelerate release time recognizing issues in early stages",
      "Know exactly how much time you need to recover from failure with MTTR",
      "Convert more users into customers with a bug-free experience",
    ],
  },
  {
    name: "Monitoring and alerting",
    points: [
      "Track system’s uptime and availability",
      "Build transparency over the product’s health for multiple teams and business units",
      "Avoid false alerts with well-configured, automated systems",
    ],
  },
  {
    name: "Cloud computing",
    points: [
      "Build a cloud-based platform or infrastructure",
      "Get cloud consultancy",
      "Optimize cloud expenses",
      "Get help with cloud migration",
    ],
  },
  {
    name: "Configuration management",
    points: [
      "Scale infrastructure and software systems, not staff to manage it",
      "Take a step back anytime an emergency happens with recoverable assets",
    ],
  },
  {
    name: "Secure infrastructure",
    points: [
      "Stay on the safe side with Firewall as a Service",
      "Detect and prevent web attacks and intrusions",
      "Run security tests",
    ],
  },
];

const Tick: React.FC = () => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1058_223)">
        <path
          d="M11.8942 3.0188L5.86538 9.3188L3.125 6.45516"
          stroke="#0C8CE9"
          stroke-width="2.33"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1058_223">
          <rect width="14" height="10.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ReliableDevServices = () => {
  return (
    <div className="w-screen py-[2rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <h1 className="2xl:!w-[45%] clg:w-[65%] w-full md:text-[36px] text-[26px] font-semibold inline-block leading-[46px]">
          Reliable DevOps services
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 flex-col h-fit w-full gap-x-[2rem]">
          {appsdevelop.map((item, i) => {
            return (
              <div
                key={i}
                className="lg:max-w-[403px] xl:h-[300px] lg:py-0 py-[1rem] h-fit flex flex-col gap-y-[0.2rem]"
              >
                {/* <div className="flex items-end"> */}
                <h1 className="text-[30px] font-semibold inline-flex items-end gap-x-2">
                  {item.name}
                </h1>
                {/* </div> */}
                <ul className="text-[16px] text-[#969FAF] leading-[30.4px]">
                  {item.points.map((item, i) => {
                    return (
                      <li key={i} className="flex gap-x-3">
                        <span className="mt-2">
                          <Tick />
                        </span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReliableDevServices;
