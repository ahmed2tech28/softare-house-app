import React from "react";

interface Props {
  left: string;
  top: string;
  height: string;
  width: string;
  hiding: string;
  desc: string;
  fontSize?: string;
}

const MapDetailBox: React.FC<Props> = ({
  left,
  top,
  height,
  width,
  hiding,
  desc,
  fontSize,
}) => {
  return (
    <div
      className="rounded-xl flex flex-col justify-between p-5 bg-white absolute border border-gray-300 shadow-xl"
      style={{ top, left, height, width }}
    >
      <span className="font-semibold" style={{ fontSize }}>
        {hiding}
      </span>
      <span>{desc}</span>
    </div>
  );
};

export default MapDetailBox;
