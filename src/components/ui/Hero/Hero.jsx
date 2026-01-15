import React from "react";
import Button from "../Button";
import SecondaryButton from "../SecondaryButton";

const Hero = () => {
  return (
    <section className=" w-full flex flex-col items-center justify-center gap-5 text-center h-[85vh] sm:h-[calc(100vh-75px)] max-h-200 px-6">
      <div
        className="heading text-[clamp(30px,7vw,70px)] font-semibold "
        style={{ lineHeight: 1.15 }}
      >
        <h1 className="text-shadow">
          Meet{" "}
          <span className="font2 text-[var(--text-heading)] italic font-light ">
            Thinkly
          </span>
        </h1>
        <h1 className="text-shadow">Your Smart Work Companion</h1>
      </div>
      <div className="subheading w-4/5 text-[clamp(14px,4vw,18px)] md:w-1/2  text-[var(--text-body)]">
        <h3>
          An AI-powered productivity assistant that helps you plan tasks,
          organize your day, and stay focused on what truly matters.
        </h3>
      </div>
      <div className="buttons px-8 flex flex-col gap-4 md:gap-6 md:flex-row md:w-fit w-full">
        <Button className={"text-[var(--text-invert)] hover:bg-[var(--hover-primary)] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"} text={"Get Started Free"} />
        <SecondaryButton className={"hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"} text={"Watch Demo"} />
      </div>
    </section>
  );
};

export default Hero;
