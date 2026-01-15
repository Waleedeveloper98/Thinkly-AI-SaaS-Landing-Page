import React from "react";
import Button from "../Button";
import SecondaryButton from "../SecondaryButton";

const Hero = () => {
  return (
    <section className=" w-full flex flex-col items-center justify-center gap-5 text-center h-[calc(100vh-75px)] max-h-200">
      <div
        className="heading text-7xl font-semibold"
        style={{ lineHeight: 1.15 }}
      >
        <h1>
          Meet{" "}
          <span className="font2 text-[var(--text-heading)] italic font-light">
            Thinkly
          </span>
        </h1>
        <h1>Your Smart Work Companion</h1>
      </div>
      <div className="subheading w-1/2 text-[var(--text-body)]">
        <h3>
          An AI-powered productivity assistant that helps you plan tasks,
          organize your day, and stay focused on what truly matters.
        </h3>
      </div>
      <div className="buttons flex gap-6">
        <Button text={"Get Started Free"} />
        <SecondaryButton text={"Watch Demo"} />
      </div>
    </section>
  );
};

export default Hero;
