import React from "react";
import PageIntro from "@/components/PageIntro";
import imageLaptop from "@/images/laptop.jpg";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Effective solutions for your IT and Business challenges."
        src={imageLaptop}
        shape={2}
      >
        <p>
          At Emran Consulting Ltd., we excel in delivering efficient and valuable solutions to our clients. We specialize in crafting stunning,
          high-quality marketing pages and robust, scalable web applications using the latest secure technologies. Our expertise extends to modern portfolio,
          business website, e-commerce development, where we create customized applications tailored to your business needs. Additionally,
          we provide tailored content management solutions to streamline your operations. Tell us about your project,
          and let`&apos;`s work together to bring your vision to life.
        </p>

      </PageIntro>
    </>
  );
};

export default WorkPage;
