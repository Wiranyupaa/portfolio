import React from "react";
import MyName from "./MyName";

export const Hero = () => {
  return (
    <section className="h-[1025px] w-full bg-white pt-40">
      <div className="flex flex-col gap-8 text-black text-[20px] items-center">
        <div className="wrapper">
          <p className="typing lg:text-4xl md:text-2xl sm:text-lg space-y-24 ">
            Hi, My name is .
          </p>
        </div>
        <div className="cursor-pointer">
          <MyName />
        </div>
        <div className="flex w-full justify-center mt-64">
          <button className="flex w-[14rem] h-[2rem] p-8 bg-white border border-secondary-color rounded-full after:hover:bg-black items-center justify-center">
            Explore now!
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
