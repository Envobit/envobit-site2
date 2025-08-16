"use client";

import { useState, useLayoutEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const engagementModels = [
  {
    title: "Extend your development team",
    description:
      "Level up your performance with the support of our specialists.",
  },
  {
    title: "Hire a dedicated team",
    description:
      "Save time & in-house resources by delegating the project to a dedicated team.",
  },
  {
    title: "Build your product from scratch",
    description:
      "Design a product tailored to your needs and bring it to life.",
  },
  {
    title: "Maintain your solution",
    description: "Get full support for your IT product.",
  },
];

const Waveform = ({ hoveredModel }: { hoveredModel: number | null }) => {
  const barsRef = useRef<(SVGRectElement | null)[]>([]);
  const numBars = 150;

  const initialAmplitudes = useRef<number[]>([]);
  if (initialAmplitudes.current.length === 0) {
    for (let i = 0; i < numBars; i++) {
      const barPosition = i / (numBars - 1);
      const baseHeight = 2;
      const scale = 1 + barPosition * 5;
      const noise = 1 + (Math.random() - 0.5) * 0.4;
      initialAmplitudes.current.push(baseHeight * scale * noise);
    }
  }

  useLayoutEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;

      const barPosition = i / (numBars - 1);

      let targetModelPosition = 0.5;
      if (hoveredModel !== null) {
        targetModelPosition = (hoveredModel + 0.5) / engagementModels.length;
      }

      const distance = Math.abs(barPosition - targetModelPosition);
      const focusFactor = Math.pow(1 - Math.min(distance * 2.5, 1), 2);
      const h = 2 + initialAmplitudes.current[i] * (1 + focusFactor * 3);

      gsap.to(bar, {
        attr: { height: h, y: 50 - h / 2 },
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
        delay: i * 0.001,
      });
    });
  }, [hoveredModel]);

  return (
    <svg
      viewBox={`0 0 ${numBars * 3} 100`}
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveform-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--accent))" />
          <stop offset="50%" stopColor="hsl(var(--muted-foreground))" />
          <stop offset="100%" stopColor="hsl(var(--destructive))" />
        </linearGradient>
      </defs>
      <g>
        {Array.from({ length: numBars }).map((_, i) => (
          <rect
            key={i}
            ref={(el) => {
              if (el) {
                barsRef.current[i] = el;
              }
            }}
            x={i * 3}
            y={49}
            width="2"
            height="2"
            rx="1"
            fill="url(#waveform-gradient)"
          />
        ))}
      </g>
    </svg>
  );
};

const EngagementSection = () => {
  const [hoveredModel, setHoveredModel] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => {
          if (animationTriggered.current) return;
          animationTriggered.current = true;

          const tl = gsap.timeline({
            onComplete: () => {
              // After animation, hovering is controlled by mouse again
            },
          });

          engagementModels.forEach((_, index) => {
            tl.call(
              () => setHoveredModel(index),
              [],
              `+=${index === 0 ? 0 : 1}`,
            );
          });
          tl.call(() => setHoveredModel(null), [], "+=1");
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={sectionRef} className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Preferred Engagement Model
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We adapt to your needs, ensuring a seamless and effective
            partnership. Choose the model that best fits your project.
          </p>
        </div>
        <div
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          onMouseLeave={() => setHoveredModel(null)}
        >
          {engagementModels.map((model, index) => (
            <Card
              key={model.title}
              onMouseEnter={() => {
                if (animationTriggered.current) setHoveredModel(index);
              }}
              className={cn(
                "group cursor-pointer border-2 bg-card transition-all duration-300",
                hoveredModel === index
                  ? "border-destructive shadow-lg shadow-destructive/20"
                  : "border-transparent",
              )}
            >
              <CardHeader>
                <CardTitle className="font-headline text-xl min-h-[4.5rem]">
                  {model.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{model.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="relative mt-16 h-24">
          <div className="absolute inset-x-0 top-1/2 h-24 -translate-y-1/2">
            <Waveform hoveredModel={hoveredModel} />
          </div>
          <div className="absolute top-0 w-full text-center font-semibold text-muted-foreground">
            Responsibility
          </div>
          <div className="absolute bottom-0 w-full flex justify-between text-sm text-muted-foreground">
            <span>Yours</span>
            <span>Ours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
