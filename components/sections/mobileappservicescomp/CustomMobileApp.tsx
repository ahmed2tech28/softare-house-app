"use client";
import React, { useState } from "react";
import Slider from "react-slick";

const options: string[] = [
  "Taxi",
  "Streaming",
  "Booking",
  "Delivery",
  "Fitness",
  "Marketplace",
];

const CustomMobileApp: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState("Taxi");
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
    <div className="container mx-auto pb-[4rem] h-fit flex flex-col md:gap-y-[2.7rem]">
      <div className="flex lg:flex-row flex-col md:h-[84px] h-fit">
        <div className="lg:w-1/2 w-full">
          <h2 className="font-semibold text-[36px]">Custom mobile apps</h2>
        </div>
        <div className="lg:w-1/2 w-full flex justify-end">
          <p className="xl:w-[76%] leading-[28px] f-mon md:text-[16px] text-[14px] md:mb-0 mb-[1rem]">
            Helping startups and businesses build mobile solutions that support
            their brand identity, meet market needs and encourage business
            growth and expansion.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex md:flex-col flex-row md:h-[417px] h-fit bg-[#F9F9F9] rounded-[36px] lg:p-[4rem] md:p-[2rem] p-4 justify-between md:gap-x-0 gap-x-3">
        <div className="flex lg:gap-x-4 md:gap-x-2 gap-x-1 md:flex-row flex-col md:w-full w-1/3">
          {options.map((item, i) => (
            <button
              key={i}
              className={`hover:bg-[#0C8CE9] ${
                optionSelected == item ? "bg-[#0C8CE9] text-white" : ""
              } hover:text-white px-[1.5rem] rounded-[33px] h-[53px] xl:text-[30px] lg:text-[20px] text-[15px] font-semibold transition-all duration-150 md:inline inline-flex justify-start items-center`}
              onClick={(e) => setOptionSelected(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex md:w-full md:flex-row flex-col w-2/3 h-fit justify-between">
          <div className="xl:w-[40%] md:w-[60%] w-[100%] leading-[38px] f-mon">
            On-demand taxi apps usually consist of two separate in-app roles or
            apps: Driver&apos;s and Passenger&apos;s. Besides basic
            functionality, taxi apps require map APIs (Google Maps, MapKit),
            payment gateways (Stripe, PayPal), and in-app calling feature
            integration (Twilio, Bandwith).
          </div>
          <div className="xl:w-[50%] md:w-[40%] w-full flex md:items-end md:flex-col gap-x-2 h-fit">
            <div className="flex flex-col lg:w-[18rem] w-[14rem]">
              <h2 className="text-[#0C8CE9] md:text-[30px] text-[20px] font-semibold">
                2200 Hours
              </h2>
              <p className="f-mon">Average development time</p>
            </div>
            <div className="flex flex-col lg:w-[18rem] w-[14rem]">
              <h2 className="text-[#0C8CE9] md:text-[30px] text-[20px] font-semibold">
                6 Months
              </h2>
              <p className="f-mon">Average project length</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <Slider {...settings}>
          {options.map((item, i) => (
            <div
              key={i}
              className="w-full h-fit bg-[#F9F9F9] py-[3rem] px-[1rem] rounded-[2rem] flex flex-col gap-y-[2rem]"
            >
              <button
                className={`bg-[#0C8CE9] text-white px-[1.5rem] rounded-[33px] h-[53px] xl:text-[30px] lg:text-[20px] text-[15px] font-semibold transition-all duration-150 md:inline inline-flex justify-start items-center`}
                onClick={(e) => setOptionSelected(item)}
              >
                {item}
              </button>
              <p className="my-[2rem]">
                On-demand taxi apps usually consist of two separate in-app roles
                or apps: Driver{"’"}s and Passenger{"’"}s. Besides basic
                functionality, taxi apps require map APIs {"("}Google Maps,
                MapKit{")"}, payment gateways {"("}Stripe, PayPal{")"}, and
                in-app calling feature integration {"("}Twilio, Bandwith{")"}.
              </p>
              <div className="xl:w-[50%] md:w-[40%] w-full flex md:items-end flex-col gap-x-2 h-fit">
                <div className="flex flex-col lg:w-[18rem] w-[14rem]">
                  <h2 className="text-[#0C8CE9] md:text-[30px] text-[20px] font-semibold">
                    2200 Hours
                  </h2>
                  <p className="f-mon">Average development time</p>
                </div>
                <div className="flex flex-col lg:w-[18rem] w-[14rem]">
                  <h2 className="text-[#0C8CE9] md:text-[30px] text-[20px] font-semibold">
                    6 Months
                  </h2>
                  <p className="f-mon">Average project length</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomMobileApp;
