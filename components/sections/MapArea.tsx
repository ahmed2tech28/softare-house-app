import React from "react";
import MapDetailBox from "../common/MapDetailBox";

const MapArea: React.FC = () => {
  return (
    <div className="container mx-auto h-[60rem] relative">
      <img src="/map.png" width={"900"} alt="map" />
      <span className="lg:inline hidden">
        <MapDetailBox
          left={"29rem"}
          top={"3rem"}
          height="7rem"
          width="12rem"
          hiding="Estina"
          desc="Tallinn"
        />
      </span>
      <span className="lg:hidden inline">
        <MapDetailBox
          left={"25rem"}
          top={"1rem"}
          height="7rem"
          width="12rem"
          hiding="Estina"
          desc="Tallinn"
        />
      </span>
      <span className="lg:inline hidden">
        <MapDetailBox
          left={"70vw"}
          top={"1rem"}
          height="10rem"
          width="18rem"
          fontSize="2rem"
          hiding="1000+"
          desc="projects dilivered"
        />
      </span>
      <span className="lg:hidden inline">
        <MapDetailBox
          left={"60vw"}
          top={"1rem"}
          height="10rem"
          width="18rem"
          fontSize="2rem"
          hiding="1000+"
          desc="projects dilivered"
        />
      </span>
      <span className="lg:inline hidden">
        <MapDetailBox
          left={"65vw"}
          top={"12rem"}
          height="10rem"
          width="18rem"
          fontSize="2rem"
          hiding="120+"
          desc="active clients"
        />
      </span>
      <span className="lg:hidden inline">
        <MapDetailBox
          left={"55vw"}
          top={"12rem"}
          height="10rem"
          width="18rem"
          fontSize="2rem"
          hiding="120+"
          desc="active clients"
        />
      </span>
      <span className="lg:inline hidden">
        <MapDetailBox
          left={"70vw"}
          top={"24rem"}
          height="10rem"
          width="18rem"
          fontSize="2rem"
          hiding="66"
          desc="net promoted score (NPS)"
        />
      </span>
      <span className="lg:hidden inline">
        <MapDetailBox
          left={"60vw"}
          top={"24rem"}
          height="10rem"
          width="18rem"
          fontSize="2rem"
          hiding="66"
          desc="net promoted score (NPS)"
        />
      </span>
      <span className="lg:inline hidden">
        <MapDetailBox
          left={"65vw"}
          top={"36rem"}
          height="10rem"
          width="18rem"
          fontSize="2rem"
          hiding="2000+"
          desc="top tech experts, middle and senior level"
        />
      </span>
      <span className="lg:hidden inline">
        <MapDetailBox
          left={"15vw"}
          top={"18rem"}
          height="10rem"
          width="18rem"
          fontSize="2rem"
          hiding="2000+"
          desc="top tech experts, middle and senior level"
        />
      </span>
      <MapDetailBox
        left={"48vw"}
        top={"30rem"}
        height="10rem"
        width="18rem"
        fontSize="2rem"
        hiding="2000+"
        desc="top tech experts, middle and senior level"
      />
      <MapDetailBox
        left={"31vw"}
        top={"36rem"}
        height="10rem"
        width="18rem"
        fontSize="2rem"
        hiding="33+"
        desc="Years on the market"
      />
    </div>
  );
};

export default MapArea;
