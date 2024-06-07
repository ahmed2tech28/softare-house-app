import React from "react";
import Top from "./common/TopHiding";

interface softwares {
  image: string;
  name: string;
}

interface ColProps {
  title: string;
  tools: softwares[];
}

const Col: React.FC<ColProps> = ({ title, tools }) => {
  return (
    <div className="md:h-[521px] h-fit md:py-0 py-[1rem] flex flex-col gap-y-[3rem]">
      <h2 className="text-[30px] font-semibold">{title}</h2>
      <div className="flex flex-col gap-y-[2rem]">
        {tools.map((item, i) => {
          return (
            <div key={i} className="flex items-center lg:gap-x-8 gap-x-3">
              <img src={item.image} alt={item.name} />
              <p className="text-[16px] font-normal">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Tools: React.FC = () => {
  const col1: ColProps = {
    title: "Static editors",
    tools: [
      {
        image: "/designing-softwares/sketch.svg",
        name: "Sketch",
      },
      {
        image: "/designing-softwares/adobeilustrattor.svg",
        name: "Adobe Illustrator",
      },
      {
        image: "/designing-softwares/adobephotoshop.svg",
        name: "Adobe Photoshop",
      },
      {
        image: "/designing-softwares/figma.svg",
        name: "Figma",
      },
    ],
  };

  const col2: ColProps = {
    title: "Tools",
    tools: [
      {
        image: "/designing-softwares/sympli.svg",
        name: "Sympli",
      },
      {
        image: "/designing-softwares/invision.svg",
        name: "Invision",
      },
      {
        image: "/designing-softwares/zeplin.svg",
        name: "Zeplin",
      },
    ],
  };

  const col3: ColProps = {
    title: "Animation",
    tools: [
      {
        image: "/designing-softwares/adobeaftereffects.svg",
        name: "After Effects",
      },
      {
        image: "/designing-softwares/mediaencoder.svg",
        name: "Media Encoder",
      },
      {
        image: "/designing-softwares/principle.svg",
        name: "Principle",
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 h-fit">
      <Col {...col1} />
      <Col {...col2} />
      <Col {...col3} />
    </div>
  );
};

const ExpertiesInSoftware: React.FC = () => {
  return (
    <div className="w-screen pt-[4rem] pb-[10rem] h-fit">
      <div className="container mx-auto flex flex-col gap-y-[4rem] h-fit">
        <Top
          hiding="Our expertise in software design tools"
          description="We are proficient in various UI/UX design tools so our clients can be sure they receive functional and appealing interfaces designed within set time frames"
        />
        <Tools />
      </div>
    </div>
  );
};

export default ExpertiesInSoftware;
