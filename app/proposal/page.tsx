import type { Metadata } from "next";
import { ProposalForm } from "@/components/ProposalForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Request a Proposal",
  description: "Tell Which Way Agency about your project, event or activation and request a tailored proposal.",
};

export default function ProposalPage() {
  return (
    <>
      <section className="page-hero shell proposal-hero">
        <Reveal>
          <p className="eyebrow">Start a project</p>
          <h1>Give us the shape of the idea.</h1>
          <p>Share what you know today. We will help clarify the rest and recommend the right way forward.</p>
        </Reveal>
      </section>

      <section className="section shell proposal-layout">
        <Reveal className="proposal-aside">
          <h2>What happens next</h2>
          <ol>
            <li><strong>We review the brief.</strong><span>Our team considers the scope, timing and fit.</span></li>
            <li><strong>We start a conversation.</strong><span>We contact you to clarify the most important details.</span></li>
            <li><strong>We shape the proposal.</strong><span>You receive a considered approach built around the project.</span></li>
          </ol>
          <p>Prefer email? <a href="mailto:info@whichwayagency.co.za">info@whichwayagency.co.za</a></p>
        </Reveal>
        <Reveal className="proposal-form-wrap" delay={0.08}>
          <ProposalForm />
        </Reveal>
      </section>
    </>
  );
}
