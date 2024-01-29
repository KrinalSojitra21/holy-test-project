"use client";

import CloseIcon from "@/utils/icons/CloseIcon";
import { MenuIcon } from "@/utils/icons/MenuIcon";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  scrollToSection: (id: string) => void;
};

const Header = ({ scrollToSection }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-fit flex items-center py-6 lg:pt-6 lg:pb-3 px-6 md:px-8 justify-between overflow-hidden lg:overflow-visible">
      <div className="text-lightest text-lg  leading-[26px]">#LIVEINGREECE</div>
      <div
        className="lg:hidden text-black p-2 rounded-md bg-cta h-fit"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </div>
      {isOpen ? (
        <div
          className="absolute bg-black bg-opacity-60 w-screen h-screen top-0 left-0 z-10"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : null}
      <motion.div
        className={`transition-all duration-500 absolute right-0 top-0 z-10 h-screen lg:h-fit ${
          isOpen ? "w-[350px]" : "w-0"
        } flex lg:relative lg:z-0 lg:w-auto`}
      >
        <div className="flex flex-col lg:flex-row lg:gap-20 lg:justify-between lg:w-auto w-full max-w-[688px] bg-darker">
          <div className="lg:hidden flex items-center justify-between p-6 border-b border-light border-opacity-20">
            <div className="text-lightest leading-[26px] ">#LIVEINGREECE</div>
            <div className="text-light p-2" onClick={() => setIsOpen(!isOpen)}>
              <CloseIcon />
            </div>
          </div>
          <div className="flex gap-6 flex-col lg:flex-row p-6 lg:p-0">
            <span className="lg:text-lg text-lightest leading-[26px] border-b border-light border-opacity-20 pb-2 lg:p-0 lg:border-none">
              For
            </span>
            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row">
              {["Talents", "Entrepreneurs", "Investors"].map((item, index) => (
                <div
                  key={index}
                  className="group lg:text-lg w-fit text-lightest height-[26px] uppercase hover:yellow-cursor  hover:text-cta transition-all"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToSection(item);
                  }}
                >
                  {item}
                  <div className="w-0 h-[2px] bg-cta lg:mt-2 mx-auto group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row p-6 lg:p-0">
            {["Innitiatives", "Q&A"].map((item, index) => (
              <div
                key={index}
                className="group lg:text-lg w-fit text-lightest height-[26px] hover:yellow-cursor  hover:text-cta transition-all"
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(item);
                }}
              >
                {item}
                <div className="w-0 h-[2px] bg-cta lg:mt-2 mx-auto group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
