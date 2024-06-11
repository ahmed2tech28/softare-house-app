"use client";
import React, { useState } from "react";
const buttons: string[] = [
  "Cloud solutions",
  "Source Code control",
  "CI/CD",
  "Web Servers",
  "Containers",
  "Application Servers",
  "Monitoring",
  "Code as Infrastructure",
];

interface cloudtech {
  name: string;
  img: string;
}

const cloudtechs: cloudtech[] = [
  {
    name: "AWS",
    img: "/cloudsolutions/aws.svg",
  },
  {
    name: "Google Cloud",
    img: "/cloudsolutions/googlecloud.svg",
  },
  {
    name: "Digital Ocean",
    img: "/cloudsolutions/digitalocean.svg",
  },
  {
    name: "Hetzner",
    img: "/cloudsolutions/hetzner.svg",
  },
  {
    name: "Microsoft Azure",
    img: "/cloudsolutions/msazure.svg",
  },
];

const CloudSolutions = () => {
  const [stepSelected, setStepSelected] = useState("Cloud solutions");
  return (
    <div className="w-full flex md:flex-row flex-col gap-y-4">
      <div className="w-full md:w-[60%] flex flex-col">
        <h1 className="text-[30px] font-semibold">Cloud solutions</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[4rem] mt-[4rem]">
          {cloudtechs.map((item, i) => {
            return (
              <div key={i} className="flex gap-x-5 items-center">
                <img src={item.img} alt={item.name} />
                <span className="text-xl f-mon">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full f-mon flex flex-col gap-y-4 md:w-[40%]">
        {buttons.map((item, i) => {
          return (
            <button
              key={i}
              className="rounded-[33px] font-semibold px-[1.5rem] py-3 lg:text-[24px] text-[14px] w-fit bg-[#F4F4F4] hover:text-white hover:bg-[#0066FF] transition-all duration-100"
              style={{
                backgroundColor: item == stepSelected ? "#0066FF" : undefined,
                color: item == stepSelected ? "white" : undefined,
              }}
              onClick={(e) => setStepSelected(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CloudSolutions;
