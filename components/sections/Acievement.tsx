import React from "react";

interface Cetificates {
  name: string;
  for: string;
  img: string;
}

const Star: React.FC = () => {
  return (
    <div>
      <svg
        className="w-[48px] h-[38.19px] ms-3 text-[#0C8CE9]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
};

const Ci: React.FC = () => {
  return (
    <span className="w-[50.35px] h-[50px] flex items-center justify-center bg-black rounded-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-gray-300 bg-clip-text bg-gradient-to-br from-black to-transparent text-[40px] font-bold">
          C
        </div>
      </div>
    </span>
  );
};

const UpperSection: React.FC = () => {
  return (
    <div className="flex lg:w-full w-[95vw] lg:mx-0 mx-auto justify-between h-[50%]">
      <div className="md:w-[30%] w-[90%] h-full flex flex-col justify-center items-start gap-y-6">
        <h1 className="text-[38px] font-medium">Our Achivements</h1>
        <p className="text-[16px] f-mon">
          Dev House stands tall among the leading software development
          companies, earning top rankings and glowing reviews.
        </p>
      </div>
      <div className="w-[50%] md:flex hidden justify-end items-center f-mon">
        <div className="box w-[360px] h-[258.19px] bg-[#FFFFFF] rounded-[40px] p-[3rem] flex-col justify-between items-center flex">
          <div className="text-center font-medium text-[18px]">
            43 reviews in Clutch
          </div>
          <div className="text-center font-semibold flex justify-center items-center gap-x-5">
            <Ci />
            <span className="text-[34px]">4.93</span>
          </div>
          <div className="stars flex justify-between items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomSection: React.FC = () => {
  const certicates: Cetificates[] = [
    {
      name: "Rank Watch",
      for: "Top Web Development Agencies 2023",
      img: "1.png",
    },
    {
      name: "INC. 5000",
      for: "Pakistan's Fastest Growing Companies",
      img: "2.png",
    },
    {
      name: "Web Excellence",
      for: "Web Excellence Agency",
      img: "3.png",
    },
    {
      name: "Dot Comm",
      for: "Excellence in Web Creativity & Digital Communication",
      img: "4.png",
    },
    {
      name: "Expertise",
      for: "Best Mobile App Developer",
      img: "5.png",
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col w-full justify-between h-[50%]">
      {certicates.map((item, i) => {
        return (
          <div
            key={i}
            className="lg:w-[50%] lg:py-0 py-4 w-full lg:h-[80%] h-[10rem] flex lg:flex-col flex-row lg:justify-center justify-between items-center gap-y-6 border border-gray-300 hover:bg-[#F7F7F7] cursor-pointer transition-colors duration-100 ease-in text-center"
          >
            <div className="flex lg:justify-center justify-start items-center lg:w-full w-[30%] text-center h-[247px]">
              <img
                src={`/certificates/${item.img}`}
                alt={item.name}
                width={"190"}
                className="text-center"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-y-2 lg:w-auto w-[70%]">
              <h1 className="text-[18px] font-semibold lg:text-center text-start w-full">
                {item.name}
              </h1>
              <p className="text-sm lg:text-center text-start w-full text-[#969FAF]">
                {item.for}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Acievement: React.FC = () => {
  return (
    <div className="w-full h-fit bg-[#F9F9F9]">
      <section
        className="container lg:h-[50rem] lg:block lg:p-0 py-[5rem] h-fit flex flex-col gap-y-6 mx-auto"
        id="company"
      >
        <UpperSection />
        <BottomSection />
      </section>
    </div>
  );
};

export default Acievement;
