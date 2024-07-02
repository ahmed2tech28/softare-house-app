"use client";
import React from "react";
import QuestionComp from "./clientcomps/QuestionComp";
import Slider from "react-slick";
interface questions {
  question: string;
  answer: string;
}

const questions: questions[] = [
  {
    question:
      "Key aspects before choosing offshore software development services",
    answer: `There are three key considerations before choosing a offshore software development services:<br><br>

    . Services you need. Are you looking for a mobile or web app, need custom UI design, QA testing, or all together?<br>
    . Find a vendor. Look at the technology stack, social presence, client reviews and portfolio of the offshore software development company.<br>
    . Talk to them. At Dev House, we encourage clients to communicate and ask questions about our solutions.`,
  },
  {
    question: "Why to choose offshore software development services?",
    answer:
      "Offshore software development services are cheaper than hiring an in-house team. As a business owner you want solutions so that you don’t have to face legal restrictions. Offshore software development companies provide talented resources so that you can get your solution easily.",
  },
  {
    question:
      "What are the main areas of offshore software development services",
    answer:
      "An offshore software development company offers custom web app development services, hybrid and native mobile app development services, desktop application development services, UI/UX Design Services and solutions.",
  },
  {
    question:
      "What are the benefits of offshore software development services?",
    answer: `Some key benefits of offshore software development services are:<br><br>
    . Less Expensive. In Romania, you’ll pay $22-45/h, while in the US the cost goes up to $130-230/h.<br>
    . No training expenses. You save money that you spend on the training and courses of your employees. Offshore development companies deal with this for you.<br>
    . Modern technologies. Most offshore web development companies and services providers focus on one area. It is easy to get top level custom software development solutions at affordable rates.`,
  },
  {
    question:
      "Does our offshore software development services help to grow your business?",
    answer: `Our custom web and mobile app development services help you engage people and attract new customers for your business and accelerate your digital success.`,
  },
  {
    question: "What will be the custom software development service?",
    answer: `At Cleveroad, custom software development services include:<br><br>
    . mobile app development (iOS, Android)<br>
    . web development<br>
    . UI/UX design services<br>
    . QA testing services<br>`,
  },
];

const QuestionMayYouHave: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container mx-auto flex flex-col gap-y-[4rem] mb-[6rem]">
      <div className="flex w-full justify-between lg:flex-row flex-col">
        <h1 className="lg:w-2/3 w-full text-[36px] font-semibold">
          Questions you may have
        </h1>
        <p className="lg:w-[30%] w-full">
          Learn more about our software development services and expertise we
          offer
        </p>
      </div>
      <div className="lg:grid hidden grid-cols-2 gap-[2rem]">
        {questions.map((item, i) => (
          <QuestionComp key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
      <div className="lg:hidden">
        <Slider {...settings}>
          {questions.map((item, i) => (
            <QuestionComp
              key={i}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default QuestionMayYouHave;
