"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
} from "framer-motion";
export default function Nav() {
  const links = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/projects",
      name: "projects",
    },
    {
      path: "/about",
      name: "aboutss",
    },
    {
      path: "/contact",
      name: "contacts",
    },
  ];

  const pathName = usePathname;
  const MotionLink = motion(Link);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
    console.log(xRange);
  };

  return (
    <nav className=" p-8">
      <ul className=" flex gap-12">
        <AnimatePresence>
          {links.map((link) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);

            return (
              <motion.li
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                key={link.path}
                onPointerLeave={(event) => {
                  x.set(0);
                  y.set(0);
                }}
                style={{ x, y }}
              >
                <MotionLink
                  className={cn(
                    " font-medium rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200",
                    pathName === link.path ? "bg-slate-300" : ""
                  )}
                  href={link.path}
                >
                  <motion.span>{link.name}</motion.span>
                  {pathName === link.path ? (
                    <motion.div>
                      transition{{ type: "spring" }}
                      layoutId="underline" className=""
                    </motion.div>
                  ) : null}
                </MotionLink>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </nav>
  );
}
