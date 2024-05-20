"use client";
import { MapContext } from "@/context/MapContext";
import React, { useContext } from "react";

interface State {
  city: string;
  x: number | null;
  y: number | null;
}

const MapTooltip: React.FC = () => {
  const [state, setState] = useContext(MapContext);
  return (
    <>
      {state.city !== "" && (
        <div
          className="absolute p-5 bg-white"
          style={{
            left: `${state.x && state.x}px`,
            top: `${state.y && state.y}px`,
          }}
        >
          {state.city}
        </div>
      )}
    </>
  );
};

export default MapTooltip;
