export type ServiceCategory = {
  id: string;
  name: string;
  short: string;
  description: string;
  featured: string;
  services: string[];
};

export const categories: ServiceCategory[] = [
  {
    id: "business-registration",
    name: "Business Registration",
    short: "Start with confidence",
    description: "The right structure, the right registrations, and a thoughtful beginning for your business.",
    featured: "Private Limited Company Registration",
    services: ["Private Limited Company Registration", "LLP Registration", "OPC Registration", "Partnership Firm Registration", "Sole Proprietorship", "Startup India Registration"],
  },
  {
    id: "tax-compliance",
    name: "Tax & Compliance",
    short: "Stay a step ahead",
    description: "Simplify statutory filings and recurring requirements as your business grows.",
    featured: "GST Registration",
    services: ["GST Registration", "GST Return Filing", "Income Tax Return", "TDS Filing", "Annual Compliance", "Accounting Services", "Company Changes"],
  },
  {
    id: "trademark-ip",
    name: "Trademark & IP",
    short: "Protect what is yours",
    description: "Put the right protection around your brand, ideas and creative work.",
    featured: "Trademark Registration",
    services: ["Trademark Registration", "Trademark Search", "Trademark Objection", "Copyright Registration", "Patent Registration", "Design Registration", "IP Protection"],
  },
  {
    id: "legal-services",
    name: "Legal Services",
    short: "Clarity when it matters",
    description: "Get guidance on legal questions, agreements and essential business matters.",
    featured: "Lawyer Consultation",
    services: ["Lawyer Consultation", "Legal Notice", "Agreement Drafting", "Contract Review", "Business Agreements", "Property Legal Services", "Litigation Support"],
  },
  {
    id: "documentation",
    name: "Documentation",
    short: "Every detail, considered",
    description: "Find assistance for the documents that shape professional relationships.",
    featured: "Rental Agreement",
    services: ["Rental Agreement", "Employment Agreement", "NDA", "Partnership Deed", "Affidavit", "Power of Attorney", "Business Contracts"],
  },
];

export const resourceItems = [
  { name: "About Pro Legal", href: "/info/about" },
  { name: "Business Guides", href: "/info/guides" },
  { name: "Insights & Articles", href: "/info/blog" },
  { name: "Calculators", href: "/info/calculators" },
  { name: "Frequently Asked Questions", href: "/#faq" },
];

export const slugify = (value: string) =>
  value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const allServices = categories.flatMap((category) =>
  category.services.map((name) => ({
    name,
    slug: slugify(name),
    categoryId: category.id,
    categoryName: category.name,
  }))
);

export function findService(slug: string) {
  return allServices.find((service) => service.slug === slug);
}

export function serviceHref(name: string) {
  return `/services/${slugify(name)}`;
}

export const discoveryGroups = [
  { eyebrow: "01 / FORM", title: "Start your business", subtitle: "From a first idea to a formal entity.", icon: "building", items: ["Private Limited Company Registration", "LLP Registration", "OPC Registration", "Partnership Firm Registration"], view: "business-registration" },
  { eyebrow: "02 / OPERATE", title: "Run your business", subtitle: "Make day-to-day compliance feel effortless.", icon: "chart", items: ["GST Registration", "GST Return Filing", "Income Tax Return", "Annual Compliance"], view: "tax-compliance" },
  { eyebrow: "03 / PROTECT", title: "Protect your business", subtitle: "Safeguard your name, ideas and work.", icon: "shield", items: ["Trademark Registration", "Copyright Registration", "Patent Registration", "IP Protection"], view: "trademark-ip" },
  { eyebrow: "04 / RESOLVE", title: "Legal assistance", subtitle: "Thoughtful help at important moments.", icon: "scale", items: ["Lawyer Consultation", "Legal Notice", "Contract Review", "Agreement Drafting"], view: "legal-services" },
];
