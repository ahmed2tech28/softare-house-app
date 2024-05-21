"use client";
import React, { useState } from "react";
import Link from "next/link";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import ButtonComp from "../common/ButtonComp";
import BottomBox from "../common/BottomBox";

interface Path {
  path: string;
  name: string;
}

const navRoutes: Path[] = [
  {
    path: "#home",
    name: "Home",
  },
  {
    path: "#services",
    name: "Services",
  },
  {
    path: "#industries",
    name: "Industries",
  },
  {
    path: "#expertise",
    name: "Expertise",
  },
  {
    path: "#company",
    name: "Company",
  },
  {
    path: "#portfolio",
    name: "Portfolio",
  },
  {
    path: "#blog",
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

const Navbar: React.FC = () => {
  const [navRes, setNavRes] = useState(false);
  return (
    <>
      <nav className="flex md:w-[95vw] w-[95vw] mx-auto justify-between items-center h-44">
        <div className="logo">
          <img src="/devLogo.png" width={"75px"} alt="logo" />
        </div>
        <ul className="xl:flex gap-x-[2.5rem] hidden f-mon">
          {navRoutes.map((item, i) => {
            return (
              <li key={i} className="text-[0.875rem]">
                <Link href={item.path} className="text-white">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="seacrh-icon flex gap-x-2">
          <SearchIcon
            sx={{
              color: "white",
              cursor: "pointer",
              width: "26px",
              height: "26px",
            }}
          />
          <span onClick={(e) => setNavRes(!navRes)}>
            {navRes ? (
              <CloseIcon
                sx={{ color: "white", cursor: "pointer" }}
                className="xl:hidden inline"
              />
            ) : (
              <MenuIcon
                sx={{ color: "white", cursor: "pointer" }}
                className="xl:hidden inline"
              />
            )}
          </span>
        </div>
      </nav>
      {!navRes ? (
        <div className="w-[90vw] h-screen bg-white fixed right-0 z-30 top-0 transition-transform duration-100 translate-x-full">
          <div className="top flex h-[20%] justify-end px-3 py-3">
            <span onClick={(e) => setNavRes(!navRes)}>
              {navRes ? (
                <CloseIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  className="xl:hidden inline"
                />
              ) : (
                <MenuIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  className="xl:hidden inline"
                />
              )}
            </span>
          </div>
        </div>
      ) : (
        <div className="w-[90vw] h-screen bg-white fixed right-0 z-30 top-0 transition-transform duration-100 translate-x-0">
          <div className="top flex h-[20%] justify-end px-3 py-3">
            <span onClick={(e) => setNavRes(!navRes)}>
              {navRes ? (
                <CloseIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  className="xl:hidden inline"
                />
              ) : (
                <MenuIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  className="xl:hidden inline"
                />
              )}
            </span>
          </div>
          <div className="h-[80%] flex flex-col justify-start items-start w-full">
            <ul className="gap-x-4 flex flex-col border-collapse w-full f-mon">
              {navRoutes.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="text-[1.15rem] border-b-2 border-black w-full py-3 px-3"
                  >
                    <Link href={item.path} className="text-black">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

const Header: React.FC = () => {
  const [img, setImg] = useState("1.png");
  const [faiding, setFaiding] = useState(false);
  return (
    <header
      className="sm:max-h-[46.875rem] sm:min-h-[40rem] h-[60rem] w-screen relative text-white"
      id="home"
    >
      <BlurBg img={img} isFading={faiding} />
      <div className="absolute top-0 w-full h-full z-10 flex flex-col justify-between">
        <Navbar />
        <div className="h-full flex flex-col justify-center w-[90vw] mx-auto">
          <div className="lg:w-[60%] w-[90%] mx-auto flex flex-col justify-center items-center gap-y-5">
            <h1 className="sm:text-[2.5rem] text-3xl text-center sm:leading-[4rem] font-semibold">
              Custom Software Development Company
            </h1>
            <p className="sm:text-[1rem] text-center w-[100%] mx-auto font-light f-mon leading-[28px]">
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
