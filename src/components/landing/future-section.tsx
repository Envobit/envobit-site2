'use client';

import { useLayoutEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const FutureSection = () => {
  const component = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      elementsRef.current.forEach((el) => {
        if (el) {
          gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            ref={(el) => (elementsRef.current[0] = el)}
            className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            We're building the <span className="text-accent">future</span> of
            product development
          </h2>
          <p
            ref={(el) => (elementsRef.current[1] = el)}
            className="mt-6 text-lg text-muted-foreground"
          >
            Imagine a world where every great idea gets both brilliant execution
            and beautiful growth. Where technical excellence and market success
            aren't separate battles. Where the best products win because they're
            built right AND launched right.
          </p>
          <p
            ref={(el) => (elementsRef.current[2] = el)}
            className="mt-6 text-lg text-muted-foreground"
          >
            That's the future we're creating. One integrated team at a time.
          </p>
          <p
            ref={(el) => (elementsRef.current[3] = el)}
            className="mt-8 font-headline text-xl font-semibold text-foreground"
          >
            When you work with Envobit, you're not just hiring developers. You're
            joining a movement that's redefining how breakthrough products are
            brought to life.
          </p>
          <div ref={(el) => (elementsRef.current[4] = el)} className="mt-10">
            <Button size="lg" asChild>
              <Link href="/contact">
                Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
