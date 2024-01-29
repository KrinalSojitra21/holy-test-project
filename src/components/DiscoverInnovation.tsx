import ArrowIcon from "@/utils/icons/ArrowIcon";
import React from "react";

const DiscoverInnovation = () => {
  return (
    <div className="w-full pt-16 pb-[54px] flex flex-col gap-12 lg:gap-24">
      <div className="text-light xl:text-8xl md:text-7xl text-5xl   max-w-2xl lg:max-w-5xl">
        Discover innovation opportunities
      </div>
      <div className="flex flex-col gap-5">
        {["Talents", "Entrepreneurs", "Investors"].map((item, index) => (
          <div
            id={item}
            key={index}
            className="group relative group-hover: w-full border-t-2 border-light flex justify-between items-center hover:border-cta yellow-cursor group pb-6"
          >
            {/* <div className="absolute w-full h-[1px] bg-cta top-0" /> */}
            <span className="uppercase p-1.5 z-[5] text-2xl leading-8 text-light w-[240px] sm:w-[300px] lg:w-[450px] group-hover:text-darker transition-all duration-500">
              {item}
            </span>
            <div className="w-[240px] sm:w-[300px] lg:w-[450px] h-0 absolute top-0 left-0 bg-cta group-hover:h-[44px] transition-all duration-500" />
            <div className="text-light group-hover:text-cta group-hover:rotate-45 transition-all duration-500">
              <ArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverInnovation;
