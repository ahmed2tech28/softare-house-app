import React from "react";
import Card from "./clientComps/Card";

interface carddetails {
  img: string;
  name: string;
  callangesSolved: string[];
  bg: string;
}

const cardsdetails: carddetails[] = [
  {
    img: "/mob-app/1.png",
    name: "A Telemedicine System For Appointments Management",
    callangesSolved: [
      "Development of the SaaS for providing and receiving telecare services",
      "Providing 24/7 online access to video and audio consultations of general practitioners and clinicians",
      "Creation of an online appointment booking functionality",
      "Compliance with the requirements of GDPR and UK healthcare regulators (CQC and MHRA)",
    ],
    bg: "#FFEEF5",
  },
  {
    img: "/mob-app/2.png",
    name: "QMS for Medical Device Manufacturers",
    callangesSolved: [
      "Development of a Quality Management System (eQMS) from scratch",
      "Automation and UX improvement of document flow and processes of FDA/ISO certification",
      "Creation of a B2B SaaS to check compliance to FDA 21 CFR 820, 21 CFR 11 and conformance to ISO 13485:2016 and MDSAP",
    ],
    bg: "#F5F2FF",
  },
];

const WebAppsForClient: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem]">
      <div className="flex flex-col">
        <h1 className="text-[36px] font-semibold w-[421px]">
          Web application we've delivered for our clients
        </h1>
        <div className="flex flex-col gap-y-[6rem] w-full sm:py-[6rem] py-[2rem]">
          {cardsdetails.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebAppsForClient;
