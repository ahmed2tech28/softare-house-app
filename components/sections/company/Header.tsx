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

const Box1 = () => {
  return (
    <div className="bg-[#0C8CE9] w-[173px] h-[111px] flex flex-col justify-center items-center text-center">
      <h1 className="text-[30px] text-white font-semibold">120+</h1>
      <p className="text-[10px]">Active client accounts</p>
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="bg-[#0066FF] w-[173px] h-[111px] flex flex-col justify-center items-center text-center">
      <h1 className="text-[30px] text-white font-semibold">2000+</h1>
      <p className="text-[10px]">Specialists</p>
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="bg-[#111827] w-[173px] h-[111px] flex flex-col justify-center items-center text-center">
      <h1 className="text-[30px] text-white font-semibold">1000+</h1>
      <p className="text-[10px]">End-to-end projects</p>
    </div>
  );
};

const Header: React.FC = () => {
  const [linkHovered, setlinkHovered] = useState("");

  return (
    <header
      className="sm:max-h-[100vh] sm:min-h-[50rem] hb:min-h-fit mb:h-[100vh] h-[130vh] w-screen relative text-white"
      id="home"
      onMouseLeave={(e) => setlinkHovered("")}
    >
      <BlurBg img={"/devops-services.png"} />
      <div className="absolute top-0 w-full h-full z-10 flex flex-col justify-between  hb:pb-[3rem]">
        <Navbar linkHovered={linkHovered} setlinkHovered={setlinkHovered} />
        <div
          className="h-[calc(100%-8.6rem)] hb:h-[calc(100%-5rem)] flex justify-center items-center container mx-auto lg:flex-row flex-col lg:gap-y-0 gap-y-[3rem]"
          onMouseEnter={(e) => setlinkHovered("")}
        >
          <div className="lg:w-[50%] w-[9-vw] lg:mx-0 mx-auto flex flex-col gap-y-[1rem]">
            <h1 className="text-[40px] font-semibold">About Devhouse</h1>
            <p className="leading-[28px] f-mon">
              ELEKS is the partner of choice for many of the world{"'"}s leading
              enterprises, SMEs and technology challengers. We help businesses
              elevate their value through custom software development, product
              design, QA and consultancy services.
            </p>
            <ButtonComp
              text="Start A Project"
              bg="#0C8CE9"
              variant="contained"
              edges="rounded"
            />
          </div>
          <div className="lg:w-[50%] flex justify-end lg:items-end items-center lg:h-[80%]">
            <div className="flex lg:items-center gap-y-[2rem] gap-x-[2rem] lg:flex-row flex-col">
              <Box1 />
              <Box2 />
              <Box3 />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
