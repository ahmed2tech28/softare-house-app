import React from "react";

const frontendsvgs: string[] = [
  "/mob-tech-stack/javascript.svg",
  "/mob-tech-stack/css.svg",
  "/mob-tech-stack/vue.svg",
  "/mob-tech-stack/html.svg",
  "/mob-tech-stack/react.svg",
  "/mob-tech-stack/sass.svg",
];

const backendsvgs: string[] = [
  "/mob-tech-stack/nodejs.svg",
  "/mob-tech-stack/dotnet.svg",
];

const databasesvgs: string[] = [
  "/mob-tech-stack/mysql.svg",
  "/mob-tech-stack/postgrey.svg",
  "/mob-tech-stack/mongodb.svg",
  "/mob-tech-stack/elastic.svg",
];

const framesvgs: string[] = [
  "/mob-tech-stack/express.svg",
  "/mob-tech-stack/asp.svg",
  "/mob-tech-stack/gatsby.svg",
];

const TechStack: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem] pb-[6rem] h-fit">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[36px] text-center">
          Technology stack
        </h1>
        <p className="text-center f-mon sm:w-[579px] w-full leading-[28px]">
          We use the following tools to create web applications and admin panels
        </p>
      </div>
      <h1 className="text-[30px] font-semibold py-[3rem]">Web Architecture</h1>
      <div className="flex flex-col">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col">
            <h2 className="text-[24px] font-semibold py-[1rem]">Frontend</h2>
            <div className="flex flex-wrap gap-[2rem] 2xl:w-[70%] lg:w-[80%] w-full">
              {frontendsvgs.map((item, i) => (
                <img src={item} key={i} />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[24px] font-semibold py-[1rem]">Backend</h2>
            <div className="flex flex-wrap gap-[2rem] 2xl:w-[70%] lg:w-[80%] w-full">
              {backendsvgs.map((item, i) => (
                <img src={item} key={i} />
              ))}
            </div>
          </div>
        </div>
        <img src="/mob-tech-stack/line.svg" alt="line" className="my-[3rem]" />
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col">
            <h2 className="text-[24px] font-semibold py-[1rem]">Database</h2>
            <div className="flex flex-wrap gap-[2rem] 2xl:w-[70%] lg:w-[80%] w-full">
              {databasesvgs.map((item, i) => (
                <img src={item} key={i} />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[24px] font-semibold py-[1rem]">Frameworks</h2>
            <div className="flex flex-wrap gap-[2rem] 2xl:w-[70%] lg:w-[80%] w-full">
              {framesvgs.map((item, i) => (
                <img src={item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
