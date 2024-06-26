import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Innovate, Collaborate, Excel"
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovation-Driven Culture" invert>
            Encourage creative thinking and experimentation. Hold regular workshops to inspire innovative solutions and continuous improvement.
          </GridListItem>
          <GridListItem title="Collaborative Excellence" invert>
            Foster teamwork and open communication. Promote cross-disciplinary projects and team-building activities to achieve shared goals.
          </GridListItem>
          <GridListItem title="Learning and Development" invert>
            Prioritize ongoing learning with workshops, training, and mentorship. Reward commitment to personal and professional growth, ensuring everyone excels.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
