"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

import revenue from "@/public/assets/card-revenue-optimization.png";
import agents from "@/public/assets/card-custom-ai-agents.png";
import data from "@/public/assets/card-data-intelligence.png";
import workflow from "@/public/assets/card-workflow-automation.png";

type Feature = {
  title: string;
  body: string;
  image: StaticImageData;
};

/**
 * Six cards, as laid out in Figma node 3678:3472. The design repeats
 * "Revenue Optimization" and "Workflow Automation" so the strip reads as a
 * continuing row rather than a closed set of four.
 */
const features: Feature[] = [
  {
    title: "Revenue Optimization",
    body: "Use AI systems designed to increase conversions and overall productivity.",
    image: revenue,
  },
  {
    title: "Revenue Optimization",
    body: "Use AI systems designed to increase conversions and overall productivity.",
    image: revenue,
  },
  {
    title: "Custom AI Agents",
    body: "Create tailored AI agents built around your workflows and team productivity.",
    image: agents,
  },
  {
    title: "Data Intelligence",
    body: "Turn operational data into insights that improve decisions and business automation.",
    image: data,
  },
  {
    title: "Workflow Automation",
    body: "Automate repetitive workflows to save time and improve daily productivity.",
    image: workflow,
  },
  {
    title: "Workflow Automation",
    body: "Automate repetitive workflows to save time and improve daily productivity.",
    image: workflow,
  },
];

export default function FeatureCards() {
  const scroller = useRef<HTMLDivElement>(null);

  // At desktop width the row is wider than the frame by design — cards bleed
  // off both edges — so start scrolled to the middle to match the Figma frame.
  // Below that there is no room for the bleed to read as intentional, so start
  // at the first card instead. Either way the user can scroll or swipe on.
  useEffect(() => {
    const el = scroller.current;
    if (!el || !window.matchMedia("(min-width: 1024px)").matches) return;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  return (
    <section className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-15 overflow-clip px-5 pt-20 sm:px-20">
      <h2 className="max-w-[570px] text-center text-[clamp(1.75rem,4.5vw,48px)] leading-[1.1]">
        Everything You Need to Scale With AI
      </h2>

      <div
        ref={scroller}
        className="no-scrollbar w-full overflow-x-auto overscroll-x-contain"
      >
        <div className="flex w-max items-center gap-5">
          {features.map((feature, i) => (
            <article
              key={`${feature.title}-${i}`}
              className="relative h-[400px] w-[265px] shrink-0 overflow-clip bg-card"
            >
              <h3 className="absolute top-[29px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-base tracking-[-0.16px] whitespace-nowrap uppercase">
                {feature.title}
              </h3>

              <Image
                src={feature.image}
                alt=""
                aria-hidden
                sizes="260px"
                className="absolute top-[calc(50%-28px)] left-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 object-cover"
              />

              <p className="absolute bottom-5 left-1/2 w-[225px] -translate-x-1/2 text-center text-base leading-[1.4] font-light">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
