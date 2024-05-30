"use client";
import React, { useState } from "react";

interface questions {
  question: string;
  answer: string;
}

const QuestionComp: React.FC<questions> = ({ answer, question }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div
      className={`flex flex-col ${
        opened ? "h-[296px]" : "h-[114px]"
      } justify-start items-start gap-x-5 bg-[#F9F9F9] hover:bg-[#E2F3FF] p-[1rem] py-[3rem] transition-all duration-100 gap-y-[3rem]`}
    >
      <div className="flex items-center gap-x-5 h-[14px] py-2">
        <div
          className="text-[3.5rem] text-[#0C8CE9] cursor-pointer mt-3"
          onClick={(e) => setOpened(!opened)}
        >
          {opened ? "-" : "+"}
        </div>
        <h1 className="font-normal">{question}</h1>
      </div>
      {opened && (
        <div
          dangerouslySetInnerHTML={{ __html: answer }}
          className="px-[3rem] font-light"
        ></div>
      )}
    </div>
  );
};

export default QuestionComp;
