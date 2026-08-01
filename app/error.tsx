"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="shell state-page">
      <p className="eyebrow">Something went wrong</p>
      <h1>This page could not load.</h1>
      <p>Try again, or return to the work and continue exploring.</p>
      <div className="state-actions">
        <button className="button button-primary" type="button" onClick={reset}>Try again</button>
        <Link className="button button-ghost-dark" href="/work">View our work</Link>
      </div>
    </section>
  );
}
