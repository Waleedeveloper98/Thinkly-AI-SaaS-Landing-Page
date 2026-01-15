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
    <header className="block md:hidden fixed top-0 left-0 w-full bg-[var(--bg-navbar)] py-4">
      <nav className="w-full flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
        <h4 className="logo font-semibold text-xl text-[var(--text-heading)] pl-4">
          Thinkly
        </h4>
        <div
          className={`menu absolute top-0 left-0 px-4 py-20 pt-30 w-full h-screen transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col h-full gap-4 text-[var(--text-body)] bg-[var(--bg-main)]">
            <li>
              <Link className="cursor-pointer" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                to="howitworks"
                smooth={true}
                duration={500}
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
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
          className="cursor-pointer relative z-20 hover:text-[var(--text-heading)] pr-4 active:scale-105"
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
