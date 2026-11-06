import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Award,
  Sparkles,
  Zap,
  Cpu,
} from 'lucide-react';
import { ParticleNetwork } from './ParticleNetwork';
import { siteContent } from '../data/content';

export const Hero: React.FC = () => {
  // Gentle 3D tilt effect on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 pb-20 sm:pb-28 bg-[#070B1A] min-h-[92vh] flex items-center">
      {/* Background Aurora Mesh & Particle Network */}
      <div className="absolute inset-0 aurora-bg opacity-90 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 z-0 pointer-events-none" />
      <ParticleNetwork className="z-[1]" />

      {/* Decorative Aurora Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-blue/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 rounded-full bg-brand-cyan/25 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-brand-orange/15 blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0.001, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-200">
                AI-Assisted Talent Solutions &amp; Executive Search
              </span>
            </motion.div>

            {/* Headline with Plus Jakarta Sans and Guaranteed Visible Gradient */}
            <motion.h1
              initial={{ opacity: 0.001, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[62px] text-white leading-[1.12] tracking-tight"
            >
              <span>Empowering Enterprises with </span>
              <span className="text-gradient-cyan block sm:inline">
                Exceptional Talent
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0.001, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal"
            >
              {siteContent.hero.lead}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0.001, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary Glow Button */}
              <Link
                to="/contact"
                className="btn-ai-glow inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white font-heading font-bold text-sm shadow-glow-blue hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Hire Top Talent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Ghost Glass Button */}
              <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-heading font-bold text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>Submit Your CV</span>
              </Link>
            </motion.div>

            {/* Trust Points as High-Contrast Glass Chips */}
            <motion.div
              initial={{ opacity: 0.001, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-sm text-xs font-mono text-slate-100 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Fast Shortlisting (48h)</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-sm text-xs font-mono text-slate-100 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rigorous Vetting</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-sm text-xs font-mono text-slate-100 shadow-sm">
                <Award className="w-3.5 h-3.5 text-brand-orange" />
                <span>Retention Guarantee</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Floating Glass "AI Talent Match" Panel */}
          <div
            className="lg:col-span-5 relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0.001, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-panel-dark rounded-3xl p-6 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.65)] relative overflow-hidden animate-float-slow"
            >
              {/* Subtle top inner glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-80" />

              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/30 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-white">
                      AI Talent Match Engine
                    </h3>
                    <p className="text-[10px] font-mono text-slate-300">
                      Live Precision Scoring &bull; Kavali HQ
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Active Match</span>
                </div>
              </div>

              {/* Active Role Being Matched */}
              <div className="my-4 p-4 rounded-2xl bg-white/[0.05] border border-white/12 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider font-semibold">Target Mandate</span>
                  <span className="text-[10px] font-mono text-brand-cyan font-bold px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">48h SLA</span>
                </div>
                <div className="text-sm font-heading font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-cyan" />
                  <span>Lead Cloud Solutions Architect</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['AWS', 'Kubernetes', 'Terraform', 'Microservices'].map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.08] text-slate-100 border border-white/10 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Candidate Match Rows with Progress Rings */}
              <div className="space-y-3">
                {[
                  {
                    name: 'Candidate #8491',
                    title: 'Principal AWS / Cloud Specialist',
                    score: 96,
                    color: 'text-brand-cyan',
                    strokeColor: '#38BDF8',
                    status: 'Dossier Ready',
                  },
                  {
                    name: 'Candidate #6214',
                    title: 'Enterprise DevOps & SRE Lead',
                    score: 93,
                    color: 'text-blue-400',
                    strokeColor: '#60A5FA',
                    status: 'Vetted & Verified',
                  },
                  {
                    name: 'Candidate #5108',
                    title: 'Systems & Infrastructure Architect',
                    score: 91,
                    color: 'text-brand-orange',
                    strokeColor: '#F26A3D',
                    status: 'Ready for Interview',
                  },
                ].map((cand) => (
                  <div
                    key={cand.name}
                    className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      {/* Circular Match Score Ring */}
                      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
                        <svg className="w-11 h-11 transform -rotate-90">
                          <circle
                            cx="22"
                            cy="22"
                            r="17"
                            className="stroke-white/10"
                            strokeWidth="3"
                            fill="transparent"
                          />
                          <circle
                            cx="22"
                            cy="22"
                            r="17"
                            stroke={cand.strokeColor}
                            strokeWidth="3"
                            strokeDasharray="106"
                            strokeDashoffset={106 - (106 * cand.score) / 100}
                            strokeLinecap="round"
                            fill="transparent"
                          />
                        </svg>
                        <span className="absolute text-[11px] font-mono font-bold text-white">
                          {cand.score}%
                        </span>
                      </div>

                      <div>
                        <div className="text-xs font-mono font-bold text-white">
                          {cand.name}
                        </div>
                        <div className="text-[11px] text-slate-300">
                          {cand.title}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-slate-200 shrink-0 border border-white/10">
                      {cand.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status Footer */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-200 font-semibold">
                    Shortlist ready in 48h
                  </span>
                </div>

                <Link
                  to="/services#industries-we-serve"
                  className="font-mono text-[11px] text-brand-cyan hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Explore Matches</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
