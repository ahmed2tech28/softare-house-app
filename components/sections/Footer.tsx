import React from "react";
import ButtonComp from "../common/ButtonComp";
import Link from "next/link";

const MobileFooter: React.FC = () => {
  return (
    <footer className="w-screen justify-center items-center bg-[#111827] py-[6rem] flex flex-col xl:hidden">
      <div className="text-white text-xl">
        &copy; 2023 DevHouse All rights reserved
      </div>
    </footer>
  );
};

const services: string[] = [
  "Web Application Development",
  "Mobile App Development",
  "UI/UX Design Services",
  "Desktop Application Development",
  "Hire a Developer",
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

const PcFooter: React.FC = () => {
  return (
    <footer className="w-screen xl:h-[610px] h-fit bg-[#111827] py-[6rem] hidden flex-col xl:flex">
      <div className="h-[490px] container mx-auto">
        <div className="h-[358px] w-full flex justify-between text-white">
          <div className="w-[253px] h-full flex flex-col gap-y-6">
            <h1 className="text-[16px] font-semibold">Services</h1>
            <div className="flex flex-col gap-y-6">
              {services.map((item, i) => (
                <Link key={i} href={"#"} className="text-[14px] font-normal">
                  {item}
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
