"use client";
import React, { useState } from "react";
import ButtonComp from "../../common/ButtonComp";
import Link from "next/link";

interface navItems {
  name: string;
  path: string;
}

const services: navItems[] = [
  { name: "Web Application Development", path: "/services/webapp" },
  { name: "Mobile App Development", path: "/services/mobileapp" },
  { name: "UI/UX Design Services", path: "/services/uiux" },
  { name: "Quality Assurance Services", path: "/services/quilityasurance" },
  { name: "DevOps Services", path: "/services/devops" },
];

const solutions: string[] = [
  "App Development Cost",
  "How to Build Ride Sharing",
  "How to build a fitness app",
  "Build a streaming app",
  "CRM for Agriculture",
  "Web design process",
];

const industries: string[] = [
  "Health Care",
  "Logistics",
  "FinTech",
  "Market Place",
  "Retail",
  "Travel",
  "Education",
];

const icons: string[] = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const offices: string[] = [
  "Wales <br> +44 7726 777947",
  "Rome <br> +39 320 973 0997",
  "Germany <br> +49 1590 6702779",
  "Faisalabad <br> +92 322 7946794",
  "Lahore <br> +92 321 8351765",
];

const MobileFooter: React.FC = () => {
  const [accordionOpened, setAccordionOpened] = useState("");
  const accordionItems: string[] = [
    "services",
    "solutions",
    "industries",
    "offices",
  ];
  return (
    <footer className="w-screen justify-end items-center bg-[#111827]  py-2 flex flex-col lg:hidden text-white h-fit">
      <div className="w-full px-3 flex flex-col gap-y-1 py-3 h-fit">
        {accordionItems.map((item, i) => (
          <div key={i}>
            <div
              onClick={(e) => {
                if (accordionOpened == item) {
                  setAccordionOpened("");
                  return;
                }
                setAccordionOpened(item);
              }}
              className="flex w-full justify-between py-3"
            >
              <span>{item}</span>
              {item == accordionOpened ? (
                <span className="rotate-[270deg] px-3">
                  <img src="/arrow.svg" width={20} alt="" />
                </span>
              ) : (
                <span className="rotate-[90deg] px-3">
                  <img src="/arrow.svg" width={20} alt="" />
                </span>
              )}
            </div>
            <div className="w-full flex flex-col">
              {accordionOpened == "services" &&
                item == "services" &&
                services.map((item, i) => (
                  <Link href={item.path} className="ms-2" key={i}>
                    {item.name}
                  </Link>
                ))}
              {accordionOpened == "solutions" &&
                item == "solutions" &&
                solutions.map((item, i) => (
                  <Link href={"#"} className="ms-2" key={i}>
                    {item}
                  </Link>
                ))}
              {accordionOpened == "industries" &&
                item == "industries" &&
                industries.map((item, i) => (
                  <Link href={"#"} className="ms-2" key={i}>
                    {item}
                  </Link>
                ))}
              {accordionOpened == "offices" &&
                item == "offices" &&
                offices.map((item, i) => (
                  <Link href={"#"} className="ms-2" key={i}>
                    {item.replace("<br>", " - ")}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-xl h-[20%]">
        &copy; {new Date().getFullYear()} DevHouse All rights reserved
      </div>
    </footer>
  );
};

const PcFooter: React.FC = () => {
  return (
    <footer className="w-screen xl:h-[610px] h-fit bg-[#111827] pt-[6rem] hidden flex-col lg:flex">
      <div className="h-[490px] container mx-auto">
        <div className="h-[358px] w-full flex justify-between text-white">
          <div className="w-[253px] h-full flex flex-col gap-y-6">
            <h1 className="text-[16px] font-semibold">Services</h1>
            <div className="flex flex-col gap-y-6">
              {services.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="text-[14px] font-normal"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[195px] h-full flex flex-col gap-y-6">
            <h1 className="text-[16px] font-semibold">Solutions</h1>
            <div className="flex flex-col gap-y-6">
              {solutions.map((item, i) => (
                <Link key={i} href={"#"} className="text-[14px] font-normal">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[102px] h-full flex flex-col gap-y-6">
            <h1 className="text-[16px] font-semibold">Industries</h1>
            <div className="flex flex-col gap-y-5">
              {industries.map((item, i) => (
                <Link key={i} href={"#"} className="text-[14px] font-normal">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[133px] h-full flex flex-col gap-y-6">
            <h1 className="text-[16px] font-semibold">Offices</h1>
            <div className="flex flex-col gap-y-5">
              {offices.map((item, i) => (
                <Link
                  key={i}
                  href={"#"}
                  className="text-[14px] font-normal"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></Link>
              ))}
            </div>
          </div>
          <div className="w-[241px] h-full flex flex-col gap-y-6">
            <h1 className="text-[16px] font-semibold">Subscribe</h1>
            <p className="text-[14px] font-normal">
              Get executive insights, curated resources and expert guidence
            </p>
            <input
              type="email"
              placeholder="Email"
              className="text-[14px] border border-white bg-transparent py-3 px-2"
            />
            <button className="bg-[#423ED6] rounded-md py-3 text-[14px]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="line bg-[#DFDFDF] w-full h-[1px] my-6"></div>
        <div className="h-[72px] w-full text-white flex">
          <div className="w-1/2">
            <h1 className="text-[18px] font-semibold">Dev House</h1>
            <p className="text-[15px] font-semibold">
              &copy; Dev House 2011-2022. All rights reserved
            </p>
          </div>
          <div className="w-1/2 flex gap-x-12 justify-end">
            {icons.map((item, i) => (
              <Link key={i} href={"#"}>
                <img src={`/social/${item}`} alt="" width={"50"} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer: React.FC = () => {
  return (
    <>
      <PcFooter />
      <MobileFooter />
    </>
  );
};

export default Footer;
