import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Emran Consulting
          </h1>
          <h2 className="mt-4 font-bold text-2xl text-neutral-700">
            - A 360 Consultancy Firm!
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            Welcome to Emran Consultancy, where we provide 360-degree solutions
            to transform your business. Our expert team navigates every aspect
            of your challenges, ensuring holistic and strategic guidance for sustainable
            growth and success. Trust Emran Consultancy to be your
            comprehensive partner in achieving excellence.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
