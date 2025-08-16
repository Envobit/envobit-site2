'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Starling Bank',
    category: 'Finance',
    description:
      'We partnered with Starling Bank to build a mobile-first banking experience that is simple, secure, and beautiful. Our team was responsible for the entire mobile application, from design to deployment.',
    hint: 'mobile banking app',
  },
  {
    title: 'QuantumLeap',
    category: 'AI / ML',
    description:
      'A platform for AI researchers to collaborate and share their work. We built a custom real-time collaborative editor and a distributed computing backend to train and run complex models.',
    hint: 'data science dashboard',
  },
  {
    title: 'HealthWell',
    category: 'Healthcare',
    description:
      'A comprehensive patient management system for hospitals and clinics. We designed a modular and scalable architecture that can be customized to the needs of any healthcare provider.',
    hint: 'doctor patient portal',
  },
];

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the innovative solutions we've crafted for our clients.
          </p>
        </div>
        <div className="relative mt-16 w-full overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...projects, ...projects].map((project, index) => (
              <div key={index} className="w-[calc(100vw-2rem)] max-w-sm shrink-0 p-4 md:w-auto md:max-w-md">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-0">
                    <Image
                      src={`https://placehold.co/600x400.png`}
                      alt={`Mockup of ${project.title}`}
                      width={600}
                      height={400}
                      className="w-full object-cover"
                      data-ai-hint={project.hint}
                    />
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                      <h3 className="font-headline text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-card to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-card to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
