import React from "react";

const SpecialBtn: React.FC = () => {
  return (
    <button className="hover:bg-[#1B4E68] bg-gray-200 transition-colors duration-75 ease-in hover:text-white text-left py-10 rounded-[4rem] px-8 font-semibold inline-flex justify-between">
      <span className="text-xl">Explore more</span>
      <span className="text-xl">→</span>
    </button>
  );
};

const Card: React.FC = () => {
  return (
    <div className="w-[30rem] shadow-lg h-[40rem] rounded-[2rem] border border-gray-300 p-5 py-10 flex flex-col gap-y-4">
      <h1 className="text-4xl font-bold">Mobile App Development</h1>
      <p className="text-[1.5rem]">
        Our mobile developers use well-proven agile practices and follow a
        client-oriented approach to develop custom mobile apps...
      </p>
      <ul className="list-disc underline font-medium ms-4 text-[1.5rem] leading-[4rem] px-10">
        <li>IOS app development</li>
        <li>Android app development</li>
        <li>Flutter app development</li>
      </ul>
      <SpecialBtn />
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section
      className="h-[55rem] my-[3rem] flex flex-col gap-y-3"
      id="services"
    >
      <h1 className="text-center font-semibold text-4xl leading-[5rem]">
        Our Services
      </h1>
      <div className="ms-[10vw] overflow-x-auto overflow-y-hidden">
        <div className="w-fit flex gap-x-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Services;
