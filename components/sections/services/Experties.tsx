import React from "react";
import ConsultingBox from "./clientcomps/ConsultingBox";

const Experties: React.FC = () => {
  return (
    <div className="container mx-auto my-[5rem] flex flex-col gap-y-[4rem]">
      <div className="w-full">
        <h1 className="text-[36px] font-semibold">Our Experties</h1>
        <p className="leading-[28px] f-mon lg:w-[70%]">
          We work with advanced technologies like blockchain and IoT, covering a
          broad spectrum of specialisms. Our team members share a background in
          engineering, maths and physics, giving them a distinct analytical and
          technical advantage over the competition.
        </p>
      </div>
      <div className="w-full flex">
        <div className="w-full h-full lg:w-2/3">
          <div className="lg:w-[90%] w-full h-full">
            <ConsultingBox />
          </div>
        </div>
        <div className="w-1/3 rounded-2xl overflow-hidden hidden lg:block">
          <img src="/expertise.jpg" alt="expertise-image" />
        </div>
      </div>
    </div>
  );
};

export default Experties;
