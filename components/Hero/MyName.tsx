import React from "react";
import { gsap } from "gsap";

const MyName = () => {
  const name = ["Wiranyupa"];

  return (
    <div className=" md:mb-24  lg:mb-32 xl:mb-44">
      <div className="relative w-full flex justify-center content-center text-center ">
        <div className="absolute outline-title lg:text-[248px] md:text-[128px] uppercase text-white pb-2 text-5xl font-bold text-center">
          {name.map((namee, index) => (
            <div className="" key={index}>
              {" "}
              {namee}{" "}
            </div>
          ))}
        </div>
        <div className="split absolute lg:text-[256px] md:text-[128px]  sm:text-[256px] bold uppercase  ">
          <p> Wiranyupa</p>
        </div>
      </div>
    </div>
  );
};

export default MyName;
