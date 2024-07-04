"use client";
import Navbar from "@/components/common/Navbar";
import React, { useState } from "react";
import ButtonComp from "@/components/common/ButtonComp";

const BlurBg: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div
      className={`h-full w-full header-img`}
      style={{
        backgroundImage: `url('${img}')`,
        // background: `url('/header-images/1.png')`,
      }}
    >
      <div className="bg-[rgba(0,0,0,0.62)] w-full h-full"></div>
    </div>
  );
};

const Header: React.FC = () => {
  const [linkHovered, setlinkHovered] = useState("");

  return (
    <header
      className="h-[296px] w-screen relative text-white"
      id="home"
      onMouseLeave={(e) => setlinkHovered("")}
    >
      <BlurBg img={"/blog.png"} />
      <div className="absolute top-0 w-full z-10 flex flex-col justify-between h-full ">
        <Navbar linkHovered={linkHovered} setlinkHovered={setlinkHovered} />
        <div
          className="h-[calc(100%-5rem)] flex justify-center items-center container mx-auto lg:flex-row flex-col lg:gap-y-0 gap-y-[3rem]"
          onMouseEnter={(e) => setlinkHovered("")}
        >
          <h1 className="text-[40px] font-semibold">Trends Blog</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
