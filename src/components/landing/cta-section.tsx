import Link from "next/link";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="contact" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-b from-border/80 via-border/50 to-transparent p-px">
          <div className="rounded-[calc(1.5rem-1px)] bg-background p-12 text-center">
            <h3 className="font-headline text-3xl font-bold text-foreground">
              Work with dedicated experts who will breathe life into your idea.
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's build something amazing together.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
