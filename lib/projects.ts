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
  featuredOnHome?: boolean;
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
    featuredOnHome: true,
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
    featuredOnHome: true,
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
    title: "Newcastle Amcor Dam Music Festival — 2023",
    shortTitle: "Amcor Dam Festival — 2023",
    client: "Newcastle Amcor Dam Music Festival",
    year: "2023",
    location: "Newcastle, KwaZulu-Natal",
    category: "Festival and Activation",
    summary:
      "The 2023 edition of Newcastle's outdoor music festival, bringing live entertainment and community audiences together at Amcor Dam.",
    brief:
      "Support a welcoming outdoor festival experience built around live performance, community participation and a strong sense of place.",
    response:
      "Which Way supported the live-event environment and audience experience across the Amcor Dam site.",
    impact:
      "The event created a shared cultural moment for Newcastle audiences and established the foundation for the festival's following edition.",
    services: ["Festival experience", "Audience planning", "Live-event support", "Event delivery"],
    cover: "/media/amcor-07.webp",
    featuredOnHome: true,
    gallery: [
      { src: "/media/amcor-07.webp", alt: "Live performer at the Newcastle Amcor Dam Music Festival", portrait: true },
      { src: "/media/amcor-08.webp", alt: "Newcastle Amcor Dam Music Festival 2023 event artwork" },
    ],
  },
  {
    slug: "newcastle-amcor-dam-festival-2024",
    title: "Newcastle Amcor Dam Music Festival — 2024",
    shortTitle: "Amcor Dam Festival — 2024",
    client: "Newcastle Amcor Dam Music Festival",
    year: "2024",
    location: "Newcastle, KwaZulu-Natal",
    category: "Festival and Activation",
    summary:
      "The 2024 edition expanded the Amcor Dam experience through family activity, hospitality and visible partner activations across the outdoor festival site.",
    brief:
      "Build a welcoming festival experience for varied audiences while giving commercial partners clear, useful opportunities to participate in the day.",
    response:
      "Which Way brought together family activity, partner touchpoints, hospitality and audience moments across the outdoor site.",
    impact:
      "The 2024 festival environment supported community participation while giving partners a clear and useful presence within the experience.",
    services: ["Festival experience", "Brand activation", "Audience planning", "Event delivery"],
    cover: "/media/amcor-06.webp",
    featuredOnHome: true,
    gallery: [
      { src: "/media/amcor-06.webp", alt: "Brand activation team at the Newcastle Amcor Dam Music Festival" },
      { src: "/media/amcor-04.webp", alt: "Partner hospitality activation at the outdoor festival" },
      { src: "/media/amcor-03.webp", alt: "Family activity area at the Newcastle Amcor Dam Music Festival" },
      { src: "/media/amcor-05.webp", alt: "Guests seated in a branded hospitality area" },
      { src: "/media/amcor-01.webp", alt: "Festival character greeting a young guest", portrait: true },
      { src: "/media/amcor-02.webp", alt: "Festival character in the crowd", portrait: true },
    ],
  },
  {
    slug: "jz-foundation-christmas-programme-2025",
    title: "JZ Foundation Christmas Programme",
    shortTitle: "JZ Foundation Christmas Programme",
    client: "JZ Foundation",
    year: "December 2025",
    location: "Nkandla, KwaZulu-Natal",
    category: "Community Programme Coordination",
    summary:
      "Two large-scale Christmas gatherings coordinated for 5,000 elders and 5,000 children across two dedicated community days in Nkandla.",
    brief:
      "Coordinate an organised festive programme capable of welcoming two distinct community groups at scale: elders on 27 December and children on 29 December 2025.",
    response:
      "Which Way brought the moving parts together through advance planning, site readiness, stakeholder coordination and hands-on event delivery across both programme days.",
    impact:
      "The programme reached 10,000 people in total, creating a dedicated Christmas experience for 5,000 elders and 5,000 children over two days.",
    services: ["Programme coordination", "Site planning", "Stakeholder coordination", "On-site delivery"],
    cover: "/media/jz-foundation-christmas-2025.webp",
    gallery: [
      {
        src: "/media/jz-foundation-christmas-2025.webp",
        alt: "Which Way team member coordinating the Nkandla site for the JZ Foundation Christmas Programme",
      },
    ],
  },
  {
    slug: "indumezulu-maskandi-festival-2025",
    title: "Indumezulu Maskandi Festival 2025",
    shortTitle: "Indumezulu Maskandi Festival",
    client: "Indumezulu Maskandi Festival",
    year: "5 April 2025",
    location: "Newcastle Farmers Hall Ground, KwaZulu-Natal",
    category: "Festival Planning and Coordination",
    summary:
      "A Newcastle festival centred on Maskandi music, local talent and a shared celebration of KwaZulu-Natal culture.",
    brief:
      "Help shape the festival plan and coordinate the practical details needed to bring artists, audiences and the event programme together at Newcastle Farmers Hall Ground.",
    response:
      "Which Way supported the organising team through event planning, programme coordination and the preparation required to move the festival from concept towards delivery.",
    impact:
      "The work created a clear foundation for a locally rooted cultural event, with space for established performers, emerging artists and Newcastle audiences to meet around Maskandi music.",
    services: ["Event planning", "Festival coordination", "Programme support", "Organising support"],
    cover: "/media/indumezulu-maskandi-festival-2025.webp",
    gallery: [
      {
        src: "/media/indumezulu-maskandi-festival-2025.webp",
        alt: "Indumezulu Maskandi Festival event announcement for 5 April 2025 in Newcastle",
        portrait: true,
      },
    ],
  },
  {
    slug: "newcastle-annual-spring-horse-race",
    title: "Newcastle Annual Spring Horse Race",
    shortTitle: "Newcastle Spring Horse Race",
    client: "Newcastle Annual Spring Horse Race",
    year: "2025",
    location: "Newcastle, KwaZulu-Natal",
    category: "Event Consulting and Planning",
    summary:
      "Strategic and creative planning support for a distinctive Newcastle event bringing horse racing, fashion and public spectacle into one experience.",
    brief:
      "Contribute ideas and planning guidance that could strengthen the event concept, audience experience and public-facing moments around the annual spring horse race.",
    response:
      "Which Way worked in a consulting role, helping the organising team develop ideas, shape the experience and think through the planning needed to connect the race, fashion and community programme.",
    impact:
      "The collaboration gave the event team a clearer creative direction and a stronger planning framework for an experience with a recognisable Newcastle character.",
    services: ["Event consulting", "Concept development", "Experience planning", "Creative direction"],
    cover: "/media/newcastle-annual-spring-horse-race.webp",
    gallery: [
      {
        src: "/media/newcastle-annual-spring-horse-race.webp",
        alt: "Fashion procession through Newcastle during the annual spring horse race campaign",
      },
    ],
  },
  {
    slug: "rnb-soulful-groove-june-2025",
    title: "R&B & Soulful Groove Gathering — June 2025",
    shortTitle: "R&B & Soulful Groove — June 2025",
    client: "R&B & Soulful Groove Gathering",
    year: "June 2025",
    location: "Newcastle, KwaZulu-Natal",
    category: "Event Strategy and Production",
    summary:
      "An end-to-end live experience led from early planning and audience mobilisation through production and event-day delivery.",
    brief:
      "Build the June gathering as a complete campaign and live experience, with the planning, promotion and production working as one connected operation.",
    response:
      "Which Way led the project from concept development and production planning to street-team promotion, supplier coordination, audience mobilisation and on-site execution.",
    impact:
      "A coordinated promotional rollout translated into a well-attended live gathering, with one team carrying the event from the first planning decisions to the final audience experience.",
    services: ["Event strategy", "Street-team promotion", "Audience mobilisation", "Full event production"],
    cover: "/media/rnb-june-2025-event.webp",
    gallery: [
      {
        src: "/media/rnb-june-2025-promotion.webp",
        alt: "R&B and Soulful Groove street team promoting the June 2025 gathering",
        portrait: true,
      },
      {
        src: "/media/rnb-june-2025-event.webp",
        alt: "Audience viewed from the stage at the R&B and Soulful Groove Gathering in June 2025",
      },
    ],
  },
  {
    slug: "community-giving-initiative-2025",
    title: "Giving Back to the Community",
    shortTitle: "Community Giving Initiative",
    client: "Community Outreach",
    year: "2025",
    location: "KwaZulu-Natal",
    category: "Community Impact",
    summary:
      "A community-centred giving initiative focused on practical support, dignity and direct connection with young people.",
    brief:
      "Create a giving moment that moved beyond a simple handover and made the community, the recipients and the purpose of the initiative central to the experience.",
    response:
      "Which Way supported the outreach through coordination, community engagement and an organised distribution experience designed to feel personal and respectful.",
    impact:
      "The initiative placed practical support directly into the hands of learners while strengthening the relationship between the programme and the community it serves.",
    services: ["Community engagement", "Outreach coordination", "Distribution planning", "On-site support"],
    cover: "/media/community-giving.webp",
    gallery: [
      {
        src: "/media/community-giving.webp",
        alt: "Community giving initiative distributing support to school learners",
        portrait: true,
      },
    ],
  },
  {
    slug: "rnb-soulful-groove-december-2024",
    title: "R&B & Soulful Groove Gathering — December 2024",
    shortTitle: "R&B & Soulful Groove — December 2024",
    client: "R&B & Soulful Groove Gathering",
    year: "December 2024",
    location: "Newcastle, KwaZulu-Natal",
    category: "Live Experience",
    summary:
      "A summer gathering shaped around live music, shared energy and the close audience connection that defines the R&B & Soulful Groove experience.",
    brief:
      "Deliver a distinctive year-end gathering where the programming, audience flow and atmosphere could come together as one recognisable cultural experience.",
    response:
      "Which Way coordinated the experience across planning, production and event-day delivery, keeping the audience journey and live programme at the centre of the work.",
    impact:
      "The December gathering brought a large, engaged audience together and strengthened the event's position as a recurring cultural date in Newcastle.",
    services: ["Experience planning", "Event production", "Audience coordination", "On-site delivery"],
    cover: "/media/rnb-december-2024-event.webp",
    gallery: [
      {
        src: "/media/rnb-december-2024-event.webp",
        alt: "Audience enjoying the R&B and Soulful Groove Gathering in December 2024",
      },
    ],
  },
  {
    slug: "rnb-soulful-groove-december-2025",
    title: "R&B & Soulful Groove Gathering — December 2025",
    shortTitle: "R&B & Soulful Groove — December 2025",
    client: "R&B & Soulful Groove Gathering",
    year: "December 2025",
    location: "Newcastle, KwaZulu-Natal",
    category: "Campaign and Event Delivery",
    summary:
      "A joined-up promotional campaign and live-event operation designed to move audiences from awareness in the city to arrival at the gathering.",
    brief:
      "Build anticipation for the December gathering through visible local promotion, then carry that momentum into a coordinated event-day experience.",
    response:
      "Which Way activated a street-level promotional team, supported audience mobilisation and coordinated the live delivery from arrival and access through to the main event environment.",
    impact:
      "The campaign created a direct bridge between promotion and attendance, turning public-facing activity into a live gathering with visible audience momentum.",
    services: ["Promotional campaign", "Street-team activation", "Audience mobilisation", "Event coordination"],
    cover: "/media/rnb-december-2025-event.webp",
    gallery: [
      {
        src: "/media/rnb-december-2025-promotion.webp",
        alt: "Street team promoting the R&B and Soulful Groove Gathering in December 2025",
        portrait: true,
      },
      {
        src: "/media/rnb-december-2025-event.webp",
        alt: "Arrival and parking activity at the R&B and Soulful Groove Gathering in December 2025",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}