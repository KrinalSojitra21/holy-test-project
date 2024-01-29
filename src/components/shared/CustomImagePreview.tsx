import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export const CustomImagePreview = ({
  image,
  style,
  parentRef,
}: {
  image: string | StaticImageData;
  style?: string;
  parentRef: any;
}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  const [cursor, setCursor] = useState({ size: 200, offset: 200 / 3 });
  const [isImgLoad, setIsImgLoad] = useState(false);
  const imageEnter = () => setCursorVariant("image");
  const imageLeave = () => setCursorVariant("default");
  const [angle, setAngle] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    image: {
      height: cursor.size,
      width: cursor.size,
      x: mousePosition.x - cursor.offset,
      y: mousePosition.y - cursor.offset,
      backgroundColor: "#EEFF33",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let height = parentRef.current ? parentRef.current.offsetHeight : 0;
    setCursor({ size: height, offset: height / 3 });
  }, [windowSize]);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const imageContainers = document.querySelectorAll<HTMLElement>(
      ".image-animation-wrapper"
    );
    if (!imageContainers) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const rad = Math.atan2(e.clientX - x, e.clientY - y);
      const deg = rad * (180 / Math.PI) * -1 + 180;
      setAngle(deg);
    };

    imageContainers.forEach((imageContainer) => {
      imageContainer.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      imageContainers.forEach((imageContainer) => {
        imageContainer.removeEventListener("mousemove", handleMouseMove);
      });
    };
  });

  return (
    <div className="w-full h-full black-cursor image-animation-wrapper">
      <div
        style={{
          background: "#000",
          overflow: "hidden",
          position: "relative",
          clipPath: "inset(0)",
        }}
        onMouseEnter={imageEnter}
        onMouseLeave={imageLeave}
        ref={imageRef}
        className="h-full w-full"
      >
        <Image
          onLoad={() => setIsImgLoad(true)}
          fill
          priority={true}
          src={image}
          alt=""
          className={`${
            isImgLoad ? "opacity-1" : "opacity-0"
          } transition-all duration-500 backgroundImage ${style}`}
        />
        <motion.div style={{ overflow: "hidden" }}>
          <motion.div
            className="cursor black-cursor"
            variants={variants}
            animate={cursorVariant}
          >
            <motion.img
              src="ArrowUp.svg"
              alt="arrow"
              style={{ rotate: angle, width: "30px" }}
              transition={{ type: "spring", stiffness: 10 }}
            />{" "}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
