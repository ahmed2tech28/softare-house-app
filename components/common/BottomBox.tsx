"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

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

const Box: React.FC<BoxProps> = ({ i, desc, title, expand, onHover, time }) => {
  const completed = (time / 7) * 100;
  if (expand == i) {
    return (
      <div className="flex h-full justify-center items-center lg:w-[35%] w-[95vw] lg:mx-0 mx-auto transition-all duration-700 ease-in">
        <div className="w-[92%] xl:p-0 md:p-2">
          <h1
            className="font-bold text-2xl"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <p className="leading-[2rem] text-[1.15rem]">{desc}</p>
          <ProgressBar
            completed={completed}
            customLabel="|"
            labelColor="green"
            bgColor="green"
            height="3px"
            className="mt-3"
          />
        </div>
        <div className="w-[8%] h-[62%] flex flex-col justify-start items-start">
          <button className="px-1 hover:bg-[#423ED6]">→</button>
        </div>
      </div>
    );
  }
  return (
    <div className="lg:flex h-full justify-center items-center w-[20%] transition-all duration-1000 ease-out hidden">
      <div className="w-[92%] xl:p-0 md:p-2 h-[38%]">
        <h1
          className="font-bold text-2xl"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
      </div>
      <div className="w-[8%] h-[62%] flex flex-col justify-start items-start"></div>
    </div>
  );
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
    }, 7000);
    return () => clearInterval(intervalId);
  }, [expand]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  const onHover = (i: number) => {
    setExpand(i);
  };

  const boxes: Boxes[] = [
    {
      title: "Dedicated Development Team",
      desc: "Fast team building, flexible collaboration, and software engineers with proven expertise to give your project new superpowers.",
    },
    {
      title: "End-to-End Software development",
      desc: "Full coverage of the development cycle, highly customized solutions, and partnership with the focus on your business goals.",
    },
    {
      title: "PoC/MVP <br> development",
      desc: "Quick project start, well-calculated functionality, high return on investment in the product, and ample room for improvements.",
    },
    {
      title: "Legacy software <br>modernization",
      desc: "Flexible approach to replace and rethink outdated software solutions for scale and growth with the best cost-effectiveness.",
    },
  ];
  return (
    <div className="w-full mx-auto bg-[rgba(0,0,0,0.5)] h-72 ">
      <div className="container mx-auto flex flex-wrap h-full gap-x-3">
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
    </div>
  );
};

export default BottomBox;
