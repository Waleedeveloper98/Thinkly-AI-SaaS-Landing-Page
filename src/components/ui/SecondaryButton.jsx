import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="border px-4 py-2 border-[var(--border-subtle)] rounded-md text-[var(--text-body)] hover:underline cursor-pointer transition-all duration-300 ">
      {text}
    </button>
  );
};

export default SecondaryButton;
