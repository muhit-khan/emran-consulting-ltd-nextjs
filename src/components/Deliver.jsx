import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The Deliver phase is where our hard work comes to fruition. We ensure that every project is completed on time, within budget, and to the highest standards. This phase includes rigorous testing, quality assurance, and final adjustments to ensure everything functions seamlessly.
        </p>
        <p>
          We provide thorough documentation and training, ensuring a smooth handover. Our commitment doesn’t end at delivery; we offer ongoing support and maintenance to ensure sustained success and satisfaction.
        </p>
        <p>
          We make sure the delivered product is fully functional at launch, while any further additional features remains as a part of our reasonable maintenance package.
        </p>
      </div>
      <h3 className="mt-12 mb-5 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have basic unit test coverage. Besides we offer comprehensive test packages which is available at very impressive cost.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability, we use the servers with latest technologies at a effective pricing.
        </ListItem>
        <ListItem title="Support">
          Since we control the API keys for all critical services your business uses, you can expect lifetime support, and invoices, from us.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
