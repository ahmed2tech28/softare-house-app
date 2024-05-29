import React from "react";
import QuestionComp from "./clientcomps/QuestionComp";

interface questions {
  question: string;
  answer: string;
}

const questions: questions[] = [
  {
    question:
      "What are the key considerations before choosing offshore software development services?",
    answer: "You can reach us at 0123456789",
  },
  {
    question:
      "How do software development services help to grow your business?",
    answer: "You can reach us at 0123456789",
  },
  {
    question:
      "What are the key focus areas of offshore software development services?",
    answer: "You can reach us at 0123456789",
  },
  {
    question:
      "Why are offshore software development services becoming popular?",
    answer: "You can reach us at 0123456789",
  },
  {
    question: "What are the pros of offshore software development services?",
    answer: "You can reach us at 0123456789",
  },
  {
    question: "What will be the custom software development service?",
    answer: `At Cleveroad, custom software development services include:<br>
    . mobile app development (iOS, Android)<br>
    . web development<br>
    . UI/UX design services<br>
    . QA testing services<br>`,
  },
];

const QuestionMayYouHave: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col gap-y-[4rem] mb-[6rem]">
      <div className="flex w-full justify-between">
        <h1 className="w-2/3 text-[36px] font-semibold">
          Questions you may have
        </h1>
        <p className="w-[30%]">
          Learn more about our software development services and expertise we
          offer
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[2rem]">
        {questions.map((item, i) => (
          <QuestionComp key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default QuestionMayYouHave;
