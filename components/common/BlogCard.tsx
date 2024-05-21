import React from "react";

const BlogCard: React.FC = () => {
  return (
    <div className="h-[487px] bg-[#F5F5FA] rounded-[0.75rem] overflow-hidden cursor-pointer sm:w-[390px] w-[90vw] lg:mx-0 mx-auto">
      <img src="/blogs/1.png" alt="" />
      <div className="px-7 py-4 flex flex-col justify-between items-start h-[50%]">
        <div className="flex flex-col gap-y-6">
          <p>Blog → Clinet Guides</p>
          <h1 className="text-[22px]">
            Guide to Understanding the Cloud-Based App Development
          </h1>
        </div>
        <p className="text-[16px]">Oct 10, 2023</p>
      </div>
    </div>
  );
};

export default BlogCard;
