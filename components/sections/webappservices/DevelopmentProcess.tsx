"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const steps: string[] = [
  "Study the project",
  "Product design",
  "Development & testing",
  "Launch",
  "Maintenance (per request)",
];

const teams: string[] = [
  "Business Analyst",
  "UI/UX designer",
  "QA engineer",
  "Project Manager",
  "Solution Architect",
];

const StepShow: React.FC<{
  stepSelected: string;
  setStepSelected: any;
}> = ({ setStepSelected, stepSelected }) => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  const sliderRef = useRef<any>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const slider = sliderRef.current?.innerSlider;
    const delta = e.deltaY;

    if (delta < 0) {
      slider?.slickPrev();
    } else {
      slider?.slickNext();
    }
  };

  return (
    <div className="lg:w-1/2 w-full overflow-hidden" onWheel={handleWheel}>
      <Slider {...settings} ref={sliderRef}>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Study the project")}
        >
          <h1 className="text-[30px] font-semibold">
            {steps.indexOf(stepSelected) + 1 < 10
              ? `0${steps.indexOf(stepSelected) + 1}`
              : steps.indexOf(stepSelected) + 1}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {stepSelected}
          </h1>
          <p className="f-mon leading-[28px]">
            We analyze your requirements — project type, features, platforms —
            then create specification, design, and approve wireframes. In other
            cases, we study your already-made documentation and provide rough
            and detailed time & money estimates.
          </p>
          <h3 className="text-[26px] font-semibold xl:mt-[3rem] mt-[1.5rem]">
            Team
          </h3>
          <div className="grid grid-cols-3 gap-y-[1rem] mt-[1rem]">
            {teams.map((item, i) => (
              <span className="xl:text-[16px] text-[14px]" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Product design")}
        >
          <h1 className="text-[30px] font-semibold">
            {steps.indexOf(stepSelected) + 1 < 10
              ? `0${steps.indexOf(stepSelected) + 1}`
              : steps.indexOf(stepSelected) + 1}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {stepSelected}
          </h1>
          <p className="f-mon leading-[28px]">
            We analyze your requirements — project type, features, platforms —
            then create specification, design, and approve wireframes. In other
            cases, we study your already-made documentation and provide rough
            and detailed time & money estimates.
          </p>
          <h3 className="text-[26px] font-semibold xl:mt-[3rem] mt-[1.5rem]">
            Team
          </h3>
          <div className="grid grid-cols-3 gap-y-[1rem] mt-[1rem]">
            {teams.map((item, i) => (
              <span className="xl:text-[16px] text-[14px]" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Development & testing")}
        >
          <h1 className="text-[30px] font-semibold">
            {steps.indexOf(stepSelected) + 1 < 10
              ? `0${steps.indexOf(stepSelected) + 1}`
              : steps.indexOf(stepSelected) + 1}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {stepSelected}
          </h1>
          <p className="f-mon leading-[28px]">
            We analyze your requirements — project type, features, platforms —
            then create specification, design, and approve wireframes. In other
            cases, we study your already-made documentation and provide rough
            and detailed time & money estimates.
          </p>
          <h3 className="text-[26px] font-semibold xl:mt-[3rem] mt-[1.5rem]">
            Team
          </h3>
          <div className="grid grid-cols-3 gap-y-[1rem] mt-[1rem]">
            {teams.map((item, i) => (
              <span className="xl:text-[16px] text-[14px]" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Launch")}
        >
          <h1 className="text-[30px] font-semibold">
            {steps.indexOf(stepSelected) + 1 < 10
              ? `0${steps.indexOf(stepSelected) + 1}`
              : steps.indexOf(stepSelected) + 1}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {stepSelected}
          </h1>
          <p className="f-mon leading-[28px]">
            We analyze your requirements — project type, features, platforms —
            then create specification, design, and approve wireframes. In other
            cases, we study your already-made documentation and provide rough
            and detailed time & money estimates.
          </p>
          <h3 className="text-[26px] font-semibold xl:mt-[3rem] mt-[1.5rem]">
            Team
          </h3>
          <div className="grid grid-cols-3 gap-y-[1rem] mt-[1rem]">
            {teams.map((item, i) => (
              <span className="xl:text-[16px] text-[14px]" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Maintenance (per request)")}
        >
          <h1 className="text-[30px] font-semibold">
            {steps.indexOf(stepSelected) + 1 < 10
              ? `0${steps.indexOf(stepSelected) + 1}`
              : steps.indexOf(stepSelected) + 1}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {stepSelected}
          </h1>
          <p className="f-mon leading-[28px]">
            We analyze your requirements — project type, features, platforms —
            then create specification, design, and approve wireframes. In other
            cases, we study your already-made documentation and provide rough
            and detailed time & money estimates.
          </p>
          <h3 className="text-[26px] font-semibold xl:mt-[3rem] mt-[1.5rem]">
            Team
          </h3>
          <div className="grid grid-cols-3 gap-y-[1rem] mt-[1rem]">
            {teams.map((item, i) => (
              <span className="xl:text-[16px] text-[14px]" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
};

const DevelopmentProcess: React.FC = () => {
  const [stepSelected, setStepSelected] = useState("Study the project");
  return (
    <section className="container mx-auto md:py-[3rem] py-[1.5rem] h-fit">
      <div className="flex lg:flex-row flex-col w-full justify-between items-center">
        <h1 className="text-[36px] font-semibold xl:w-[30%] lg:w-[40%] w-full">
          Development process at Devhouse
        </h1>
        <p className="f-mon xl:w-[50%] lg:w-[60%] lg: w-full">
          We follow the Scrum framework, working in 2-week sprints and
          completing a set amount of work by the end of each. Then show a demo
          or release the product.
        </p>
      </div>
      <div className="flex w-full h-fit mt-[3rem]">
        <div className="w-1/2 lg:block hidden">
          <ul className="flex flex-col gap-y-6">
            {steps.map((item, i) => (
              <li
                key={i}
                className={`text-[30px] inline-flex gap-x-5 font-semibold ${
                  stepSelected == item ? "text-[#0C8CE9]" : ""
                }`}
              >
                <span
                  className={`${stepSelected == item ? "" : "text-[#969FAF]"}`}
                >
                  {i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <StepShow
          stepSelected={stepSelected}
          setStepSelected={setStepSelected}
        />
      </div>
    </section>
  );
};

export default DevelopmentProcess;
