import Image from "next/image";

import ornamentLeft from "@/public/assets/badge-ornament-left.svg";
import ornamentRight from "@/public/assets/badge-ornament-right.svg";
import heroMark from "@/public/assets/hero-mahadeva.png";

/**
 * Hero block — Figma node 3678:3368.
 *
 * The 3D mark hangs 96px below the block on desktop, so the block stays
 * `relative` and the section below it must not clip.
 */
export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-10 lg:h-[800px]">
      <div
        className="flex items-center justify-center gap-2"
        data-node-id="3678:3369"
      >
        <Image src={ornamentLeft} alt="" aria-hidden className="h-8 w-[18.63px]" />
        <p className="text-base leading-[1.5]">AI First Agency</p>
        <Image src={ornamentRight} alt="" aria-hidden className="h-8 w-[18.63px]" />
      </div>

      <h1 className="max-w-[878px] text-center text-[clamp(2rem,6vw,60px)] leading-[1.1]">
        Mahadeva helps ambitious brands turn AI into practical systems that
        automate work, improve efficiency, and drive measurable growth across
        teams.
      </h1>

      <Image
        src={heroMark}
        alt="Mahadeva 3D monogram"
        priority
        sizes="311px"
        className="h-auto w-[200px] object-cover sm:w-[260px] lg:absolute lg:-bottom-24 lg:left-1/2 lg:h-[385px] lg:w-[311px] lg:-translate-x-1/2"
      />
    </section>
  );
}
