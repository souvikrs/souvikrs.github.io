export const automateUrl = "https://vvautomate.in/";

export const profiles = [
  {
    slug: "quantum-physicist",
    label: "Quantum physicist",
    category: "Research",
    color: "sky",
    description:
      "Experiments in Taiwan, independent physics at Vishwa Vigyan Labs, papers and my academic CV.",
  },
  {
    slug: "inventor",
    label: "Inventor",
    category: "Instruments & engineering",
    color: "sky",
    description:
      "A rooftop telescope, my work in robotics and Vortex, and equipment I’m exploring.",
  },
  {
    slug: "author",
    label: "Author, poet & lyricist",
    category: "Writing",
    color: "violet",
    description:
      "My books and translations, Bengali poems on Facebook and articles on Substack.",
  },
  {
    slug: "business",
    label: "Founder",
    category: "Business",
    color: "sun",
    description:
      "The ventures I run through Vishwa Vigyan and how to bring us a research or business problem.",
  },
  {
    slug: "wellness-rd",
    label: "Wellness R&D",
    category: "Technology & sourcing",
    color: "leaf",
    description:
      "My work with Renatus Wellness on equipment, sourcing and manufacturing across India, China and Taiwan.",
  },
  {
    slug: "apps",
    label: "AI developer",
    category: "VV Automate",
    color: "sun",
    description:
      "I build software for the everyday work of a business, from answering an enquiry to preparing a quotation.",
  },
  {
    slug: "spiritual-mentor",
    label: "Spiritual mentor",
    category: "Master Within",
    color: "coral",
    description:
      "My work as a Ritwik, the teachings I follow, and a place to begin a daily practice.",
  },
  {
    slug: "speaker",
    label: "Speaker & creator",
    category: "Talks & media",
    color: "violet",
    description:
      "Science at the whiteboard, conversations about everyday life, videos and invitations to speak.",
  },
] as const;

export type ProfileSlug = (typeof profiles)[number]["slug"];
export function profileFor(slug: ProfileSlug) {
  return profiles.find((profile) => profile.slug === slug)!;
}

export function profileHref(slug: ProfileSlug) {
  return slug === "apps" ? automateUrl : `/${slug}/`;
}
