import React from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 ring-0 bg-pink opacity-70 h-[100vh] w-[100vw]`}
      >
        <ul
          className={`fix flex ${navOpenStyle} text-white items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300  w-[60%] bg-black space-y-14 z-[10010]`}
        >
          <li>
            {" "}
            <a className="nav_link text-[25px] sm:text-[30px]" href="#">
              {" "}
              Home{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="nav_link text-[25px] sm:text-[30px]" href="#">
              {" "}
              About me{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="nav_link text-[25px] sm:text-[30px]" href="#">
              {" "}
              Project{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="nav_link text-[25px] sm:text-[30px]" href="#">
              {" "}
              Contact{" "}
            </a>{" "}
          </li>
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
