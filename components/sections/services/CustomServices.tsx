import Link from "next/link";
import React from "react";

interface sevices {
  name: string;
  img: string;
  categories: string[];
  description: string;
  link: string;
}

const services: sevices[] = [
  {
    name: "Mobile app development",
    img: "mob.svg",
    categories: [
      "iOS app development",
      "Android app development",
      "Flutter app development",
    ],
    description:
      "Our mobile developers use well-proven agile practices and follow a client-oriented approach to develop custom mobile apps  that highlight your brand identity, bring customers, and solve everyday business challenges.",
    link: "/services/mobileapp",
  },
  {
    name: "Web app development",
    img: "web.svg",
    categories: [
      "PWA development",
      "Website and web app creation",
      "Responsive design",
    ],
    description:
      "We've gained our experience in building web applications through cooperating with companies that follow various business models and operate in variousbusiness domains like FinTech and e-Commerce.",
    link: "/services/webapp",
  },
  {
    name: "UI/UX design",
    img: "uiux.svg",
    categories: [
      "Wireframing and prototyping",
      "UX consulting",
      "Product design",
    ],
    description:
      "Our UI/UX design team's expertise and creativity will help you get the product you’ve pictured. We rely on established standards, proven tools and deep understanding of your business goals while designing your product.",
    link: "#",
  },
  {
    name: "QA services",
    img: "qa.svg",
    categories: [
      "Social media marketing",
      "Email marketing",
      "Content marketing",
    ],
    description:
      "We run manual and automated tests and use different approaches during the entire development life-cycle to eliminate problems and bugs, enhance performance, and improve business logic and design.",
    link: "#",
  },
  {
    name: "DevOps services",
    img: "dvops.svg",
    categories: [
      "Cloud Infrastructure services",
      "CI/CD services",
      "Cloud cost optimization",
    ],
    description:
      "Bring new code and features to your products painlessly with our experienced DevOps engineers. We'll help you reduce time to market without sacrificing reliability, security, and compliance.",
    link: "#",
  },
  {
    name: "Staff augmentation",
    img: "staff.svg",
    categories: ["Dedicated team", "Team augmentation", "Flexible cooperation"],
    description:
      "We provide staff augmentation services to expand your team with qualified and experienced members. Acquire our iOS, Android, and Web developers, DevOps and QA engineers, UI/UX designers in no time.",
    link: "#",
  },
  {
    name: "Startup services",
    img: "startup.svg",
    categories: ["Discovery phase", "MVP development", "CTO as a service"],
    description:
      "If you're a brave startup with an idea and you want to test waters, we’ll help you bring it to life. As a software engineering company, we have in-depth  experience in creating MVP projects to reduce time to market.",
    link: "#",
  },
];

const CustomServices: React.FC = () => {
  return (
    <div className="container mx-auto py-[4rem]">
      <h1 className="text-[36px] font-semibold text-center">
        Custom Software Services we offer
      </h1>
      <div className="flex flex-col gap-y-[6rem] w-full sm:py-[6rem] py-[2rem]">
        {services.map((item, i) => {
          return (
            <div
              key={i}
              className="w-full lg:h-[300px] h-fit flex gap-x-6 lg:flex-row flex-col lg:gap-y-0 gap-y-4"
            >
              <img
                src={`/services-imgs/${item.img}`}
                alt={item.name}
                className="lg:w-auto w-[30rem]"
              />
              <div className="h-full flex flex-col justify-center gap-y-5">
                <h2 className="text-[30px] font-semibold">{item.name}</h2>
                <p className="leading-[30px] f-mon font-extralight">
                  {item.description}
                </p>
                <div className="flex xl:gap-x-[7rem] md:gap-x-[3rem] sm:gap-x-[1rem] gap-x-[0.4rem] f-mon ">
                  {item.categories.map((item, i) => (
                    <span
                      key={i}
                      className="underline font-semibold cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div>
                  <Link href={item.link}>
                    <button className="px-10 py-3 bg-[#0066ff2b] rounded-full font-semibold text-[#0066FF]">
                      Explore more →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomServices;
