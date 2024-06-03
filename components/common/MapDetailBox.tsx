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
    <>
      <div
        className="rounded-xl hidden flex-col justify-start p-5 bg-white absolute border border-gray-300 shadow-xl xl:flex"
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
      <div
        className="rounded-xl hidden flex-col justify-start p-5 bg-white absolute border border-gray-300 shadow-xl xl:hidden lg:flex"
        style={{
          top,
          left: `${
            parseInt(left.split("p")[0]) > 0 &&
            parseInt(left.split("p")[0]) < 590
              ? parseInt(left.split("p")[0]) - 50
              : parseInt(left.split("p")[0]) >= 590 &&
                parseInt(left.split("p")[0]) < 975
              ? parseInt(left.split("p")[0]) - 100
              : parseInt(left.split("p")[0]) >= 975
              ? parseInt(left.split("p")[0]) - 150
              : parseInt(left.split("p")[0])
          }px`,
          height,
          width: `${parseInt(width.split("p")[0]) - 50}px`,
          background: `${bg || "white"}`,
        }}
      >
        <span
          className="font-semibold"
          style={{ fontSize, color: `${bg ? "white" : "black"}` }}
        >
          {hiding}
        </span>
        <span style={{ color: `${bg ? "white" : "#969FAF"}` }}>{desc}</span>
      </div>
    </>
  );
};

export default MapDetailBox;
