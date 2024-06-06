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
    // <span className="w-[50.35px] h-[50px] flex items-center justify-center bg-black rounded-full relative">
    //   <div className="absolute inset-0 flex items-center justify-center">
    //     <div className="text-white bg-clip-text bg-gradient-to-br from-black to-transparent text-[40px] font-bold">
    //       C
    //     </div>
    //   </div>
    // </span>
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.6453 0.03125C37.9266 0.03125 48.8641 10.9688 48.8641 24.25C48.8641 37.6289 37.9266 48.4688 24.6453 48.4688C11.2664 48.4688 0.426563 37.6289 0.426563 24.25C0.426563 10.9688 11.2664 0.03125 24.6453 0.03125ZM36.0711 33.918C36.1688 33.7227 36.2664 33.4297 36.2664 33.1367C36.2664 32.9414 36.2664 32.6484 36.0711 32.4531L33.7273 29.2305C33.2391 28.6445 32.3602 28.5469 31.8719 29.1328C31.8719 29.1328 29.2352 31.8672 25.5242 31.8672C20.7391 31.8672 18.2 27.9609 18.2 24.1523C18.2 19.9531 20.9344 16.7305 25.4266 16.7305C28.9422 16.7305 31.4813 18.9766 31.4813 18.9766C32.0672 19.5625 32.8484 19.3672 33.2391 18.7812L35.4852 15.4609C35.5828 15.2656 35.6805 14.9727 35.6805 14.7773C35.6805 14.4844 35.4852 14.1914 35.2898 13.9961C35.1922 13.8008 31.7742 10.1875 25.2313 10.1875C17.2234 10.1875 11.1688 16.2422 11.1688 24.1523C11.1688 32.2578 17.0281 38.4102 25.3289 38.4102C32.1648 38.4102 35.8758 34.1133 36.0711 33.918Z"
        fill="black"
      />
    </svg>
  );
};

const UpperSection: React.FC = () => {
  return (
    <div className="flex md:w-full w-[95vw] lg:mx-0 mx-auto justify-between h-[50%] items-center">
      <div className="lg:w-[30%] md:w-[40%] w-[90%] h-full flex flex-col justify-center items-start gap-y-6">
        <h1 className="text-[38px] font-medium">Our Achivements</h1>
        <p className="text-[16px] f-mon">
          Dev House stands tall among the leading software development
          companies, earning top rankings and glowing reviews.
        </p>
      </div>
      <div className="w-[50%] md:flex hidden justify-end items-center f-mon">
        <div className="box w-[360px] h-[258.19px] bg-[#FFFFFF] rounded-[40px] p-[3rem] flex-col justify-between items-center flex">
          <div className="text-center font-medium text-[18px] f-mon">
            43 reviews in Clutch
          </div>
          <div className="text-center font-semibold flex justify-center items-center gap-x-5">
            <Ci />
            <span className="text-[34px] f-mon font-semibold">4.93</span>
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
            <div className="h-[40%] flex flex-col gap-y-2 lg:w-auto w-[70%] px-5">
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
