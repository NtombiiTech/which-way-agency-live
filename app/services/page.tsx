import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Creative solutions, brand experiences, events, activations, strategic storytelling and community impact.",
};

const services = [
  {
    title: "Creative Solutions",
    copy: "We turn an open brief into a clear creative direction, campaign idea or experience concept people can understand and act on.",
    capabilities: ["Creative direction", "Concept development", "Campaign thinking", "Experience design"],
    image: "/media/rnb-03.webp",
  },
  {
    title: "Brand Experiences",
    copy: "We create physical moments where a brand can be seen, felt and remembered through meaningful audience participation.",
    capabilities: ["Experience strategy", "Pop-up environments", "Guest journeys", "Partner integration"],
    image: "/media/amcor-06.webp",
  },
  {
    title: "Events and Activations",
    copy: "We connect production, programme flow, suppliers and people into one coordinated live experience.",
    capabilities: ["Event production", "Brand activations", "Technical coordination", "On-site delivery"],
    image: "/media/mercedes-01.webp",
  },
  {
    title: "Strategic Storytelling",
    copy: "We find the strongest thread in your message and shape it across content, campaigns and real-world experiences.",
    capabilities: ["Narrative strategy", "Campaign messaging", "Content direction", "Audience framing"],
    image: "/media/rnb-02.webp",
  },
  {
    title: "Community Impact",
    copy: "We build initiatives with communities, not simply around them, making participation and local relevance part of the plan.",
    capabilities: ["Community engagement", "Programme concepts", "Stakeholder coordination", "Impact storytelling"],
    image: "/media/amcor-03.webp",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero shell services-hero">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h1>One idea. Every detail connected.</h1>
          <p>Strategy, creativity and production shaped as one experience from concept to delivery.</p>
        </Reveal>
      </section>

      <section className="services-stack shell">
        {services.map((service) => (
          <div className="service-panel-stage" key={service.title}>
            <article className="service-panel">
              <Reveal className="service-panel-media">
                <Image src={service.image} alt="" fill sizes="(max-width: 767px) 100vw, 48vw" className="media-cover" />
              </Reveal>
              <Reveal className="service-panel-copy" delay={0.08}>
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
                <ul aria-label={`${service.title} capabilities`}>
                  {service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                </ul>
              </Reveal>
            </article>
          </div>
        ))}
      </section>

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
