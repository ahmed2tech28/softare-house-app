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
      <ul className="flex gap-x-10 py-6">
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
