import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          After the discovery phase, we create a detailed plan for each project and begin working on it. The plan is very technical, often making the project take longer.
        </p>
        <p>
          Each client gets a dedicated account manager to ensure good communication while hiding the true progress of the project. They act as a middleman, handling client questions while the development team reuses code from open source projects.
        </p>
        <p>
          Our account managers are trained to respond to client emails late at night, a few days after receiving them. This makes us seem very busy and discourages clients from requesting changes.
        </p>
      </div>
      <Blockquote
        author={{ name: "Arro Hossain", role: "CEO, Arro Realty" }}
        className="mt-12"
      >
        Emran Consulting Ltd. updated us so regularly that we almost thought their messages were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;
