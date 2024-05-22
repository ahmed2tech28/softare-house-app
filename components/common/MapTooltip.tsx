"use client";
import { MapContext } from "@/context/MapContext";
import React, { useContext, useEffect, useState } from "react";

interface State {
  city: string;
  x: number | null;
  y: number | null;
}

const MapTooltip: React.FC<{
  mousePositionX: number;
  mousePositionY: number;
}> = ({ mousePositionX, mousePositionY }) => {
  const [state, setState] = useContext(MapContext);

  return (
    <>
      {state.city !== "" && (
        <div
          className="absolute p-5 bg-white"
          style={{
            left: `${mousePositionX}px`,
            top: `${mousePositionY - 100}px`,
          }}
        >
          {state.city}
        </div>
      )}
    </>
  );
};

export default MapTooltip;
