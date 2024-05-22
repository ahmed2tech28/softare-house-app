"use client";
import { MapContext } from "@/context/MapContext";
import React, { useContext, useEffect, useState } from "react";

interface State {
  city: string;
  x: number | null;
  y: number | null;
}

const MapTooltip: React.FC = () => {
  const [mousePositionX, setMousePositionX] = useState(0);
  const [mousePositionY, setMousePositionY] = useState(0);
  const [state, setState] = useContext(MapContext);
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      // console.log(event.clientX, event.clientY);
      setMousePositionX(event.clientX);
      setMousePositionY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePositionX, mousePositionY]);
  return (
    <>
      {state.city !== "" && (
        <div
          className="absolute p-5 bg-white"
          style={{
            left: `${mousePositionX}px`,
            top: `${mousePositionY}px`,
          }}
        >
          {state.city}
        </div>
      )}
    </>
  );
};

export default MapTooltip;
