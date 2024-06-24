import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our Values"
        title="Balancing Reliability and Innovation"
      >
        <p>
          At Emran Consulting Ltd., we pride ourselves on blending cutting-edge technology with time-tested methods to deliver exceptional results. We stay true to our core values, ensuring every project reflects our commitment to excellence.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We start every partnership by seamlessly integrating your brand into our framework, ensuring a flawless and professional look that matches your vision.
          </GridListItem>
          <GridListItem title="Efficient">
            Our track record speaks for itself – we always meet our deadlines, leveraging years of experience to deliver quality work quickly and reliably.
          </GridListItem>
          <GridListItem title="Adaptable">
            Understanding your unique business needs is our priority. We customize our solutions to fit perfectly, ensuring you get exactly what you need.
          </GridListItem>
          <GridListItem title="Transparent">
            We believe in complete transparency throughout our process, ensuring you are informed and confident in every decision we make together.
          </GridListItem>
          <GridListItem title="Loyal">
            Building long-term relationships with our clients is key. We go beyond just delivering a product – we aim to be a trusted partner for years to come.
          </GridListItem>
          <GridListItem title="Innovative">
            We are constantly exploring new technologies and methodologies to stay ahead of the curve, bringing you the most innovative solutions available.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
