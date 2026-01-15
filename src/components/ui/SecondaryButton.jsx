import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="border border-[var(--border-subtle)] rounded-md px-4 text-[var(--text-body)] hover:underline cursor-pointer transition-all duration-300 ">
      {text}
    </button>
  );
};

export default SecondaryButton;
