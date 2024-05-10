import React from "react";
import ButtonComp from "../common/ButtonComp";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-screen xl:h-[40rem] h-fit bg-[#111827] py-[6rem] hidden flex-col xl:flex">
        <div
          className="container mx-auto h-full grid text-left"
          style={{ gridTemplateColumns: "3fr 1fr" }}
        >
          <div className="text-white">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Services</th>
                  <th>Solutions</th>
                  <th>Industries</th>
                  <th>Offices</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Web Application Development</td>
                  <td>App Development Cost</td>
                  <td>Health Care</td>
                  <td>
                    Wales <br /> +44 7726 777947
                  </td>
                </tr>
                <tr>
                  <td>Mobile App Development</td>
                  <td>How to Build Ride Sharing</td>
                  <td>Logistics</td>
                  <td>
                    Rome <br />
                    +39 320 973 0997
                  </td>
                </tr>
                <tr>
                  <td>UI/UX Design Services</td>
                  <td>How to build a fitness app</td>
                  <td>FinTech</td>
                  <td>
                    Rome <br />
                    +49 1590 6702779
                  </td>
                </tr>
                <tr>
                  <td>Desktop Application Development</td>
                  <td>Build a streaming app</td>
                  <td>Market Place</td>
                  <td>
                    Germany <br />
                    +49 1590 6702779
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>How to build a CRM</td>
                  <td>Travel</td>
                  <td>
                    Faisalabad <br />
                    +92 322 7946794
                  </td>
                </tr>
                <tr>
                  <td>Hire a Developer</td>
                  <td>CRM for Agriculture</td>
                  <td>Retail</td>
                  <td>
                    Faisalabad <br />
                    +92 322 7946794
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>Web design process</td>
                  <td>Education</td>
                  <td>
                    Lahore <br />
                    +92 321 8351765
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-white flex flex-col gap-y-3">
            <h1 className="font-bold">Subscribe</h1>
            <p>Get executive insights, curated resources and expert guidence</p>
            <input
              type="text"
              placeholder="Email"
              className="bg-[#111827] border p-3 rounded-lg"
            />
            <ButtonComp
              text="Subscribe"
              variant="contained"
              edges="boxy"
              type="button"
            />
          </div>
        </div>
        <div className="h-[1px] w-full bg-white" />
        <div className="flex container mx-auto text-white justify-center items-center">
          <div className="w-1/2 h-full flex flex-col justify-center mb-[-4rem]">
            <h1>Dev House</h1>
            <p>© Dev House 2011-2022. All rights reserved</p>
          </div>
          <div className="w-1/2 flex gap-x-3 justify-end mb-[-4rem]">
            <img src="/social/1.png" alt="" />
            <img src="/social/2.png" alt="" />
            <img src="/social/3.png" alt="" />
            <img src="/social/4.png" alt="" />
            <img src="/social/5.png" alt="" />
          </div>
        </div>
      </footer>
      <footer className="w-screen justify-center items-center h-[10rem] bg-[#111827] py-[6rem] flex flex-col xl:hidden">
        <div className="text-white text-xl">
          &copy; 2023 DevHouse All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
