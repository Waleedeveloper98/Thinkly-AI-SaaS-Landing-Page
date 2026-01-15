import React from "react";

const WorkCard = ({ work }) => {
  const { no, img, heading, desc } = work;
  return (
    <div className="feature-card bg-[var(--bg-card)] pb-3 flex flex-col gap-4 w-[clamp(300px,89vw,400px)] lg:w-[clamp(300px,89vw,430px)] md:h-[clamp(300px,35vw,350px)] shadow-sm shadow-black/10 ring-1 ring-[var(--border-subtle)] rounded-lg">
      <div className="image w-full rounded-lg overflow-hidden">
        <img className="size-full object-cover" src={img} alt={heading} />
      </div>
      <div className="card-details px-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-[var(--text-heading)] text-[var(--text-invert)] rounded-full size-6 flex items-center justify-center text-sm">
            <p>{no}</p>
          </div>
          <h4 className="text-xl md:text-2xl font-medium  text-[var(--text-heading)]">
            {heading}
          </h4>
        </div>
        <p className="text-sm text-[var(--text-body)]">{desc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
