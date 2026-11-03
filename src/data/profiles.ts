export const automateUrl = "https://vvautomate.in/";

export const profiles = [
  {
    slug: "quantum-physicist",
    label: "Quantum physicist",
    category: "Research",
    color: "sky",
    description:
      "Step inside a quantum hardware lab, try a wave model, or go straight to my papers and CV.",
  },
  {
    slug: "inventor",
    label: "Inventor",
    category: "Instruments & engineering",
    color: "sky",
    description:
      "How I integrated a telescope, tracking mount and cooled camera for a city rooftop.",
  },
  {
    slug: "author",
    label: "Author, poet & lyricist",
    category: "Writing",
    color: "violet",
    description:
      "Science fiction from Kolkata, books on Thakur, and a place to read my Bengali poems.",
  },
  {
    slug: "business",
    label: "Founder",
    category: "Business",
    color: "sun",
    description:
      "Inside Vishwa Vigyan, from fitting a noisy resonance to turning a buyer’s message into a quotation.",
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
      "I build VV Automate’s tools. Try QuoteDesk, see how BillDrop reads a bill, or follow a shipment through TradeDocs.",
  },
  {
    slug: "spiritual-mentor",
    label: "Spiritual mentor",
    category: "Master Within",
    color: "coral",
    description:
      "Meet my Living Ideal and come to a Bengali or Hindi reading at Master Within.",
  },
  {
    slug: "speaker",
    label: "Speaker & creator",
    category: "Talks & media",
    color: "violet",
    description:
      "Try a question from the whiteboard, listen to Master Within, or invite me to speak.",
  },
] as const;

export type ProfileSlug = (typeof profiles)[number]["slug"];
export function profileFor(slug: ProfileSlug) {
  return profiles.find((profile) => profile.slug === slug)!;
}

export function profileHref(slug: ProfileSlug) {
  return slug === "apps" ? automateUrl : `/${slug}/`;
}
