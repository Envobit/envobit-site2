'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" aria-label="Envobit Home">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6">
          <Button asChild>
            <Link href="/contact">Start a project</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
