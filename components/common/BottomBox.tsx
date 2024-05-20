"use client";
import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import ProgressBar from "./ProgressBar";

interface Boxes {
  title: string;
  desc: string;
}

interface BoxProps {
  title: string;
  desc: string;
  i: number;
  expand?: number;
  onHover: (i: number) => void;
  animate: boolean;
}

const Button: React.FC<{ blue: boolean }> = ({ blue }) => {
  return (
    <button
      className={`${
        blue ? "bg-[#0C8CE9]" : ""
      } w-[2rem] h-[1.3rem] rounded-[22px] flex justify-center items-center`}
    >
      <img src="/arrow.svg" width={"10"} alt="" />
    </button>
  );
};

const Box: React.FC<BoxProps> = ({
  i,
  desc,
  title,
  expand,
  onHover,
  animate,
}) => {
  return (
    <div
      className={`${
        expand == i ? "w-[34%]" : "w-[22%]"
      } h-full border-[0.05px] border-[#54575E] p-5 flex flex-col justify-between transition-[width] duration-1000`}
      onClick={(e) => onHover(i)}
    >
      {expand == i && animate ? (
        <ProgressBar />
      ) : (
        <div className="h-[4px]"></div>
      )}
      <div>
        <img src={`/header-files/${title}`} width={"137px"} alt="" />
        {expand == i && <p className="text-[16px] w-[90%] ms-2">{desc}</p>}
      </div>
      <div className="flex justify-between">
        {expand == i && <button>View case study</button>}
        {!(expand == i) && <span></span>}
        <Button blue={expand == i} />
      </div>
    </div>
  );
};

const MobileBox: React.FC<BoxProps> = ({
  desc,
  i,
  onHover,
  animate,
  title,
  expand,
}) => {
  if (expand == i) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-5">
        <ProgressBar />
        <div>
          <img src={`/header-files/${title}`} width={"200"} alt="" />
          <p className="text-[14px] w-[90%] ms-2">{desc}</p>
        </div>
        <div className="flex justify-between">
          <button>View case study</button>
          <Button blue={true} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

const BottomBox: React.FC<{
  setImg: (data: any) => void;
  setIsFaiding: (data: any) => void;
  isFading: boolean;
}> = ({ setImg, setIsFaiding, isFading }) => {
  const [expand, setExpand] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFaiding(true);
      if (expand == 3) {
        setExpand(0);
      } else {
        setExpand(expand + 1);
      }
    }, 7900);
    setImg(`${expand}.png`);
    return () => clearInterval(intervalId);
  }, [expand]);

  useEffect(() => {
    if (isFading) {
      setTimeout(() => {
        setImg(`${expand}.png`);
        setIsFaiding(false); // Start fading in
      }, 500); // Time to match the fade-out transition duration
    } else {
      setImg(`${expand}.png`);
    }
  }, [expand, isFading]);

  useEffect(() => {
    setAnimate(true);
  }, [animate]);

  const onHover = (i: number) => {
    setExpand(i);
  };

  const boxes: Boxes[] = [
    {
      title: "1.png",
      desc: "Reduced animate to market for a suite of enterprise apps .",
    },
    {
      title: "2.png",
      desc: "Reduced animate to market for a suite of enterprise apps ",
    },
    {
      title: "3.png",
      desc: "Reduced animate to market for a suite of enterprise apps .",
    },
    {
      title: "4.png",
      desc: "Reduced animate to market for a suite of enterprise apps ",
    },
  ];
  return (
    <div className="w-full mx-auto h-60 mt-36">
      <div className="container mx-auto lg:flex hidden flex-wrap h-full bg-[rgba(0,0,0,0.5)] rounded-[12px] overflow-hidden border-[0.1px] border-[#54575E]">
        {boxes.map((item, i) => {
          return (
            <Box
              title={item.title}
              desc={item.desc}
              i={i}
              key={i}
              expand={expand}
              onHover={onHover}
              animate={animate}
            />
          );
        })}
      </div>
      <div className="container mx-auto flex lg:hidden flex-wrap h-full bg-[rgba(0,0,0,0.5)] rounded-[10px] border-[0.1px] border-white">
        {boxes.map((item, i) => {
          return (
            <MobileBox
              title={item.title}
              desc={item.desc}
              i={i}
              key={i}
              expand={expand}
              onHover={onHover}
              animate={animate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BottomBox;
