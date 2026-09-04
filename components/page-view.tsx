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

type VisualStory = {
  src: string;
  alt: string;
  label: string;
  title: string;
  copy: string;
};

const visualStories: Record<string, VisualStory[]> = {
  "/": [{
    src: "/deck/how-we-deliver.webp",
    alt: "Birdseye delivery workflow from defining the asset challenge through capture, digitization, engineering, assessment and delivery",
    label: "Connected delivery",
    title: "One clear route from field capture to a useful decision.",
    copy: "Each stage is connected, so customers receive practical information rather than disconnected files and raw data.",
  }],
  "/solutions/": [{
    src: "/deck/why-birdseye.webp",
    alt: "Birdseye value proposition across inspection, digitization, engineering and assessment",
    label: "The complete value journey",
    title: "Capabilities selected around the outcome you need.",
    copy: "Birdseye combines safer access, reality capture, engineering-ready outputs and assessment into one flexible delivery model.",
  }],
  "/solutions/indoor-confined-space/": [{
    src: "/deck/indoor-solutions.webp",
    alt: "Indoor and confined-space inspection applications and customer benefits",
    label: "Indoor and confined-space solutions",
    title: "See difficult areas while reducing manual entry and access preparation.",
    copy: "Remote capture helps teams inspect tanks, ducts, silos, tunnels and complex structures with clearer evidence and less disruption.",
  }],
  "/solutions/outdoor-asset-intelligence/": [{
    src: "/deck/outdoor-intelligence.webp",
    alt: "Outdoor asset intelligence services for industrial and infrastructure assets",
    label: "Outdoor asset intelligence",
    title: "Capture the bigger picture and turn it into measurable site information.",
    copy: "Aerial and spatial capture supports mapping, planning, progress monitoring, volume measurement and external asset review.",
  }],
  "/solutions/reality-capture-digital-engineering/": [
    {
      src: "/deck/reality-capture.webp",
      alt: "Advanced reality capture and digitization methods for industrial assets",
      label: "Digitize",
      title: "Build an accurate digital record of the asset.",
      copy: "The right capture method reduces manual measurement effort and creates reliable geometry for engineering work.",
    },
    {
      src: "/deck/digital-engineering.webp",
      alt: "Digital engineering outputs including CAD, BIM, reverse engineering and dimensional verification",
      label: "Engineer",
      title: "Convert captured reality into engineering-ready information.",
      copy: "Customers receive outputs that reduce rework, speed up validation and support maintenance, retrofit and design decisions.",
    },
  ],
  "/solutions/asset-intelligence-assessment/": [{
    src: "/deck/asset-assessment.webp",
    alt: "Asset intelligence and assessment workflow showing condition insight and decision support",
    label: "Assess",
    title: "Move from inspection evidence to measurable asset decisions.",
    copy: "Condition assessment, change detection and connected asset records help teams prioritise maintenance and investment.",
  }],
  "/industries/": [{
    src: "/deck/industries.webp",
    alt: "Industrial customer challenges and benefits across oil and gas, power, mining and infrastructure",
    label: "Built around the operating reality",
    title: "Different industries. Familiar pressure on safety, uptime and cost.",
    copy: "The solution starts with the customer's difficult asset, operational constraint and required business outcome.",
  }],
  "/case-studies/": [{
    src: "/deck/industrial-references.webp",
    alt: "Selected Birdseye industrial reference portfolio",
    label: "Industrial experience",
    title: "Experience across demanding asset environments.",
    copy: "Birdseye supports industrial customers across energy, utilities, manufacturing and infrastructure environments.",
  }],
  "/about-us/": [{
    src: "/deck/regional-footprint.webp",
    alt: "Birdseye regional footprint across the UAE, Saudi Arabia, India, the Middle East, Africa and Europe",
    label: "Regional footprint",
    title: "Regional leadership with flexible delivery support.",
    copy: "Birdseye combines corporate governance, local execution and specialist partners to support projects across priority industrial markets.",
  }],
};

const leadershipProfiles = [
  {
    name: "Michael Schlunegger",
    role: "Managing Director, Middle East & Europe",
    photoClass: "leader-photo-michael",
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
    photoClass: "leader-photo-partha",
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
  const heroStyle = {
    "--hero-image-url": `url("${assetPath("/birdseye-asset-intelligence-hero.webp")}")`,
  } as CSSProperties;

  return (
    <section className={home ? "hero hero-home" : "hero hero-inner"}>
      {home && <div className="hero-image" aria-hidden="true" style={heroStyle} />}
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
        return (
          <Link className="content-card" href={page.route} key={page.route}>
            <div className="card-topline">
              <Icon aria-hidden="true" size={21} />
              <span>{type === "case" ? "Customer story" : type}</span>
            </div>
            <h3>{type === "solution" ? page.sourceTitle : page.title}</h3>
            <p>{page.heroText}</p>
            <span className="card-link">Explore <ArrowRight aria-hidden="true" size={16} /></span>
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
  if (stories.length === 0) return null;
  return (
    <section className="section visual-stories">
      <div className="container">
        <div className="visual-story-grid">
          {stories.map((story) => (
            <article className="visual-story" key={story.src}>
              <div className="visual-story-copy">
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
              <div className={`leader-photo ${profile.photoClass}`}>
                <img src={assetPath("/deck/leadership.webp")} alt={`Portrait of ${profile.name}`} loading="lazy" />
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
  return (
    <div className="article-sections">
      {page.sections.map((section, sectionIndex) => {
        const bullets = section.items.filter((item) => item.type === "bullet");
        const items = section.items.filter((item) => item.type !== "bullet");
        const isChallenge = /Customer Challenge|The Challenge|Challenge$/.test(section.title);
        const isHelp = /How Birdseye Helps|Birdseye's Approach/.test(section.title);
        const isValue = /Value for|Recorded Result|Why Customers Choose/.test(section.title);
        const isLast = sectionIndex === page.sections.length - 1;
        return (
          <section
            className={`article-section ${isChallenge ? "is-challenge" : ""} ${isHelp ? "is-help" : ""} ${isValue ? "is-value" : ""} ${isLast ? "is-last" : ""}`}
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
