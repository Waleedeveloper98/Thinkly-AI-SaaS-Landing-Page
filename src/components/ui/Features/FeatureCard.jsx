import React from "react";

const FeatureCard = ({ feature }) => {
  const { img, heading, desc } = feature;
  return (
    <div className="feature-card bg-[var(--bg-card)] pb-3 flex flex-col gap-4 w-[clamp(300px,89vw,400px)] lg:w-[clamp(300px,89vw,430px)] md:h-[clamp(300px,35vw,350px)] shadow-sm shadow-black/10 ring-1 ring-[var(--border-subtle)] rounded-lg">
      <div className="image w-full h-70 rounded-lg overflow-hidden flex items-center justify-center p-6">
        <img className="size-full object-contain" src={img} alt={heading} />
      </div>
      <div className="card-details px-5 md:px-3 pb-2 flex flex-col gap-2">
        <h4 className="text-xl sm:text-2xl font-bold  text-[var(--text-heading)]">
          {heading}
        </h4>
        <p className="text-sm text-[var(--text-body)]">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
