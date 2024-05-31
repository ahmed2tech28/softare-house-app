import React from "react";

interface coreindustryinfo {
  title: string;
  listItems: string[];
  bg: string;
  color: string;
}

const coreIndustries: coreindustryinfo[] = [
  {
    title: "Healthcare",
    listItems: [
      "EHP, EMP, Patient Portal",
      "Telemedicine",
      "Patient Monitoring",
    ],
    bg: "#E1F2FF",
    color: "#0C8CE9",
  },
  {
    title: "Supply Chain",
    listItems: ["Warehouse Tech", "Last Mile Delivery", "Freight Tech"],
    bg: "#F5F2FF",
    color: "#0C8CE9",
  },
  {
    title: "Finance",
    listItems: [
      "FinTech, Blockchain",
      "Banking, Investment",
      "Insurance, Policy & Claims",
    ],
    bg: "#FFEEF5",
    color: "#0C8CE9",
  },
];

const Box: React.FC<coreindustryinfo> = ({ title, listItems, color, bg }) => {
  return (
    <div
      style={{ backgroundColor: bg, color }}
      className="xl:w-[369px] md:w-[300px] w-full h-[202px] rounded-[36px] p-[1.7rem] flex mx-auto"
    >
      <div className="w-[80%]">
        <h2 className="font-semibold text-[30px]">{title}</h2>
        <ul className="list-disc ps-6 f-mon">
          {listItems.map((item, i) => (
            <li key={i} className="leading-[30.4px]">
              {item}
            </li>
          ))}
        </ul>
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

const CoreIndustryExperience: React.FC = () => {
  return (
    <div className="container mx-auto my-[3rem] h-fit">
      <div className="flex h-fit lg:flex-row flex-col">
        <h1 className="lg:w-1/2 w-full font-semibold text-[36px]">
          Core industry expertise
        </h1>
        <p className="lg:w-1/2 w-full leading-[28px]">
          Decade of experience accumulated in sophisticated web platforms,
          mobile applications, and complex systems in line with the latest
          industry trends.
        </p>
      </div>
      <div className="lg:grid-cols-3 lg:grid flex flex-wrap gap-x-[5rem] w-full h-fit justify-center my-[4rem] md:gap-y-[5rem] gap-y-[2rem]">
        {coreIndustries.map((item, i) => (
          <Box key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CoreIndustryExperience;
