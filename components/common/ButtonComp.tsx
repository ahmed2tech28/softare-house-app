import React from "react";

interface Props {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "contained" | "outlined" | "text";
  edges?: "boxy" | "rounded";
  type?: "submit" | "button" | "reset";
  padding?: string;
}

const ButtonComp: React.FC<Props> = ({
  onClick,
  text,
  type,
  variant,
  edges,
  padding,
}) => {
  return (
    <button>
      {variant == "text" && (
        <span className="bg-[#0C8CE9] text-white px-4 py-[0.35rem] rounded-[22px] me-3">
          {" "}
          &gt;
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};

export default ButtonComp;
