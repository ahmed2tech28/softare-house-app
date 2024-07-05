import React from "react";

interface BoxTextBgProps {
  Component: React.FC;
  tooltip: string;
  hiding: string;
  description: string;
  color?: string;
  className?: string;
}

const BoxTextBg: React.FC<BoxTextBgProps> = ({
  Component,
  tooltip,
  hiding,
  description,
  color,
  className,
}) => {
  return (
    <>
      <Component />
      <div
        className={`w-full h-full absolute top-0 left-0 flex flex-col items-start justify-center gap-y-4 ${className}`}
        style={{ color }}
      >
        <p className="border-[1px] px-2">{tooltip}</p>
        <h1
          className="text-[30px] leading-[33px] font-semibold"
          dangerouslySetInnerHTML={{ __html: hiding }}
        ></h1>
        <p className="f-mon">{description}</p>
      </div>
    </>
  );
};

export default BoxTextBg;
