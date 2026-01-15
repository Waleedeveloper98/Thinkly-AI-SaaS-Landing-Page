import React from "react";

const SubHeading = ({ subTitle }) => {
  return (
    <h6 className="text-[var(--text-body)] text-[clamp(14px,4vw,18px)]">
      {subTitle}
    </h6>
  );
};

export default SubHeading;
