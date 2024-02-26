import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import dummy from "../../Data/dummy.json";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <header className="w-full fixed z-[1000]">
      <div
        className=" flex items-center h-[4.5rem] justify-between 
      shadow-lg shadow-black-0.3 bg-[#fefefe]  blackdrop-blur-[0.5rem] "
      >
        <div className="text-[18px] mx-5">
          <h1 className="color text-2xl "> Logo</h1>
        </div>

        <ul className="md:flex hidden items-center space-x-10 mx-5">
          {dummy.map((dummyy, index) => (
            <li className="nav_link">
              <Link key={index} href={dummyy.path}>
                {JSON.stringify(dummyy.page).split(/(?<!\\)"/)}{" "}
              </Link>
            </li>
          ))}
        </ul>

        <FaBarsStaggered
          onClick={openNav}
          className="w-6 h-6 mx-5 text-black md:hidden rotate-180"
        />
      </div>
    </header>
  );
};
export default Navbar;
