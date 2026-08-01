import Image from "next/image";

const partners = [
  { name: "Born N Bread", image: "/partners-v2/born-n-bread.webp", width: 1342, height: 1143, style: "born-n-bread" },
  { name: "Nyatee Foundation", image: "/partners-v2/nyatee.webp", width: 1118, height: 1115, style: "nyatee" },
  { name: "ERA by DJ Zinhle", image: "/partners-v2/era.webp", width: 1422, height: 390, style: "era" },
  { name: "Premier", image: "/partners-v2/premier.webp", width: 1536, height: 483, style: "premier" },
  { name: "Vodacom", image: "/partners-v2/vodacom.webp", width: 1532, height: 378, style: "vodacom" },
  { name: "Hollywoodbets", image: "/partners-v2/hollywoodbets.webp", width: 800, height: 470, style: "hollywoodbets" },
];

function PartnerMark({ partner, duplicate = false }: { partner: (typeof partners)[number]; duplicate?: boolean }) {
  return (
    <span
      className={`partner-mark partner-mark--${partner.style}`}
      aria-hidden={duplicate || undefined}
    >
      <Image
        src={partner.image}
        alt={duplicate ? "" : `${partner.name} logo`}
        width={partner.width}
        height={partner.height}
        sizes="(max-width: 767px) 240px, 320px"
        className="partner-logo"
      />
    </span>
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
