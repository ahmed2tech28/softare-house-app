import React from "react";

interface value {
  name: string;
  desc: string;
}

const values: value[] = [
  {
    name: "Speed",
    desc: "Accelerate time to market with best DevOps practices",
  },
  {
    name: "Updates",
    desc: "Inject new code and features on the fly to reduce release time",
  },
  {
    name: "Costs",
    desc: "Cut expenses avoiding unplanned engineering work",
  },
  {
    name: "Security",
    desc: "Adopt a security-first approach to predict and eliminate issues",
  },
  {
    name: "Time",
    desc: "Delegate routine tasks to DevOps to free up developers’ time",
  },
  {
    name: "Competition",
    desc: "Respond to market changes lightning-fast to win more users",
  },
];

const DevOpsValue: React.FC = () => {
  return (
    <div className="bg-[#EEF7FE] container rounded-[36px] mx-auto lg:h-[622px] h-fit lg:px-[4rem] px-[2rem] lg:py-[5rem] py-[1rem]">
      <h1 className="text-[36px] font-semibold">DevOps values</h1>
      <p className="f-mon leading-[28px]">
        Our DevOps partner will help you with cloud infrastructure, continuous
        integration, and automation. We develop and maintain effective solutions
        bearing in mind industry best practices, cost savings, and your business
        workflows.
      </p>
      <div className="grid h-fit w-full lg:grid-cols-3 lg:gap-y-[4rem] gap-y-[1rem] mt-[4rem]">
        {values.map((item, i) => {
          return (
            <div key={i} className="flex flex-col lg:w-[278px]">
              <h1 className="text-[30px] font-semibold inline-flex items-end gap-x-2">
                {item.name}
              </h1>
              <p className="text-[16px] text-[#969FAF] leading-[30.4px]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevOpsValue;
