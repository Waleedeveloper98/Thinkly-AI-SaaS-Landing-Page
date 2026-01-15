import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Button from "../Button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="block md:hidden relative w-full bg-[var(--bg-navbar)] py-4">
      <nav className="w-full flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
        <h4 className="logo font-semibold text-xl text-[var(--text-heading)] pl-4">
          Thinkly
        </h4>
        <div
          className={`menu absolute top-0 left-0 px-4 py-20 w-full  transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4 text-[var(--text-body)]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <Button text={"Get Started"}/>
            </li>
          </ul>
        </div>
        <div
          onClick={handleMenu}
          className="cursor-pointer relative z-20 hover:text-[var(--text-heading)] pr-4 active:scale-105"
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
