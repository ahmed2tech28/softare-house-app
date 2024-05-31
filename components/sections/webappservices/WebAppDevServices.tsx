import React from "react";

interface services {
  title: string;
  desc: string;
}

const services: services[] = [
  {
    title: "Software consulting",
    desc: "BAs assess your idea, outline features, provide detailed cost and time estimates. Solution Architects help to choose suitable architecture and infrastructure, consult on programming tools and approaches.",
  },
  {
    title: "Custom UI/UX design",
    desc: "We follow Material Design guidelines, ensure page load optimization, and create responsive apps that are easy to use on any device. We make wireframes first, develop 2-3 visual concepts, then design every app screen.",
  },
  {
    title: "Legacy web app modernization",
    desc: "Re-architect old software, migrate to the cloud, add new features, or change the old-fashioned interface to a clear UI. Solution Architects will study your existing software and help to choose the best tools to upgrade it.",
  },
  {
    title: "Custom web app development",
    desc: "Full-cycle web app development service: from getting acquainted with the idea to product release. Our development teams have every tech specialist you may need — developers, UI/UX designers, QA engineers, DevOps.",
  },
];

const WebAppDevServices: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem]">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-[36px] font-semibold w-[30%]">
          Web application development services
        </h1>
        <p className="f-mon w-[40%]">
          We consult businesses, helping them modernize or create apps from
          scratch with custom UI/UX design.
        </p>
      </div>
      <div className="grid grid-cols-2 pt-[3rem] gap-y-11">
        {services.map((item, i) => {
          return (
            // Added 1 in index number before comaring is because of indexes are not 1, 2, 3, 4. They are 0, 1, 2, 4.
            <div
              className={`flex ${
                (i + 1) % 2 != 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="flex flex-col gap-y-4 w-[612px]">
                <h1 className="text-[36px] font-semibold flex items-center gap-x-3">
                  <span>
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="12" rx="6" fill="#0C8CE9" />
                    </svg>
                  </span>
                  <span>{item.title}</span>
                </h1>
                <p className="f-mon font-extralight leading-[30.4px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebAppDevServices;
