import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="" title="About Us">
        {/* <p className="text-justify"> */}
        <p className="">
          Emran Consulting Ltd., a dynamic start-up incorporated in Alberta, Canada, since September 25th, 2013, began its journey with a focus on Branding, Graphic Design, Marketing, and Project Management. However, in 2024, we evolved into a multi-disciplinary engineering powerhouse. Our services now encompass Aerospace Engineering, Flight Test Engineering, Structural Engineering, Systems Engineering and Architecture, Safety Engineering, Reliability Engineering, Risk Engineering, Quality Engineering, Biomedical Services, as well as IT services such as Web Development, App Development, and IT Consulting.
        </p>
        {/* <div className="text-justify mt-10 max-w-2xl space-y-6 text-base"> */}
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our evolution reflects our commitment to delivering top-tier engineering and IT solutions. We pride ourselves on our ability to integrate complex systems seamlessly, leveraging our extensive expertise across various fields to tackle diverse challenges and deliver customized solutions. By working closely with our clients, we ensure that their unique needs are met, always striving to exceed expectations through our deep industry knowledge and technical proficiency.
          </p>
          <p>
            At Emran Consulting Ltd., our goal extends beyond providing exceptional services; we aim to enable and build capability in Bangladesh to manufacture aerospace components. Choosing Emran Consulting Ltd. means partnering with a team that is passionate about both engineering and technology, dedicated to fostering long-term relationships built on trust, integrity, and mutual respect. Join us as we turn challenges into opportunities and ideas into reality, collaboratively engineering a brighter future together.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2" label="Satisfied clients" />
          <StatListItem value="6" label="Ongoing Projects" />
          <StatListItem value="3" label="Committed employees" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
