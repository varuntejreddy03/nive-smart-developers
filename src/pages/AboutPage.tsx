import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  Heart,
  Zap,
  MapPin,
  Sparkles,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CtaBanner } from '../components/CtaBanner';
import { siteContent, CorePrinciple } from '../data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck,
  Target,
  Heart,
  Zap,
};

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Nive Smart Developers | Strategic Talent Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0 pb-12 overflow-x-hidden bg-[#070B1A]">
      {/* Page Header */}
      <PageHeader
        badge="About Nive Smart Developers"
        title="Shaping Enterprise Growth Through Exceptional Human Capital"
        subtitle="Connecting ambitious businesses with world-class talent across domestic and international markets through high-touch executive search and precision recruitment."
        breadcrumb="About Us"
      />

      {/* Our Journey & Purpose */}
      <section className="py-16 lg:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Our Vision &amp; Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              Engineering Resilient Workforces for the{' '}
              <span className="bg-gradient-to-r from-brand-cyan via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Modern Economy.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <strong className="text-white font-semibold">Nive Smart Developers Pvt. Ltd.</strong> (CIN: <span className="font-mono text-brand-cyan">{siteContent.company.cin}</span>) was established to transform traditional recruitment into an agile, strategic growth partner for modern business leaders.
            </p>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              With our corporate headquarters in Kavali, Nellore, and dedicated international desks, we blend regional market accessibility with comprehensive cross-border talent acquisition capabilities. Our specialized practice groups span Information Technology, Engineering, Healthcare, Finance, and Enterprise Operations.
            </p>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="glass-panel-dark rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-mono font-bold text-brand-cyan">100%</div>
                <div className="text-xs font-mono text-slate-300 mt-1">Multi-Tiered Candidate Vetting</div>
              </div>
              <div className="glass-panel-dark rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-mono font-bold text-brand-cyan">24-48h</div>
                <div className="text-xs font-mono text-slate-300 mt-1">Rapid Shortlist Delivery</div>
              </div>
            </div>
          </div>

          {/* AI / Tech Abstract Network Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] border border-white/15 group">
              <img
                src="/images/ai_network_abstract.jpg"
                alt="Nive Smart Developers AI Talent Intelligence Network"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A]/90 via-[#070B1A]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 glass-panel-dark p-5 rounded-2xl border border-white/15">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-cyan">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Global Intelligence &bull; Domestic Strength</span>
                </div>
                <h4 className="font-heading font-bold text-base sm:text-lg">
                  Registered Corporate Office &bull; Kavali &amp; Nellore
                </h4>
                <p className="text-xs font-mono text-slate-400">
                  CIN: {siteContent.company.cin} &bull; Companies Act 2013
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Foundational Pillars / Standards (Cohesive Dark Section) */}
      <section className="bg-[#0B1228] py-16 lg:py-24 border-y border-white/10 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.08] border border-white/20 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Our Foundational Pillars</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              <span>The Principles Powering </span>
              <span className="text-gradient-cyan">Every Placement</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Our recruitment philosophy is founded upon four guiding pillars that drive every client consultation, candidate interview, and executive search mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.aboutValues.map((val: CorePrinciple, idx: number) => {
              const Icon = iconMap[val.iconName] || ShieldCheck;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0.001, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel-dark rounded-3xl p-7 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(47,111,228,0.25)] border border-white/12 flex flex-col justify-between space-y-5 group hover:border-brand-cyan/40 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan text-white flex items-center justify-center p-3 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-brand-cyan transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Guaranteed Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Collaboration Photo Section */}
      <section className="py-16 lg:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/images/office_collaboration.jpg"
                alt="Nive Smart Developers Team Collaboration"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Strategic Presence</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Dual Geographic Strength
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Combining on-the-ground presence in Andhra Pradesh with international advisory desks to deliver comprehensive staffing and executive search solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel-dark rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span>{siteContent.company.registeredOffice.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {siteContent.company.registeredOffice.address}<br />
                  {siteContent.company.registeredOffice.region}
                </p>
                <div className="text-[11px] font-mono text-brand-cyan pt-1">
                  CIN: {siteContent.company.cin}
                </div>
              </div>

              <div className="glass-panel-dark rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                  <MapPin className="w-4 h-4 text-brand-cyan" />
                  <span>{siteContent.company.ukOffice.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {siteContent.company.ukOffice.address}<br />
                  {siteContent.company.ukOffice.region}
                </p>
                <div className="text-[11px] font-mono text-brand-cyan pt-1">
                  Global Mobility &amp; Cross-Border Desk
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
};
