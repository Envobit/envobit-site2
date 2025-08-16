import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Arsalan Zaffar",
    role: "Growth Architect",
    hint: "man portrait",
  },
  {
    name: "Sharjeel Yunus",
    role: "Technical Visionary",
    hint: "man portrait",
  },
  {
    name: "Farhan Ashraf",
    role: "Infrastructure Maestro",
    hint: "man suit",
  },
  {
    name: "Anser Waseem",
    role: "Experience Craftsman",
    hint: "man portrait",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Team
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group relative overflow-hidden rounded-lg border-border/20 bg-transparent text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-card/80 transition-all duration-500 ease-in-out group-hover:top-0"></div>
              <div className="relative flex flex-col items-center p-6 pt-10">
                <div className="relative mb-6">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 transition-all duration-300 group-hover:p-0.5">
                    <div className="h-full w-full rounded-full bg-background p-1">
                      <Image
                        src={`https://placehold.co/120x120.png`}
                        alt={`Photo of ${member.name}`}
                        width={120}
                        height={120}
                        className="h-full w-full rounded-full object-cover"
                        data-ai-hint={member.hint}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-2 h-16">
                  <h3 className="font-headline text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                    {member.name}
                  </h3>
                  <p className="text-accent transition-colors duration-300 group-hover:text-primary">
                    {member.role}
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 flex items-center gap-2 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
