import React from "react";

const FeauredPartner: React.FC = () => {
  return (
    <section className="container mx-auto h-fit flex flex-col gap-y-[4rem] mb-[4rem]">
      <div>
        <h1 className="text-[36px] font-semibold">
          Featured Partners & Clients
        </h1>
        <p>
          Clients and partners we&apos;ve worked with frequently recommend us to
          others thanks to our individual approach to tech problems
        </p>
      </div>
      <div className="w-full h-fit flex justify-center items-start">
        <img
          src="/partners.svg"
          alt="partners"
          style={{ filter: "grayscale(100%)" }}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default FeauredPartner;
