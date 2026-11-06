import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, ArrowRight, Phone } from 'lucide-react';
import { siteContent } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-6 pt-2.5 sm:pt-4 pointer-events-none">
      <div className="max-w-[1200px] mx-auto pointer-events-auto">
        <nav
          className={`flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#070B1A]/95 backdrop-blur-2xl border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
              : 'bg-[#070B1A]/80 backdrop-blur-xl border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo with Brand Name: Nive Smart Developers */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-2 sm:gap-3 transition-transform duration-200 hover:scale-[1.01] shrink-0"
            aria-label="Nive Smart Developers Home"
          >
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-white/10 border border-white/15 group-hover:border-brand-cyan/50 transition-colors">
              <img
                src="/logo_mark_transparent.png"
                alt="Nive Smart Developers Logo"
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-heading font-extrabold text-sm sm:text-lg text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                  NIVE SMART
                </span>
                <span className="font-heading font-bold text-[11px] sm:text-sm text-brand-cyan uppercase tracking-wide">
                  Developers
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">
                Pvt. Ltd. &bull; Kavali &amp; Nellore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - ONE LINE, whitespace-nowrap */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.06] p-1 rounded-full border border-white/10">
            {siteContent.navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-heading font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePillIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue/60 to-brand-cyan/40 border border-brand-cyan/50 -z-10 shadow-[0_0_15px_rgba(56,189,248,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
            {/* Helpline Icon Button with Tooltip */}
            <div className="relative group/phone">
              <a
                href={`tel:${siteContent.company.registeredOffice.phoneTel}`}
                className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-brand-blue/30 border border-white/15 hover:border-brand-cyan/60 text-slate-200 hover:text-brand-cyan flex items-center justify-center transition-all duration-200"
                aria-label={`Call Helpline: ${siteContent.company.registeredOffice.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>
              <div className="absolute right-0 top-full mt-2 hidden group-hover/phone:flex flex-col items-center pointer-events-none z-50">
                <div className="px-3 py-1.5 rounded-lg bg-[#0D152D] border border-white/20 text-white text-[11px] font-mono shadow-2xl whitespace-nowrap">
                  <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-sans font-semibold">Corporate Helpline</span>
                  {siteContent.company.registeredOffice.phone}
                </div>
              </div>
            </div>

            {/* WhatsApp Icon Button */}
            <a
              href={siteContent.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center transition-all duration-200 hover:scale-105"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Gradient Hire Talent CTA */}
            <Link
              to="/contact"
              className="btn-ai-glow inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white text-xs sm:text-sm font-heading font-bold hover:shadow-glow-blue transition-all duration-200 active:scale-95"
            >
              <span>Hire Talent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Screen Header Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteContent.company.registeredOffice.phoneTel}`}
              className="w-8 h-8 rounded-full bg-white/[0.08] text-brand-cyan border border-white/15 flex items-center justify-center"
              aria-label="Call Helpline"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-200 hover:text-white bg-white/[0.08] border border-white/15 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Slide-in Drawer with Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md pointer-events-auto z-[-1]"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden mt-2 max-w-[1200px] mx-auto pointer-events-auto"
            >
              <div className="glass-panel-dark rounded-3xl p-5 border border-white/20 space-y-4 shadow-2xl">
                <div className="flex flex-col space-y-1">
                  {siteContent.navigation.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-2xl text-sm font-heading font-semibold transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-brand-blue/30 text-brand-cyan border border-brand-cyan/40 shadow-sm'
                            : 'text-slate-200 hover:text-white hover:bg-white/[0.08]'
                        }`}
                      >
                        <span>{item.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-brand-cyan" />}
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2.5">
                  <a
                    href={`tel:${siteContent.company.registeredOffice.phoneTel}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200 hover:text-white"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-blue/20 text-brand-cyan flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-slate-400 font-sans uppercase">Helpline</span>
                      <span className="font-bold">{siteContent.company.registeredOffice.phone}</span>
                    </div>
                  </a>

                  <a
                    href={siteContent.company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#25D366]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span>Chat on WhatsApp</span>
                  </a>

                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white text-sm font-heading font-bold shadow-glow-blue active:scale-95 transition-all"
                  >
                    <span>Hire Top Talent</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
