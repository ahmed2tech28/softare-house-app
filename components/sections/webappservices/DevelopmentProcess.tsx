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
  setStepSelectedIndex: any;
  sliderRef: any;
}> = ({ setStepSelected, stepSelected, setStepSelectedIndex, sliderRef }) => {
  const settings = {
    // dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    afterChange: (cuurent: number) => {
      setStepSelected(steps[cuurent]);
      setStepSelectedIndex(cuurent);
    },
  };

  return (
    <div className="lg:w-1/2 w-full overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        <div
          className="w-full bg-[#F9F9F9] h-fit rounded-[36px] md:p-[3rem] p-[1.5rem]"
          onMouseEnter={(e) => setStepSelected("Study the project")}
        >
          <h1 className="text-[30px] font-semibold">
            {"01"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Study the project"}
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
            {"02"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Product design"}
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
            {"03"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Development & testing"}
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
            {"04"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Launch"}
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
            {"05"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Maintenance (per request)"}
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
  const [stepSelectedIndex, setStepSelectedIndex] = useState(0);
  const sliderRef = useRef<any>(null);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<any>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    console.log(stepSelectedIndex);
    if (stepSelectedIndex > 0 && stepSelectedIndex < steps.length - 1) {
      e.preventDefault();
    }
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
  useEffect(() => {
    const container = containerRef.current;
    // Add the event listener with passive: false
    container.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup function to remove the event listener
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [stepSelectedIndex]);
  return (
    <section
      className="container mx-auto md:py-[3rem] py-[1.5rem] h-fit"
      ref={containerRef}
    >
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
          setStepSelectedIndex={setStepSelectedIndex}
          sliderRef={sliderRef}
        />
      </div>
    </section>
  );
};

export default DevelopmentProcess;
