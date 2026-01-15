import React from "react";
import PageHeader from "../PageHeader";
import Button from "../Button";
import { CircleCheck } from "lucide-react";
import PricingCard from "./PricingCard";
import { pricingData } from "../../../data";

const Pricing = () => {
  return (
    <section id="pricing" className="w-full px-4 py-6 flex flex-col pt-28 gap-10 pb-10 md:pb-28 bg-[var(--bg-section)] items-center justify-center md:pt-20 md:gap-20">
      <PageHeader
        title={"Pricing"}
        subTitle={"Start free. Upgrade when you’re ready."}
      />
      <div className="pricing-plans flex flex-col gap-8 md:flex-row flex-wrap justify-center">
        {pricingData.map((priceCard, i) => (
          <PricingCard key={i} priceCard={priceCard} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
