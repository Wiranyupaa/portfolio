"use client";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import NavMobile from "@/components/Navbar/NavMobile";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import AboutMe from "@/components/AboutMe";
import MyWork from "@/components/myWork";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  const pathname = usePathname();

  return (
    <div className="main">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
      <Hero />
      <AboutMe />
      <MyWork />
    </div>
  );
};

<script></script>;

export default HomePage;
