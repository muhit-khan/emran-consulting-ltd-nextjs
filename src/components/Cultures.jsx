import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team is dedicated and loyal, contributing to our long-term success.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We trust our team to manage their work effectively, ensuring both productivity and flexibility.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            We value compassion and understanding, supporting our team in all aspects of their lives.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
