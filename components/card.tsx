import React from "react";
import Image from "next/image";
import works from "../Data/work.json";

const card = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1  justify-items-center">
      {works.map((work, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-12 "
        >
          <a href="#">
            <Image
              className="object-fit md:object-scale-down"
              src={require("../assets/pj1.png")}
              // src={work.imgCover}
              width={600}
              height={100}
              alt="Picture of the author"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {work.ProjectName}
              </h5>
            </a>
            <p className="mb-10 font-normal text-gray-700">
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default card;
