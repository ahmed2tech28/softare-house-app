import React from "react";
import Top from "./common/TopHiding";

const imageName: string = "/ux-research.png";

const FirstStep: React.FC = () => {
  return (
    <div className="cxl:w-[1198px] w-full mx-auto flex lg:flex-row flex-col lg:h-[387.31px] h-fit gap-y-[3rem] gap-x-[3rem]">
      <div className="lg:w-[50%] w-full overflow-hidden rounded-[36px]">
        <img
          src={imageName}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col h-full justify-center">
        <span className="numbering text-[#0066FF] text-[30px] font-semibold block">
          01
        </span>
        <h2 className="text-[30px] font-semibold">Research</h2>
        <div className="flex flex-col text-[#969FAF] gap-y-[2.5rem] w-full f-mon">
          <div>
            <span className="font-semibold">Immersion.</span> First off,
            designers immerse into your business and study <br /> its goals,
            revenue model, target audience, and other aspects.
          </div>
          <div>
            <span className="font-semibold">Competition.</span> After those two
            steps, designers analyze similar products <br /> on the market and
            study their layouts, colors, and so on.
          </div>
          <div>
            <span className="font-semibold">User behavior.</span> The next step
            is to study how users interact with similar <br /> products to
            increase retention rates and meet customer needs.
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondStep: React.FC = () => {
  return (
    <div className="cxl:w-[1198px] w-full mx-auto flex lg:flex-row-reverse flex-col lg:h-[387.31px] h-fit gap-y-[3rem] gap-x-[3rem]">
      <div className="lg:w-[50%] w-full overflow-hidden rounded-[36px]">
        <img
          src={imageName}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col h-full justify-center">
        <span className="numbering text-[#0066FF] text-[30px] font-semibold block">
          02
        </span>
        <h2 className="text-[30px] font-semibold">Wireframing</h2>
        <div className="flex flex-col text-[#969FAF] gap-y-[2.5rem] w-full f-mon">
          <div>
            Wireframing is one of the key parts of product design. Designers
            create a wireframe for each screen in the app and interconnect them
            to make a User Journey.
          </div>
          <div>
            After that, they turn the User Journey into a clickable prototype so
            that customers could experience their app and suggest adjustments if
            needed.
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdStep: React.FC = () => {
  return (
    <div className="cxl:w-[1198px] w-full mx-auto flex lg:flex-row flex-col lg:h-[387.31px] h-fit gap-y-[3rem] gap-x-[3rem]">
      <div className="lg:w-[50%] w-full overflow-hidden rounded-[36px]">
        <img
          src={imageName}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col h-full justify-center">
        <span className="numbering text-[#0066FF] text-[30px] font-semibold block">
          03
        </span>
        <h2 className="text-[30px] font-semibold">Visual style</h2>
        <div className="flex flex-col text-[#969FAF] gap-y-[2.5rem] w-full f-mon">
          <div>
            The product design begins. Designers create a UI style guide that
            keeps logos, colors, fonts, and other design elements. It helps
            designers and developers follow the chosen style. After that,
            designers create the final UI for each screen based on the
            wireframes crafted before.
          </div>
          <div>
            Once all screens are ready, they{"'"}re passed over to developers
            along with icons and other graphic elements used for design.
          </div>
        </div>
      </div>
    </div>
  );
};

const FourthStep: React.FC = () => {
  return (
    <div className="cxl:w-[1198px] w-full mx-auto flex lg:flex-row-reverse flex-col lg:h-[387.31px] h-fit gap-y-[3rem] gap-x-[3rem]">
      <div className="lg:w-[50%] w-full overflow-hidden rounded-[36px]">
        <img
          src={imageName}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col h-full justify-center">
        <span className="numbering text-[#0066FF] text-[30px] font-semibold block">
          04
        </span>
        <h2 className="text-[30px] font-semibold">Design & Delivery</h2>
        <div className="flex flex-col text-[#969FAF] gap-y-[2.5rem] w-full f-mon">
          <div>
            The product design begins. Designers create a UI style guide that
            keeps logos, colors, fonts, and other design elements. It helps
            designers and developers follow the chosen style. After that,
            designers create the final UI for each screen based on the
            wireframes crafted before.
          </div>
          <div>
            Once all screens are ready, they{"'"}re passed over to developers
            along with icons and other graphic elements used for design.
          </div>
        </div>
      </div>
    </div>
  );
};

const UiUxDesignProcess: React.FC = () => {
  return (
    <div className="w-screen py-[4rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <Top hiding="Our UI/UX design process" description="" />
        <FirstStep />
        <SecondStep />
        <ThirdStep />
        <FourthStep />
      </div>
    </div>
  );
};

export default UiUxDesignProcess;
