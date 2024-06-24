import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We collaborate closely with our clients to understand their{" "}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, immersing ourselves in their daily operations to grasp the core
          of their business.
        </p>
        <p>
          Our team of experts conducts thorough investigations, while our account
          managers review essential documents. Our senior security specialists
          perform advanced security assessments to gain insights into{" "}
          <strong className="font-semibold text-neutral-950">business</strong>{" "}
          operations, which we then pass on to our forensic accounting team.
        </p>
        <p>
          After completing a comprehensive audit, we provide a detailed{" "}
          <strong className="font-semibold text-neutral-950">plan</strong> and
          a budget tailored to your needs.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Comprehensive Investigation</TagListItem>
        <TagListItem>Feasibility Assessment</TagListItem>
        <TagListItem>Employee Surveys</TagListItem>
        <TagListItem>Concept Validations</TagListItem>
        <TagListItem>Detailed Forensic Reviews</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
