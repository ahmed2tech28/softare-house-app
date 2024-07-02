import React from "react";
import Card from "./clientComps/Card";
import casestudies from "@/data/casestudies";

const cards = casestudies.filter((item) => item.pages?.includes("Mobile"));

const Hiding: React.FC = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full justify-between sm:items-center items-start">
      <h1 className="text-[30px] font-semibold sm:block hidden">
        Featured Mobile <br /> Development Projects
      </h1>
      <h1 className="text-[30px] font-semibold sm:hidden block">
        Featured Mobile Development Projects
      </h1>
      <div>
        <button className="px-10 py-3 bg-[#0066ff2b] rounded-full font-semibold text-[#0066FF]">
          More projects →
        </button>
      </div>
    </div>
  );
};

const FeaturedMobDev: React.FC = () => {
  return (
    <section className="container mx-auto py-[3rem] flex flex-col gap-y-[2rem]">
      <Hiding />
      <main className="flex flex-col w-full gap-y-[2rem]">
        {cards.map((item, i) => (
          <Card
            key={i}
            img={item.img!}
            name={item.title}
            description={item.desc}
            categorie={item.category}
            bg={"#F2EFFD"}
            country={item.country}
            flag={item.flag}
            industry={item.industry}
            link={`/casestudies/${item.slug}`}
          />
        ))}
      </main>
    </section>
  );
};

export default FeaturedMobDev;
