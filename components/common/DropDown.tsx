"use client";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface Props {
  className: string;
  options: string[];
}

const DropDownIcon: React.FC = () => {
  return (
    <svg
      width="29"
      height="19"
      viewBox="0 0 29 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="29" height="19" rx="9.5" fill="#CBD1DC" />
      <path
        d="M11.0705 8.17829C10.8377 7.94308 10.4344 7.94308 10.1862 8.16359C10.0621 8.28119 10 8.44289 10 8.5899C10 8.7369 10.0621 8.8839 10.1707 9.00151L14.0491 12.8236C14.1732 12.9412 14.3284 13 14.499 13C14.6697 13 14.8248 12.9412 14.9489 12.8236L18.8274 9.00151C19.0601 8.7663 19.0601 8.39879 18.8118 8.16359C18.5636 7.94308 18.1758 7.94308 17.9276 8.17829L14.499 11.5594L11.0705 8.17829Z"
        fill="white"
        stroke="white"
        stroke-width="0.25"
      />
    </svg>
  );
};

const DropDown: React.FC<Props> = ({ className, options }) => {
  const [opt, setOpt] = useState(options[0]);
  const handleChange = (event: any) => {
    setOpt(event.target.value);
  };
  return (
    <div className={className}>
      <div className="w-full h-full px-3">
        <FormControl variant="standard" sx={{ width: "100%", height: "100%" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={opt}
            onChange={handleChange}
            label="Age"
            sx={{ marginTop: "1rem" }}
            IconComponent={DropDownIcon}
          >
            {options.map((item, i) => (
              <MenuItem value={item} key={i}>
                <b>{item}</b>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default DropDown;
