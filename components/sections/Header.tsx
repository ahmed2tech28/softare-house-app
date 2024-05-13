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
    path: "/",
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

const BlurBg: React.FC = () => {
  return (
    <div
      className="h-full w-full"
      style={{
        background: "url('header-bg-image.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        filter: "blur(5px)",
      }}
    >
      <div className="bg-[rgba(0,0,0,0.37)] w-full h-full"></div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [navRes, setNavRes] = useState(false);
  return (
    <>
      <nav className="flex md:container w-[95vw] mx-auto justify-between items-center h-44">
        <div className="logo">
          <img src="/devLogo.png" width={"130"} alt="logo" />
        </div>
        <ul className="xl:flex gap-x-4 hidden">
          {navRoutes.map((item, i) => {
            return (
              <li key={i} className="text-[1.15rem]">
                <Link href={item.path} className="text-white">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="seacrh-icon flex gap-x-2">
          <SearchIcon sx={{ color: "white", cursor: "pointer" }} />
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
            <ul className="gap-x-4 flex flex-col border-collapse w-full">
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
  return (
    <header className="sm:h-[57rem] h-[65rem] w-screen relative text-white">
      <BlurBg />
      <div className="absolute top-0 w-full h-full z-10 flex flex-col justify-between">
        <div>
          <Navbar />
          <div className="xl:w-[50%] lg:w-[70%] w-[90%] mx-auto flex flex-col justify-center items-center gap-y-5">
            <h1 className="sm:text-5xl text-3xl text-center leading-[4rem] font-bold">
              Custom Software Development Company
            </h1>
            <p className="sm:text-2xl text-center">
              Looking for mobile and web development services to guarantee
              unmatched usability? We are a leading offshore software
              development company. Let&apos;s discuss your project and find “Why
              your company need our solution”.
            </p>
            <ButtonComp
              text="Connect with us"
              variant="contained"
              edges="rounded"
              type="button"
            />
          </div>
        </div>
        <BottomBox />
      </div>
    </header>
  );
};

export default Header;
