import { motion } from "motion/react";
import React from "react";

const Heading = ({ title }) => {
  return (
    <motion.h2
      initial={{
        opacity: 0,
        y: 10,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        amount: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="text-3xl font-semibold text-[var(--text-heading)] md:text-5xl text-shadow"
    >
      {title}
    </motion.h2>
  );
};

export default Heading;
