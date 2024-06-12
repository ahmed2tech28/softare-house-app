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
    img: "/devopstech/cloudsolutions/aws.svg",
  },
  {
    name: "Google Cloud",
    img: "/devopstech/cloudsolutions/googlecloud.svg",
  },
  {
    name: "Digital Ocean",
    img: "/devopstech/cloudsolutions/digitalocean.svg",
  },
  {
    name: "Hetzner",
    img: "/devopstech/cloudsolutions/hetzner.svg",
  },
  {
    name: "Microsoft Azure",
    img: "/devopstech/cloudsolutions/msazure.svg",
  },
];

const soucecodecontroller: cloudtech[] = [
  {
    name: "Github",
    img: "/devopstech/scc/github.svg.png",
  },
  {
    name: "Vs code",
    img: "/devopstech/scc/vscode.png",
  },
  {
    name: "Gitlab",
    img: "/devopstech/scc/gitlab.png",
  },
];

const cicd: cloudtech[] = [
  {
    name: "Jenkins",
    img: "/devopstech/cicd/cicd.svg.png",
  },
];

const webservers: cloudtech[] = [
  {
    name: "Apache",
    img: "/devopstech/webservers/apache.png",
  },
  {
    name: "Nginx",
    img: "/devopstech/webservers/nginx.png",
  },
  {
    name: "Tomcat",
    img: "/devopstech/webservers/tomcat.png",
  },
];

const containers: cloudtech[] = [
  {
    name: "Docker",
    img: "/devopstech/containers/docker.jpg",
  },
];

const applicationservers: cloudtech[] = [
  {
    name: "Tomcat",
    img: "/devopstech/applicationservers/tomcat.png",
  },
];

const monitoring: cloudtech[] = [
  {
    name: "Datadog",
    img: "/devopstech/monitoring/datadog.jpg",
  },
  {
    name: "New Relic",
    img: "/devopstech/monitoring/newralic.png",
  },
];

const codeasinfrastructure: cloudtech[] = [
  {
    name: "Terraform",
    img: "/devopstech/codeasinfrastructure/terraform.png",
  },
];

const CloudSolutions = () => {
  const [stepSelected, setStepSelected] = useState("Cloud solutions");
  return (
    <div className="w-full flex md:flex-row flex-col gap-y-4">
      <div className="w-full md:w-[60%] flex flex-col">
        <h1 className="text-[30px] font-semibold">{stepSelected}</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[4rem] mt-[4rem]">
          {stepSelected == "Cloud solutions" &&
            cloudtechs.map((item, i) => {
              return (
                <div key={i} className="flex gap-x-5 items-center">
                  <img src={item.img} alt={item.name} width={99} />
                  <span className="text-xl f-mon">{item.name}</span>
                </div>
              );
            })}
          {stepSelected == "Source Code control" &&
            soucecodecontroller.map((item, i) => {
              return (
                <div key={i} className="flex gap-x-5 items-center">
                  <img src={item.img} alt={item.name} width={99} />
                  <span className="text-xl f-mon">{item.name}</span>
                </div>
              );
            })}
          {stepSelected == "CI/CD" &&
            cicd.map((item, i) => {
              return (
                <div key={i} className="flex gap-x-5 items-center">
                  <img src={item.img} alt={item.name} width={99} />
                  <span className="text-xl f-mon">{item.name}</span>
                </div>
              );
            })}
          {stepSelected == "Web Servers" &&
            webservers.map((item, i) => {
              return (
                <div key={i} className="flex gap-x-5 items-center">
                  <img src={item.img} alt={item.name} width={99} />
                  <span className="text-xl f-mon">{item.name}</span>
                </div>
              );
            })}
          {stepSelected == "Containers" &&
            containers.map((item, i) => {
              return (
                <div key={i} className="flex gap-x-5 items-center">
                  <img src={item.img} alt={item.name} width={99} />
                  <span className="text-xl f-mon">{item.name}</span>
                </div>
              );
            })}
          {stepSelected == "Application Servers" &&
            applicationservers.map((item, i) => {
              return (
                <div key={i} className="flex gap-x-5 items-center">
                  <img src={item.img} alt={item.name} width={99} />
                  <span className="text-xl f-mon">{item.name}</span>
                </div>
              );
            })}
          {stepSelected == "Monitoring" &&
            monitoring.map((item, i) => {
              return (
                <div key={i} className="flex gap-x-5 items-center">
                  <img src={item.img} alt={item.name} width={99} />
                  <span className="text-xl f-mon">{item.name}</span>
                </div>
              );
            })}
          {stepSelected == "Code as Infrastructure" &&
            codeasinfrastructure.map((item, i) => {
              return (
                <div key={i} className="flex gap-x-5 items-center">
                  <img src={item.img} alt={item.name} width={99} />
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
              className="rounded-[33px] font-semibold px-[1.5rem] py-3 lg:text-[24px] text-[14px] w-fit bg-[#EEF7FE] hover:text-white hover:bg-[#0066FF] transition-all duration-100"
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
