"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const challenges = [
  {
    label: "Difficult or hazardous internal access",
    title: "Indoor & Confined-Space Solutions",
    text: "Inspect difficult or hazardous internal spaces while reducing unnecessary human entry, access preparation and operational disruption.",
    href: "/solutions/indoor-confined-space/",
    stage: "Inspect",
  },
  {
    label: "A large site or corridor is slow to survey",
    title: "Outdoor Asset Intelligence",
    text: "Understand large sites, corridors and infrastructure faster with consistent spatial information for planning, monitoring and operational decisions.",
    href: "/solutions/outdoor-asset-intelligence/",
    stage: "Digitize",
  },
  {
    label: "Drawings are missing or outdated",
    title: "Reality Capture & Digital Engineering",
    text: "Create a reliable digital record of the physical asset and give engineering teams the information they need for design, maintenance, retrofit and verification.",
    href: "/solutions/reality-capture-digital-engineering/",
    stage: "Engineer",
  },
  {
    label: "Inspection data is difficult to prioritize",
    title: "Asset Intelligence & Assessment",
    text: "Turn inspection images, measurements, maps and 3D data into clear findings that help asset teams understand condition and focus action.",
    href: "/solutions/asset-intelligence-assessment/",
    stage: "Assess",
  },
];

export function ChallengeFinder() {
  const [selected, setSelected] = useState(0);
  const challenge = challenges[selected];

  return (
    <div className="challenge-finder">
      <div className="challenge-options" role="tablist" aria-label="Asset challenges">
        {challenges.map((item, index) => (
          <button
            aria-selected={selected === index}
            className={selected === index ? "is-selected" : ""}
            key={item.label}
            onClick={() => setSelected(index)}
            role="tab"
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="challenge-result" role="tabpanel">
        <p className="eyebrow">Recommended solution · {challenge.stage}</p>
        <h3>{challenge.title}</h3>
        <p>{challenge.text}</p>
        <Link className="text-link" href={challenge.href}>
          Explore this solution <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </div>
    </div>
  );
}
