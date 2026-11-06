import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteContent } from '../data/content';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const CountUpNumber: React.FC<CountUpProps> = ({ end, suffix = '', prefix = '', duration = 1400 }) => {
  // Initialize with `end` so numbers are NEVER blank in screenshots or before scroll!
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    setCount(0); // Reset to 0 to perform count-up

    let startTime: number | null = null;
    let animFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        animFrame = requestAnimationFrame(animate);
      }
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono font-bold text-[#38BDF8]">
      {prefix}{count}{suffix}
    </span>
  );
};

export const StatsBar: React.FC = () => {
  return (
    <div className="relative -mt-10 sm:-mt-14 z-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0.001, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="glass-panel-dark rounded-3xl p-6 sm:p-8 border border-white/20 shadow-[0_15px_45px_rgba(0,0,0,0.65)] relative overflow-hidden"
      >
        {/* Top subtle cyan laser line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/80 to-transparent" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {siteContent.stats.map((stat, idx) => {
            let numVal = 0;
            let suffix = '';
            let isRange = false;

            if (stat.value.includes('+')) {
              numVal = parseInt(stat.value.replace('+', ''), 10) || 0;
              suffix = '+';
            } else if (stat.value.includes('%')) {
              numVal = parseInt(stat.value.replace('%', ''), 10) || 0;
              suffix = '%';
            } else if (stat.value.includes('-')) {
              isRange = true;
            } else {
              numVal = parseInt(stat.value, 10) || 0;
            }

            return (
              <div
                key={stat.label}
                className={`space-y-1.5 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-[#38BDF8] tracking-tight flex items-center drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  {isRange ? (
                    <span className="font-mono text-[#38BDF8]">
                      {stat.value}
                    </span>
                  ) : (
                    <CountUpNumber end={numVal} suffix={suffix} />
                  )}
                </div>

                <div className="text-sm font-heading font-bold text-white">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-300 font-mono leading-relaxed font-normal">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
