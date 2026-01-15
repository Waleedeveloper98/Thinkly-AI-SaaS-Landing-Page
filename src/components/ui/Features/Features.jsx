import React from "react";
import FeatureCard from "./FeatureCard";
import { featureData } from "../../../data";
import PageHeader from "../PageHeader";

const Features = () => {
  return (
    <section id="features" className="w-full px-4 py-6 flex flex-col gap-10 pb-10 md:pb-28 md:pt-20 md:gap-20">
      <PageHeader
        title={"Features"}
        subTitle={"Smarter tools for a smarter workflow."}
      />
      <div className="features-container flex flex-col gap-8 items-center justify-center md:flex-row md:flex-wrap lg:gap-14">
        {featureData.map((feature, i) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
