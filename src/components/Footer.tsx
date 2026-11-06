import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Linkedin, Instagram } from 'lucide-react';
import { siteContent } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070B1A] text-slate-300 pt-16 sm:pt-20 pb-28 sm:pb-24 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Aurora Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Registration (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-cyan/40 transition-colors">
                <img
                  src="/logo_mark_transparent.png"
                  alt="Nive Smart Developers"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                  NIVE SMART
                  <span className="text-brand-orange ml-1.5 font-mono font-semibold text-xs uppercase px-2 py-0.5 rounded-full bg-brand-orange/20 border border-brand-orange/30">
                    Developers
                  </span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase mt-0.5">
                  Pvt. Ltd. &bull; Kavali &amp; Nellore
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              {siteContent.company.description}
            </p>

            {/* CIN in Mono Font Chip */}
            <div className="glass-panel-dark rounded-2xl p-4 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-heading font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Corporate Registration</span>
              </div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-xs font-mono font-bold text-brand-cyan tracking-wider">
                CIN: {siteContent.company.cin}
              </div>
              <div className="text-[11px] text-slate-400 font-normal">
                Registered under the Companies Act, 2013 &bull; Govt. of India
              </div>
            </div>

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>{siteContent.company.tagline}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2.5 pt-1">
              <a
                href={siteContent.company.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-brand-blue/30 border border-white/10 hover:border-brand-blue/50 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteContent.company.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-brand-blue/30 border border-white/10 hover:border-brand-blue/50 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteContent.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider">
              Our Locations
            </h4>
            <div className="space-y-4 text-xs text-slate-300">
              <div className="space-y-1.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-heading font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>{siteContent.company.registeredOffice.title}</span>
                </p>
                <p className="text-slate-400 pl-5 leading-relaxed">
                  {siteContent.company.registeredOffice.address}<br />
                  {siteContent.company.registeredOffice.region}
                </p>
              </div>

              <div className="space-y-1.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-white font-heading font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  <span>{siteContent.company.ukOffice.title}</span>
                </p>
                <p className="text-slate-400 pl-5 leading-relaxed">
                  {siteContent.company.ukOffice.address}<br />
                  {siteContent.company.ukOffice.region}
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider">
              Contact &amp; Hours
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a
                    href={`tel:${siteContent.company.registeredOffice.phoneTel}`}
                    className="font-mono text-white hover:text-brand-cyan font-semibold transition-colors"
                  >
                    {siteContent.company.registeredOffice.phone}
                  </a>
                  <a
                    href={`tel:${siteContent.company.registeredOffice.altPhoneTel}`}
                    className="font-mono text-slate-400 hover:text-brand-cyan transition-colors"
                  >
                    {siteContent.company.registeredOffice.altPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a
                  href={`mailto:${siteContent.company.registeredOffice.email}`}
                  className="font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {siteContent.company.registeredOffice.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 border-t border-white/5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-slate-400 leading-relaxed">
                  {siteContent.company.hours}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Monospace CIN Chip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            {siteContent.company.copyright}
          </p>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-slate-400">
              CIN: {siteContent.company.cin}
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">Kavali &bull; Nellore &bull; Andhra Pradesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
