import React from "react";

const BlogCard: React.FC = () => {
  return (
    <div className="h-[40rem] bg-[#F5F5FA] rounded-[4rem] overflow-hidden cursor-pointer">
      <img src="/blogs/1.png" alt="" />
      <div className="p-5 flex flex-col justify-between items-start h-[50%]">
        <div className="flex flex-col gap-y-3">
          <p>Blog → Clinet Guides</p>
          <h1 className="text-4xl">
            Guide to Understanding the Cloud-Based App Development
          </h1>
        </div>
        <p>Oct 10, 2023</p>
      </div>
    </div>
  );
};

export default BlogCard;
