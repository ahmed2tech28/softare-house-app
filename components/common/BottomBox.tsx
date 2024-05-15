"use client";
import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

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
  time: number;
}

const Button: React.FC<{ blue: boolean }> = ({ blue }) => {
  return (
    <button
      className={`${
        blue ? "bg-[#0C8CE9]" : ""
      } w-[2rem] h-[1.3rem] rounded-[22px]`}
    >
      &gt;
    </button>
  );
};

const Box: React.FC<BoxProps> = ({ i, desc, title, expand, onHover, time }) => {
  const completed = (time / 7) * 100;
  return (
    <div
      className={`${
        expand == i ? "w-[34%]" : "w-[22%]"
      } h-full border-[0.1px] border-white p-5 flex flex-col justify-between transition-all delay-700`}
    >
      {expand == i ? (
        <LinearProgress variant="determinate" value={completed} />
      ) : (
        <div className="h-[3px]"></div>
      )}
      <div>
        <img src={`/header-files/${title}`} width={"200"} alt="" />
        {expand == i && <p className="text-[14px] w-[90%] ms-2">{desc}</p>}
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
  time,
  title,
  expand,
}) => {
  const completed = (time / 7) * 100;

  if (expand == i) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-5">
        <LinearProgress variant="determinate" value={completed} />
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

const BottomBox: React.FC = () => {
  const [expand, setExpand] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(0);
      if (expand == 3) {
        setExpand(0);
      } else {
        setExpand(expand + 1);
      }
    }, 8000);
    return () => clearInterval(intervalId);
  }, [expand]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 0.5);
    }, 500);
    return () => clearInterval(intervalId);
  }, [time]);

  const onHover = (i: number) => {
    setExpand(i);
  };

  const boxes: Boxes[] = [
    {
      title: "1.png",
      desc: "Reduced time to market for a suite of enterprise apps .",
    },
    {
      title: "2.png",
      desc: "Reduced time to market for a suite of enterprise apps ",
    },
    {
      title: "3.png",
      desc: "Reduced time to market for a suite of enterprise apps .",
    },
    {
      title: "4.png",
      desc: "Reduced time to market for a suite of enterprise apps ",
    },
  ];
  return (
    <div className="w-full mx-auto h-60 mt-36">
      <div className="container mx-auto lg:flex hidden flex-wrap h-full bg-[rgba(0,0,0,0.5)] rounded-[10px] border-[0.1px] border-white">
        {boxes.map((item, i) => {
          return (
            <Box
              title={item.title}
              desc={item.desc}
              i={i}
              key={i}
              expand={expand}
              onHover={onHover}
              time={time}
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
              time={time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BottomBox;
