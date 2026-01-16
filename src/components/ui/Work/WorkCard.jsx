import { motion } from "framer-motion";
import React from "react";

const WorkCard = ({ work }) => {
  const { no, img, heading, desc } = work;
  return (
    <motion.div
      layout={"position"}
      initial={{
        scale: 0.95,
        y: 20,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
      viewport={{
        amount: 0.4,
      }}
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: 0.4,
        delay: no * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="cursor-pointer feature-card bg-[var(--bg-card)] pb-3 flex flex-col gap-4 w-[clamp(300px,89vw,400px)] lg:w-[clamp(300px,89vw,430px)] md:h-[clamp(300px,35vw,350px)] shadow-sm shadow-black/10 ring-1 ring-[var(--border-subtle)] rounded-lg"
    >
      <div className="image w-full rounded-lg overflow-hidden h-70 p-6">
        <img className="size-full object-contain" src={img} alt={heading} />
      </div>
      <div className="card-details px-6 pb-2 md:px-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-[var(--text-heading)] text-[var(--text-invert)] rounded-full size-6 flex items-center justify-center text-sm font-semibold shadow">
            <p>{no}</p>
          </div>
          <h4 className="text-xl md:text-2xl font-bold  text-[var(--text-heading)]">
            {heading}
          </h4>
        </div>
        <p className="text-sm text-[var(--text-body)]">{desc}</p>
      </div>
    </motion.div>
  );
};

export default WorkCard;
