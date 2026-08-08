export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  client: string;
  year: string;
  location: string;
  category: string;
  summary: string;
  brief: string;
  response: string;
  impact: string;
  services: string[];
  cover: string;
  film?: {
    title: string;
    src: string;
    poster: string;
  };
  gallery: { src: string; alt: string; portrait?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "sphe-d-and-friends",
    title: "SPHE D & Friends",
    shortTitle: "SPHE D & Friends",
    client: "Keep Newcastle Alive With Possibilities",
    year: "To be confirmed",
    location: "Newcastle, KwaZulu-Natal",
    category: "Event Production",
    summary:
      "A live-event build that shows how open ground becomes a complete guest experience through planning, production and coordinated delivery.",
    brief:
      "Translate the SPHE D & Friends concept into a production-ready environment, bringing the site, marquee, stage and technical requirements together ahead of opening.",
    response:
      "Which Way coordinated the visible build journey across site preparation, marquee construction, stage design, sound and the final production details needed to make the experience ready for its audience.",
    impact:
      "The film documents a clear transformation from an empty Newcastle site into a complete event environment. Confirmed event date, attendance and audience results will be added when supplied.",
    services: ["Site preparation", "Marquee and stage setup", "Sound coordination", "Event production"],
    cover: "/videos/sphe-d-and-friends-poster.webp",
    film: {
      title: "From concept to execution",
      src: "/videos/sphe-d-and-friends-setup.mp4",
      poster: "/videos/sphe-d-and-friends-poster.webp",
    },
    gallery: [],
  },
  {
    slug: "rnb-soulful-groove-2026",
    title: "R&B and Soulful Groove 2026",
    shortTitle: "R&B and Soulful Groove",
    client: "R&B and Soulful Groove Gathering",
    year: "2026",
    location: "Newcastle, KwaZulu-Natal",
    category: "Live Experience",
    summary:
      "A people-first gathering shaped around music, connection and a relaxed premium atmosphere.",
    brief:
      "Create an event environment where the audience could move easily between music, hospitality and social moments while preserving the gathering's distinctive character.",
    response:
      "Which Way supported the experience across guest touchpoints, live-event coordination and the visual moments that gave the gathering its recognisable energy.",
    impact:
      "The final experience brought the audience, performers and partners into one coherent environment. Confirmed attendance and campaign results will be added when supplied.",
    services: ["Experience planning", "Event coordination", "Guest journey", "On-site delivery"],
    cover: "/media/rnb-03.webp",
    film: {
      title: "14 June 2026 highlights",
      src: "/videos/rnb-soulful-groove-2026.mp4",
      poster: "/videos/rnb-soulful-groove-2026-poster.webp",
    },
    gallery: [
      { src: "/media/rnb-01.webp", alt: "Guests dancing at the R&B and Soulful Groove Gathering", portrait: true },
      { src: "/media/rnb-02.webp", alt: "Guests enjoying the R&B and Soulful Groove Gathering" },
      { src: "/media/rnb-03.webp", alt: "Audience member enjoying a live performance" },
      { src: "/media/rnb-04.webp", alt: "Stilt performers welcoming guests", portrait: true },
    ],
  },
  {
    slug: "mercedes-benz-mental-health-workshop",
    title: "Mental Health and Wellness in the Workplace",
    shortTitle: "Mercedes-Benz Workshop",
    client: "Mercedes-Benz Sandton",
    year: "2025",
    location: "Sandton, Johannesburg",
    category: "Corporate Experience",
    summary:
      "A thoughtful corporate gathering designed to make an important workplace conversation feel open, considered and human.",
    brief:
      "Shape a professional environment for a mental health and wellness workshop, balancing brand standards with warmth, clarity and attentive guest care.",
    response:
      "The room, programme flow and audience experience were treated as one connected system, supporting the speakers while keeping guests comfortable and engaged.",
    impact:
      "The workshop created a focused setting for meaningful conversation. Confirmed participation and internal feedback will be added when supplied.",
    services: ["Event production", "Programme flow", "Technical coordination", "Guest experience"],
    cover: "/media/mercedes-01.webp",
    gallery: [
      { src: "/media/mercedes-05.webp", alt: "Speaker addressing guests at the Mercedes-Benz Sandton wellness workshop" },
      { src: "/media/mercedes-04.webp", alt: "Guests sharing a light moment during the workplace wellness event" },
      { src: "/media/mercedes-06.webp", alt: "Panel participant during the workplace mental health conversation" },
      { src: "/media/mercedes-01.webp", alt: "Welcome stage at the Mercedes-Benz Sandton wellness workshop" },
      { src: "/media/mercedes-02.webp", alt: "Speakers addressing guests at the workplace wellness workshop", portrait: true },
      { src: "/media/mercedes-03.webp", alt: "Completed event setup at Mercedes-Benz Sandton" },
    ],
  },
  {
    slug: "newcastle-amcor-dam-festival-2023",
    title: "Newcastle Amcor Dam Music Festival",
    shortTitle: "Amcor Dam Festival",
    client: "Newcastle Amcor Dam Music Festival",
    year: "2023",
    location: "Newcastle, KwaZulu-Natal",
    category: "Festival and Activation",
    summary:
      "A large outdoor festival where live entertainment, family activity and partner activations shared one energetic landscape.",
    brief:
      "Build a welcoming festival experience for varied audiences while giving commercial partners clear, useful opportunities to participate in the day.",
    response:
      "Which Way brought together audience zones, partner touchpoints, hospitality and live-event moments across the outdoor site.",
    impact:
      "The festival environment supported both community participation and visible partner presence. Verified attendance and partner results will be added when supplied.",
    services: ["Festival experience", "Brand activation", "Audience planning", "Event delivery"],
    cover: "/media/amcor-07.webp",
    gallery: [
      { src: "/media/amcor-07.webp", alt: "Live performer at the Newcastle Amcor Dam Music Festival", portrait: true },
      { src: "/media/amcor-08.webp", alt: "Newcastle Amcor Dam Music Festival 2023 event artwork" },
      { src: "/media/amcor-06.webp", alt: "Brand activation team at the Newcastle Amcor Dam Music Festival" },
      { src: "/media/amcor-04.webp", alt: "Partner hospitality activation at the outdoor festival" },
      { src: "/media/amcor-03.webp", alt: "Family activity area at the Newcastle Amcor Dam Music Festival" },
      { src: "/media/amcor-05.webp", alt: "Guests seated in a branded hospitality area" },
      { src: "/media/amcor-01.webp", alt: "Festival character greeting a young guest", portrait: true },
      { src: "/media/amcor-02.webp", alt: "Festival character in the crowd", portrait: true },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
