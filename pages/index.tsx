"use client";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import NavMobile from "@/components/Navbar/NavMobile";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import AboutMe from "@/components/AboutMe";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  // useLayoutEffect(() => {

  //   gsap.registerPlugin(ScrollTrigger)

  // })

  return (
    <div className="bg-black w-full h-screen overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
      <Hero />
      {/* <AboutMe /> */}
    </div>
  );
};

export default HomePage;
