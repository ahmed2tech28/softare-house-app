import React from "react";
import MapDetailBox from "../common/MapDetailBox";
import MapTooltip from "../common/MapTooltip";
import Map from "../svgs/Map";

const MapArea: React.FC = () => {
  return (
    <div
      className="container mx-auto h-[876px] flex flex-col gap-y-3"
      id="industries"
    >
      <div className="w-full h-[599px] flex flex-col justify-start items-center">
        <Map />
      </div>
      <div className="h-[277px] w-[80%] mx-auto relative">
        <MapDetailBox
          hiding="1000+"
          desc="projects delivered"
          height="146px"
          width="308px"
          top="0"
          left="0"
          fontSize="30px"
          bg="#0C8CE9"
        />
        <MapDetailBox
          hiding="2000+"
          desc="top tech experts, middle and senior level"
          height="146px"
          width="235px"
          top="103px"
          left="208px"
          fontSize="30px"
        />
        <MapDetailBox
          hiding="120+"
          desc="active clients, including Fortune 500 companies"
          height="146px"
          width="235px"
          top="13px"
          left="378px"
          fontSize="30px"
        />
        <MapDetailBox
          hiding="33+"
          desc="years on the market"
          height="146px"
          width="308px"
          top="103px"
          left="590px"
          fontSize="30px"
          bg="#0C8CE9"
        />
        <MapDetailBox
          hiding="20"
          desc="offices and delivery centres globally"
          height="146px"
          width="235px"
          top="-2px"
          left="750px"
          fontSize="30px"
        />
        <MapDetailBox
          hiding="66"
          desc="net promoted score (NPS)"
          height="146px"
          width="235px"
          top="73px"
          left="975px"
          fontSize="30px"
        />
      </div>
    </div>
  );
};

export default MapArea;
