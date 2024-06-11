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

const Icon1 = () => {
  return (
    <svg
      width="103"
      height="36"
      viewBox="0 0 103 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="103" height="36" fill="url(#pattern0_73_8)" />
      <defs>
        <pattern
          id="pattern0_73_8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_73_8"
            transform="scale(0.00970874 0.0277778)"
          />
        </pattern>
        <image
          id="image0_73_8"
          width="103"
          height="36"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const Icon2 = () => {
  return (
    <svg
      width="104"
      height="36"
      viewBox="0 0 104 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="104" height="36" fill="url(#pattern0_73_6)" />
      <defs>
        <pattern
          id="pattern0_73_6"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_73_6"
            transform="scale(0.00961538 0.0277778)"
          />
        </pattern>
        <image
          id="image0_73_6"
          width="104"
          height="36"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
const Icon3 = () => {
  return (
    <svg
      width="85"
      height="24"
      viewBox="0 0 85 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="85" height="24" fill="url(#pattern0_73_7)" />
      <defs>
        <pattern
          id="pattern0_73_7"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_73_7"
            transform="scale(0.0117647 0.0416667)"
          />
        </pattern>
        <image
          id="image0_73_7"
          width="85"
          height="24"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const Header: React.FC = () => {
  const [linkHovered, setlinkHovered] = useState("");

  return (
    <header
      className="sm:max-h-[100vh] sm:min-h-[50rem] hb:min-h-fit h-[60rem] w-screen relative text-white"
      id="home"
      onMouseLeave={(e) => setlinkHovered("")}
    >
      <BlurBg img={"/uiusx-deader.png"} />
      <div className="absolute top-0 w-full h-full z-10 flex flex-col justify-between  hb:pb-[3rem]">
        <Navbar linkHovered={linkHovered} setlinkHovered={setlinkHovered} />
        <div
          className="h-[calc(100%-8.6rem)] hb:h-[calc(100%-5rem)] flex justify-center items-center container mx-auto lg:flex-row flex-col lg:gap-y-0 gap-y-[3rem]"
          onMouseEnter={(e) => setlinkHovered("")}
        >
          <div className="lg:w-[50%] w-[9-vw] lg:mx-0 mx-auto flex flex-col gap-y-[1rem]">
            <h1 className="text-[40px] font-semibold">UI/UX Design Services</h1>
            <p className="leading-[28px] f-mon">
              Our design team uses the latest UI·UX practices to deliver a
              top-notch product that will solve business objectives and satisfy
              user needs
            </p>
            <ButtonComp
              text="Start A Project"
              variant="contained"
              bg="#0C8CE9"
              edges="rounded"
              padding="2rem"
            />
          </div>
          <div className="w-[50%] flex justify-end gap-x-[2rem] items-center">
            <Icon1 />
            <Icon2 />
            <Icon3 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
