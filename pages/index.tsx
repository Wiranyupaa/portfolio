import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import NavMobile from "@/components/Navbar/NavMobile";
import { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="bg-black w-full h-screen overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
      {/* <Hero/> */}
    </div>
  );
};

export default HomePage;
