'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: '01',
    title: 'Exploration & Product Analysis',
    description: 'We start by understanding your vision, goals, and the challenges we need to solve. This phase is all about deep listening and research.',
  },
  {
    step: '02',
    title: 'Product Design (UI/UX)',
    description: 'Our design team creates intuitive, beautiful interfaces that provide a seamless user experience, turning complex problems into simple solutions.',
  },
  {
    step: '03',
    title: 'Development & Implementation',
    description: 'With a solid plan and design, our engineers build your product using modern technologies, focusing on quality, scalability, and performance.',
  },
  {
    step: '04',
    title: 'Testing, Deployment & Support',
    description: 'We rigorously test everything before launch. After deployment, we provide ongoing support to ensure your product runs smoothly.',
  },
];

const ProcessSection = () => {
  const component = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const lineLength = line.getTotalLength();
    line.style.strokeDasharray = `${lineLength}`;
    line.style.strokeDashoffset = `${lineLength}`;

    let ctx = gsap.context(() => {
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: component.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      itemsRef.current.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="overflow-hidden py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Approach Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our streamlined process ensures transparency, efficiency, and
            exceptional results from start to finish.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ height: 'calc(100% - 4rem)' }}>
            <svg
              width="2"
              height="100%"
              viewBox="0 0 2 1200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                ref={lineRef}
                d="M 1 0 V 1200"
                stroke="url(#line-gradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="line-gradient"
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="1200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="hsl(var(--primary))" />
                  <stop offset="1" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col gap-16">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                ref={(el) => (itemsRef.current[index] = el)}
                className="grid grid-cols-1 items-start gap-8 md:grid-cols-2"
              >
                <div
                  className={`text-left ${
                    index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'
                  }`}
                >
                  <span className="inline-block rounded-full bg-primary/10 px-4 py-2 font-headline font-bold text-primary">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-headline text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <div className={`flex items-center ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  <p className={`border-l-4 border-primary pl-6 ${index % 2 === 0 ? '' : 'md:border-l-0 md:border-r-4 md:pl-0 md:pr-6 md:text-right'}`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
