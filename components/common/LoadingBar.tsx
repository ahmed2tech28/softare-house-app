"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import LoadingBarAni from "react-top-loading-bar";

const LoadingBar = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    setProgress(100);
  }, [pathName]);

  return (
    <LoadingBarAni
      color="#0C8CE9"
      height={4}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default LoadingBar;
