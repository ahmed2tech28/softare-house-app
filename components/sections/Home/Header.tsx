"use client";
import React, { useState } from "react";
import Link from "next/link";

import Navbar from "@/components/common/Navbar";

import ButtonComp from "../../common/ButtonComp";
import BottomBox from "../../common/BottomBox";

interface Path {
  pathb: string;
  name: string;
}

const navRoutes: Path[] = [
  {
    pathb: "#home",
    name: "Home",
  },
  {
    pathb: "#services",
    name: "Services",
  },
  {
    pathb: "#industries",
    name: "Industries",
  },
  {
    pathb: "#expertise",
    name: "Expertise",
  },
  {
    pathb: "#company",
    name: "Company",
  },
  {
    pathb: "#portfolio",
    name: "Portfolio",
  },
  {
    pathb: "#blog",
    name: "Blog",
  },
];

const BlurBg: React.FC<{ img: string; isFading?: boolean }> = ({
  img,
  isFading,
}) => {
  return (
    <div
      className={`h-full w-full header-img ${
        isFading ? "fade-out" : "fade-in"
      }`}
      style={{
        backgroundImage: `url('/header-images/${img}')`,
        // background: `url('/header-images/1.png')`,
      }}
    >
      <div className="bg-[rgba(0,0,0,0.62)] w-full h-full"></div>
    </div>
  );
};

const Header: React.FC = () => {
  const [img, setImg] = useState("0.png");
  const [faiding, setFaiding] = useState(false);
  const [linkHovered, setlinkHovered] = useState("");

  return (
    <header
      className="sm:max-h-[100vh] sm:min-h-[50rem] hb:min-h-fit h-[60rem] w-screen relative text-white"
      id="home"
    >
      <BlurBg img={img} isFading={faiding} />
      <div className="absolute top-0 w-full h-full z-10 flex flex-col justify-between  hb:pb-[3rem]">
        <Navbar linkHovered={linkHovered} setlinkHovered={setlinkHovered} />
        <div
          className="h-[calc(100%-8.6rem)] hb:h-[calc(100%-5rem)] flex flex-col justify-center w-[90vw] mx-auto"
          onMouseEnter={(e) => setlinkHovered("")}
        >
          <div className="xl:w-[60%] h-[clac(100%-200px)] w-[90%] mx-auto flex flex-col justify-center items-center gap-y-2">
            <h1 className="sm:text-[2.5rem] text-3xl text-center sm:leading-[4rem] font-normal">
              Custom Software Development Company
            </h1>
            <p className="sm:text-[1rem] text-center w-[90%] mx-auto font-light f-mon leading-[28px]">
              Looking for mobile and web development services to guarantee
              unmatched usability? We are a leading offshore software
              development company. Let&apos;s discuss your project and find{" "}
              <span className="font-semibold">
                “Why your company need our solution”.
              </span>
            </p>
            <Link href={"#contact"}>
              <ButtonComp
                text="Let's Talk Now"
                variant="contained"
                edges="rounded"
                type="button"
                padding="0.7rem 3rem"
              />
            </Link>
          </div>
          <BottomBox
            setImg={setImg}
            setIsFaiding={setFaiding}
            isFading={faiding}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
