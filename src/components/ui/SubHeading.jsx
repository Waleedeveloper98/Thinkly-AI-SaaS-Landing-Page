import { motion } from "motion/react";
import React from "react";

const SubHeading = ({ subTitle }) => {
  return (
    <motion.h6
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
        delay: 0.2,
      }}
      className="text-[var(--text-body)] text-[clamp(14px,4vw,18px)]"
    >
      {subTitle}
    </motion.h6>
  );
};

export default SubHeading;
