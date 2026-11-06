import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu,
  Wrench,
  Stethoscope,
  TrendingUp,
  Briefcase,
  Headphones,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { siteContent, IndustrySector } from '../data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Cpu,
  Wrench,
  Stethoscope,
  TrendingUp,
  Briefcase,
  Headphones,
};

const gradientMap = [
  'from-blue-600 to-brand-cyan',
  'from-sky-500 to-indigo-600',
  'from-emerald-500 to-teal-400',
  'from-brand-orange to-amber-500',
  'from-indigo-600 to-purple-500',
  'from-cyan-500 to-blue-600',
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#070B1A] border-y border-white/10 relative overflow-hidden">
      {/* Subtle Aurora Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0.001, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-brand-cyan text-xs font-mono font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Sector-Specific Talent Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0.001, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            <span>Core Industry Practices &amp; </span>
            <span className="text-gradient-cyan">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0.001, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
          >
            We deploy vetted professionals and transformational leadership across essential enterprise practices, combining domain intelligence with rapid execution.
          </motion.p>
        </div>

        {/* Bento Grid with 6 High-Contrast Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.industries.slice(0, 6).map((ind: IndustrySector, idx: number) => {
            const Icon = iconMap[ind.iconName] || Briefcase;
            const grad = gradientMap[idx % gradientMap.length];
            
            // Bento sizing pattern: card 0 and 3 span 2 cols on desktop
            const isWide = idx === 0 || idx === 3;

            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0.001, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group glass-panel-dark rounded-3xl p-7 sm:p-8 border border-white/12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(47,111,228,0.25)] hover:border-brand-cyan/50 transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${grad} text-white flex items-center justify-center p-3 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-white/[0.05] px-2.5 py-1 rounded-full border border-white/10">
                      Practice 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-brand-cyan transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-1.5 font-normal">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Representative skill pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {ind.roles.slice(0, isWide ? 4 : 3).map((role) => (
                      <span
                        key={role}
                        className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/[0.06] text-slate-200 border border-white/10 font-medium"
                      >
                        {role}
                      </span>
                    ))}
                    {ind.roles.length > (isWide ? 4 : 3) && (
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-brand-cyan/10 text-brand-cyan font-bold border border-brand-cyan/20">
                        +{ind.roles.length - (isWide ? 4 : 3)} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/services#industries-we-serve"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan group-hover:text-white transition-colors"
                  >
                    <span>Explore Practice Roles</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                  <span className="text-[10px] font-mono text-emerald-300 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Active Mandates
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
