import React from "react";
import Card from "./clientcomps/Card";

interface card {
  img: string;
  name: string;
  description: string;
  categorie: string;
  bg: string;
  country: string;
  flag: string;
  industry: string;
}

const cards: card[] = [
  {
    img: "/feautured-dev/1.png",
    name: "Micro-Investment Platform with SAMA-Compliant",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    categorie: "Under NDA",
    bg: "#F2EFFD",
    country: "Saudi Arabia",
    flag: "Saudi",
    industry: "Fintech",
  },
  {
    img: "/feautured-dev/2.png",
    name: "Transportation Management System with Route Planning",
    description:
      "TMS for the logistics company with automated route planning and delivery points management modules. The solution's integration with the existing LMS",
    categorie: "Under NDA",
    bg: "#F4B700",
    country: "USA",
    flag: "American",
    industry: "Logistics",
  },
  {
    img: "/feautured-dev/2.png",
    name: "Versatile Video-On-Demand Platform",
    description:
      "Video streaming platform for movie renting and purchasing with multi-platform access. Blockbuster is a leading service in the Nordic countries and has 500,000+ subscibers",
    categorie: "Media",
    bg: "#FFA6A9",
    country: "USA",
    flag: "American",
    industry: "Logistics",
  },
];

const Hiding: React.FC = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full justify-between sm:items-center items-start">
      <h1 className="text-[36px] font-semibold sm:block hidden">
        Best Projects Within Our <br /> UI/UX Design Services
      </h1>
      <h1 className="text-[30px] font-semibold sm:hidden block">
        Best Projects Within Our UI/UX Design Services
      </h1>
      <div>
        <button className="px-10 py-3 bg-[#0066ff2b] rounded-full font-semibold text-[#0066FF]">
          More projects →
        </button>
      </div>
    </div>
  );
};

const BetterProject: React.FC = () => {
  return (
    <section className="container mx-auto py-[3rem] flex flex-col gap-y-[2rem]">
      <Hiding />
      <main className="flex flex-col w-full gap-y-[2rem]">
        {cards.map((item, i) => (
          <Card
            key={i}
            img={item.img}
            name={item.name}
            description={item.description}
            categorie={item.categorie}
            bg={item.bg}
            country={item.country}
            flag={item.flag}
            industry={item.industry}
            link="/casestudies/detail"
          />
        ))}
      </main>
    </section>
  );
};

export default BetterProject;
