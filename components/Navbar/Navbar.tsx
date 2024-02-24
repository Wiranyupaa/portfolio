import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <header className="w-full fixed z-[1000]">
      <div
        className=" flex items-center h-[4.5rem] justify-between border border-gray-500 border-opacity-60 
      shadow-lg shadow-black-0.3 bg-white bg-opacity-20 blackdrop-blur-[0.5rem] "
      >
        <div className="text-[18px] mx-5">
          <h1 className="color text-2xl text-white"> Logo</h1>
        </div>

        <ul className="md:flex hidden items-center space-x-10 mx-5">
          <li>
            {" "}
            <a className="nav_link" href="#">
              {" "}
              Home{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="nav_link" href="#">
              {" "}
              About me{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="nav_link" href="#">
              {" "}
              Project{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="nav_link" href="#">
              {" "}
              Contact{" "}
            </a>{" "}
          </li>
        </ul>
        <FaBarsStaggered
          onClick={openNav}
          className="w-6 h-6 mx-5 text-white md:hidden rotate-180"
        />
      </div>
    </header>
  );
};
export default Navbar;
