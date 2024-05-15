import React from "react";

interface industry {
  title: string;
  desc: string;
}

const industries: industry[] = [
  {
    title: "Finance",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "Insurance",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "Healthcare",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "Agriculture",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "logistics",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "Automotive",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "Retail",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "Energy",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "Government",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    title: "Media & Entertainment",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
];

const Industry: React.FC<industry> = ({ title, desc }) => {
  return (
    <div className="border-[0.4px] border-[#eeececd6] p-4 w-[240px] h-[283px] flex flex-col justify-between">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-white text-[16px]">{title}</h1>
        <p className="text-white text-[14px] font-light">{desc}</p>
      </div>
      <div className="flex justify-between w-full">
        <button className="text-white text-[12px]">View Case Study</button>
        <button className="bg-white px-3 rounded-2xl">&gt;</button>
      </div>
    </div>
  );
};

const CoreIndustries: React.FC = () => {
  return (
    <section className="w-screen h-[816px] bg-[#111827] mb-4 py-10 flex flex-col gap-y-4">
      <h1 className="text-center text-white text-[36px]">
        Core Industries we Serve
      </h1>
      <p className="text-center text-white text-[16px] font-light w-[684px] mx-auto leading-[28px]">
        We provide web and mobile app development services to a wide range of
        industries based on the latest industry trends.
      </p>
      <div className="mx-auto h-[670px] mt-7 grid grid-cols-5 grid-rows-2">
        {industries.map((item, i) => (
          <Industry key={i} title={item.title} desc={item.desc} />
        ))}
      </div>
    </section>
  );
};

export default CoreIndustries;
