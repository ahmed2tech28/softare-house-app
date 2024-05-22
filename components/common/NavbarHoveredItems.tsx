import React from "react";
import Link from "next/link";

export const Industries: React.FC = () => {
  const industries: string[] = [
    "Health Care",
    "Logistics",
    "FinTech",
    "Market Place",
    "Retail",
    "Travel",
    "Education",
  ];

  return (
    <div className="container py-5 mx-auto text-black h-full">
      <h1 className="text-2xl font-semibold">Industries</h1>
      <ul className="flex gap-x-10 py-6">
        {industries.map((item, i) => {
          return (
            <li key={i}>
              <Link href={"#"} className={`hover:text-blue-600`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Services: React.FC = () => {
  const services: string[] = [
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design Services",
    "Desktop Application Development",
    "Hire a Developer",
  ];

  return (
    <div className="container py-5 mx-auto text-black h-full">
      <h1 className="text-2xl font-semibold">Services</h1>
      <ul className="flex flex-col gap-y-7 py-6">
        {services.map((item, i) => {
          return (
            <li key={i}>
              <Link href={"#"} className={`hover:text-blue-600`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Company: React.FC = () => {
  const offices: string[] = [
    "Wales <br> +44 7726 777947",
    "Rome <br> +39 320 973 0997",
    "Germany <br> +49 1590 6702779",
    "Faisalabad <br> +92 322 7946794",
    "Lahore <br> +92 321 8351765",
  ];
  return (
    <div className="container py-5 mx-auto text-black h-full">
      <h1 className="text-2xl font-semibold">Company</h1>
      <ul className="flex gap-x-10 py-6">
        {offices.map((item, i) => {
          return (
            <li key={i}>
              <Link
                href={"#"}
                className={`hover:text-blue-600`}
                dangerouslySetInnerHTML={{ __html: item }}
              ></Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface expert {
  name: string;
  techs: string[];
}

export const Experties: React.FC = () => {
  const experties: expert[] = [
    {
      name: "Web Application Development",
      techs: ["Mern Stack", "Next js", "React js", "Php & Laravel", "Node js"],
    },
    {
      name: "Mobile App Development",
      techs: ["React Native", "Flutter", "Ionic", "Android", "iOS"],
    },
    {
      name: "UI/UX Design Services",
      techs: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      name: "Desktop Application Development",
      techs: ["Javascript", "Python", "Android", "iOS"],
    },
  ];

  return (
    <div className="container py-5 mx-auto text-black h-full">
      <div className="flex gap-x-5">
        {experties.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-y-2">
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <ul className="flex flex-col gap-y-5">
                {item.techs.map((tech, i) => {
                  return (
                    <li key={i}>
                      <Link href={"#"} className={`hover:text-blue-600`}>
                        {tech}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
