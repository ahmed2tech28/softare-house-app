import React from "react";

const certifications: string[] = [
  "/certifications/1.svg",
  "/certifications/2.svg",
  "/certifications/3.svg",
  "/certifications/4.svg",
  "/certifications/5.svg",
  "/certifications/6.svg",
];

const Certifications: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem]">
      <h1 className="text-[36px] font-semibold text-center">Certifications</h1>
      <div className="grid grid-cols-3 w-full lg:gap-y-0 gap-y-[3rem] justify-between my-[2rem] lg:flex">
        {certifications.map((item, i) => (
          <img
            key={i}
            src={item}
            alt={`certification-${i}`}
            // className="xl:w-auto w-[250px] h-[250px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
