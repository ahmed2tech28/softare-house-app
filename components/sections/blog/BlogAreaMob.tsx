import React from "react";
import GetLegacySoftware from "./mobileComps/GetLegacySoftware";
import ExpertInsightsPosts from "./mobileComps/ExpertInsightsPosts";
import EnergyAndPower from "./mobileComps/EnergyAndPower";
import DecodingRoles from "./mobileComps/DecodingRoles";

const BlogAreaMob = () => {
  return (
    <main className="w-screen lg:hidden flex flex-col mx-auto">
      <GetLegacySoftware />
      <ExpertInsightsPosts />
      <EnergyAndPower />
      <DecodingRoles />
    </main>
  );
};

export default BlogAreaMob;
