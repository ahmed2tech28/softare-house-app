"use client";
import React from "react";
import Slider from "react-slick";

interface CardProps {
  title: string;
  desc: string;
  category: string;
}

const SpecialBtn: React.FC = () => {
  return (
    <button className="group-hover:bg-[#0C8CE9] bg-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white text-left h-[65px] rounded-[4rem] px-8 font-semibold inline-flex justify-between items-center">
      <span className="text-xl">Explore more</span>
      <span className="text-xl">→</span>
    </button>
  );
};

const CardCircle: React.FC = () => {
  return <div className="w-[1.6rem] rounded-xl h-3 bg-[#0C8CE9]"></div>;
};

const Card: React.FC<CardProps> = ({ category, desc, title }) => {
  return (
    <div className="w-[407px] hover-shadow-custom h-[509px] rounded-[2rem] border-[0.5px] border-[#CBD1DC] p-5 py-10 flex flex-col justify-between group cursor-pointer">
      <div className="top flex justify-start gap-x-2 items-center">
        <CardCircle />
        <div>{category}</div>
      </div>
      <div className="bottom flex flex-col gap-y-2 justify-start h-52">
        <h1
          className="text-[30px] font-semibold"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="text-[16px] text-[#969FAF] leading-[30.4px] f-mon">
          {desc}
        </p>
      </div>
      <SpecialBtn />
    </div>
  );
};

const Services: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const cards: CardProps[] = [
    {
      title: "Custom Web App Development Services",
      desc: "Get rich web experience related to web application development, SaaS application development, single page application development services and more.",
      category: "Development",
    },
    {
      title: "Mobile App Development Services",
      desc: "We are providing steller native mobile app development, hybrid mobile application development and cross platform mobile app development services.",
      category: "Development",
    },
    {
      title: "UI/UX <br> Design Services",
      desc: "Want to turn your idea into a reality? We are providing UI/UX design services because a design without vision is just a painting.",
      category: "Design",
    },
    {
      title: "Hire a <br> Dedicated Team",
      desc: "Looking for a solution related to a startup or established business? Hire a developer for web and mobile development services.",
      category: "Design",
    },
  ];
  return (
    <section
      className="h-[45rem] my-[3rem] flex flex-col gap-y-3 "
      id="services"
    >
      <h1 className="text-center font-semibold text-4xl leading-[5rem]">
        Our Services
      </h1>
      <div className="ms-[10vw] overflow-x-auto py-[1rem]">
        <div className="w-fit flex gap-x-5 h-full px-4">
          {cards.map((item, i) => {
            return (
              <Card
                title={item.title}
                desc={item.desc}
                category={item.category}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
