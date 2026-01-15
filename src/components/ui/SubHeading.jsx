import React from "react";

const SubHeading = ({ text }) => {
  return (
    <h6 className="text-[var(--text-body)] text-[clamp(14px,4vw,18px)]">
      {text}
    </h6>
  );
};

export default SubHeading;
