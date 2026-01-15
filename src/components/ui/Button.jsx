import React from "react";

const Button = ({ text,className }) => {
  return (
    <button className={`${className} px-4 py-2 rounded-md bg-[var(--btn-primary-bg)]  cursor-pointer transition-all duration-300  `}>
      {text}
    </button>
  );
};

export default Button;
