import { motion } from "framer-motion";
import React from "react";

const FeatureCard = ({ feature }) => {
  const { id, img, heading, desc } = feature;
  return (
    <motion.div
      layout="position" // MUCH lighter than full layout
      initial={{
        scale: 0.95,
        y: 30,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
      viewport={{
        amount: 0.4,
        once: true,
      }}
      whileHover={{
        scale: 1.03, // use transform instead of padding
      }}
      transition={{
        duration: 0.6,
        delay: id * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="cursor-pointer feature-card bg-[var(--bg-card)] pb-3 flex flex-col gap-4 w-[clamp(300px,89vw,400px)] lg:w-[clamp(300px,89vw,430px)] md:h-[clamp(300px,35vw,350px)] shadow-sm shadow-black/10 ring-1 ring-[var(--border-subtle)] rounded-lg"
    >
      <div className="image w-full h-70 rounded-lg overflow-hidden flex items-center justify-center p-6">
        <img className="size-full object-contain" src={img} alt={heading} />
      </div>
      <div className="card-details px-5 md:px-3 pb-2 flex flex-col gap-2">
        <h4 className="text-xl sm:text-2xl font-bold  text-[var(--text-heading)]">
          {heading}
        </h4>
        <p className="text-sm transition-all duration-200 text-[var(--text-body)]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
