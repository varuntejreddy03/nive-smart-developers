import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';

export const CtaBanner: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0.001, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#070B1A] via-[#0D152D] to-[#070B1A] p-8 sm:p-14 lg:p-16 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
      >
        {/* Aurora Glows and Grid Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.08] border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{siteContent.ctaBanner.badge}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
              <span>Ready to Transform Your </span>
              <span className="text-gradient-cyan block sm:inline">
                Talent Strategy?
              </span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {siteContent.ctaBanner.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
            <Link
              to="/contact"
              className="btn-ai-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white font-heading font-bold text-sm shadow-glow-blue hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{siteContent.ctaBanner.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteContent.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 text-white font-heading font-bold text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{siteContent.ctaBanner.ctaSecondary}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
