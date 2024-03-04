import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { TbNorthStar } from "react-icons/tb";

const AboutMe = () => {
  const alldata = [
    {
      line1: "about",
      line2: "me",
      describe:
        "Hello, My name is Wiranyupa Petch-in, I am a passionate IT student with a keen interest in the dynamic realms of UX/UI design and front-end coding. I like to blending creativity with technology to craft user-centric and visually appealing digital experiences.I am excited about the opportunity to contribute my skills and learn from experienced professionals in a internship setting.",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger-1",
      start: "top top",
      endTrigger: ".trigger-3",
      end: "top top",
      scrub: 3,
      markers: true,
    },
  });

  tl.to(".my-headline span", {
    y: "0%",
    ease: "power2.out",
    stagger: 0.3,
  });

  tl.to(
    ".my-headline span",
    {
      y: "-100%",
      ease: "power2.out",
      stagger: 0.3,
    },
    0.8
  );

  return (
    <section>
      <div className="w-full h-[100vh] bg-[#000000] flex flex-col px-12 md:flex-row ">
        <div className="ml-10 my-20 justify-around items-center">
          <div className="overflow-hidden">
            <h1 className="text-[#D1D1C7] xl:text-9xl font-extrabold transform translate-y-[100%] block">
              {" "}
              About
            </h1>
          </div>

          <div className="flex flex-row content-center pt-3">
            <h1 className="text-[#D1D1C7] xl:text-9xl font-extrabold">me</h1>
            <TbNorthStar className="text-[#8C8C73] pl-5 w-24 h-24 pt-3" />
          </div>

          <div className="w-2/3">
            <p className="text-[#D1D1C7] xl:text-2xl mt-20 text-wrap">
              Hello, My name is Wiranyupa Petch-in, I am a passionate IT student
              with a keen interest in the dynamic realms of UX/UI design and
              front-end coding. I like to blending creativity with technology to
              craft user-centric and visually appealing digital experiences.I am
              excited about the opportunity to contribute my skills and learn
              from experienced professionals in a internship setting.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className=" flex-1 flex-end align-bottom content-center sm:object-scale-down  w-[425px] h-[537px]">
            <Image
              className="object-cover md:object-scale-down"
              src={require("../assets/myPic.jpg")}
              width={553}
              height={553}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
