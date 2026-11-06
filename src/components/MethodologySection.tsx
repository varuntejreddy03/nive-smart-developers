import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileCheck, BarChart3, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { siteContent, MethodologyStep } from '../data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Search,
  FileCheck,
  BarChart3,
  Users,
};

export const MethodologySection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#070B1A] relative overflow-hidden border-b border-white/10">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0.001, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-brand-cyan text-xs font-mono font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Workforce Acquisition Engine</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0.001, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            <span>Our Proven 4-Stage </span>
            <span className="text-gradient-cyan">
              Sourcing Framework
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0.001, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
          >
            A disciplined talent delivery model engineered to remove recruitment bottlenecks, guarantee credential accuracy, and place high-caliber performers.
          </motion.p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative">
          {/* Desktop Glowing Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange z-0 shadow-[0_0_15px_rgba(56,189,248,0.5)]" />

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {siteContent.methodology.map((step: MethodologyStep, idx: number) => {
              const Icon = iconMap[step.iconName] || Search;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0.001, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex flex-col items-center"
                >
                  {/* Glowing Numbered Node on Timeline */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#0D1429] border-2 border-brand-cyan flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)] mb-6 group">
                    <span className="font-mono font-bold text-base text-white">
                      {step.number}
                    </span>
                    <span className="absolute -inset-1 rounded-full border border-brand-cyan/30 animate-pulse pointer-events-none" />
                  </div>

                  {/* Card Below Node */}
                  <div className="w-full h-full glass-panel-dark rounded-3xl p-6 sm:p-7 border border-white/12 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-lg group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/30 text-brand-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-slate-300 uppercase tracking-wider bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded-full">
                          {step.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-heading font-bold text-lg text-white group-hover:text-brand-cyan transition-colors">
                          {step.title}
                        </h3>
                        <div className="text-xs font-mono text-brand-cyan mt-1 font-semibold">
                          {step.subtitle}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Vetted &amp; Verified</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
