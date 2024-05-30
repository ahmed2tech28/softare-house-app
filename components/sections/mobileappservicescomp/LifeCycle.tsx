import React from "react";

const IosCard: React.FC = () => {
  return (
    <div className="xl:w-[535px] lg:w-[400px] w-full h-full lg:mx-0 mx-auto">
      <div className="xl:h-[70%] h-[60%] w-full bg-[#005FEC] rounded-3xl flex justify-center items-center relative">
        <img
          src="/iphone.svg"
          alt="Iphone"
          className="absolute xl:top-[4rem] top-[2rem] left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="flex flex-grow justify-center items-center h-[30%]">
        <p className="img-desc font-semibold xl:text-[30px] text-[23px] text-center w-[80%] mx-auto">
          Fully functional applications for all Apple devices
        </p>
      </div>
    </div>
  );
};

const AndroidCard: React.FC = () => {
  return (
    <div className="xl:w-[535px] lg:w-[400px] w-full h-full lg:mx-0 mx-auto">
      <div className="xl:h-[70%] h-[60%] w-full bg-[#FFA800] rounded-3xl flex justify-center items-center relative">
        <img
          src="/android.svg"
          alt="Android"
          className="absolute xl:top-[4rem] top-[2rem] left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="flex flex-grow justify-center items-center h-[30%]">
        <p className="img-desc font-semibold xl:text-[30px] text-[23px] text-center w-[80%] mx-auto">
          Sophisticated applications <br /> for Android-powered devices
        </p>
      </div>
    </div>
  );
};

const LifeCycle: React.FC = () => {
  return (
    <section className="container mx-auto py-[4rem]">
      <div className="lg:h-[571.33px] h-[1040px] w-full flex flex-col items-center">
        <h1 className="text-[36px] font-semibold text-center pb-[2rem]">
          Full-cycle iOS and Android app development
        </h1>
        <div className="flex lg:flex-row lg:h-auto h-fit flex-col justify-around flex-grow w-full">
          <IosCard />
          <AndroidCard />
        </div>
      </div>
    </section>
  );
};

export default LifeCycle;
