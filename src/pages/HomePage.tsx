import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { MarqueeStrip } from '../components/MarqueeStrip';
import { ServicesGrid } from '../components/ServicesGrid';
import { MethodologySection } from '../components/MethodologySection';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Nive Smart Developers | AI-Powered Talent Solutions & Executive Search";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. AI-Style Hero */}
      <Hero />

      {/* 2. Glass Stats Strip overlapping Hero */}
      <StatsBar />

      {/* 3. Industry Keywords Marquee Strip */}
      <div className="mt-14 sm:mt-16">
        <MarqueeStrip />
      </div>

      {/* 4. Bento Grid: Core Industry Practices & Expertise */}
      <ServicesGrid />

      {/* 5. 4-Stage Sourcing Framework Timeline */}
      <MethodologySection />

      {/* 6. Aurora CTA Banner */}
      <CtaBanner />
    </div>
  );
};
