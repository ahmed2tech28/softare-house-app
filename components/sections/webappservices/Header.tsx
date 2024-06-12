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
      className="sm:max-h-[100vh] sm:min-h-[50rem] hb:min-h-fit h-[100vh] w-screen relative text-white"
      id="home"
      onMouseLeave={(e) => setlinkHovered("")}
    >
      <BlurBg img={"/web-services-header.jpg"} />
      <div className="absolute top-0 w-full h-full z-10 flex flex-col justify-between  hb:pb-[3rem]">
        <Navbar linkHovered={linkHovered} setlinkHovered={setlinkHovered} />
        <div
          className="h-[calc(100%-8.6rem)] hb:h-[calc(100%-5rem)] flex justify-center items-center container mx-auto lg:flex-row flex-col lg:gap-y-0 gap-y-[3rem]"
          onMouseEnter={(e) => setlinkHovered("")}
        >
          <div className="lg:w-[50%] w-[9-vw] lg:mx-0 mx-auto flex flex-col gap-y-[1rem]">
            <h1 className="text-[40px] font-semibold">
              Web App Development Services
            </h1>
            <p className="leading-[28px] f-mon">
              Web applications that{"'"}ll help you digitize your internal or
              external processes, modernize legacy apps or improve the mobile
              experience
            </p>
            <ButtonComp
              text="Start A Project"
              variant="contained"
              bg="#0C8CE9"
              edges="rounded"
              padding="2rem"
            />
          </div>
          <div className="w-[50%] flex justify-end gap-x-[2rem] items-center"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
