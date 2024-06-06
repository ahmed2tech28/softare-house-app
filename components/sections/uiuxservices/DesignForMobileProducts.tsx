import React from "react";
import Top from "./common/TopHiding";

interface carditem {
  img: string;
  name: string;
  description: string;
  btntext: string;
}

const cards: carditem[] = [
  {
    img: "/desgincards/mobdesign.svg",
    name: "Mobile design",
    description:
      "Creative and modern design for all screen sizes and platforms: iOS, Android, tablets, watches. We follow guidelines, provide native look and feel and ensure smooth interactions.",
    btntext: "Get A Consultation",
  },
  {
    img: "/desgincards/webdesign.svg",
    name: "Web design",
    description:
      "Client-centered web design for laptops, tablets and mobile devices in FullHD quality. We help you shape your Brand identity, ensure page load optimization, and responsiveness of your site.",
    btntext: "Contact Us",
  },
  {
    img: "/desgincards/productcard.svg",
    name: "Product design",
    description:
      "We combine thorough trend research and in-depth brand analysis to prototype the future look of your product that will fully comply with your vision, corporate direction and brand design.",
    btntext: "Leave A request",
  },
];

const Card: React.FC<carditem> = ({ img, name, description, btntext }) => {
  return (
    <div className="xl:!w-[381px] clg:w-[320px] w-full clg:h-[570px] h-fit clg:py-0 py-[1rem] design-card-bg rounded-[36px]">
      <div className="h-[50%] w-full flex justify-center items-center">
        <img src={img} alt={name} />
      </div>
      <div className="h-1/2 w-full px-5 flex flex-col gap-y-2">
        <h2 className="text-white text-[30px] font-semibold">{name}</h2>
        <p className="leading-[28.48px] text-white f-mon">{description}</p>
        <div>
          <button className="bg-white text-[#0067FE] px-3 py-2 rounded-full">
            {btntext}
          </button>
        </div>
      </div>
    </div>
  );
};

const Bottom: React.FC = () => {
  return (
    <div className="w-fit flex clg:flex-row flex-col h-fit gap-x-[1rem] mx-auto gap-y-10">
      {cards.map((item, i) => (
        <Card
          key={i}
          img={item.img}
          name={item.name}
          description={item.description}
          btntext={item.btntext}
        />
      ))}
    </div>
  );
};

const DesignForMobileProducts: React.FC = () => {
  return (
    <div className="w-screen py-[4rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <Top
          hiding={"Design for Mobile and Web products"}
          description={
            "Creating the same distinct style and brand identity for all platforms using best-proven design practices"
          }
        />
        <Bottom />
      </div>
    </div>
  );
};

export default DesignForMobileProducts;
