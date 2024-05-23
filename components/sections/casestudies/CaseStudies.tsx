import React from "react";
import { ExpandedCaseStudy, CollapsedCaseStudy } from "./CaseStudyCard";

interface casestudy {
  title: string;
  desc: string;
  category: string;
  percent: number;
  varient: "expanded" | "collapsed";
}

const casestudies: casestudy[] = [
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "expanded",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "expanded",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
  },
  {
    title: "Developed Customized CSR System, Improved Workflow and Reporting",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
  },
];

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
