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
        className="w-8 h-8 ms-3 text-[#423ED6]"
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

const UpperSection: React.FC = () => {
  return (
    <div className="flex w-full justify-between h-[50%]">
      <div className="md:w-[50%] w-[90%] h-full flex flex-col justify-center items-start gap-y-6">
        <h1 className="text-4xl font-semibold">Our Achivements</h1>
        <p className="text-2xl">
          Dev House stands tall among the leading software development
          companies, earning top rankings and glowing reviews.
        </p>
      </div>
      <div className="w-[50%] md:flex hidden justify-end items-center">
        <div className="box w-[25rem] h-[15rem] bg-gray-300 rounded-2xl p-[3rem] flex-col justify-between items-center flex ">
          <div className="text-center font-semibold">43 reviews in Clutch</div>
          <div className="text-center font-bold flex justify-center items-center gap-x-5">
            <span className="w-10 h-10 flex items-center justify-center bg-black rounded-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-300 bg-clip-text bg-gradient-to-br from-black to-transparent text-3xl font-bold">
                  C
                </div>
              </div>
            </span>
            <span className="text-3xl">4.93</span>
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
            className="lg:w-[50%] w-full h-[80%] flex lg:flex-col flex-row lg:justify-center justify-between items-center gap-y-6 border border-gray-300 hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-100 ease-in text-center"
          >
            <div className="flex lg:justify-center justify-start items-center lg:w-full w-[30%] text-center h-[60%]">
              <img
                src={`/certificates/${item.img}`}
                alt={item.name}
                width={"200"}
                className="text-center"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-y-4 lg:w-auto w-[70%]">
              <h1 className="text-2xl font-semibold lg:text-center text-start w-full">
                {item.name}
              </h1>
              <p className="text-xl lg:text-center text-start w-full">
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
    <section className="container lg:h-[50rem] lg:block lg:p-0 py-[5rem] h-fit flex flex-col gap-y-6 mx-auto">
      <UpperSection />
      <BottomSection />
    </section>
  );
};

export default Acievement;
