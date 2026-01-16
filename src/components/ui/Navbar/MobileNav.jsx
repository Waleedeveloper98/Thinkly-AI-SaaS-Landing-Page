import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Button from "../Button";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="block md:hidden fixed top-0 left-0 w-full bg-[var(--bg-navbar)] z-[9999]">
      <nav className="w-full flex items-center justify-between border-b border-[var(--border-subtle)] py-4">
        <h4 className="text-shadow logo font-semibold text-xl text-[var(--text-heading)] pl-4">
          Thinkly
        </h4>

        {/* MENU */}
        <div
          className={`menu absolute z-[9999] top-16 left-0 px-4 py-20 w-full h-screen bg-[var(--bg-main)]
          transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4 text-[var(--text-body)] h-full">
            <li>
              <Link className="cursor-pointer block py-2" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="cursor-pointer block py-2"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer block py-2"
                to="howitworks"
                smooth={true}
                duration={500}
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer block py-2"
                to="pricing"
                smooth={true}
                duration={500}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Button
                className={
                  "shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[var(--text-invert)] hover:bg-[var(--hover-primary)]"
                }
                text={"Get Started"}
              />
            </li>
          </ul>
        </div>

        <div
          onClick={handleMenu}
          className="cursor-pointer relative z-[10000] hover:text-[var(--text-heading)] pr-4 active:scale-105"
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
