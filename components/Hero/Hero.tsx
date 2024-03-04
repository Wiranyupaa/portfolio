import React from "react";
import MyName from "./MyName";
import { FiArrowDownRight } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="data-scroll-speed-0.6">
      <div className="w-full h-[100vh] bg-white py-20 flex flex-col text-black text-[20px] items-center justify-around">
        <div className="text-wrap">
          <p className="typing lg:text-4xl md:text-2xl sm:text-lg ">
            Hi, My name is .
          </p>
        </div>
        <div className="cursor-pointer">
          <MyName />
        </div>
        <div className="flex w-full justify-center">
          <button
            className=" flex w-[150px] h-[20px] p-3 text-sm md:text-md lg:text-lg xl:text-xl md:w-[244px] md:h-[51px] lg:w-[244px] lg:h-[58px]  bg-white border  border-secondary-color rounded-full after:hover:bg-black items-center justify-center text-center  
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
