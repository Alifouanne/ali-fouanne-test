"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/background";
import Link from "next/link";
/**
 * Renders the Second component with a styled background.
 *
 * @returns {JSX.Element} React component
 */
const Second = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          I am Eng Ali Fouanne
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Front End Developer | React Developer | Software Engineer
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          <Link href="/">Go Back</Link>
        </button>
      </motion.div>
    </AuroraBackground>
  );
};

export default Second;
