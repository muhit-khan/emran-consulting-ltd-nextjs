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
          Our team of experts conducts comprehensive research and analysis, performing customer surveys and interviews, and engaging in detailed discussions with your team to identify key objectives and constraints. This phase involves gathering all necessary information, performing feasibility studies, and defining project scope.
        </p>
        <p>
          After completing a comprehensive audit, we translate these insights into specific product requirements, providing a detailed{" "}
          <strong className="font-semibold text-neutral-950">plan</strong> and <strong className="font-semibold text-neutral-950"> the budget </strong>

          tailored to your needs. This process requires specialized skills such as technical writing and strategic planning.
        </p>

      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Gathering Information</TagListItem>
        <TagListItem>Feasibility Studies</TagListItem>
        <TagListItem>Defining Project Scope</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
