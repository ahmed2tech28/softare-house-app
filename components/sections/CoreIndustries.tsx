"use client";
import React from "react";
import Slider from "react-slick";

interface industry {
  img: string;
  title: string;
  desc: string;
}

const industries: industry[] = [
  {
    img: "",
    title: "Finance",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/insurance.png",
    title: "Insurance",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/health.png",
    title: "Healthcare",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/Agriculture.png",
    title: "Agriculture",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/logistics.png",
    title: "logistics",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/Automative.png",
    title: "Automotive",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/retail.png",
    title: "Retail",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/energy.png",
    title: "Energy",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/government.png",
    title: "Government",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
  {
    img: "/industry-icons/entertainment.png",
    title: "Media & Entertainment",
    desc: "We help financial institutions manage their risks and unlock Big Data's potential with software development for Fintech comprising advanced analytics, Machine Learning and more.",
  },
];

const Industry: React.FC<industry> = ({ title, desc, img }) => {
  return (
    <div className="border-[0.4px] border-[#eeececd6] p-4 w-[240px] h-[283px] flex flex-col justify-between lg:mx-0 mx-auto hover:bg-[#0C8CE9] transition-colors duration-100 ease-linear cursor-pointer group">
      <div className="lg:hidden flex-col gap-y-4 group-hover:flex flex">
        <h1 className="text-white text-[16px]">{title}</h1>
        <p className="text-white text-[14px] font-light">{desc}</p>
      </div>
      <div className="lg:hidden justify-between w-full group-hover:flex flex">
        <button className="text-white text-[12px]">View Case Study</button>
        <button className="bg-white px-3 rounded-2xl">&gt;</button>
      </div>
      <div className="flex flex-col w-full h-full group-hover:hidden gap-y-4">
        {img && <img width={"80"} src={img} className="industry-img" />}
        <h1 className="text-white text-[16px]">{title}</h1>
      </div>
    </div>
  );
};

const CoreIndustries: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i: any) => {
      return (
        <div
          className={`w-[0.8rem] h-[0.8rem] bg-[#CBD1DC] rounded-[0.3rem] cursor-pointer my-3`}
        />
      );
    },
  };
  return (
    <section className="w-screen xl:h-[816px] h-fit bg-[#111827] mb-4 py-10 flex flex-col gap-y-4">
      <h1 className="text-center text-white text-[36px]">
        Core Industries we Serve
      </h1>
      <p className="text-center text-white text-[16px] font-light lg:w-[684px] w-[80vw] mx-auto leading-[28px]">
        We provide web and mobile app development services to a wide range of
        industries based on the latest industry trends.
      </p>
      <div className="mx-auto xl:h-[670px] h-fit mt-7 lg:grid xl:grid-cols-5 lg:grid-cols-3 hidden">
        {industries.map((item, i) => (
          <Industry
            key={i}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
      <div className="h-fit lg:hidden">
        <Slider {...settings}>
          {industries.map((item, i) => (
            <Industry
              key={i}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CoreIndustries;
