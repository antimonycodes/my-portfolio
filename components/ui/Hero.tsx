// The first line of your file
"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Nav from "./Nav";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

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

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  // const backgroundImage = useMotionTemplate`${color}`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      {/* <div>
        <Nav />
      </div> */}
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative min-h-screen  overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className=" w-full h-full flex items-center justify-between ">
          <motion.div
            className=" flex flex-col items-center justify-center w-full h-full basis-[50%] text-3xl"
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
              <br /> i'm a frontend developer
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
          <div className=" basis-[50%]">jlXIhx</div>
        </div>

        <div className="absolute inset-0 ">
          <Canvas>
            <Stars radius={80} count={1000} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </>
  );
};
