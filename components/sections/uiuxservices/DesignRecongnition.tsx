import React from "react";
import Top from "./common/TopHiding";

const DesignRecongnition = () => {
  return (
    <div className="w-screen py-[4rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <Top
          hiding="Our design recognition"
          description="Leading rating & review platforms rank Cleveroad among top software development companies due to our tech assistance."
        />
        <div className="sm:grid w-full lg:justify-between xl:text-[1rem] text-[0.75rem] gap-x-3 lg:flex sm:grid-cols-2 gap-y-3 flex flex-col lg:flex-row h-fit items-center">
          <img
            src="/designrecongnitionimages/1.svg"
            alt="design-recongnition"
            className="lg:w-[23%] w-[60%] lg:mx-0 mx-auto"
          />
          <img
            src="/designrecongnitionimages/2.svg"
            alt="design-recongnition"
            className="lg:w-[23%] w-[60%] lg:mx-0 mx-auto"
          />
          <img
            src="/designrecongnitionimages/3.svg"
            alt="design-recongnition"
            className="lg:w-[23%] w-[60%] lg:mx-0 mx-auto"
          />
          <img
            src="/designrecongnitionimages/4.svg"
            alt="design-recongnition"
            className="lg:w-[23%] w-[60%] lg:mx-0 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignRecongnition;
