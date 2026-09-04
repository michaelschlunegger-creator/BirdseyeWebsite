import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  Boxes,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  Eye,
  Factory,
  FileSearch,
  Gauge,
  Layers3,
  Map,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

import { ChallengeFinder } from "@/components/challenge-finder";
import { ContactForm } from "@/components/contact-form";
import { assetPath } from "@/lib/asset-path";
import {
  caseStudies,
  categoryLabel,
  getCapabilitiesForSolution,
  industries,
  insights,
  selectedProof,
  SitePage,
  solutions,
} from "@/lib/site-content";

const idea = [
  { title: "Inspect", text: "Capture the asset, its condition and the operating context.", icon: Eye },
  { title: "Digitize", text: "Create point clouds, imagery, maps, models and structured digital records.", icon: ScanLine },
  { title: "Engineer", text: "Convert captured reality into drawings, CAD, BIM and as-built outputs.", icon: Boxes },
  { title: "Assess", text: "Evaluate condition, compare change, identify priorities and support action.", icon: ClipboardCheck },
];

const solutionIcons = [ShieldCheck, Map, Layers3, Gauge];

const solutionVisuals: Record<string, string> = {
  "/solutions/indoor-confined-space/": "/visuals/solution-indoor.webp",
  "/solutions/outdoor-asset-intelligence/": "/visuals/solution-outdoor.webp",
  "/solutions/reality-capture-digital-engineering/": "/visuals/solution-engineering.webp",
  "/solutions/asset-intelligence-assessment/": "/visuals/solution-assessment.webp",
};

const industryVisuals: Record<string, string> = {
  "/oil-and-gas/": "/visuals/industry-oil-gas.webp",
  "/petrochemical/": "/visuals/industry-petrochemical.webp",
  "/power/": "/visuals/industry-power.webp",
  "/maritime/": "/visuals/industry-maritime.webp",
  "/cement/": "/visuals/industry-cement.webp",
  "/chemical/": "/visuals/industry-chemical.webp",
  "/mining/": "/visuals/industry-mining.webp",
  "/steel/": "/visuals/industry-steel.webp",
  "/infrastructure/": "/visuals/industry-infrastructure.webp",
  "/sewer-drones/": "/visuals/industry-water.webp",
};

const capabilityVisuals: Record<string, string> = {
  "/3d-modelling/": "/visuals/capability-3d-engineering.webp",
  "/photogrammetry/": "/visuals/capability-photogrammetry.webp",
  "/slam/": "/visuals/capability-slam.webp",
  "/ndt-ut-drone-inspection-services/": "/visuals/capability-ut.webp",
  "/radiation/": "/visuals/capability-radiation.webp",
  "/anamoly/": "/visuals/capability-thermal.webp",
  "/3d-point/": "/visuals/capability-3d-engineering.webp",
  "/visual-thermal-imaging/": "/visuals/capability-thermal.webp",
  "/volumetric-analysis/": "/visuals/capability-volumetric.webp",
  "/structural/": "/visuals/capability-structural.webp",
  "/erosion-and-drainage-mapping-services/": "/visuals/capability-erosion.webp",
  "/renewable-assets/": "/visuals/capability-renewable.webp",
  "/project-progress-monitoring/": "/visuals/capability-progress.webp",
  "/route-mapping/": "/visuals/capability-corridor.webp",
  "/3d-mapping/": "/visuals/capability-photogrammetry.webp",
  "/safety/": "/visuals/capability-indoor.webp",
  "/aerial/": "/visuals/capability-photogrammetry.webp",
  "/vegetation/": "/visuals/capability-corridor.webp",
  "/flyability/": "/visuals/capability-indoor.webp",
};

const caseStudyVisuals: Record<string, string> = {
  "/casestudies/inspect-your-stockpiles-with-birdseye-drone/": "/visuals/capability-volumetric.webp",
  "/casestudies/pushing-the-limits-radiation-testing-at-energy-site/": "/visuals/capability-radiation.webp",
  "/casestudies/tank-wall-thickness-assessment-with-birdseye-drones-and-ut-technology/": "/visuals/capability-ut.webp",
  "/casestudies/employ-birdseyes-drones-to-save-60-on-pipe-rack-inspection-costs/": "/visuals/industry-oil-gas.webp",
  "/casestudies/cargo-oil-tank-inspections-saves-you-from-costing-you-millions/": "/visuals/industry-maritime.webp",
  "/casestudies/elevated-inspection-of-power-station-with-birdseye/": "/visuals/industry-power.webp",
  "/casestudies/impact-of-birdseyes-pioneering-drone-to-prevent-hours-of-work-at-height-for-hull-inspections/": "/visuals/industry-maritime.webp",
  "/casestudies/63-tank-inspections-done-in-just-2-weeks-with-birdseye/": "/visuals/industry-oil-gas.webp",
  "/casestudies/inspection-of-flue-ducts-and-silo-cones-with-birdseye/": "/visuals/industry-cement.webp",
  "/casestudies/fix-faults-in-chimney-tower-with-birdseye/": "/visuals/capability-structural.webp",
  "/casestudies/streamlining-workflow-in-confined-spaces/": "/visuals/capability-indoor.webp",
  "/casestudies/safer-faster-storage-bin-inspections-with-birdseye/": "/visuals/industry-cement.webp",
  "/casestudies/mine-inspection-in-south-africa-with-birdseye/": "/visuals/industry-mining.webp",
  "/casestudies/stormwater-pipeline-inspection-with-birdseye/": "/visuals/industry-water.webp",
  "/casestudies/drone-river-inspection-for-underground-canals/": "/visuals/industry-water.webp",
};

const insightVisuals: Record<string, string> = {
  "/enterprise-drones-characteristics-use-cases-best-models/": "/visuals/capability-indoor.webp",
  "/guide-to-global-drone-laws-must-know-regulations/": "/visuals/insight-planning.webp",
  "/the-future-of-inspections-how-drones-are-revolutionizing-asset-management/": "/visuals/delivery.webp",
};

const routeVisuals: Record<string, string> = {
  "/": "/visuals/hero-digital-intelligence.webp",
  "/solutions/": "/visuals/hero-digital-intelligence.webp",
  "/industries/": "/visuals/industries.webp",
  "/case-studies/": "/visuals/customer-results.webp",
  "/about-us/": "/visuals/delivery.webp",
  "/contact-us/": "/visuals/customer-results.webp",
  "/training/": "/visuals/capability-indoor.webp",
  "/blog/": "/visuals/insight-planning.webp",
  ...solutionVisuals,
  ...industryVisuals,
  ...capabilityVisuals,
  ...caseStudyVisuals,
  ...insightVisuals,
};

function visualForPage(page: SitePage) {
  const directVisual = routeVisuals[page.route];
  if (directVisual) return directVisual;
  return "/visuals/delivery.webp";
}

type VisualStory = {
  src: string;
  alt: string;
  label: string;
  title: string;
  copy: string;
};

type ArticleSectionVisual = {
  src: string;
  alt: string;
  caption: string;
};

const articleSectionVisuals: Record<string, Record<string, ArticleSectionVisual>> = {
  "/solutions/reality-capture-digital-engineering/": {
    "The Customer Challenge": {
      src: "/visuals/engineering-section-challenge.webp",
      alt: "An engineer compares an outdated drawing with the actual brownfield pipework installed on site",
      caption: "When drawings and reality no longer match, every engineering decision carries more uncertainty.",
    },
    "How Birdseye Helps": {
      src: "/visuals/engineering-section-capture.webp",
      alt: "Laser scanning and structured-light capture create accurate point-cloud data from an industrial pump installation",
      caption: "Birdseye selects the right capture method for the asset, access conditions and required engineering output.",
    },
    "What We Provide": {
      src: "/visuals/engineering-reverse-engineering.webp",
      alt: "A worn industrial component moves from physical inspection through a point cloud to an engineered digital model",
      caption: "From point clouds to CAD, BIM and reverse-engineered geometry, the deliverable is built around the work your team must complete.",
    },
    "Typical Assets and Environments": {
      src: "/visuals/engineering-section-assets.webp",
      alt: "An industrial plant, a dense pipe corridor and a precision mechanical component show the range of assets Birdseye can capture",
      caption: "The same disciplined capture-to-engineering process scales from complete facilities to individual parts.",
    },
    "What You Receive": {
      src: "/visuals/engineering-section-deliverables.webp",
      alt: "A pump skid progresses from the physical asset through a point cloud and mesh to drawings and a coordinated digital model",
      caption: "A controlled digital workflow converts field reality into the format your engineering team can use immediately.",
    },
    "Value for Your Business": {
      src: "/visuals/engineering-section-value.webp",
      alt: "A prefabricated pipe spool is aligned accurately with an existing industrial installation before final fit-up",
      caption: "Reliable dimensions reduce site adjustments, avoid rework and help installation teams get the fit right first time.",
    },
    "How the Work Is Delivered": {
      src: "/visuals/engineering-section-delivery.webp",
      alt: "A field scan flows into a registered point cloud and then into an engineering-ready digital model",
      caption: "Accuracy, level of detail and acceptance criteria are agreed first, then controlled from capture through delivery.",
    },
    "Relevant Customer Stories": {
      src: "/visuals/engineering-section-proof.webp",
      alt: "Chimney inspection data and a LiDAR point cloud reveal an internal centerline deviation for engineering review",
      caption: "In one chimney assessment, structured 3D evidence helped the engineering team understand a 150 mm internal shift.",
    },
  },
};

const visualStoryIntros: Record<string, { label: string; title: string; copy: string }> = {
  "/solutions/reality-capture-digital-engineering/": {
    label: "From physical asset to usable engineering",
    title: "See how each digital engineering discipline creates value.",
    copy: "The right output depends on the decision your team needs to make. Birdseye connects accurate capture with practical engineering deliverables—from an as-built model to a printed fit-check prototype.",
  },
  "/solutions/asset-intelligence-assessment/": {
    label: "From evidence to action",
    title: "Make inspection information easier to understand and use.",
    copy: "Birdseye organizes field evidence around the asset, reveals what changed, helps teams focus on the most important findings and prepares the information for maintenance action.",
  },
};

const visualStories: Record<string, VisualStory[]> = {
  "/": [{
    src: "/visuals/delivery.webp",
    alt: "A field specialist captures a bridge while the same asset becomes a point cloud, engineering model and prioritized decision",
    label: "Connected delivery",
    title: "One clear route from field reality to a useful decision.",
    copy: "Inspection, digitization, engineering and assessment stay connected, so your team receives practical information—not disconnected files and raw data.",
  }],
  "/solutions/": [{
    src: "/visuals/delivery.webp",
    alt: "An industrial asset moves from field capture through digital engineering to practical decision support",
    label: "The complete value journey",
    title: "Capabilities selected around the outcome you need.",
    copy: "Birdseye combines safer access, accurate reality capture, engineering-ready outputs and assessment in one flexible delivery model.",
  }],
  "/case-studies/": [{
    src: "/visuals/customer-results.webp",
    alt: "Maintenance and operations leaders review a digital asset record and prioritized findings at an industrial facility",
    label: "Customer results",
    title: "Evidence your team can understand and use.",
    copy: "The real value is not the capture method. It is faster understanding, clearer priorities and better-informed maintenance decisions.",
  }],
  "/about-us/": [{
    src: "/visuals/delivery.webp",
    alt: "Field capture, digital engineering and condition assessment connected across one industrial asset journey",
    label: "How we work",
    title: "Regional accountability from capture to decision.",
    copy: "Birdseye combines local execution, industrial experience and the right specialist capabilities around each customer challenge.",
  }],
  "/solutions/reality-capture-digital-engineering/": [
    {
      src: "/visuals/engineering-scan-to-bim.webp",
      alt: "An operating process plant transforms into a laser point cloud and then an accurate coordinated BIM model",
      label: "Scan-to-BIM",
      title: "Plan changes around what is actually on site.",
      copy: "Outdated plans create uncertainty and costly surprises. We capture the existing facility and build a dependable BIM model, helping design and project teams coordinate retrofit work, reduce clashes and limit rework.",
    },
    {
      src: "/visuals/engineering-scan-to-cad.webp",
      alt: "A brownfield pipe rack transitions from the physical installation into precise CAD linework and an as-built model",
      label: "Scan-to-CAD & as-built drawings",
      title: "Give engineers a reliable starting point.",
      copy: "When drawings are missing or no longer match the asset, engineering slows down. Birdseye converts captured geometry into usable 2D drawings and 3D CAD models, reducing manual measurement and repeat site visits.",
    },
    {
      src: "/visuals/engineering-reverse-engineering.webp",
      alt: "A worn industrial impeller is scanned, reconstructed as a digital mesh and converted into a precise engineered model",
      label: "Reverse engineering",
      title: "Recreate the information behind a legacy part.",
      copy: "Obsolete or undocumented components can hold up maintenance. We capture the real part and rebuild its geometry, giving your team a sound basis for redesign, repair planning or replacement sourcing.",
    },
    {
      src: "/visuals/engineering-dimensional-verification.webp",
      alt: "An industrial skid is scanned and aligned with its design model to reveal fit and dimensional deviations",
      label: "Dimensional verification",
      title: "Find fit and deviation issues before installation.",
      copy: "A small dimensional mismatch can become expensive on site. Actual-versus-design comparison helps teams verify fabrication, interfaces and assembly conditions early—protecting schedules and installation productivity.",
    },
    {
      src: "/visuals/engineering-3d-printing.webp",
      alt: "A legacy mechanical component moves from 3D scan to refined digital model and a printed validation prototype",
      label: "Scan-to-3D printing",
      title: "Move from physical part to practical prototype faster.",
      copy: "A digital model can become a printed prototype for fit, handling or design validation. This gives teams a faster, lower-risk way to test ideas before committing to final fabrication or procurement.",
    },
  ],
  "/solutions/asset-intelligence-assessment/": [
    {
      src: "/visuals/assessment-structured-evidence.webp",
      alt: "Visual, thermal, ultrasonic and 3D inspection evidence is precisely linked to a storage tank and pipe system",
      label: "Structured asset evidence",
      title: "Bring scattered inspection information into one clear asset record.",
      copy: "Images, measurements and models lose value when they sit in separate folders. Birdseye links the evidence to the correct asset and location, improving traceability and making future review much faster.",
    },
    {
      src: "/visuals/assessment-condition-review.webp",
      alt: "An inspection engineer reviews condition evidence aligned to corrosion and weld areas on a pressure vessel",
      label: "Condition & defect assessment",
      title: "Turn large datasets into findings people can act on.",
      copy: "Your team should not have to search through thousands of files to understand condition. We structure and assess the evidence so relevant defects, anomalies and review areas become easier to see and discuss.",
    },
    {
      src: "/visuals/assessment-change-detection.webp",
      alt: "The same industrial pipeline is compared at two points in time to reveal coating loss and corrosion progression",
      label: "Change detection",
      title: "See what changed—not just what was captured.",
      copy: "Repeat inspections become more useful when the records can be compared consistently. Aligned imagery, measurements and 3D data help teams recognize deterioration earlier and make better-timed maintenance decisions.",
    },
    {
      src: "/visuals/assessment-prioritization.webp",
      alt: "A maintenance team reviews spatially ranked findings across an operating process facility",
      label: "Maintenance prioritization",
      title: "Focus people and budget where they matter most.",
      copy: "Not every finding has the same consequence. Birdseye helps organize condition evidence around agreed severity and operational context, so maintenance teams can focus effort on the most important areas first.",
    },
    {
      src: "/visuals/assessment-system-action.webp",
      alt: "Field inspection evidence becomes a structured digital asset model and a prepared maintenance activity",
      label: "Asset-system integration",
      title: "Connect field evidence with maintenance action.",
      copy: "Inspection value is lost when findings stop at a report. We prepare structured asset and work-order information for EAM, AMS or GIS environments, creating a clearer path from evidence to planned work.",
    },
  ],
};

const leadershipProfiles = [
  {
    name: "Michael Schlunegger",
    role: "Managing Director, Middle East & Europe",
    photo: "/visuals/michael-schlunegger.webp",
    bio: [
      "Swiss business executive with 30+ years of leadership experience across industrial technology, construction and service businesses.",
      "Background includes Oerlikon, Schindler, Hilti and Schüco.",
      "Holds an MSc in Mechanical Engineering and an EMBA in Service Management.",
      "Focused on strategic growth, partnerships and operational execution across the region.",
    ],
  },
  {
    name: "Partha Dash",
    role: "CEO & Managing Director, India",
    photo: "/visuals/partha-dash.webp",
    bio: [
      "Business leader with 20+ years of cross-functional experience driving transformation, revenue growth and strategic initiatives across manufacturing, supply chain and international business development.",
      "Mechanical engineer with postgraduate business management education.",
      "Experienced in scaling businesses, managing P&L, and improving profitability through strategic acquisitions, business development and operational efficiencies.",
      "Adept at leading high-performance teams and building sustainable growth strategies in emerging markets.",
    ],
  },
];

function secondaryHref(page: SitePage) {
  if (page.category === "case-study" || page.category === "insight") return "/solutions/";
  if (page.category === "solution") return "/case-studies/";
  return "/solutions/";
}

function Hero({ page, home = false }: { page: SitePage; home?: boolean }) {
  const pageVisual = visualForPage(page);
  const heroStyle = {
    "--hero-image-url": `url("${assetPath(pageVisual)}")`,
  } as CSSProperties;

  return (
    <section className={home ? "hero hero-home" : "hero hero-inner"}>
      <div className={`hero-image ${home ? "" : "hero-image-inner"}`} aria-hidden="true" style={heroStyle} />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        {!home && (
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>{categoryLabel(page.category)}</span>
          </nav>
        )}
        <p className="eyebrow">{home ? "Industrial Inspection & Digital Asset Solutions" : categoryLabel(page.category)}</p>
        <h1>{page.title}</h1>
        <p className="hero-copy">{page.heroText}</p>
        <div className="hero-actions">
          <Link className="button" href="/contact-us/#enquiry">
            {page.primaryCta} <ArrowRight aria-hidden="true" size={18} />
          </Link>
          {page.secondaryCta && (
            <Link className="button button-secondary" href={secondaryHref(page)}>
              {page.secondaryCta}
            </Link>
          )}
        </div>
        {home && (
          <div className="hero-value-line">
            <span>Safer access</span><span>Less disruption</span><span>Faster understanding</span><span>Clearer decisions</span>
          </div>
        )}
      </div>
    </section>
  );
}

function CardGrid({
  pages,
  type,
  limit,
}: {
  pages: SitePage[];
  type: "solution" | "industry" | "case" | "insight" | "capability";
  limit?: number;
}) {
  const shown = typeof limit === "number" ? pages.slice(0, limit) : pages;
  return (
    <div className={`card-grid card-grid-${type}`}>
      {shown.map((page, index) => {
        const Icon = type === "solution"
          ? solutionIcons[index % solutionIcons.length]
          : type === "industry"
            ? Factory
            : type === "case"
              ? FileSearch
              : type === "insight"
                ? Layers3
                : Building2;
        const cardVisual = visualForPage(page);
        return (
          <Link className={`content-card ${cardVisual ? "has-media" : ""}`} href={page.route} key={page.route}>
            {cardVisual && (
              <figure className="content-card-media">
                <img alt="" loading="lazy" src={assetPath(cardVisual)} />
              </figure>
            )}
            <div className="content-card-body">
              <div className="card-topline">
                <Icon aria-hidden="true" size={21} />
                <span>{type === "case" ? "Customer story" : type}</span>
              </div>
              <h3>{type === "solution" ? page.sourceTitle : page.title}</h3>
              <p>{page.heroText}</p>
              <span className="card-link">Explore <ArrowRight aria-hidden="true" size={16} /></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function IdeaJourney() {
  return (
    <div className="idea-journey">
      {idea.map(({ title, text, icon: Icon }, index) => (
        <article className="idea-step" key={title}>
          <div className="idea-icon"><Icon aria-hidden="true" size={23} /></div>
          <span className="idea-number">0{index + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function StoryVisuals({ route }: { route: string }) {
  const stories = visualStories[route] ?? [];
  const intro = visualStoryIntros[route];
  if (stories.length === 0) return null;
  return (
    <section className={`section visual-stories ${stories.length > 1 ? "visual-stories-deep" : ""}`}>
      <div className="container">
        {intro && (
          <div className="visual-story-intro">
            <div><p className="eyebrow">{intro.label}</p><h2>{intro.title}</h2></div>
            <p>{intro.copy}</p>
          </div>
        )}
        <div className="visual-story-grid">
          {stories.map((story, index) => (
            <article className="visual-story" key={story.src}>
              <div className="visual-story-copy">
                {stories.length > 1 && <span className="visual-story-index">{String(index + 1).padStart(2, "0")}</span>}
                <p className="eyebrow">{story.label}</p>
                <h2>{story.title}</h2>
                <p>{story.copy}</p>
              </div>
              <figure className="visual-story-frame">
                <img src={assetPath(story.src)} alt={story.alt} loading="lazy" />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipProfiles() {
  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        <div className="section-title-row">
          <div><p className="eyebrow">Leadership</p><h2>Industrial experience. Regional accountability.</h2></div>
          <p>Birdseye leadership combines industrial technology, business transformation and practical execution across the regions we serve.</p>
        </div>
        <div className="leadership-grid">
          {leadershipProfiles.map((profile) => (
            <article className="leader-card" key={profile.name}>
              <div className="leader-photo">
                <img src={assetPath(profile.photo)} alt={`Portrait of ${profile.name}`} loading="lazy" />
              </div>
              <div className="leader-copy">
                <h3>{profile.name}</h3>
                <p className="leader-role">{profile.role}</p>
                <ul>
                  {profile.bio.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionContent({ page }: { page: SitePage }) {
  const visualsForPage = articleSectionVisuals[page.route] ?? {};
  return (
    <div className="article-sections">
      {page.sections.map((section, sectionIndex) => {
        const bullets = section.items.filter((item) => item.type === "bullet");
        const items = section.items.filter((item) => item.type !== "bullet");
        const isChallenge = /Customer Challenge|The Challenge|Challenge$/.test(section.title);
        const isHelp = /How Birdseye Helps|Birdseye's Approach/.test(section.title);
        const isValue = /Value for|Recorded Result|Why Customers Choose/.test(section.title);
        const isLast = sectionIndex === page.sections.length - 1;
        const sectionVisual = visualsForPage[section.title];
        return (
          <section
            className={`article-section ${sectionVisual ? "has-visual" : ""} ${isChallenge ? "is-challenge" : ""} ${isHelp ? "is-help" : ""} ${isValue ? "is-value" : ""} ${isLast ? "is-last" : ""}`}
            key={`${section.title}-${sectionIndex}`}
          >
            <div className="section-heading">
              <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
            </div>
            <div className="section-body">
              {items.map((item, itemIndex) => {
                if (item.type === "subheading") return <h3 key={itemIndex}>{item.text}</h3>;
                if (item.type === "note") return <div className="content-note" key={itemIndex}>{item.text}</div>;
                const linkMatch = item.text.match(/^LINK\n(.+)$/);
                if (linkMatch) return <Link className="text-link" href={linkMatch[1]} key={itemIndex}>Read more <ArrowRight size={16} /></Link>;
                return <p key={itemIndex}>{item.text}</p>;
              })}
              {bullets.length > 0 && (
                <ul className="benefit-list">
                  {bullets.map((item, index) => <li key={index}><Check aria-hidden="true" size={17} /><span>{item.text}</span></li>)}
                </ul>
              )}
            </div>
            {sectionVisual && (
              <figure className="article-section-visual">
                <img src={assetPath(sectionVisual.src)} alt={sectionVisual.alt} loading="lazy" />
                <figcaption>{sectionVisual.caption}</figcaption>
              </figure>
            )}
          </section>
        );
      })}
    </div>
  );
}

function HomePage({ page }: { page: SitePage }) {
  const deliver = page.sections.find((section) => section.title === "How We Deliver");
  const why = page.sections.find((section) => section.title === "Why Birdseye");
  return (
    <main>
      <Hero home page={page} />

      <section className="section section-intro">
        <div className="container split-intro">
          <div>
            <p className="eyebrow">The challenge</p>
            <h2>Industrial assets are difficult to see clearly.</h2>
          </div>
          <div>
            <p>Maintenance and engineering teams are under pressure to improve safety, reduce downtime and control cost. Yet important assets may be difficult to access, drawings may be outdated and information may sit across separate files and systems.</p>
            <p className="emphasis">Birdseye connects the full information journey—from field reality to better asset decisions.</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-title-row">
            <div><p className="eyebrow">The IDEA framework</p><h2>One practical journey from field to decision.</h2></div>
            <p>Customers may enter at any stage. Birdseye connects the work to the information and decision your team needs.</p>
          </div>
          <IdeaJourney />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title-row">
            <div><p className="eyebrow">Start with your problem</p><h2>Choose the solution that fits your challenge.</h2></div>
            <p>You do not need to select the technology. Tell us what is creating risk, delay, uncertainty or unnecessary cost.</p>
          </div>
          <ChallengeFinder />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-title-row">
            <div><p className="eyebrow">Four connected solutions</p><h2>Technology selected around the required outcome.</h2></div>
            <Link className="text-link" href="/solutions/">Explore all solutions <ArrowRight size={17} /></Link>
          </div>
          <CardGrid pages={solutions} type="solution" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title-row"><div><p className="eyebrow">A controlled delivery path</p><h2>How we deliver.</h2></div><p>Every project starts with the asset, risk, decision and required output.</p></div>
          <div className="delivery-steps">
            {(deliver?.items.filter((item) => item.type === "bullet") ?? []).map((item, index) => {
              const [title, ...rest] = item.text.replace(/^\d+\.\s*/, "").split(" - ");
              return <article key={item.text}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{rest.join(" - ")}</p></article>;
            })}
          </div>
          </div>
      </section>

      <StoryVisuals route="/" />

      <section className="section section-dark proof-section">
        <div className="container">
          <div className="section-title-row"><div><p className="eyebrow">Selected proof</p><h2>Real challenges. Recorded results.</h2></div><Link className="text-link text-link-light" href="/case-studies/">View all case studies <ArrowRight size={17} /></Link></div>
          <CardGrid pages={selectedProof} type="case" />
        </div>
      </section>

      <section className="section">
        <div className="container split-value">
          <div><p className="eyebrow">Why Birdseye</p><h2>One accountable route from capture to useful information.</h2></div>
          <ul className="large-check-list">
            {(why?.items.filter((item) => item.type === "bullet") ?? []).map((item) => <li key={item.text}><Check size={18} />{item.text}</li>)}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

function OverviewPage({ page }: { page: SitePage }) {
  const isSolutions = page.category === "solutions-overview";
  const isIndustries = page.category === "industries-overview";
  const isCases = page.category === "case-studies-overview";
  const isInsights = page.category === "insights-overview";
  return (
    <main>
      <Hero page={page} />
      <StoryVisuals route={page.route} />
      {isSolutions && <section className="section"><div className="container"><div className="section-title-row"><div><p className="eyebrow">Challenge to solution</p><h2>Start with the problem you need to solve.</h2></div><p>One service or the complete IDEA journey—the scope is built around the asset, risk, output and business decision.</p></div><ChallengeFinder /></div></section>}
      {isSolutions && <section className="section section-soft"><div className="container"><CardGrid pages={solutions} type="solution" /></div></section>}
      {isIndustries && <section className="section"><div className="container"><div className="section-title-row"><div><p className="eyebrow">Industry experience</p><h2>Different operating realities. One customer-first approach.</h2></div><p>We begin with the asset, operating impact and required decision. Technology comes second.</p></div><CardGrid pages={industries} type="industry" /></div></section>}
      {isCases && <section className="section"><div className="container"><div className="section-title-row"><div><p className="eyebrow">Customer evidence</p><h2>Explore the recorded project results.</h2></div><p>Figures apply only to the specific recorded project unless stated otherwise.</p></div><CardGrid pages={caseStudies} type="case" /></div></section>}
      {isInsights && <section className="section"><div className="container"><div className="section-title-row"><div><p className="eyebrow">Plain-language guidance</p><h2>Plan the information journey with confidence.</h2></div><p>Practical guidance on inspection, reality capture, engineering information and assessment.</p></div><CardGrid pages={insights} type="insight" /></div></section>}
      <section className="section section-compact"><div className="container"><SectionContent page={{ ...page, sections: page.sections.filter((section) => !/Start with the Problem|Different Industries|Featured Insights/.test(section.title)) }} /></div></section>
      <CtaBand />
    </main>
  );
}

function AboutPage({ page }: { page: SitePage }) {
  const storySections = page.sections.filter((section) => section.title !== "Leadership" && section.title !== "Our Footprint");
  return (
    <main>
      <Hero page={page} />
      <section className="section section-article">
        <div className="container article-layout">
          <aside className="article-rail">
            <span>About Birdseye</span>
            <strong>Customer-first digital asset solutions</strong>
            <Link className="text-link" href="#leadership">Meet the leadership <ArrowRight size={16} /></Link>
          </aside>
          <SectionContent page={{ ...page, sections: storySections }} />
        </div>
      </section>
      <StoryVisuals route="/about-us/" />
      <LeadershipProfiles />
      <CtaBand />
    </main>
  );
}

function ContactPage({ page }: { page: SitePage }) {
  const details = page.sections.filter((section) => section.title !== "Enquiry Form");
  return (
    <main>
      <Hero page={page} />
      <section className="section contact-section" id="enquiry">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">Start with the asset challenge</p>
            <h2>Tell us what your team needs to understand.</h2>
            <p>You do not need to choose a product, platform or sensor. A clear description of the asset, location and required decision is enough to begin.</p>
            <div className="contact-details"><SectionContent page={{ ...page, sections: details }} /></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function GenericPage({ page }: { page: SitePage }) {
  const related = page.category === "solution" ? getCapabilitiesForSolution(page.route) : [];
  return (
    <main>
      <Hero page={page} />
      <StoryVisuals route={page.route} />
      <section className="section section-article">
        <div className="container article-layout">
          <aside className="article-rail">
            <span>{categoryLabel(page.category)}</span>
            <strong>{page.sourceTitle}</strong>
            <Link className="text-link" href="/contact-us/#enquiry">Discuss your challenge <ArrowRight size={16} /></Link>
          </aside>
          <SectionContent page={page} />
        </div>
      </section>
      {related.length > 0 && <section className="section section-soft"><div className="container"><div className="section-title-row"><div><p className="eyebrow">Related capabilities</p><h2>Build the right delivery scope.</h2></div><p>Capabilities are selected around the information your team needs.</p></div><CardGrid pages={related} type="capability" /></div></section>}
      {page.category === "industry" && <section className="section section-soft"><div className="container"><div className="section-title-row"><div><p className="eyebrow">Explore the solution path</p><h2>Connect the right capabilities.</h2></div></div><CardGrid pages={solutions} type="solution" /></div></section>}
      <CtaBand />
    </main>
  );
}

function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div><p className="eyebrow">Your asset. Your decision.</p><h2>What is difficult to inspect, measure or understand?</h2></div>
        <Link className="button button-light" href="/contact-us/#enquiry">Discuss Your Asset Challenge <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}

export function PageView({ page }: { page: SitePage }) {
  if (page.category === "home") return <HomePage page={page} />;
  if (page.category === "contact") return <ContactPage page={page} />;
  if (page.category.endsWith("overview")) return <OverviewPage page={page} />;
  if (page.category === "about") return <AboutPage page={page} />;
  return <GenericPage page={page} />;
}
