import React from "react";
import { ExpandedCaseStudy, CollapsedCaseStudy } from "./CaseStudyCard";

interface casestudy {
  title: string;
  desc: string;
  category: string;
  percent: number;
  varient: "expanded" | "collapsed";
  img?: string;
}

const casestudies: casestudy[] = [
  {
    title: "Tolli Project",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "expanded",
    img: "https://devhouse.co/wp-content/uploads/2023/08/Desktop-64.webp",
  },
  {
    title: "Morilee",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
    img: "/case-studies-page/2.png",
  },
  {
    title: "Muqawiloon",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
    img: "/case-studies-page/3.png",
  },
  {
    title: "Toxicologia Pardini",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
    img: "/case-studies-page/4.png",
  },
  {
    title: "Pre Post SEO",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
    img: "/case-studies-page/5.png",
  },
  {
    title: "SANDALS RESORTS",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
    img: "/case-studies-page/6.png",
  },
  {
    title: "Rent My Home",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "expanded",
    img: "/case-studies-page/7.png",
  },
  {
    title: "Harmos",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
    img: "/case-studies-page/8.png",
  },
  {
    title: "Puulse",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
    img: "/case-studies-page/9.png",
  },
  {
    title: "Jitsi Meet",
    desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
    category: "UI/UX Design",
    percent: 31,
    varient: "collapsed",
    img: "/case-studies-page/10.png",
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
