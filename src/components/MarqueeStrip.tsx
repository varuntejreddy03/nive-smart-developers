import React from 'react';
import {
  Cpu,
  Wrench,
  Stethoscope,
  TrendingUp,
  Briefcase,
  Headphones,
  Award,
  Sparkles,
} from 'lucide-react';

const marqueeItems = [
  { label: 'IT & Cloud Architecture', icon: Cpu, color: 'text-brand-cyan' },
  { label: 'Advanced Engineering', icon: Wrench, color: 'text-blue-400' },
  { label: 'Healthcare & Life Sciences', icon: Stethoscope, color: 'text-emerald-400' },
  { label: 'Banking & Corporate Finance', icon: TrendingUp, color: 'text-brand-orange' },
  { label: 'Enterprise Operations & HR', icon: Briefcase, color: 'text-purple-400' },
  { label: 'Customer Experience & CSM', icon: Headphones, color: 'text-brand-cyan' },
  { label: 'Executive Search & CXO', icon: Award, color: 'text-amber-400' },
  { label: 'AI & Data Engineering', icon: Sparkles, color: 'text-indigo-400' },
];

export const MarqueeStrip: React.FC = () => {
  return (
    <div className="relative w-full py-6 bg-[#070B1A] border-y border-white/10 overflow-hidden z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#070B1A] via-transparent to-[#070B1A] pointer-events-none z-10 w-24 sm:w-44 left-0" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#070B1A] via-transparent to-[#070B1A] pointer-events-none z-10 w-24 sm:w-44 right-0" />

      <div className="marquee-container flex">
        {/* Render twice for seamless loop */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="marquee-content flex items-center gap-6 shrink-0">
            {marqueeItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${copyIndex}-${idx}`}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-brand-cyan/40 transition-colors whitespace-nowrap text-xs sm:text-sm font-mono"
                >
                  <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                  <span className="font-medium tracking-wide">{item.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
