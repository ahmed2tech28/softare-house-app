"use client";
import React, { useState } from "react";
import Top from "./common/TopHiding";

const TypeOfSoftware: React.FC = () => {
  const [sideBarItemSelected, setSideBarItemSelected] =
    useState("Functional Testing");
  const sideBarItems: string[] = [
    "Functional Testing",
    "Non-functional",
    "Unit & Integration",
    "Usability testing",
    "Load & Performance",
  ];
  return (
    <div className="w-screen py-[2rem]">
      <div className="container mx-auto flex flex-col gap-y-[4rem]">
        <Top
          hiding="Types of software testing we offer"
          description="Our engineers draw up a software testing strategy tailored to your project in order to eliminate possible bugs and issues."
        />
        <div className="tech-box bg-[#F9F9F9] h-fit rounded-2xl flex p-5 items-center">
          <div className="flex lg:flex-row flex-col w-full xl:justify-center justify-between gap-y-5">
            <div className="left xl:w-[368px] lg:w-[312px] w-full lg:h-fit h-[150px] rounded-2xl p-5 flex flex-col justify-between">
              <div className="h-fit md:w-full w-full lg:mx-auto mx-0 flex lg:flex-col flex-row justify-between overflow-x-auto gap-y-4">
                {sideBarItems.map((item, i) => (
                  <button
                    key={i}
                    className={`inline-flex justify-start items-center md:w-full w-auto lg:text-[26px] text-[12px] lg:py-4 font-semibold ${
                      item == sideBarItemSelected
                        ? "bg-[#0C8CE9] text-white"
                        : ""
                    } hover:bg-[#0C8CE9] transition-all duration-75 hover:text-white px-4 rounded-full`}
                    onClick={(e) => setSideBarItemSelected(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="right lg:w-[calc(100%-368px)] w-full flex justify-center items-center">
              {sideBarItemSelected == "Functional Testing" && (
                <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-col justify-center gap-y-[2rem] transition-all duration-75">
                  <p>
                    Functional testing lets us analyze a separate part of the
                    application within the context of the entire application.
                    This testing ensures that the system does what users are
                    expecting it to do.
                  </p>
                  <p>
                    In other words, we test the business logic of a product to
                    make sure all the functional objectives are met, and the app
                    or website performs the functionality it is supposed to.
                  </p>
                  <button>
                    <svg
                      width="141"
                      height="42"
                      viewBox="0 0 141 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.1"
                        x="1"
                        width="140"
                        height="42"
                        rx="21"
                        fill="#0066FF"
                      />
                      <path
                        d="M26.908 26.14C26.1427 26.14 25.438 26.014 24.794 25.762C24.15 25.51 23.59 25.16 23.114 24.712C22.638 24.2547 22.2693 23.7227 22.008 23.116C21.7467 22.5 21.616 21.828 21.616 21.1C21.616 20.372 21.7467 19.7047 22.008 19.098C22.2693 18.482 22.638 17.95 23.114 17.502C23.59 17.0447 24.15 16.69 24.794 16.438C25.438 16.186 26.138 16.06 26.894 16.06C27.6593 16.06 28.3593 16.186 28.994 16.438C29.638 16.69 30.198 17.0447 30.674 17.502C31.15 17.95 31.5187 18.482 31.78 19.098C32.0413 19.7047 32.172 20.372 32.172 21.1C32.172 21.828 32.0413 22.5 31.78 23.116C31.5187 23.732 31.15 24.264 30.674 24.712C30.198 25.16 29.638 25.51 28.994 25.762C28.3593 26.014 27.664 26.14 26.908 26.14ZM26.894 24.544C27.3887 24.544 27.846 24.46 28.266 24.292C28.686 24.124 29.05 23.886 29.358 23.578C29.666 23.2607 29.904 22.8967 30.072 22.486C30.2493 22.066 30.338 21.604 30.338 21.1C30.338 20.596 30.2493 20.1387 30.072 19.728C29.904 19.308 29.666 18.944 29.358 18.636C29.05 18.3187 28.686 18.076 28.266 17.908C27.846 17.74 27.3887 17.656 26.894 17.656C26.3993 17.656 25.942 17.74 25.522 17.908C25.1113 18.076 24.7473 18.3187 24.43 18.636C24.122 18.944 23.8793 19.308 23.702 19.728C23.534 20.1387 23.45 20.596 23.45 21.1C23.45 21.5947 23.534 22.052 23.702 22.472C23.8793 22.892 24.122 23.2607 24.43 23.578C24.738 23.886 25.102 24.124 25.522 24.292C25.942 24.46 26.3993 24.544 26.894 24.544ZM33.4332 26V18.524H35.0992V20.582L34.9032 19.98C35.1272 19.476 35.4772 19.0933 35.9532 18.832C36.4385 18.5707 37.0405 18.44 37.7592 18.44V20.106C37.6845 20.0873 37.6145 20.078 37.5492 20.078C37.4838 20.0687 37.4185 20.064 37.3532 20.064C36.6905 20.064 36.1632 20.26 35.7712 20.652C35.3792 21.0347 35.1832 21.6087 35.1832 22.374V26H33.4332ZM41.8393 26.098C41.1207 26.098 40.472 25.9393 39.8933 25.622C39.324 25.2953 38.876 24.8473 38.5493 24.278C38.2227 23.7087 38.0593 23.0367 38.0593 22.262C38.0593 21.4873 38.2227 20.8153 38.5493 20.246C38.876 19.6767 39.324 19.2333 39.8933 18.916C40.472 18.5987 41.1207 18.44 41.8393 18.44C42.4647 18.44 43.0247 18.58 43.5193 18.86C44.014 19.1307 44.406 19.546 44.6953 20.106C44.9847 20.666 45.1293 21.3847 45.1293 22.262C45.1293 23.13 44.9893 23.8487 44.7093 24.418C44.4293 24.978 44.042 25.398 43.5473 25.678C43.0527 25.958 42.4833 26.098 41.8393 26.098ZM42.0493 24.6C42.4693 24.6 42.8427 24.5067 43.1693 24.32C43.5053 24.1333 43.7713 23.8627 43.9673 23.508C44.1727 23.1533 44.2753 22.738 44.2753 22.262C44.2753 21.7767 44.1727 21.3613 43.9673 21.016C43.7713 20.6613 43.5053 20.3907 43.1693 20.204C42.8427 20.0173 42.4693 19.924 42.0493 19.924C41.6293 19.924 41.2513 20.0173 40.9153 20.204C40.5887 20.3907 40.3227 20.6613 40.1173 21.016C39.9213 21.3613 39.8233 21.7767 39.8233 22.262C39.8233 22.738 39.9213 23.1533 40.1173 23.508C40.3227 23.8627 40.5887 24.1333 40.9153 24.32C41.2513 24.5067 41.6293 24.6 42.0493 24.6ZM44.3173 26V24.236L44.3873 22.248L44.2473 20.26V15.612H45.9833V26H44.3173ZM51.3007 26.098C50.47 26.098 49.742 25.9347 49.1167 25.608C48.5007 25.272 48.02 24.8147 47.6747 24.236C47.3387 23.6573 47.1707 22.9993 47.1707 22.262C47.1707 21.5153 47.334 20.8573 47.6607 20.288C47.9967 19.7093 48.454 19.2567 49.0327 18.93C49.6207 18.6033 50.288 18.44 51.0347 18.44C51.7627 18.44 52.4113 18.5987 52.9807 18.916C53.55 19.2333 53.998 19.6813 54.3247 20.26C54.6513 20.8387 54.8147 21.52 54.8147 22.304C54.8147 22.3787 54.81 22.4627 54.8007 22.556C54.8007 22.6493 54.796 22.738 54.7867 22.822H48.5567V21.66H53.8627L53.1767 22.024C53.186 21.5947 53.0973 21.2167 52.9107 20.89C52.724 20.5633 52.4673 20.3067 52.1407 20.12C51.8233 19.9333 51.4547 19.84 51.0347 19.84C50.6053 19.84 50.2273 19.9333 49.9007 20.12C49.5833 20.3067 49.3313 20.568 49.1447 20.904C48.9673 21.2307 48.8787 21.618 48.8787 22.066V22.346C48.8787 22.794 48.9813 23.1907 49.1867 23.536C49.392 23.8813 49.6813 24.1473 50.0547 24.334C50.428 24.5207 50.8573 24.614 51.3427 24.614C51.7627 24.614 52.1407 24.5487 52.4767 24.418C52.8127 24.2873 53.1113 24.082 53.3727 23.802L54.3107 24.88C53.9747 25.272 53.55 25.5753 53.0367 25.79C52.5327 25.9953 51.954 26.098 51.3007 26.098ZM55.9957 26V18.524H57.6617V20.582L57.4657 19.98C57.6897 19.476 58.0397 19.0933 58.5157 18.832C59.001 18.5707 59.603 18.44 60.3217 18.44V20.106C60.247 20.0873 60.177 20.078 60.1117 20.078C60.0463 20.0687 59.981 20.064 59.9157 20.064C59.253 20.064 58.7257 20.26 58.3337 20.652C57.9417 21.0347 57.7457 21.6087 57.7457 22.374V26H55.9957ZM64.9117 26V16.2H66.4097L72.5557 23.746H71.8137V16.2H73.6197V26H72.1217L65.9757 18.454H66.7177V26H64.9117ZM78.9377 26.098C78.1724 26.098 77.491 25.9347 76.8937 25.608C76.2964 25.272 75.825 24.8147 75.4797 24.236C75.1344 23.6573 74.9617 22.9993 74.9617 22.262C74.9617 21.5153 75.1344 20.8573 75.4797 20.288C75.825 19.7093 76.2964 19.2567 76.8937 18.93C77.491 18.6033 78.1724 18.44 78.9377 18.44C79.7124 18.44 80.3984 18.6033 80.9957 18.93C81.6024 19.2567 82.0737 19.7047 82.4097 20.274C82.755 20.8433 82.9277 21.506 82.9277 22.262C82.9277 22.9993 82.755 23.6573 82.4097 24.236C82.0737 24.8147 81.6024 25.272 80.9957 25.608C80.3984 25.9347 79.7124 26.098 78.9377 26.098ZM78.9377 24.6C79.367 24.6 79.7497 24.5067 80.0857 24.32C80.4217 24.1333 80.683 23.8627 80.8697 23.508C81.0657 23.1533 81.1637 22.738 81.1637 22.262C81.1637 21.7767 81.0657 21.3613 80.8697 21.016C80.683 20.6613 80.4217 20.3907 80.0857 20.204C79.7497 20.0173 79.3717 19.924 78.9517 19.924C78.5224 19.924 78.1397 20.0173 77.8037 20.204C77.477 20.3907 77.2157 20.6613 77.0197 21.016C76.8237 21.3613 76.7257 21.7767 76.7257 22.262C76.7257 22.738 76.8237 23.1533 77.0197 23.508C77.2157 23.8627 77.477 24.1333 77.8037 24.32C78.1397 24.5067 78.5177 24.6 78.9377 24.6ZM85.548 26L82.804 18.524H84.456L86.808 25.118H86.024L88.488 18.524H89.958L92.352 25.118H91.582L94.004 18.524H95.558L92.8 26H91.12L88.936 20.162H89.454L87.228 26H85.548Z"
                        fill="#0066FF"
                      />
                      <path
                        d="M105 22H115L111.5 25.5L113 27L119 21L113 15L111.5 16.5L115 20H105V22Z"
                        fill="#0066FF"
                      />
                    </svg>
                  </button>
                </div>
              )}
              {sideBarItemSelected == "Non-functional" && (
                <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-wrap gap-x-[3rem] transition-all duration-75"></div>
              )}
              {sideBarItemSelected == "Unit & Integration" && (
                <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-wrap gap-x-[3rem] transition-all duration-75"></div>
              )}
              {sideBarItemSelected == "Usability testing" && (
                <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-wrap gap-x-[3rem] transition-all duration-75"></div>
              )}
              {sideBarItemSelected == "Load & Performance" && (
                <div className="lg:w-[657px] w-full lg:h-[300px] h-fit flex flex-wrap gap-x-[3rem] transition-all duration-75"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeOfSoftware;
