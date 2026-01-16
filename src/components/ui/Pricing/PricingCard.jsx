import { CircleCheck } from "lucide-react";
import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";
const PricingCard = ({ priceCard }) => {
  const { id, isPopular, planName, price, benefits, buttonText } = priceCard;
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
        // once: true,
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.4,
        delay: id * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`cursor-pointer pricing-card relative flex flex-col gap-4 divide-[var(--border-subtle)] bg-[var(--bg-card)] rounded-lg shadow-md shadow-black/10 ring-1 ring-black/10 px-6 md:px-4 py-8 w-[clamp(300px,89vw,400px)] md:w-[clamp(300px,89vw,320px)] hover:shadow-lg${
        isPopular && "md:scale-105"
      }`}
    >
      {isPopular && (
        <div className="tag bg-green-400 shadow-md w-fit px-3 py-1 rounded-full font-medium text-xs absolute right-2.5 top-6 z-50 text-[var(--text-invert)]">
          Most Popular
        </div>
      )}
      <div className="bg absolute top-0 right-0 h-2/5 w-3/5 dotted mask-b-from-1 mask-l-from-20%"></div>
      <div className="top border-b flex flex-col gap-8 pb-6">
        <h5 className="text-[var(--text-heading)] text-2xl font-medium">
          {planName}
        </h5>
        <div className="flex gap-1">
          <sup>US</sup>
          <h4 className="text-4xl font-semibold">${price}</h4>
          <h6 className="self-end">per month</h6>
        </div>
        <Button
          className={`self-center w-full text-[var(--text-heading)] ring-1 ring-[var(--border-subtle)] ${
            isPopular
              ? "bg-[var(--btn-primary-bg)] hover:bg-[var(--hover-primary)] text-white"
              : "bg-transparent hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          } font-semibold`}
          text={buttonText}
        />
      </div>
      <div className="bottom flex flex-col gap-3 text-[var(--text-body)]">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex items-center gap-2">
            <CircleCheck size={14} stroke="#6B7280" />
            <p className="text-sm">{benefit}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;
