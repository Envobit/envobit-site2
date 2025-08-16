import Image from 'next/image';
import { cn } from '@/lib/utils';

const technologies = [
  { name: 'PHP', hint: 'php logo' },
  { name: 'JavaScript', hint: 'javascript logo' },
  { name: 'Ruby', hint: 'ruby language logo' },
  { name: 'Python', hint: 'python logo' },
  { name: 'Go', hint: 'golang logo' },
  { name: 'Java', hint: 'java logo' },
  { name: 'Swift', hint: 'swift language logo' },
  { name: 'Kotlin', hint: 'kotlin logo' },
  { name: 'React', hint: 'react logo' },
  { name: 'Vue', hint: 'vuejs logo' },
  { name: 'Angular', hint: 'angular logo' },
  { name: 'Node.js', hint: 'nodejs logo' },
];

const TechStackSection = () => {
  return (
    <section className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We use a modern, robust, and scalable stack to build our products. We are technology agnostic and choose the best tools for the job.
          </p>
        </div>
        <div className="mt-16 relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="mx-4 flex w-36 h-36 shrink-0 items-center justify-center rounded-lg bg-background p-6 transition-transform hover:scale-110 hover:shadow-xl">
                 <Image
                    src={`https://placehold.co/100x100.png`}
                    alt={`${tech.name} logo`}
                    width={80}
                    height={80}
                    className="aspect-square object-contain"
                    data-ai-hint={tech.hint}
                  />
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

export default TechStackSection;
