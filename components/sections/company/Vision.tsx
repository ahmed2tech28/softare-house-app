import React from "react";

const Vision = () => {
  return (
    <section className="h-fit flex container mx-auto py-[3rem] lg:flex-row flex-col-reverse gap-y-6">
      <div className="lg:w-1/2 w-full flex flex-col justify-center">
        <h1 className="text-[30px] font-semibold">Our Vision</h1>
        <p className="f-mon leading-[38px]">
          Our belief in creating tangible value for our customers is what we
          think is different about ELEKS. Our attention to detail and quality is
          unmatched in the industry. We're not just a resource provider. We
          value our customers' success as much as our own – sharing development
          risk, so that they can be bold in their adoption of new technologies.
        </p>
      </div>
      <div className="lg:w-1/2 w-full flex lg:justify-end">
        <img
          src="/about-dev-house/business-people.png"
          alt="devhouse-business-people"
          className="w-[562px] h-[374px] object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Vision;
