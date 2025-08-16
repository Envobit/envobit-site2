"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Crystal from "./crystal";
import Link from "next/link";

const HeroSection = () => {
  const component = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-char",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "expo.out",
        },
      ).fromTo(
        ".hero-button",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "expo.out" },
        "-=0.8",
      );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderHeading = () => {
    const text = "We build software.";
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="hero-char inline-block"
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <section
      ref={component}
      className="relative flex h-[90vh] min-h-[600px] items-center justify-center overflow-hidden"
    >
      <Crystal />
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-foreground md:text-7xl lg:text-8xl">
          {renderHeading()}
        </h1>
        <Button size="lg" className="hero-button mt-8" asChild>
          <Link href="/contact">Let&apos;s talk</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
