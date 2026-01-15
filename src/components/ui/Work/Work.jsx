import React from "react";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import WorkCard from "./WorkCard";
import { workData } from "../../../data";
import PageHeader from "../PageHeader";

const Work = () => {
  return (
    <section id="howitworks" className="w-full px-4 py-6 flex flex-col pt-28 gap-10 pb-10 md:pb-28 md:pt-20 md:gap-20">
      <PageHeader
        title={"How It Works"}
        subTitle={"A simple, smart process designed to save you time."}
      />
      <div className="work-container flex flex-col gap-12 items-center justify-center md:flex-row md:flex-wrap lg:gap-14">
        {workData.map((work) => (
          <WorkCard key={work.no} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Work;
