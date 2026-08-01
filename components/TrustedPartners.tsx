import Image from "next/image";

const partners = [
  { name: "Vodacom", image: "/partners/vodacom.webp" },
  { name: "Hollywoodbets", image: "/partners/hollywoodbets.webp" },
  { name: "Mercedes-Benz", image: "/partners/mercedes.webp" },
  { name: "ERA by DJ Zinhle", image: "/partners/era.webp" },
  { name: "Premium Foods", image: null },
  { name: "Nyatee Foundation", image: "/partners/nyatee.webp" },
];

function PartnerMark({ partner, duplicate = false }: { partner: (typeof partners)[number]; duplicate?: boolean }) {
  return (
    <article className="partner-card" aria-hidden={duplicate || undefined} aria-label={duplicate ? undefined : partner.name}>
      {partner.image ? (
        <Image
          src={partner.image}
          alt={duplicate ? "" : `${partner.name} logo`}
          fill
          sizes="(max-width: 767px) 170px, 220px"
          className="partner-logo"
        />
      ) : (
        <div className="premium-foods-mark" role="img" aria-label={duplicate ? undefined : "Premium Foods"}>
          <span className="premium-foods-monogram">PF</span>
          <span>Premium<small>Foods</small></span>
        </div>
      )}
    </article>
  );
}

export function TrustedPartners() {
  return (
    <section className="partners-section" aria-labelledby="partners-heading">
      <div className="shell partners-heading">
        <p className="eyebrow">Trusted partners</p>
        <h2 id="partners-heading">Strong ideas travel further together.</h2>
        <p>Brands and organisations that have shared the room, the ambition and the work with us.</p>
      </div>

      <div className="partners-window">
        <div className="partners-track">
          <div className="partners-set">
            {partners.map((partner) => <PartnerMark key={partner.name} partner={partner} />)}
          </div>
          <div className="partners-set" aria-hidden="true">
            {partners.map((partner) => <PartnerMark key={`${partner.name}-duplicate`} partner={partner} duplicate />)}
          </div>
        </div>
      </div>
    </section>
  );
}
