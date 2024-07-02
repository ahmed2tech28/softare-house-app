import React from "react";

interface qualities {
  title: string;
  desc: string;
  buttons: string[];
}

interface qualitiesProp {
  item: number;
  title: string;
  desc: string;
  buttons: string[];
}

const qualities: qualities[] = [
  {
    title: "Progressive web apps",
    desc: "Progressive Web Apps (PWA) are websites with additional benefits for mobile devices. PWAs run on various OS, offering native-app-like functionality — push notifications, last loading, full-screen user experience, and more. We create PWAs that are mobile-focused, available offline, and easy to install on a user’s home screen.",
    buttons: ["React", "Cache API", "PRPL Pattern", "HTTP/2 + Server Push"],
  },
  {
    title: "Fast-loading SPA",
    desc: "Single-page applications (SPA) update only required content and cache local data to improve the website's speed. They take some time to load the first time; after that, they load instantly and quickly react to all user actions. SPAs we make are fast, responsive, and work across multiple browsers. No page reloads or too long waiting time.",
    buttons: ["AJAX", "HTML5 & CSS 3", "React"],
  },
  {
    title: "Responsive websites",
    desc: "Responsive applications adjust their design to different screen sizes of smartphones, tablets, and other devices. Even if the window is changing in just one pixel, the page will swiftly rearrange its elements. By going responsive, you ensure a great experience for mobile users and save time and money on designing the iOS or Android version of the app.",
    buttons: ["CSS Flexbox", "CSS Grid", "Bootstrap"],
  },

  {
    title: "Blockchain App Dev Services",
    desc: "Blockchain is the world’s most popular and trusted system to buy, sell and trade cryptocurrency. There are different computers connected via peer-to-peer network with each other. We are providing blockchain app development services and solutions so that you can create a digital identity for users, increase reliability and improve data security.",
    buttons: [
      "Angular",
      "React",
      "Javascript",
      "Node js",
      "JAVA",
      ".NET",
      "Python",
    ],
  },
];

const WebAppBlog: React.FC<qualitiesProp> = ({
  item,
  title,
  desc,
  buttons,
}) => {
  return (
    <>
      <div className="flex h-fit lg:flex-row flex-col">
        <div className="lg:w-1/3 w-full flex justify-start items-center">
          <h1 className="lg:text-[30px] text-[26px] font-semibold">{title}</h1>
        </div>
        <div className="lg:w-2/3 w-full f-mon">
          <p className="leading-[30.4px] font-light">{desc}</p>
          <div className="flex gap-x-3 my-3 flex-wrap gap-y-2">
            {buttons.map((item, i) => (
              <button
                key={i}
                className="rounded-[33px] font-semibold bg-[#F4F4F4] px-[1rem] py-3 sm:text-[16px] text-[14px]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      {item !== qualities.length - 1 && (
        <div className="bg-[#F9F9F9] h-[10px] w-full my-[3rem]"></div>
      )}
    </>
  );
};

const WebAppNeed: React.FC = () => {
  return (
    <div className="container mx-auto py-[3rem]">
      <h1 className="lg:text-[36px] text-[26px] font-semibold text-center pb-[3rem]">
        Web applications for any need, device, and platform
      </h1>
      <div className="flex flex-col">
        {qualities.map((item, i) => (
          <WebAppBlog key={i} item={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WebAppNeed;
