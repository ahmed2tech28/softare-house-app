"use client";

import React, { useState } from "react";
import ButtonComp from "../../common/ButtonComp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Slider from "react-slick";
import Clinets from "@/data/Clients";
import Link from "next/link";
import { findFlagUrlByNationality } from "country-flags-svg";

interface PaginationBAllProps {
  index: number;
  paginationClicked: number;
  onClick: (index: number) => void;
}

interface clientdetails {
  name: string;
  role: string;
  country: string;
  review: string;
  link: string;
  img: string;
  nationality: string;
}

const ClientDetails: React.FC<clientdetails> = ({
  name,
  review,
  role,
  country,
  link,
  img,
  nationality,
}) => {
  return (
    <div className="flex lg:justify-between items-center lg:h-[27rem] h-[40rem] lg:flex-row flex-col w-full">
      <div className="lg:w-[40%] w-[80%] h-[25rem] overflow-hidden group relative rounded-3xl">
        <img src={img} alt="client" className="w-full h-full object-cover " />
        <div className="hidden group-hover:flex cursor-pointer transition-all duration-100 ease-in absolute top-0 left-0 w-full h-full bg-[#00000069] justify-center items-center">
          <span className="player bg-[#ffffff51] w-16 h-16 rounded-2xl flex justify-center items-center">
            <PlayArrowIcon sx={{ color: "white", fontSize: "3rem" }} />
          </span>
        </div>
      </div>
      <div className="lg:w-[50%] h-[100%] flex flex-col gap-y-6 justify-center w-[90%] md:mx-0 mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-2/3 f-mon">
            <h1 className="font-bold text-[22px]">{name}</h1>
            <h1 className="text-[18px]">{role}</h1>
          </div>
          <div className="w-1/3 flex gap-x-2 items-center">
            <img
              src={findFlagUrlByNationality(nationality) || "/flag.png"}
              alt={nationality}
              width={30}
            />
            <h1 className="text-[18px]">{country}</h1>
          </div>
        </div>
        <p className="font-normal text-[16px] text-[#969FAF]">{review}</p>
        <div>
          <Link href={link}>
            <ButtonComp
              text="View Case Study"
              variant="text"
              edges="rounded"
              type="button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ClientArea: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    customPaging: (i: any) => {
      return (
        <div
          className={`w-[0.8rem] h-[0.8rem] bg-[#CBD1DC] rounded-full cursor-pointer lg:mt-[2rem]`}
        />
      );
    },
  };
  return (
    <section className="w-screen lg:h-[40rem] h-fit" id="portfolio">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between justify-center gap-y-3 items-center h-36">
          <h1 className="font-semibold sm:text-[38px] text-[28px] sm:w-auto w-[95vw] sm:text-left text-center">
            Our Clinet Say About Us
          </h1>
          <ButtonComp
            text="More reviews"
            variant="text"
            edges="rounded"
            type="button"
          />
        </div>
        <Slider {...settings}>
          {Clinets.map((item, i) => (
            <ClientDetails key={i} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientArea;
