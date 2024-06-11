import React from "react";
import Top from "./common/TopHiding";
import CloudSolutions from "./clientcomps/CloudSolutions";

const DevOpsTechnology = () => {
  return (
    <div className="w-screen py-[4rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <Top
          hiding="DevOps technology stack"
          description="Our DevOps team only uses battle-proven and flexible technologies to build cost-saving and efficient solutions fitting your business needs."
        />
        <CloudSolutions />
      </div>
    </div>
  );
};

export default DevOpsTechnology;
