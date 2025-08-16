import Header from '@/components/header';
import HeroSection from '@/components/landing/hero-section';
import FutureSection from '@/components/landing/future-section';
import EngagementSection from '@/components/landing/engagement-section';
import ServicesSection from '@/components/landing/services-section';
import ProcessSection from '@/components/landing/process-section';
import ProjectsSection from '@/components/landing/projects-section';
import TeamSection from '@/components/landing/team-section';
import CtaSection from '@/components/landing/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" data-theme="light">
      <Header />
      <main className="flex-1">
        <div className="dark">
          <HeroSection />
        </div>
        <ServicesSection />
        <div className="dark">
          <FutureSection />
          <EngagementSection />
          <ProjectsSection />
          <ProcessSection />
          <TeamSection />
          <CtaSection />
        </div>
      </main>
      <div className="dark">
        <Footer />
      </div>
    </div>
  );
}
