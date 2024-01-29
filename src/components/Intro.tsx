import React, { useEffect, useRef, useState } from "react";
import { CustomImagePreview } from "./shared/CustomImagePreview";
import { image1, image2, image3, image4 } from "@/utils/images";
import ArrowIcon from "@/utils/icons/ArrowIcon";
import { motion } from "framer-motion";

const Intro = () => {
  const parentRef = useRef(null);
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const titleText = "Greece the birthplace of ideas";

  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex gap-5 justify-between lg:flex-row flex-col items-center">
        <div className="lg:w-[33.33%] w-full">
          <motion.h1 className="w-fit flex-1 xl:text-8xl md:text-7xl  text-5xl  text-light tracking-[-1.92px] text-wrap lg:max-w-[300px] xl:max-w-[450px] md:max-w-[720px] max-w-[600px]">
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}{" "}
          </motion.h1>
          {/* text-6xl lg:text-8xl max-w-2xl lg:max-w-5xl */}
        </div>
        <div className="lg:w-[66.66%] w-full  flex gap-5 lg:justify-between ">
          <div className="lg:flex-1 flex justify-start ">
            <div
              className="relative  aspect-square rounded-full xl:h-[380px] md:h-[320px] sm:h-[210px] h-[150px] overflow-hidden"
              ref={parentRef}
            >
              <CustomImagePreview image={image1} parentRef={parentRef} />
            </div>
          </div>
          <div className="lg:flex-1 flex lg:justify-end justify-start ">
            <div className="relative aspect-square rounded-full  xl:h-[380px] md:h-[320px] sm:h-[210px] h-[150px] overflow-hidden ref={parentRef}">
              <CustomImagePreview image={image2} parentRef={parentRef} />
            </div>
          </div>
        </div>
      </div>
      {/* <div> */}
      <div className="flex gap-5 lg:justify-between ">
        <div className="lg:flex-1 flex justify-start ">
          <div
            className="relative rounded-full aspect-square  xl:h-[380px] md:h-[320px] sm:h-[210px] h-[150px] overflow-hidden"
            ref={parentRef}
          >
            <CustomImagePreview image={image3} parentRef={parentRef} />
          </div>
        </div>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="lg:flex hidden flex-col gap-6 max-w-[445px] mt-2.5 flex-1"
        >
          <span className="text-lg leading-[26px] text-lightest ">
            Right in the cradle of Western civilization and at the heart of
            contemporary innovation, we invite innovative minds,
            ecosystem-driving entrepreneurs and leading investors to explore,
            grow, and invest in a country that blends rich history, captivating
            culture and a promising entrepreneurial ecosystem.
          </span>
          <button className="group white-cursor py-2 px-6 flex gap-2 rounded-[37px] bg-cta w-fit border border-cta items-center hover:yellow-cursor hover:bg-transparent transition-all duration-500">
            <span className="text-lg leading-[26px] text-darker group-hover:text-cta transition-all duration-500">
              Become a citizen
            </span>
            <div className="text-darker group-hover:rotate-45 p-2 rounded-full group-hover:bg-cta transition-all duration-500">
              <ArrowIcon />
            </div>
          </button>
        </motion.div>
        <div className="lg:flex-1 flex justify-end ">
          <div
            className="relative rounded-full aspect-square  xl:h-[380px] md:h-[320px] sm:h-[210px] h-[150px] overflow-hidden"
            ref={parentRef}
          >
            <CustomImagePreview image={image4} parentRef={parentRef} />
          </div>
        </div>
      </div>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="lg:hidden flex flex-col gap-6  mt-2.5 flex-1"
      >
        <span className="text-lg leading-[26px] text-lightest ">
          Right in the cradle of Western civilization and at the heart of
          contemporary innovation, we invite innovative minds, ecosystem-driving
          entrepreneurs and leading investors to explore, grow, and invest in a
          country that blends rich history, captivating culture and a promising
          entrepreneurial ecosystem.
        </span>
        <button className="group white-cursor py-2 px-6 flex gap-2 rounded-[37px] bg-cta w-fit border border-cta items-center hover:yellow-cursor hover:bg-transparent transition-all duration-500">
          <span className="text-lg leading-[26px] text-darker group-hover:text-cta transition-all duration-500">
            Become a citizen
          </span>
          <div className="text-darker group-hover:rotate-45 p-2 rounded-full group-hover:bg-cta transition-all duration-500">
            <ArrowIcon />
          </div>
        </button>
      </motion.div>
      {/* </div> */}
    </div>
  );
};

export default Intro;
