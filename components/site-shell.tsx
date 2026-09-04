"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { industries, solutions } from "@/lib/site-content";
import { assetPath } from "@/lib/asset-path";

function active(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function DesktopDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { title: string; route: string }[];
}) {
  return (
    <div className="nav-dropdown">
      <Link className="nav-link" href={href}>
        {label}
        <ChevronDown aria-hidden="true" size={15} />
      </Link>
      <div className="dropdown-panel">
        <Link className="dropdown-overview" href={href}>
          View {label.toLowerCase()} overview
        </Link>
        <div className="dropdown-grid">
          {items.map((item) => (
            <Link href={item.route} key={item.route}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link aria-label="Birdseye home" className="brand" href="/">
          <img
            alt="Birdseye Asset Solutions"
            height="67"
            src={assetPath("/birdseye-logo.png")}
            width="274"
          />
        </Link>

        <nav aria-label="Primary navigation" className="desktop-nav">
          <Link className={`nav-link ${active(pathname, "/") ? "is-active" : ""}`} href="/">
            Home
          </Link>
          <DesktopDropdown
            href="/solutions/"
            items={solutions.map((page) => ({ title: page.sourceTitle, route: page.route }))}
            label="Solutions"
          />
          <DesktopDropdown
            href="/industries/"
            items={industries.map((page) => ({ title: page.sourceTitle, route: page.route }))}
            label="Industries"
          />
          <Link className="nav-link" href="/case-studies/">Case Studies</Link>
          <Link className="nav-link" href="/about-us/">About</Link>
          <Link className="nav-link" href="/blog/">Insights</Link>
        </nav>

        <Link className="button button-small header-cta" href="/contact-us/#enquiry">
          Discuss Your Challenge
        </Link>

        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="mobile-nav">
          <Link href="/">Home</Link>
          <details open>
            <summary>Solutions</summary>
            <Link href="/solutions/">Solutions overview</Link>
            {solutions.map((page) => (
              <Link href={page.route} key={page.route}>{page.sourceTitle}</Link>
            ))}
          </details>
          <details>
            <summary>Industries</summary>
            <Link href="/industries/">Industries overview</Link>
            {industries.map((page) => (
              <Link href={page.route} key={page.route}>{page.sourceTitle}</Link>
            ))}
          </details>
          <Link href="/case-studies/">Case Studies</Link>
          <Link href="/about-us/">About</Link>
          <Link href="/blog/">Insights</Link>
          <Link className="button" href="/contact-us/#enquiry">Discuss Your Asset Challenge</Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-intro">
          <img alt="Birdseye Asset Solutions" height="67" src={assetPath("/birdseye-logo.png")} width="274" />
          <p>
            Birdseye turns physical industrial assets into useful digital intelligence through
            inspection, reality capture, digital engineering and assessment.
          </p>
        </div>
        <div>
          <h2>Solutions</h2>
          {solutions.map((page) => <Link href={page.route} key={page.route}>{page.sourceTitle}</Link>)}
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/industries/">Industries</Link>
          <Link href="/case-studies/">Case Studies</Link>
          <Link href="/blog/">Insights</Link>
          <Link href="/about-us/">About Birdseye</Link>
          <Link href="/training/">Training</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="mailto:contact@birdseye.world">contact@birdseye.world</a>
          <a href="tel:+971526059353">UAE/Oman: +971 52 605 9353</a>
          <a href="tel:+966506227486">KSA: +966 50 622 7486</a>
          <Link className="footer-action" href="/contact-us/">Start a conversation</Link>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Birdseye Asset Solutions</span>
        <span>Inspect · Digitize · Engineer · Assess</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
