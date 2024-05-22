"use client";
import React, { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";

const LatestInsightCrowsel: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (contentRef.current) {
        setIsDragging(true);
        setStartX(e.pageX - contentRef.current.offsetLeft);
        setScrollLeft(contentRef.current.scrollLeft);
      }
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !contentRef.current) return;
      e.preventDefault();
      const x = e.pageX - contentRef.current.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      contentRef.current.scrollLeft = scrollLeft - walk;
    };

    const refCurrent = contentRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("mousedown", handleMouseDown);
      refCurrent.addEventListener("mouseleave", handleMouseLeave);
      refCurrent.addEventListener("mouseup", handleMouseUp);
      refCurrent.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("mousedown", handleMouseDown);
        refCurrent.removeEventListener("mouseleave", handleMouseLeave);
        refCurrent.removeEventListener("mouseup", handleMouseUp);
        refCurrent.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isDragging, startX, scrollLeft]);
  return (
    <div
      className="container mx-auto overflow-x-auto gap-y-5 latest-insights"
      ref={contentRef}
    >
      <div className="w-fit flex justify-center gap-x-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default LatestInsightCrowsel;
