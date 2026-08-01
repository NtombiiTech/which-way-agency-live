"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Creative Solutions",
    image: "/media/rnb-03.webp",
    alt: "A live creative experience with guests gathered outdoors",
  },
  {
    title: "Brand Experiences",
    image: "/media/amcor-06.webp",
    alt: "A branded community experience produced in an open park",
  },
  {
    title: "Events and Activations",
    image: "/media/mercedes-01.webp",
    alt: "A Mercedes-Benz event stage prepared for guests",
  },
  {
    title: "Strategic Storytelling",
    image: "/media/rnb-02.webp",
    alt: "An audience responding to a live storytelling moment",
  },
  {
    title: "Community Impact",
    image: "/media/amcor-03.webp",
    alt: "Families enjoying a community event together",
  },
];

export function InteractiveServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section shell home-services-interactive" aria-labelledby="services-heading">
      <Reveal className="services-interactive-intro">
        <h2 id="services-heading">Built around the experience.</h2>
        <p>From the first strategic question to the last guest leaving, we connect every part of the journey.</p>
        <Link className="text-link" href="/services">
          Explore all services <ArrowRight weight="bold" aria-hidden="true" />
        </Link>
      </Reveal>

      <div className="services-interactive-stage">
        <div className="services-image-window" id="service-image-preview" aria-live="polite">
          {services.map((service, index) => (
            <Image
              key={service.title}
              src={service.image}
              alt={index === activeIndex ? service.alt : ""}
              fill
              sizes="(max-width: 767px) 100vw, 55vw"
              className={`services-image${index === activeIndex ? " is-active" : ""}`}
            />
          ))}
          <div className="services-image-wash" aria-hidden="true" />
          <span className="services-image-caption">{services[activeIndex].title}</span>
        </div>

        <div className="service-index-interactive" aria-label="Choose a service to preview">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              aria-pressed={index === activeIndex}
              aria-controls="service-image-preview"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <span>{service.title}</span>
              <span className="service-index-indicator" aria-hidden="true">
                <ArrowRight weight="bold" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
