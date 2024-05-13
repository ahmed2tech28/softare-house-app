import React from "react";
import Button from "@mui/material/Button";

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
    <Button
      type={type ? type : "button"}
      variant={variant}
      sx={{
        borderRadius: `${edges == "boxy" ? "0" : "2rem"}`,
        background: `${
          variant == "contained"
            ? "#423ED6"
            : variant == "outlined"
            ? "#F7F7F7"
            : "#F7F7F7"
        }`,
        color: `${variant == "contained" ? "white" : "#423ED6"}`,
        textTransform: "none",
        fontSize: "1.2rem",
        padding: padding || "0.7rem 1rem",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
