import React from "react";
import { footerLinks } from "../../../data";
import Container from "../Container";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Container>
      <footer className="pt-10 px-8 md:px-12 lg:px-24 pb-8 bg-[var(--bg-main)]">
        <div className="top flex flex-col gap-10 pb-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="logo font-semibold text-3xl text-[var(--text-heading)] md:text-4xl">
              Thinkly
            </h4>
            <h6 className="text-[var(--text-body)] md:w-3/5 md:text-sm lg:w-4/5">
              Plan smarter, work faster, and focus on what truly matters.
            </h6>
          </div>
          <div className="links flex justify-between md:gap-6 lg:gap-16">
            <div className="products-links flex flex-col gap-4">
              <h4 className="font-medium text-lg">Products</h4>
              <div className="flex flex-col gap-2">
                {footerLinks.slice(0, 3).map((link, i) => (
                  <Link
                    className="text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--text-body)] text-sm lg:text-sm"
                    key={i}
                    to={link.href}
                    smooth={true}
                    duration={500}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="privacy-links flex flex-col gap-4">
              <h4 className="font-medium text-lg">Legal</h4>
              <div className="flex flex-col gap-2">
                {footerLinks.slice(3).map((link, i) => (
                  <a
                    className="text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--text-body)] text-sm lg:text-sm"
                    key={i}
                    href={link.href}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom border-t border-[var(--border-subtle)] pt-4">
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 Thinkly. All rights reserved.
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
