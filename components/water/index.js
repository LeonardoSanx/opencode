import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Water() {
  const x = useMotionValue(0);
  const width = useTransform(x, [0, -300], ["100vw", `${x} * (-1)`]);

  return (
    <svg className="absolute bg-gradient-to-b from-teal-400 via-cyan-600 to-slate-900 h-full w-full">
      <motion.path
        animate={{ x: [-1000, -200] }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        fill="#FFF"
        fill-opacity="0.4"
        d="M 0 50 Q 200 150 400 50 Q 600 -50 800 50 Q 1000 150 
        1200 50 Q 1400 -50 1600 50 Q 1800 150 2000 50 Q 2200 -50 2400 50 L 2600 0 L 0 0 Z"
      ></motion.path>
      <motion.path
        animate={{ x: [0, -800] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
        fill="#FFF"
        fill-opacity="1"
        d="M 0 50 Q 200 150 400 50 Q 600 -50 800 50 Q 1000 150 
        1200 50 Q 1400 -50 1600 50 Q 1800 150 2000 50 Q 2200 -50 2400 50 L 2600 0 L 0 0 Z"
      ></motion.path>
    </svg>
  );
}
