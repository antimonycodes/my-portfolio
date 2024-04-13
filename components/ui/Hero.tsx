"use client";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Nav from "./Nav";
// import { setInterval } from "timers/promises";

const COLORS_TOP = ["#13FFAAaa", "#1E67C6aa", "#CE84CFaa", "#DD335Caa"]; // Added alpha values for overlay

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // Using a solid color for the background and the animated color as an overlay
  const backgroundColor = "#020617"; // Base background color
  const overlayColor = useMotionTemplate`${color}`; // Overlay color with transparency
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Front-End Developer",
    "Mobile-App Developer",
    "Technical Writer",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <motion.section
        className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        initial={{ backgroundColor }}
        animate={{ backgroundColor }}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: overlayColor,
            mixBlendMode: "overlay", // Use blend mode for overlay effect
          }}
        ></motion.div>

        <div className="relative z-10 w-full h-full flex items-center justify-between">
          <motion.div
            className="flex flex-col items-center justify-center w-full h-full basis-[50%] text-3xl"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.6,
              },
            }}
          >
            <h1>
              My name is{" "}
              <motion.span
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.8,
                    delay: 1.9,
                  },
                }}
              >
                ANTIMONY
              </motion.span>
              ,
              <br /> i'm a <span>{text}</span>
            </h1>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  delay: 1,
                },
              }}
              className="group text-[20px] relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 z-50 text-gray-50 transition-colors hover:bg-gray-950/50 "
            >
              Explore my Space
              <FiArrowRight className="transition-transform group-hover:rotate-90 group-active:-rotate-12" />
            </motion.button>
          </motion.div>
          <div className="basis-[50%]">jlXIhx</div>
        </div>

        <div className="absolute inset-0">
          <Canvas>
            <Stars radius={80} count={1000} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </>
  );
};
