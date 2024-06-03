"use client";
import React, { useEffect, useState } from "react";
import MapDetailBox from "../../common/MapDetailBox";
import MapTooltip from "../../common/MapTooltip";
import Map from "../../svgs/Map";
import MapSmall from "../../svgs/MapSmall";
import MapTab from "../../svgs/MapTab";

interface mapdetails {
  left: string;
  top: string;
  height: string;
  width: string;
  hiding: string;
  desc: string;
  fontSize?: string;
  bg?: string;
}

const mapdetails: mapdetails[] = [
  {
    hiding: "1000+",
    desc: "projects delivered",
    height: "146px",
    width: "308px",
    top: "0",
    left: "0px",
    fontSize: "30px",
    bg: "#0C8CE9",
  },
  {
    hiding: "2000+",
    desc: "top tech experts, middle and senior level",
    height: "146px",
    width: "235px",
    top: "103px",
    left: "208px",
    fontSize: "30px",
  },
  {
    hiding: "120+",
    desc: "active clients, including Fortune 500 companies",
    height: "146px",
    width: "235px",
    top: "13px",
    left: "378px",
    fontSize: "30px",
  },
  {
    hiding: "33+",
    desc: "years on the market",
    height: "146px",
    width: "308px",
    top: "103px",
    left: "590px",
    fontSize: "30px",
    bg: "#0C8CE9",
  },
  {
    hiding: "20",
    desc: "offices and delivery centres globally",
    height: "146px",
    width: "235px",
    top: "-2px",
    left: "750px",
    fontSize: "30px",
  },
  {
    hiding: "66",
    desc: "net promoted score (NPS)",
    height: "146px",
    width: "235px",
    top: "73px",
    left: "975px",
    fontSize: "30px",
  },
];

const MapArea: React.FC = () => {
  const [mousePositionX, setMousePositionX] = useState(0);
  const [mousePositionY, setMousePositionY] = useState(0);
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      // Get the element reference
      const mapSvg = document.querySelector(".map-svg");

      // Check if the element exists
      if (mapSvg) {
        // Get the position of the element
        const rect = mapSvg.getBoundingClientRect();

        // Calculate mouse position relative to the element
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Log or use the relative mouse positions
        // console.log(mouseX, mouseY);
        setMousePositionX(mouseX);
        setMousePositionY(mouseY);
      }
    };

    document
      .querySelector(".map-svg")
      ?.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document
        .querySelector(".map-svg")
        ?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePositionX, mousePositionY]);
  return (
    <div
      className="container mx-auto h-fit py-4 flex flex-col gap-y-3"
      id="industries"
    >
      <div
        className="w-full xl:mt-0 xl:flex hidden mt-[5rem] h-[599px] flex-col justify-start items-center relative map-svg"
        // onMouseEnter={(e) => {
        //   console.log(e.clientX, e.clientY);
        //   setMousePositionX(e.clientX);
        //   setMousePositionY(e.clientY);
        // }}
      >
        <Map />
        <MapTooltip
          mousePositionX={mousePositionX}
          mousePositionY={mousePositionY}
        />
      </div>
      <div
        className="w-full mt-0 h-[499px] lg:flex flex-col justify-start items-center relative map-svg xl:hidden hidden"
        // onMouseEnter={(e) => {
        //   console.log(e.clientX, e.clientY);
        //   setMousePositionX(e.clientX);
        //   setMousePositionY(e.clientY);
        // }}
      >
        <MapSmall />
        <MapTooltip
          mousePositionX={mousePositionX}
          mousePositionY={mousePositionY}
        />
      </div>
      <div
        className="w-full mt-0 h-[399px] flex flex-col justify-start items-center relative map-svg lg:hidden"
        // onMouseEnter={(e) => {
        //   console.log(e.clientX, e.clientY);
        //   setMousePositionX(e.clientX);
        //   setMousePositionY(e.clientY);
        // }}
      >
        <MapTab />
        <MapTooltip
          mousePositionX={mousePositionX}
          mousePositionY={mousePositionY}
        />
      </div>
      <div className="h-[277px] 2xl:w-[80%] xl:w-[90%] lg:w-[90vw] lg:block hidden xl:mx-auto xl:ms-0 ms-[-2rem] relative">
        {mapdetails.map((item, i) => (
          <MapDetailBox
            key={i}
            hiding={item.hiding}
            height={item.height}
            desc={item.desc}
            left={item.left}
            top={item.top}
            width={item.width}
            bg={item.bg}
            fontSize={item.fontSize}
          />
        ))}
      </div>
      <div className="h-fit py-[2rem] flex flex-col w-full lg:hidden  gap-y-[2rem]">
        {mapdetails.map((item, i) => (
          <div
            key={i}
            style={{
              height: item.height,
              width: "100%",
              background: `${item.bg || "white"}`,
            }}
            className="rounded-xl lg:hidden flex-col justify-start p-5 bg-white border border-gray-300 shadow-xl flex"
          >
            <span
              className="font-semibold"
              style={{
                fontSize: item.fontSize,
                color: `${item.bg ? "white" : "black"}`,
              }}
            >
              {item.hiding}
            </span>
            <span style={{ color: `${item.bg ? "white" : "#969FAF"}` }}>
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapArea;
