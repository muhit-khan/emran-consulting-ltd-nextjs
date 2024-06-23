import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import aaroRealty from "@/images/clients/arro-realty/arro-realty-full-black.png";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Emran Consulting Ltd.
          </h1>
          <h2 className="mt-4 font-bold text-2xl text-neutral-700">
            - A 360 Consultancy Firm!
          </h2>
          <p className="mt-6 text-xl text-neutral-600 text-justify">
            Welcome to Emran Consulting Ltd., where we provide 360-degree solutions
            to transform your persona and business. Our expert team navigates every aspect
            of your challenges, ensuring holistic and strategic guidance for sustainable
            growth and success. Trust Emran Consultancy to be your
            comprehensive partner in achieving excellence.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Arro Realty", logo: aaroRealty }}
      >
        Emran Consulting Ltd. created an outstanding website for Arro Realty, exceeding our expectations. Their professionalism, creativity, and technical expertise were exceptional. The modern, user-friendly design has significantly boosted our online presence. We highly recommend their web development services.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
