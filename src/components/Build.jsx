import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>

      <div className="space-y-6 text-base text-neutral-600">
        <p>
          After the discovery phase, our expert team translates the product requirements into actionable solutions. This stage involves detailed design, engineering, and development work. Whether it’s creating innovative aerospace components, designing robust structural systems, or developing cutting-edge IT solutions, we focus on precision and quality.
        </p>
        <p>
          Our engineers and developers work collaboratively, employing best practices and advanced technologies to build systems that meet your specifications and exceed your expectations. Each client gets a dedicated person of contact from our end to ensure good communication and seamless project management.
        </p>
        <p>
          Our team facilitate effective communication, handling client questions promptly and ensuring transparency throughout the development process. We are committed to delivering high-quality results while keeping our clients informed and engaged every step of the way.
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
