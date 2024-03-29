import React from "react";
import { RxCross2 } from "react-icons/rx";
import dummy from "../../Data/dummy.json";
import Link from "next/link";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 ring-0  opacity-100 h-[100vh] w-[100vw]`}
      >
        <ul
          className={`fixed flex ${navOpenStyle} items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-250  w-[100%] bg-black space-y-14 z-[10010]`}
        >
          {dummy.map((dummyy, index) => (
            <li className="nav_link text-white text-[25px] sm:text-[30px]">
              <Link key={index} href={dummyy.path}>
                {JSON.stringify(dummyy.page).split(/(?<!\\)"/)}{" "}
              </Link>
            </li>
          ))}
          <RxCross2
            onClick={closeNav}
            className="absolute top-[1.4rem]  right-[1.4rem] w-[2.3rem] h-[2.3rem] text-white"
          />
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
