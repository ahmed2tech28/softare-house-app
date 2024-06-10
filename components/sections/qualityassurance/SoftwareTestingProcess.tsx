"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const steps: string[] = [
  "Planning",
  "Test plan",
  "Software Testing",
  "Regression, load, smoke testing",
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
  const [startY, setStartY] = useState(0);

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
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartY(e.touches[0].clientY);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current?.innerSlider;
    const deltaY = e.touches[0].clientY - startY;

    if (Math.abs(deltaY) > 50) {
      // Adjust the threshold as needed
      e.preventDefault();
      if (deltaY < 0) {
        slider?.slickNext();
      } else {
        slider?.slickPrev();
      }
    }
  };

  return (
    <div
      className="lg:w-1/2 w-full overflow-hidden"
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      <Slider {...settings} ref={sliderRef} className="h-[100%]">
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Planning")}
        >
          <h1 className="text-[30px] font-semibold">
            {"01"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Planning"}
          </h1>
          <p className="f-mon leading-[28px]">
            QA engineers analyze project requirements to eliminate any
            logic-related issues and identify inaccuracies. Such a revision
            helps us prevent our clients from spending extra money making
            changes to requirements during the development phase. Next, the
            functionality that will be implemented during the following sprint
            is picked by the entire development team.
          </p>
          <h1 className="text-[30px] font-semibold py-3">10%</h1>
          <p>This stage takes from the overall testing time</p>
        </div>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Test plan")}
        >
          <h1 className="text-[30px] font-semibold">
            {"02"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Test plan"}
          </h1>
          <p className="f-mon leading-[28px]">
            QA engineers analyze project requirements to eliminate any
            logic-related issues and identify inaccuracies. Such a revision
            helps us prevent our clients from spending extra money making
            changes to requirements during the development phase. Next, the
            functionality that will be implemented during the following sprint
            is picked by the entire development team.
          </p>
          <h1 className="text-[30px] font-semibold py-3">10%</h1>
          <p>This stage takes from the overall testing time</p>
        </div>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Software Testing")}
        >
          <h1 className="text-[30px] font-semibold">
            {"03"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Software Testing"}
          </h1>
          <p className="f-mon leading-[28px]">
            QA engineers analyze project requirements to eliminate any
            logic-related issues and identify inaccuracies. Such a revision
            helps us prevent our clients from spending extra money making
            changes to requirements during the development phase. Next, the
            functionality that will be implemented during the following sprint
            is picked by the entire development team.
          </p>
          <h1 className="text-[30px] font-semibold py-3">10%</h1>
          <p>This stage takes from the overall testing time</p>
        </div>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) =>
            setStepSelected("Regression, load, smoke testing")
          }
        >
          <h1 className="text-[30px] font-semibold">
            {"04"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Regression, load, smoke testing"}
          </h1>
          <p className="f-mon leading-[28px]">
            QA engineers analyze project requirements to eliminate any
            logic-related issues and identify inaccuracies. Such a revision
            helps us prevent our clients from spending extra money making
            changes to requirements during the development phase. Next, the
            functionality that will be implemented during the following sprint
            is picked by the entire development team.
          </p>
          <h1 className="text-[30px] font-semibold py-3">10%</h1>
          <p>This stage takes from the overall testing time</p>
        </div>
      </Slider>
    </div>
  );
};

const SoftwareTestingProcess: React.FC = () => {
  const [stepSelected, setStepSelected] = useState("Planning");
  return (
    <section className="container mx-auto md:py-[3rem] py-[1.5rem] h-fit">
      <div className="flex lg:flex-row flex-col w-full justify-between items-center">
        <h1 className="text-[36px] font-semibold xl:w-[30%] lg:w-[40%] w-full">
          Software testing process
        </h1>
        <p className="f-mon xl:w-[50%] lg:w-[60%] lg: w-full">
          The software testing is divided into several stages to build an
          efficient testing workflow and comply with high quality standards.
        </p>
      </div>
      <div className="flex w-full h-fit mt-[3rem] items-center">
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

export default SoftwareTestingProcess;
