import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Which Way Agency to discuss an event, activation, campaign or creative brief.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero shell contact-hero">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1>Tell us what you want people to remember.</h1>
          <p>Share the first thought, the full brief or anything in between. We will help find the right direction.</p>
        </Reveal>
      </section>

      <section className="section shell contact-grid">
        <Reveal className="contact-primary">
          <a href="mailto:info@whichwayagency.co.za">
            <EnvelopeSimple aria-hidden="true" />
            <span>Email us</span>
            <strong>info@whichwayagency.co.za</strong>
          </a>
          <a href="tel:+27100113909">
            <Phone aria-hidden="true" />
            <span>Call us</span>
            <strong>010 011 3909</strong>
          </a>
        </Reveal>

        <Reveal className="contact-actions" delay={0.08}>
          <div>
            <h2>Ready with a brief?</h2>
            <p>Use our detailed enquiry form so we can understand the scope before we respond.</p>
            <Link className="button button-primary" href="/proposal">
              Request proposal <ArrowRight weight="bold" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <h2>Prefer a conversation?</h2>
            <p>Book a consultation by email and suggest a date and time that works for you.</p>
            <a className="button button-ghost-dark" href="mailto:info@whichwayagency.co.za?subject=Consultation%20request">
              Book consultation <ArrowRight weight="bold" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
