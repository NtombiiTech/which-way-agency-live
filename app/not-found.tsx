import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell state-page">
      <p className="eyebrow">Page not found</p>
      <h1>This direction ends here.</h1>
      <p>The page may have moved, but the work is still waiting.</p>
      <Link className="button button-primary" href="/work">View our work</Link>
    </section>
  );
}
