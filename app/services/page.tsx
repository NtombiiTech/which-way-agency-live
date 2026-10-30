import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { ServicePanel } from "@/components/ServicePanel";
import { services } from "@/lib/services";
import { ServicesStack } from "@/components/ServicesStack";

export const metadata: Metadata = {
  title: "Services",
  description: "Creative direction, talent bookings, event concepts, brand activations, pop-ups, music and lifestyle events, red carpet experiences and campaign ideas.",
};


export default function ServicesPage() {
  return (
    <>
      <section className="page-hero shell services-hero">
        <Reveal>
          <h1>Ideas with direction.</h1>
          <p>From the first idea to the people who bring it to life. Eight ways we connect brands, talent and culture.</p>
        </Reveal>
      </section>

      <nav className="shell services-jump" aria-label="Explore services">{services.map(service => <a key={service.slug} href={`#${service.slug}`}>{service.title}</a>)}</nav>
      <ServicesStack>
        {services.map((service) => (
          <ServicePanel key={service.title} {...service} capabilities={[...service.capabilities]} />
        ))}
      </ServicesStack>

      <section className="shell supporting-services"><h2>Creative thinking. Lasting impact.</h2><p>Strategic storytelling and community engagement run through our work, connecting the idea to the people and places it matters to.</p></section>
      <section className="section shell services-close">
        <Reveal>
          <h2>Not sure where your brief fits?</h2>
          <p>Start with the outcome you want. We will shape the right combination of services around it.</p>
          <Link className="button button-primary" href="/proposal">
            Request proposal <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
