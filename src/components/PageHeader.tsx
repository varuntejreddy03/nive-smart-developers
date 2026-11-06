import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumb,
}) => {
  return (
    <section className="bg-[#070B1A] pt-12 pb-16 sm:pb-20 border-b border-white/10 relative overflow-hidden">
      {/* Background Aurora and Grid */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-400 mb-5 font-mono">
          <Link to="/" className="hover:text-brand-cyan flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-medium">{breadcrumb || title}</span>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0.001, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/12 text-brand-cyan text-xs font-mono font-semibold mb-4 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
          <span>{badge}</span>
        </motion.div>

        {/* Title with Space Grotesk */}
        <motion.h1
          initial={{ opacity: 0.001, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight tracking-tight max-w-3xl"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0.001, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};
