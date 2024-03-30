"use Client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const COLORS = ["#13ffaa", "#1E67C6", "CE84CF", "#DD335C"];

export default function Hero() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`
radial-gradient(125% at 50% 0%, #020617 50%, ${color})
`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <>
      <motion.div
        style={{
          backgroundImage,
        }}
        className=" w-full h-screen"
      >
        {/* stars */}
        <div className=" absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.div>
    </>
  );
}
