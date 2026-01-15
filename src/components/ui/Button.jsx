import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-4 py-2 rounded-md bg-[var(--btn-primary-bg)] hover:bg-[var(--hover-primary)] text-white font-medium cursor-pointer transition-all duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {text}
    </button>
  );
};

export default Button;
