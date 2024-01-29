import DiscoverInnovation from "@/components/DiscoverInnovation";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import React, { Ref, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-screen bg-darker flex flex-col white-cursor overflow-hidden lg:overflow-auto">
      <Header scrollToSection={scrollToSection} />
      <div className="flex flex-col px-6 md:px-8 overflow-y-scroll pt-[22px] hide-scrollbar w-full max-w-[1500px] m-auto">
        <Intro />
        <DiscoverInnovation />
      </div>
    </div>
  );
};

export default Index;
