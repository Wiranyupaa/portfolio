import React from "react";
import Card from "./card";
import Footer from "@/components/footer/footer";

const myWork = () => {
  return (
    <section className="w-full h-[100vh]">
      <div className=" bg-[#FEFEFE] w-full pt-10 md:py-12 lg:py-16 px-5 md:px-16 lg:px-20 xl:px-20">
        <div className="text-4xl lg:text-6xl xl:text-6xl font-bold w-full mb-20">
          <h1>My Projects</h1>
        </div>
        <div>
          <Card />
        </div>
      </div>
      <div className="w-[100vw] ">
        <Footer />
      </div>
    </section>
  );
};

export default myWork;
