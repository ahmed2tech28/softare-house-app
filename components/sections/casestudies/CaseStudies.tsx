import React from "react";
import { ExpandedCaseStudy, CollapsedCaseStudy } from "./CaseStudyCard";
import casestudies from "@/data/casestudies";

const CaseStudies: React.FC = () => {
  return (
    <>
      <section className="h-fit hidden flex-wrap justify-center gap-x-3 gap-y-3 lg:flex">
        {casestudies.map(
          (item, i) =>
            item.varient == "expanded" ? (
              <ExpandedCaseStudy key={i} {...item} />
            ) : (
              <CollapsedCaseStudy key={i} {...item} />
            )
          //  <CollapsedCaseStudy key={i} {...item} />
        )}
      </section>
      <section className="h-fit flex flex-wrap justify-center gap-x-3 gap-y-3 lg:hidden">
        {casestudies.map((item, i) => (
          <CollapsedCaseStudy key={i} {...item} />
        ))}
      </section>
    </>
  );
};

export default CaseStudies;
