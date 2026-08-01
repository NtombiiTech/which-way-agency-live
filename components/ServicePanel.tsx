import Image from "next/image";

type ServicePanelProps = {
  title: string;
  copy: string;
  capabilities: string[];
  image: string;
};

export function ServicePanel({ title, copy, capabilities, image }: ServicePanelProps) {
  return (
    <div className="service-panel-stage">
      <article className="service-panel">
        <div className="service-panel-media">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            quality={68}
            className="media-cover"
          />
        </div>

        <div className="service-panel-copy">
          <h2>{title}</h2>
          <p>{copy}</p>
          <ul aria-label={`${title} capabilities`}>
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </div>
      </article>
    </div>
  );
}
