import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          During the Build phase, we often extend the project timeline by 6 weeks due to changes in{" "}
          <strong className="font-semibold text-neutral-950">requirements</strong>.
          This allows us to increase the budget one last time before the launch.
        </p>
        <p>
          Although we mainly use pre-made components, most of the{" "}
          <strong className="font-semibold text-neutral-950">work</strong>{" "}
          on each project happens in the final 24 hours. The development time is usually spent creating customized components according to your needs and the demos that gain popularity on social media.
        </p>
        <p>
          We make sure the main pages of the site are{" "}
          <strong className="font-semibold text-neutral-950">fully functional</strong>{" "}
          at launch, while the extra pages remain placeholder text that we update as part of our reasonable{" "}
          <strong className="font-semibold text-neutral-950">maintenance</strong> package.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have basic unit test coverage. Besides we offer comprehensive test packages which would be impressive if you could afford them.
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
