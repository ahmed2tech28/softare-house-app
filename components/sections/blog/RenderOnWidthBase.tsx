"use client";
import React, { useEffect, useState } from "react";
import BlogArea from "./BlogArea";
import BlogAreaMob from "./BlogAreaMob";

const RenderOnWidthBase = () => {
  const [showView, setShowView] = useState<"mobile" | "desktop">("desktop");
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) {
        setShowView("mobile");
      } else if (window.innerWidth >= 1024) {
        setShowView("desktop");
      }
    }
  }, [window.innerWidth, showView]);
  return (
    <>
      {showView == "desktop" && <BlogArea />}
      {showView == "mobile" && <BlogAreaMob />}
    </>
  );
};

export default RenderOnWidthBase;
