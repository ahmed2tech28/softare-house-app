import React from "react";

interface Props {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "contained" | "outlined" | "text";
  edges?: "boxy" | "rounded";
  type?: "submit" | "button" | "reset";
  padding?: string;
  bg?: string;
}

const ButtonComp: React.FC<Props> = ({
  onClick,
  text,
  type,
  variant,
  edges,
  padding,
  bg,
}) => {
  if (variant == "contained") {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`bg-[#0C8CE9] text-white leading-none text-[1rem] py-[1rem] font-semibold f-mon w-[220px] rounded-full`}
      >
        {text}
      </button>
    );
  }
  return (
    <button className="inline-flex gap-x-3 items-center">
      {variant == "text" && (
        <span className="w-[31px] h-[20px] bg-[#0C8CE9] rounded-xl inline-flex justify-center items-center">
          <img src="/arrow.svg" className=" fill-white" width={"10"} alt="" />
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};

export default ButtonComp;
