import rawContent from "@/data/site-content.json";

export type ContentItem = {
  type: "paragraph" | "bullet" | "subheading" | "note";
  text: string;
};

export type ContentSection = {
  title: string;
  items: ContentItem[];
};

export type SitePage = {
  sourceTitle: string;
  route: string;
  category: string;
  seoTitle: string;
  metaDescription: string;
  title: string;
  heroText: string;
  primaryCta: string;
  secondaryCta: string;
  sections: ContentSection[];
};

export const pages = rawContent.pages as SitePage[];

export function normalizeRoute(route: string) {
  if (route === "/") return route;
  return route.endsWith("/") ? route : `${route}/`;
}

export function getPage(route: string) {
  const normalized = normalizeRoute(route);
  return pages.find((page) => page.route === normalized);
}

export const solutions = pages.filter((page) => page.category === "solution");
export const industries = pages.filter((page) => page.category === "industry");
export const capabilities = pages.filter((page) => page.category === "capability");
export const caseStudies = pages.filter((page) => page.category === "case-study");
export const insights = pages.filter((page) => page.category === "insight");

export const selectedProofRoutes = [
  "/casestudies/63-tank-inspections-done-in-just-2-weeks-with-birdseye/",
  "/casestudies/fix-faults-in-chimney-tower-with-birdseye/",
  "/casestudies/drone-river-inspection-for-underground-canals/",
];

export const selectedProof = selectedProofRoutes
  .map((route) => getPage(route))
  .filter(Boolean) as SitePage[];

export const capabilityLinksBySolution: Record<string, string[]> = {
  "/solutions/indoor-confined-space/": [
    "/visual-thermal-imaging/",
    "/ndt-ut-drone-inspection-services/",
    "/slam/",
    "/flyability/",
  ],
  "/solutions/outdoor-asset-intelligence/": [
    "/aerial/",
    "/route-mapping/",
    "/volumetric-analysis/",
    "/project-progress-monitoring/",
  ],
  "/solutions/reality-capture-digital-engineering/": [
    "/3d-modelling/",
    "/photogrammetry/",
    "/3d-point/",
    "/3d-mapping/",
  ],
  "/solutions/asset-intelligence-assessment/": [
    "/anamoly/",
    "/structural/",
    "/vegetation/",
    "/safety/",
  ],
};

export function getCapabilitiesForSolution(route: string) {
  return (capabilityLinksBySolution[route] ?? [])
    .map((capabilityRoute) => getPage(capabilityRoute))
    .filter(Boolean) as SitePage[];
}

export function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    solution: "Solution",
    "solutions-overview": "Solutions",
    industry: "Industry",
    "industries-overview": "Industries",
    capability: "Capability",
    about: "About Birdseye",
    training: "Training",
    contact: "Contact",
    "case-study": "Customer Story",
    "case-studies-overview": "Case Studies",
    insight: "Insight",
    "insights-overview": "Insights",
  };
  return labels[category] ?? "Digital Asset Solutions";
}
