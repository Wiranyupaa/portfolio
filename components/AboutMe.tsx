import React from "react";
import { TbNorthStar } from "react-icons/tb";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="bg-[#262626] w-full h-[100vh] flex flex-col md:flex-row">
        <div className="w-full mx-10 my-20">
          <h1 className="text-[#D1D1C7] xl:text-8xl"> About</h1>
          <h1 className="text-[#D1D1C7] xl:text-8xl">
            Me <TbNorthStar className="text-[#8C8C73]" />
          </h1>
          <p className="text-[#D1D1C7] xl:text-xl mt-10">
            As a dedicated and forward-thinking UX/UI designer, I am passionate
            about creating seamless and visually appealing digital experiences.
            I thrive on turning complex problems into intuitive and
            user-friendly designs. My education and hands-on experience have
            equipped me with a solid foundation in user research, wireframing,
            prototyping, and collaborating with cross-functional teams. I am
            excited about the opportunity to contribute my skills and learn from
            experienced professionals in a dynamic internship setting.
          </p>
        </div>

        <div className="w-full  relative">
          <div className=" w-2/3  bg-white md:object-scale-down absolute right-0 bottom-0">
            <Image
              className="object-cover md:object-scale-down"
              src={require("../assets/myPic.JPG")}
              width={553}
              height={685}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
