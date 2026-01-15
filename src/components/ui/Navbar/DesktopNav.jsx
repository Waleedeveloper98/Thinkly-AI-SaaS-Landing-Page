import React from "react";
import Button from "../Button";
import Lenis from "@studio-freight/lenis";
import { Link } from "react-scroll";

const DesktopNav = () => {
  return (
    <header className="hidden md:block w-full bg-[var(--bg-navbar)]">
      <nav className="w-full flex items-center justify-between border-b border-[var(--border-subtle)] py-4 px-10">
        <h4 className="logo font-semibold text-xl text-[var(--text-heading)]">
          Thinkly
        </h4>
        <ul className="flex items-center gap-12 text-[var(--text-body)]">
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
      </nav>
    </header>
  );
};

export default DesktopNav;
