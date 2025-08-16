import Link from 'next/link';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import Logo from './logo';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-8 font-headline text-4xl text-muted-foreground">Ready to start?</p>
            <p className="font-headline text-5xl font-bold text-foreground">Let's chat!</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline font-semibold text-foreground">Company</h3>
              <nav className="mt-4 flex flex-col gap-2">
                <Link href="/#portfolio" className="text-muted-foreground transition-colors hover:text-primary">
                  Portfolio
                </Link>
                <Link href="/#team" className="text-muted-foreground transition-colors hover:text-primary">
                  Team
                </Link>
                 <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground">Explore</h3>
              <nav className="mt-4 flex flex-col gap-2">
                <Link href="/#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Services
                </Link>
                <Link href="/#expertise" className="text-muted-foreground transition-colors hover:text-primary">
                  Expertise
                </Link>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </nav>
            </div>
             <div>
              <h3 className="font-headline font-semibold text-foreground">Follow Us</h3>
                <div className="mt-4 flex gap-4">
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                        <Twitter className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                        <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                        <Github className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                        <Instagram className="h-6 w-6" />
                    </Link>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Envobit. All rights reserved.</p>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
