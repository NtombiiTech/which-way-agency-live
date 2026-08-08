import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-lead">
        <p>Have a brief in mind?</p>
        <Link href="/proposal" className="footer-title">
          Let&apos;s shape it.
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>

      <div className="shell footer-grid">
        <div>
          <p className="footer-label">Contact</p>
          <a href="mailto:info@whichwayagency.co.za">info@whichwayagency.co.za</a>
          <a href="tel:+27100113909">010 011 3909</a>
        </div>
        <div>
          <p className="footer-label">Navigate</p>
          <Link href="/work">View our work</Link>
          <Link href="/services">Services</Link>
          <Link href="/talent">Talent</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <p className="footer-label">Start</p>
          <Link href="/proposal">Request proposal</Link>
          <a href="mailto:info@whichwayagency.co.za?subject=Consultation%20request">Book consultation</a>
          <Link href="/contact">Contact the agency</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {year} Which Way Agency</span>
        <span>Johannesburg and Newcastle, South Africa</span>
      </div>
    </footer>
  );
}
