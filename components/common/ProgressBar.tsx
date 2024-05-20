import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-[100%] h-[4px] rounded-full overflow-hidden bg-blue-200">
      <div className="inner-progress bg-blue-500 h-full"></div>
    </div>
  );
};

export default ProgressBar;
