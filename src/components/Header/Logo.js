import * as React from "react";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <div
      style={{
        position: "relative",
        width: 50,
        height: 50,
        marginRight: 5
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnssvgjs="http://svgjs.com/svgjs"
        width="50"
        height="50"
        x="0"
        y="0"
        viewBox="0 0 176 176"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          flip: Infinity,
          repeatDelay: 5,
        }}
        style={{ position: "absolute" }}
        xmlSpace="preserve"
      >
        <g>
          <linearGradient
            id="linear-gradient"
            gradientUnits="userSpaceOnUse"
            x1="25.77"
            x2="150.23"
            y1="25.77"
            y2="150.23"
          >
            <motion.stop
              stopColor="#0055FF"
              animate={{
                stopColor: [
                  "#0055FF",
                  "#FFF9DA",
                  "#FFC6A8",
                  "#FF7744",
                  "#2B00FF",
                ],
              }}
              transition={{
                yoyo: Infinity,
                ease: "linear",
                duration: 8,
              }}
              offset="50%"
            ></motion.stop>
            <motion.stop
              stopColor="#D4504C"
              animate={{
                stopColor: ["#FFF9DA", "#E7FFF7", "#0055FF"],
              }}
              transition={{
                yoyo: Infinity,
                ease: "linear",
                duration: 8,
              }}
              offset="75%"
            />
            <motion.stop
              stopColor="#FF7744"
              animate={{
                stopColor: ["#D4504C", "#2B00FF", "#E7FFF7", "#FFF9DA"],
              }}
              transition={{
                yoyo: Infinity,
                ease: "linear",
                duration: 8,
              }}
              offset="100%"
            ></motion.stop>
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            gradientUnits="userSpaceOnUse"
            x1="34.26"
            x2="141.74"
            y1="34.26"
            y2="141.74"
          >
            <stop offset="0" stopColor="#384e63"></stop>
            <stop offset="1" stopColor="#658aa8"></stop>
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            gradientUnits="userSpaceOnUse"
            x1="68.88"
            x2="141.1"
            y1="70.16"
            y2="142.38"
          >
            <stop offset="0" stopColor="#384e63"></stop>
            <stop offset="1" stopColor="#384e63" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="linear-gradient-4"
            x1="65.61"
            x2="74.52"
            xlinkHref="#linear-gradient-3"
            y1="78.51"
            y2="87.41"
          ></linearGradient>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Color">
              <g id="_20.Tumblr" data-name="20.Tumblr">
                <g id="Background">
                  <circle
                    id="Background_01"
                    cx="88"
                    cy="88"
                    fill="url(#linear-gradient)"
                    r="88"
                    data-original="url(#linear-gradient)"
                    className=""
                  ></circle>
                  <circle
                    id="Background_02"
                    cx="88"
                    cy="88"
                    fill="url(#linear-gradient-2)"
                    r="76"
                    data-original="url(#linear-gradient-2)"
                    className=""
                  ></circle>
                </g>
                <g id="Shadow">
                  <motion.path
                    d="m158.66 116a76.28 76.28 0 0 1 -44.47 43.33l-37.07-37.03c4.16 3.74 9.24 5.25 14.77 5.61a39.65 39.65 0 0 0 19.9-3.85 1.18 1.18 0 0 0 .82-1.24c0-3.56 0-11.21 0-11.56-.36.2-5.89 3-8.64 3.46-3.31.59-6.53.48-9.51-1.32a6.22 6.22 0 0 1 -3.21-4.4c-.19-1.28 0-28 0-28.25h18.64v-12.58h-18.89c0-.45 0-13.17 0-19.17a1.07 1.07 0 0 0 -.18-.76z"
                    fill="url(#linear-gradient-3)"
                    data-original="url(#linear-gradient-3)"
                    className=""
                  />
                  <motion.path
                    d="m72.29 80.73v8.91l-8.9-8.91z"
                    fill="url(#linear-gradient-4)"
                    data-original="url(#linear-gradient-4)"
                    className=""
                  />
                </g>
                <motion.path
                  animate={{ rotate: 360 }}
                  transition={{
                    ease: "easeInOut",
                    flip: Infinity,
                    repeatDelay: 5,
                    duration: 2,
                  }}
                  id="Icon"
                  d="m72.29 80.73h-8.9c0-.37 0-7.23 0-10.36a1.06 1.06 0 0 1 .8-1.21c10.36-3.09 15.3-18.41 15.35-20.16 0-.69.41-1 1.08-1q4.72 0 9.47 0c.75 0 .93.26.92 1v19.2h18.89v12.52h-18.65c0 .25-.19 27 0 28.25a6.22 6.22 0 0 0 3.21 4.43c3 1.8 6.2 1.91 9.51 1.32 2.75-.48 8.28-3.26 8.64-3.46v11.56a1.18 1.18 0 0 1 -.82 1.24 39.65 39.65 0 0 1 -19.9 3.85c-5.93-.39-11.34-2.09-15.66-6.46-2.24-2.28-3.94-4.83-3.94-8.18z"
                  fill="#ffffff"
                  data-original="#ffffff"
                  className=""
                ></motion.path>
              </g>
            </g>
          </g>
        </g>
      </motion.svg>
    </div>
  );
};
