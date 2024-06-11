"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Company, Experties, Industries, Services } from "./NavbarHoveredItems";
import { usePathname } from "next/navigation";

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
    path: "/services",
    name: "Services",
  },
  {
    path: "#industries",
    name: "Industries",
  },
  {
    path: "#",
    name: "Expertise",
  },
  {
    path: "#company",
    name: "Company",
  },
  {
    path: "/casestudies",
    name: "Portfolio",
  },
  {
    path: "#blog",
    name: "Blog",
  },
];

interface HoveredProps {
  linkHovered: string;
  scrolled: boolean;
  setlinkHovered: (item: any) => void;
}

const HoveredItems: React.FC<HoveredProps> = ({
  linkHovered,
  setlinkHovered,
  scrolled,
}) => {
  return (
    <div
      className={`w-screen ${
        scrolled ? "fixed" : "absolute"
      } top-[83px] bg-white z-50`}
    >
      <hr />
      <div
        className=" flex w-full"
        style={{
          height: `${
            linkHovered == "Home"
              ? "fit-content"
              : linkHovered == "Services"
              ? "20rem"
              : linkHovered == "Company"
              ? "10rem"
              : linkHovered == "Expertise"
              ? "20rem"
              : linkHovered == "Industries"
              ? "7rem"
              : linkHovered == "Portfolio"
              ? "fit-content"
              : linkHovered == "Blog"
              ? "fit-content"
              : "0rem"
          }`,
        }}
      >
        {linkHovered == "Industries" && <Industries />}
        {linkHovered == "Services" && <Services />}
        {linkHovered == "Company" && <Company />}
        {linkHovered == "Expertise" && <Experties />}
      </div>
    </div>
  );
};

const Navbar: React.FC<{
  linkHovered: string;
  setlinkHovered: (item: any) => void;
}> = ({ linkHovered, setlinkHovered }) => {
  const [navRes, setNavRes] = useState(false);
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`w-full h-fit`}
        style={{
          backgroundColor: `${
            linkHovered || scrolled ? "white" : "transparent"
          }`,
          position: scrolled ? "fixed" : undefined,
          top: scrolled ? "0" : undefined,
          left: scrolled ? "0" : undefined,
          borderBottom: scrolled ? "0.03px solid rgba(0,0,0,0.3)" : undefined,
          zIndex: scrolled ? "100" : undefined,
        }}
      >
        <nav className="flex container mx-auto justify-between items-center h-[83px] hb:h-[5rem]">
          {path == "/" || path.includes("/services") ? (
            <div
              className="logo"
              style={{
                filter: `invert(${linkHovered || scrolled ? "1" : "0"})`,
              }}
            >
              <Link href={"/"}>
                <img src="/devLogo.png" width={"75px"} alt="logo" />
              </Link>
            </div>
          ) : (
            <div
              className="logo"
              style={{
                filter: `invert(${linkHovered || scrolled ? "1" : "1"})`,
              }}
            >
              <Link href={"/"}>
                <img src="/devLogo.png" width={"75px"} alt="logo" />
              </Link>
            </div>
          )}
          <ul className="lg:flex gap-x-[2.5rem] hidden f-mon h-full">
            {navRoutes.map((item, i) => {
              return (
                <li
                  key={i}
                  className="text-[0.875rem] h-full inline-flex justify-center items-center"
                  onMouseEnter={(e) => setlinkHovered(item.name)}
                >
                  <Link
                    href={item.path}
                    className={`${
                      linkHovered || scrolled
                        ? linkHovered == item.name
                          ? "text-blue-600"
                          : "text-black"
                        : "text-white"
                    }`}
                    style={{
                      fontWeight: path == item.path ? "600" : undefined,
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="seacrh-icon flex justify-end lg:gap-x-0 gap-x-2">
            <SearchIcon
              sx={{
                color: linkHovered || scrolled ? "black" : "white",
                cursor: "pointer",
                widthb: "26px",
                height: "26px",
              }}
            />
            <span onClick={(e) => setNavRes(!navRes)}>
              {navRes ? (
                <CloseIcon
                  sx={{
                    color: linkHovered || scrolled ? "black" : "white",
                    cursor: "pointer",
                  }}
                  className="lg:hidden inline"
                />
              ) : (
                <MenuIcon
                  sx={{
                    color: scrolled ? "black" : "white",
                    cursor: "pointer",
                  }}
                  className="lg:hidden inline"
                />
              )}
            </span>
          </div>
        </nav>
      </div>
      {!navRes ? (
        <div className="w-[90vw] h-screen bg-white fixed right-0 top-0 transition-transform duration-100 translate-x-full z-[200]">
          <div className="top flex h-[20%] justify-end px-3 py-3">
            <span onClick={(e) => setNavRes(!navRes)}>
              {navRes ? (
                <CloseIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  className="lg:hidden inline"
                />
              ) : (
                <MenuIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  className="lg:hidden inline"
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
                  className="lg:hidden inline"
                />
              ) : (
                <MenuIcon
                  sx={{ color: "black", cursor: "pointer" }}
                  className="lg:hidden inline"
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
                    <Link
                      href={item.path}
                      className="text-black"
                      style={{
                        fontWeight: path == item.path ? "600" : undefined,
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      {linkHovered && (
        <HoveredItems
          linkHovered={linkHovered}
          setlinkHovered={setlinkHovered}
          scrolled={scrolled}
        />
      )}
    </>
  );
};

export default Navbar;
