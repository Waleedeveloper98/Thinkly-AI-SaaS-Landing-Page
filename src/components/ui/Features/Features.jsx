import React from "react";
import FeatureCard from "./FeatureCard";
import { featureData } from "../../../data";
import Heading from "../Heading";
import SubHeading from "../SubHeading";

const Features = () => {
  return (
    <section className="w-full px-4 py-6 flex flex-col gap-10 pb-10 md:pb-28">
      <div className="feature-header text-center flex flex-col gap-2">
        <Heading text={"Features"}/>
        <SubHeading text={"Smarter tools for a smarter workflow."}/>
      </div>
      <div className="features-container flex flex-col gap-8 items-center justify-center md:flex-row md:flex-wrap lg:gap-14">
        {featureData.map((feature, i) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
