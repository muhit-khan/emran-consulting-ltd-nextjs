import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Emran Consulting was founded by Shawn Shariar Emran, who realized that
            consulting firms were overcharging clients without providing quality services. From day one, we&apos;ve
            committed to pushing boundaries by charging our clients even more.
          </p>
          <p>
            At Emran Consulting, we&apos;re more than just colleagues — we&apos;re a
            family. We are dedicated to delivering high-quality service and
            expect our team to go above and beyond, including working late hours.
            We believe in work-life balance, ensuring our employees bring
            their full selves to work and maintain a healthy integration of work
            and personal life, albeit with a bit of extra time at the office.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5+" label="Committed employees" />
          <StatListItem value="2" label="Satisfied clients" />
          <StatListItem value="$3K" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
