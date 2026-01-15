import React from "react";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import WorkCard from "./WorkCard";
import { workData } from "../../../data";

const Work = () => {
  return (
    <section className="w-full px-4 py-6 flex flex-col gap-10 pb-10 md:pb-28">
      <div className="feature-header px-10 text-center flex flex-col gap-2">
        <Heading text={"How It Works"} />
        <SubHeading
          text={"A simple, smart process designed to save you time."}
        />
      </div>
      <div className="work-container flex flex-col gap-12 items-center justify-center md:flex-row md:flex-wrap lg:gap-14">
        {workData.map((work) => (
          <WorkCard key={work.no} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Work;
