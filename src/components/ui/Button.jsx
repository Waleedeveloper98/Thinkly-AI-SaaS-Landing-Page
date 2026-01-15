import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-4 py-2 rounded-md bg-[var(--btn-primary-bg)] hover:bg-[var(--hover-primary)] text-white font-medium cursor-pointer transition-all duration-300">
      {text}
    </button>
  );
};

export default Button;
