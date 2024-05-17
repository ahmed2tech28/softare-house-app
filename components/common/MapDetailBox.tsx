import React from "react";

interface Props {
  left: string;
  top: string;
  height: string;
  width: string;
  hiding: string;
  desc: string;
  fontSize?: string;
  bg?: string;
}

const MapDetailBox: React.FC<Props> = ({
  left,
  top,
  height,
  width,
  hiding,
  desc,
  fontSize,
  bg,
}) => {
  return (
    <div
      className="rounded-xl flex flex-col justify-start p-5 bg-white absolute border border-gray-300 shadow-xl"
      style={{ top, left, height, width, background: `${bg || "white"}` }}
    >
      <span
        className="font-semibold"
        style={{ fontSize, color: `${bg ? "white" : "black"}` }}
      >
        {hiding}
      </span>
      <span style={{ color: `${bg ? "white" : "#969FAF"}` }}>{desc}</span>
    </div>
  );
};

export default MapDetailBox;
