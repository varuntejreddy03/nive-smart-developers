import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { siteContent } from '../data/content';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact | Nive Smart Developers | Talent & Executive Advisory";
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Staffing Consultation',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.message.trim()) errs.message = 'Please provide details of your mandate or inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: 'Staffing Consultation',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="space-y-0 pb-16 overflow-x-hidden bg-[#070B1A]">
      {/* Page Header */}
      <PageHeader
        badge="Connect with Our Advisors"
        title="Consult Our Workforce &amp; Search Specialists"
        subtitle="Reach out to discuss customized hiring mandates, strategic executive search, or partnership inquiries across India and global hubs."
        breadcrumb="Contact"
      />

      <section className="py-16 lg:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Locations & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Global Presence &bull; Kavali HQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                Our Office Locations
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Registered corporate headquarters in Kavali, Nellore, complemented by our UK &amp; international delivery desks.
              </p>
            </div>

            {/* Corporate Registration Card */}
            <div className="glass-panel-dark rounded-3xl p-6 border border-white/12 shadow-lg space-y-3">
              <div className="flex items-center gap-2.5 text-white font-heading font-bold text-lg">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>{siteContent.company.registeredOffice.title}</span>
              </div>
              <div className="space-y-1 text-sm text-slate-300 pl-7 font-normal">
                <p className="font-semibold text-white">{siteContent.company.registeredOffice.address}</p>
                <p>{siteContent.company.registeredOffice.region}</p>
                <div className="pt-2">
                  <span className="inline-block px-2.5 py-1 rounded bg-white/[0.06] border border-white/10 text-xs font-mono font-bold text-brand-cyan">
                    CIN: {siteContent.company.cin}
                  </span>
                </div>
              </div>
            </div>

            {/* UK Desk Card */}
            <div className="glass-panel-dark rounded-3xl p-6 border border-white/12 shadow-lg space-y-3">
              <div className="flex items-center gap-2.5 text-white font-heading font-bold text-lg">
                <MapPin className="w-5 h-5 text-brand-cyan" />
                <span>{siteContent.company.ukOffice.title}</span>
              </div>
              <div className="space-y-1 text-sm text-slate-300 pl-7 font-normal">
                <p className="font-semibold text-white">{siteContent.company.ukOffice.address}</p>
                <p>{siteContent.company.ukOffice.region}</p>
              </div>
            </div>

            {/* Direct Contacts Card */}
            <div className="glass-panel-dark rounded-3xl p-6 border border-white/12 shadow-lg space-y-4">
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
                Direct Communication Lines
              </h4>

              <a
                href={`tel:${siteContent.company.registeredOffice.phoneTel}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group p-2 rounded-2xl hover:bg-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Primary Helpline (Kavali / Nellore)</p>
                  <p className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-brand-cyan transition-colors">{siteContent.company.registeredOffice.phone}</p>
                </div>
              </a>

              <a
                href={`tel:${siteContent.company.registeredOffice.altPhoneTel}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group p-2 rounded-2xl hover:bg-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Secondary Line / WhatsApp Desk</p>
                  <p className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-brand-cyan transition-colors">{siteContent.company.registeredOffice.altPhone}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteContent.company.registeredOffice.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group p-2 rounded-2xl hover:bg-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Official Email Enquiries</p>
                  <p className="text-sm font-mono font-bold text-white group-hover:text-brand-cyan transition-colors">{siteContent.company.registeredOffice.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300 pt-3 border-t border-white/10 px-2">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Business Operating Hours</p>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">{siteContent.company.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Enquiry Form */}
          <div className="lg:col-span-7 glass-panel-dark rounded-3xl p-7 sm:p-10 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Initiate a Staffing Consultation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
              Specify your hiring timeline, required skill sets, and team scale. An experienced talent advisor at Nive Smart Developers will respond promptly.
            </p>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0.001, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0.001 }}
                  className="mb-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2"
                >
                  <div className="flex items-center gap-2 font-heading font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Message Received!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Thank you for contacting Nive Smart Developers Pvt. Ltd. A dedicated recruitment specialist will review your requirements and respond within 4 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono font-bold text-emerald-400 underline pt-1 block"
                  >
                    Send another consultation request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Ramesh Reddy"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-white/[0.04] focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1 font-mono">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ramesh@company.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-white/[0.04] focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98493 32868"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-white/[0.04] focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1 font-mono">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Subject / Nature of Inquiry
                </label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 text-sm text-white bg-[#0D1429] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all"
                >
                  <option value="Staffing Consultation">Employer Staffing / Hiring Requirement</option>
                  <option value="Senior Executive Search">Senior Executive Search / Headhunting</option>
                  <option value="Contract Placement">Long-Term Contract Workforce</option>
                  <option value="General Inquiry">Candidate &amp; General Partnership Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Message / Role Details <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about the roles you are hiring for, required skill sets, team scale, or questions..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-white/[0.04] focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1 font-mono">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-ai-glow w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white font-heading font-bold text-sm shadow-glow-blue hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-70 active:scale-[0.98]"
              >
                {isSubmitting ? <span className="font-mono">Transmitting Consultation...</span> : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Staffing Consultation</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Kavali Registered Office Interactive Map */}
        <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 border border-white/12 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-brand-cyan font-mono font-semibold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Registered Corporate Location</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                Kavali, Nellore District, Andhra Pradesh
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-mono">
                6-31-6B, Vaikuntapuram, Revenue Ward No. 8, Kavali, Nellore – 524201, A.P, India
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Kavali,+Nellore,+Andhra+Pradesh+524201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan hover:text-[#070B1A] text-xs font-mono font-semibold transition-colors self-start sm:self-auto"
            >
              <span>Open in Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Nive Smart Developers Kavali Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.275522718742!2d79.9806283!3d14.9138407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b64f9cb798ceb%3A0x6b1cfb69e5d48721!2sKavali%2C%20Andhra%20Pradesh%20524201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
