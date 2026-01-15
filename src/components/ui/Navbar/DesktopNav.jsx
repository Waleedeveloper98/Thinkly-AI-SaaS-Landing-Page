import React from "react";
import Button from "../Button";

const DesktopNav = () => {
  return (
    <header className="hidden md:block w-full bg-[var(--bg-navbar)]">
      <nav className="w-full flex items-center justify-between border-b border-[var(--border-subtle)] py-4 px-10">
        <h4 className="logo font-semibold text-xl text-[var(--text-heading)]">
          Thinkly
        </h4>
        <ul className="flex items-center gap-12 text-[var(--text-body)]">
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
            <Button text={"Get Started"} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
