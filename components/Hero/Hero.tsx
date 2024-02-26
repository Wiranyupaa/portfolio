import React from "react";
import MyName from "./MyName";
import { FiArrowDownRight } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="w-full h-[100vh] pt-40">
      <div className="flex flex-col gap-20 xl:gap-12 text-black text-[20px] items-center">
        <div className="wrapper">
          <p className="typing lg:text-4xl md:text-2xl sm:text-lg space-y-24 ">
            Hi, My name is .
          </p>
        </div>
        <div className="cursor-pointer">
          <MyName />
        </div>
        <div className="flex w-full justify-center mt-44  ">
          <button
            className=" flex w-[150px] h-[20px] p-3  text-sm md:text-md lg:text-lg xl:text-xl md:w-[244px] md:h-[51px] lg:w-[244px] lg:h-[58px]  bg-white border border-secondary-color rounded-full after:hover:bg-black items-center justify-center text-center content-center 
          hover:bg-black hover:text-white"
          >
            Explore now
            <FiArrowDownRight className="ml-2 w-15 h-15 " />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
