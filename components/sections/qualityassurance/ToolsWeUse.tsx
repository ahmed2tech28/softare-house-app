import React from "react";
import Top from "./common/TopHiding";

const testingsvgs: string[] = [
  "/toolsweuse/jira.svg",
  "/toolsweuse/testrail.svg",
  "/toolsweuse/browser.svg",
  "/toolsweuse/charlesproxy.svg",
  "/toolsweuse/poestman.svg",
  "/toolsweuse/xcode.svg",
  "/toolsweuse/androidstudio.svg",
];

const automationsvgs: string[] = [
  "/toolsweuse/python.svg",
  "/toolsweuse/selenium.svg",
  "/toolsweuse/applum.svg",
  "/toolsweuse/jmeter.svg",
];

const Bottom: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col">
          <h2 className="text-[24px] font-semibold py-[1rem]">Testing tools</h2>
          <div className="flex flex-wrap gap-[2rem] 2xl:w-[70%] lg:w-[80%] w-full">
            {testingsvgs.map((item, i) => (
              <img src={item} key={i} />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:ps-[9rem]">
          <h2 className="text-[24px] font-semibold py-[1rem]">
            Automation testing
          </h2>
          <div className="flex flex-wrap gap-[2rem] 2xl:w-[70%] lg:w-[80%] w-full">
            {automationsvgs.map((item, i) => (
              <img src={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolsWeUse: React.FC = () => {
  return (
    <div className="w-screen pt-[2rem] pb-[4rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <Top
          hiding="Tools we use"
          description="Our engineers utilize a variety of specialized tools to test software even more carefully and effectively."
        />
        <Bottom />
      </div>
    </div>
  );
};

export default ToolsWeUse;
