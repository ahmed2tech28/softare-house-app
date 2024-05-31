import React from "react";

interface typeOfWeb {
  title: string;
  desc: string;
  feature: string[];
}

const typeOfWebs: typeOfWeb[] = [
  {
    title: "E-commerce",
    desc: "E-commerce apps and B2B portals to expand your business online. We integrate payments, in-app chats and store data in the cloud. We ensure meeting SOC 1,2, & 3, PCI DSS (level 1), ISO 27001, and FIPS 140-2.",
    feature: ["Stripe", "Paypal", "Socket.io"],
  },
  {
    title: "Enterprise",
    desc: "CRM, ERP, HRM, and web-based apps that improve workflow. We use Inspinia templates to cut time making admin panels, apply AWS for security and high-performance, and use microservices for scaling.",
    feature: ["AWS", "Microservices", "Material guidelines"],
  },
  {
    title: "Media",
    desc: "Live streaming apps, custom OTT platforms, digital media that engage your audience. Apps for mobile and desktop browsers and TVs that follow the latest trends like gamification, audio and video streams, audio chats.",
    feature: ["AR/VR", "FFMPEG", "WebRTC"],
  },
  {
    title: "Marketplace",
    desc: "Web marketplaces for product sales, rentals, and services management. Our team implements payments, mapping, and integrates search systems. Your product gets validation of a user’s identity and transactions.",
    feature: ["PayPal", "GoogleMaps", "Elasticsearch"],
  },
];

const TypeofWebs: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem] h-fit">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[36px] text-center">
          Types of web apps we create
        </h1>
        <p className="text-center f-mon w-[579px] leading-[28px]">
          Our development expertise covers all popular types of web
          applications, from marketplaces to streaming platforms.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2rem] mt-[4rem]">
        {typeOfWebs.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-y-[2rem] bg-[#EEF7FE] xl:w-[561.51px] lg:w-[450px] w-full mx-auto xl:p-[3rem] p-[2rem] rounded-[36px]"
          >
            <h1 className="font-semibold text-[36px]">{item.title}</h1>
            <p className="f-mon leading-[28px]">{item.desc}</p>
            <div className="flex gap-x-[1rem]">
              {item.feature.map((feature, i) => (
                <span key={i} className="font-light">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeofWebs;
