import React from "react";

interface coreindustryinfo {
  title: string;
  desc: string;
  bg: string;
  color: string;
}

const coreIndustries: coreindustryinfo[] = [
  {
    title: "Marketplaces",
    desc: "B2B, B2C, C2C platforms that help to enlarge the business value",
    bg: "#F9F9F9",
    color: "#0C8CE9",
  },
  {
    title: "Media",
    desc: "Streaming end entertainment software: mobile, desktops, TVs",
    bg: "#F9F9F9",
    color: "#0C8CE9",
  },
  {
    title: "Retail",
    desc: "CRM, POS, RMS, and similar software for stores and retail chains",
    bg: "#F9F9F9",
    color: "#0C8CE9",
  },
  {
    title: "Travel",
    desc: "Booking platforms, HMS, and TMS software for hospitality and tourism",
    bg: "#F9F9F9",
    color: "#0C8CE9",
  },
  {
    title: "Social",
    desc: "Innovative platforms designed for your business goals and model",
    bg: "#F9F9F9",
    color: "#0C8CE9",
  },
  {
    title: "Education",
    desc: "Educational systems, LMS, AR/VR, and all the digitals to learn and teach",
    bg: "#F9F9F9",
    color: "#0C8CE9",
  },
];

const Box: React.FC<coreindustryinfo> = ({ title, desc, color, bg }) => {
  return (
    <div
      style={{ backgroundColor: bg, color }}
      className="xl:w-[369px] md:w-[300px] w-full h-[173px] rounded-[36px] p-[1.7rem] flex mx-auto"
    >
      <div className="w-[80%]">
        <h2 className="font-semibold text-[30px]">{title}</h2>
        <ul className="list-disc f-mon">{desc}</ul>
      </div>
      <div className="w-[20%] flex justify-end items-start">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="26" height="26" rx="4" fill="#0066FF" />
          <g clip-path="url(#clip0_675_1360)">
            <path
              d="M19.5715 13.5518C20.1238 13.5518 20.5715 13.104 20.5715 12.5518C20.5715 11.9995 20.1238 11.5518 19.5715 11.5518V13.5518ZM7.42871 11.5518H6.42871V13.5518H7.42871V11.5518ZM19.5715 11.5518H7.42871V13.5518H19.5715V11.5518Z"
              fill="white"
            />
            <path
              d="M15.5244 8.16675L19.572 12.5517L15.5244 16.9366"
              stroke="white"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_675_1360">
              <rect
                width="15"
                height="13"
                fill="white"
                transform="translate(6 6)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

const CustomerInDomain: React.FC = () => {
  return (
    <div className="container mx-auto my-[3rem] h-fit">
      <div className="flex h-fit">
        <h1 className="w-full font-semibold text-[36px]">
          We also have customers in these domains
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[5rem] md:gap-y-[5rem] gap-y-[2rem] w-full h-fit my-[4rem]">
        {coreIndustries.map((item, i) => (
          <Box key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CustomerInDomain;
