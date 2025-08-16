"use client";

import { useLayoutEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesCrystal from "./services-crystal";
import WebDevIllustration from "./illustrations/web-dev-illustration";
import MobileDevIllustration from "./illustrations/mobile-dev-illustration";
import DedicatedTeamIllustration from "./illustrations/dedicated-team-illustration";
import AiAutomationIllustration from "./illustrations/ai-automation-illustration";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web application development",
    description:
      "We create web solutions from scratch or we scale already existing web applications so that the final outcome is functional and bulletproof.",
    illustration: <WebDevIllustration className="w-32 h-32 text-primary" />,
  },
  {
    title: "Mobile application development",
    description:
      "We build mobile applications both in iOS and Android while taking care of the UX/UI aspect of the product.",
    illustration: <MobileDevIllustration className="w-32 h-32 text-primary" />,
  },
  {
    title: "Dedicated IT teams",
    description:
      "We secure your in-house resources by giving you access to professional remote development teams available immediately.",
    illustration: (
      <DedicatedTeamIllustration className="w-32 h-32 text-primary" />
    ),
  },
  {
    title: "AI & Automation",
    description:
      "We integrate AI and automation to streamline your business processes, enhance efficiency, and unlock new opportunities.",
    illustration: (
      <AiAutomationIllustration className="w-32 h-32 text-primary" />
    ),
  },
];

const ServicesSection = () => {
  const component = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 100,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true, // It's good practice to add 'once' here too if you don't want it to re-animate
            },
            delay: index * 0.1,
          });
        }
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={component}
      className="relative bg-background py-20 sm:py-32 text-foreground overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <ServicesCrystal />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2
            className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ lineHeight: "1.2" }}
          >
            The only team that combines{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent">
              world-class development
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent">
              customer neuroscience
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            One integrated team delivering complete product solutions - from
            brilliant code to beautiful scale
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
            >
              <Card className="group relative bg-card/80 backdrop-blur-sm text-card-foreground shadow-xl rounded-lg border-border/20 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 h-full overflow-hidden p-6">
                <div className="flex justify-between items-start h-full">
                  <div className="flex-1">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="font-headline text-2xl pt-2">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 min-h-[7rem]">
                        {service.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center font-semibold text-foreground transition-colors group-hover:text-primary relative z-10"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </CardContent>
                  </div>
                  <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 ml-4">
                    {service.illustration}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
