import React from "react";
import Card from "./clientComps/Card";
import casestudies from "@/data/casestudies";

const cards = casestudies.filter((item) => item.pages?.includes("Web"));

const WebAppsForClient: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem] h-fit">
      <div className="flex flex-col h-fit">
        <h1 className="text-[36px] font-semibold md:w-[421px] w-full">
          Web application we{"'"}ve delivered for our clients
        </h1>
        <div className="flex flex-col gap-y-[6rem] w-full sm:py-[6rem] py-[2rem] h-fit">
          {cards.map((item, i) => (
            <Card
              key={i}
              img={item.img!}
              bg="#FFEEF5"
              callangesSolved={item.projectChallanges!}
              name={item.title!}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebAppsForClient;
