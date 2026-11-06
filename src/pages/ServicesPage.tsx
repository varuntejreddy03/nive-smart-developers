import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Wrench,
  Stethoscope,
  TrendingUp,
  Briefcase,
  Headphones,
  Layers,
  Search,
  FileCheck,
  BarChart3,
  Users,
  Sparkles,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CtaBanner } from '../components/CtaBanner';
import { siteContent, EngagementModel, IndustrySector } from '../data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  UserCheck,
  Award,
  Cpu,
  Wrench,
  Stethoscope,
  TrendingUp,
  Briefcase,
  Headphones,
  Layers,
};

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Services & Industry Practices | Nive Smart Developers";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0 pb-12 overflow-x-hidden bg-[#070B1A]">
      {/* Page Header */}
      <PageHeader
        badge="Comprehensive Talent Acquisition"
        title="Services &amp; Industry Practices"
        subtitle="Customized staffing frameworks and dedicated practice tracks engineered to satisfy your distinct talent requirements."
        breadcrumb="Services &amp; Practices"
      />

      {/* Engagement Models (Dark Background with Glass Cards) */}
      <section className="py-16 lg:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Workforce Delivery Models</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Flexible Engagement Tracks
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Select the talent acquisition model precisely tailored to your organizational scale, urgency, and technical complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteContent.engagementModels.map((model: EngagementModel, idx: number) => {
            const Icon = iconMap[model.iconName] || UserCheck;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0.001, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel-dark rounded-3xl p-8 sm:p-10 border border-white/12 shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-6 group hover:border-brand-cyan/40 transition-all duration-300"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-brand-cyan uppercase tracking-wider bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full">
                      {model.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan text-white flex items-center justify-center p-3 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-2xl text-white group-hover:text-brand-cyan transition-colors">
                      {model.title}
                    </h3>
                    <div className="text-xs font-mono text-brand-cyan mt-1">
                      {model.subtitle}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {model.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      Strategic Advantages:
                    </div>
                    {model.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="btn-ai-glow inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-mono font-semibold shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Request Engagement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Visual Feature Break with Realistic Imagery */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-3xl overflow-hidden border border-white/12 shadow-2xl group">
            <img
              src="/images/engineers_tech.jpg"
              alt="Engineering & IT Specialists"
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A]/90 via-[#070B1A]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan font-bold">
                Specialized Practice
              </span>
              <h4 className="font-heading font-bold text-lg">Engineering &amp; Cloud Infrastructure</h4>
              <p className="text-xs text-slate-300">High-concurrency systems, SecOps &amp; DevOps architects.</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/12 shadow-2xl group">
            <img
              src="/images/healthcare_admin.jpg"
              alt="Healthcare & Clinical Talent"
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A]/90 via-[#070B1A]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Specialized Practice
              </span>
              <h4 className="font-heading font-bold text-lg">Healthcare &amp; Clinical Operations</h4>
              <p className="text-xs text-slate-300">Hospital administrators, diagnostic specialists &amp; regulatory leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Placement Journey (Cohesive Dark Section) */}
      <section className="bg-[#0B1228] py-16 lg:py-24 border-y border-white/10 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.08] border border-white/20 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Structured Quality Assurance</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
              <span>The 4-Step </span>
              <span className="text-gradient-cyan">Placement Journey</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              How our consultants guarantee precision from role intake to final placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Market Mapping", desc: "Targeted outreach across proprietary talent communities and active leadership databases.", icon: Search },
              { step: "02", title: "Multi-Tier Vetting", desc: "Exhaustive resume analysis, credentials audit, and employment history verification.", icon: FileCheck },
              { step: "03", title: "Competency Scoring", desc: "Comprehensive evaluation of technical prowess, strategic thinking, and team dynamics.", icon: BarChart3 },
              { step: "04", title: "Final Presentation", desc: "Curated portfolio of top candidates delivered with granular consultant appraisal dossiers.", icon: Users },
            ].map((st, idx) => (
              <motion.div
                key={st.step}
                initial={{ opacity: 0.001, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel-dark rounded-3xl p-7 border border-white/12 shadow-[0_10px_30px_rgba(0,0,0,0.4)] space-y-4 hover:border-brand-cyan/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-extrabold text-3xl text-brand-cyan">{st.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/30 text-brand-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                    <st.icon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-brand-cyan transition-colors">{st.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section (#industries-we-serve) */}
      <section id="industries-we-serve" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practices &amp; Domains We Support</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            <span>Specialized </span>
            <span className="text-gradient-cyan">Industry Sectors</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Explore our sector capabilities and representative specialist positions delivered across enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteContent.industries.map((ind: IndustrySector, idx: number) => {
            const Icon = iconMap[ind.iconName] || Briefcase;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0.001, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel-dark rounded-3xl p-7 sm:p-8 border border-white/10 shadow-lg space-y-5 hover:border-brand-cyan/40 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan text-white flex items-center justify-center p-3 shadow-md group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-brand-cyan transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 line-clamp-1">{ind.desc}</p>
                  </div>
                </div>

                <div className="space-y-2.5 border-t border-white/10 pt-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-cyan">
                    Representative Roles:
                  </span>
                  <ul className="space-y-1.5">
                    {ind.roles.map((r) => (
                      <li key={r} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
};
