import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  CheckCircle2,
  FileText,
  Compass,
  Lock,
  MessageSquare,
  X,
  Send,
  Sparkles,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { siteContent } from '../data/content';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  Lock,
  MessageSquare,
};

export const CareersPage: React.FC = () => {
  useEffect(() => {
    document.title = "Career Hub & Submit CV | Nive Smart Developers";
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    industry: 'Information Technology & Software',
    desiredRole: '',
    coverMessage: '',
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!cvFile) errs.cv = 'Please attach your CV/Resume';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCvFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({
        fullName: '',
        email: '',
        phone: '',
        industry: 'Information Technology & Software',
        desiredRole: '',
        coverMessage: '',
      });
      setCvFile(null);
    }, 1200);
  };

  return (
    <div className="space-y-0 pb-16 overflow-x-hidden bg-[#070B1A]">
      {/* Page Header */}
      <PageHeader
        badge="Candidate Advisory &amp; Opportunities"
        title="Career Hub &amp; Talent Registry"
        subtitle="Connect with our executive search specialists for exclusive direct-hire opportunities with leading employers across India and international markets."
        breadcrumb="Career Hub"
      />

      <section className="py-16 lg:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Value Props & Recruiter Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-cyan bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Candidate Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
              Elevate Your Career with{' '}
              <span className="bg-gradient-to-r from-brand-cyan via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Whether you are a seasoned software architect, an experienced clinical administrator, a financial analyst, or a specialized engineer, registering your CV gives you direct access to the senior talent advisors at <strong className="text-white">Nive Smart Developers Pvt. Ltd.</strong>
            </p>

            {/* Recruiter Call Photo */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src="/images/recruiter_call.jpg"
                alt="Talent Advisor Video Consultation"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                  Personalized Advisory
                </span>
                <p className="text-xs text-slate-200">1-on-1 confidential executive career consultation</p>
              </div>
            </div>

            <div className="space-y-3.5 pt-2">
              {siteContent.candidateValueProps.map((item) => {
                const Icon = iconMap[item.iconName] || Compass;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl glass-panel-dark border border-white/10 flex items-start gap-4 hover:border-brand-cyan/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan text-white flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: CV Submission Glass Form */}
          <div className="lg:col-span-7 glass-panel-dark rounded-3xl p-7 sm:p-10 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Submit Your Candidate Profile
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
              Upload your resume and outline your domain expertise. Our practice leads review every profile confidentially within 24 to 48 hours.
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
                    <span>Profile Successfully Submitted!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Thank you for registering with Nive Smart Developers. A lead recruitment specialist will review your CV and reach out when matching mandates emerge.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono font-bold text-emerald-400 underline pt-1 block"
                  >
                    Submit another CV
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
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="e.g. Ramesh Reddy"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-white/[0.04] focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-400 mt-1 font-mono">{errors.fullName}</p>}
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
                    placeholder="ramesh@example.com"
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
                    placeholder="+91 83175 66125"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-white bg-white/[0.04] focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1 font-mono">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Domain Practice
                  </label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 text-sm text-white bg-[#0D1429] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all"
                  >
                    <option value="Information Technology & Software">Information Technology &amp; Software</option>
                    <option value="Engineering & Technical Infrastructure">Engineering &amp; Technical Infrastructure</option>
                    <option value="Healthcare & Life Sciences">Healthcare &amp; Life Sciences</option>
                    <option value="Banking, Finance & Accounting">Banking, Finance &amp; Accounting</option>
                    <option value="Corporate Operations & Administration">Corporate Operations &amp; Administration</option>
                    <option value="Customer Experience & Client Relations">Customer Experience &amp; Client Relations</option>
                    <option value="Other Specialist Roles">Other Specialist Roles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Desired Role / Title
                  </label>
                  <input
                    type="text"
                    value={form.desiredRole}
                    onChange={(e) => setForm({ ...form, desiredRole: e.target.value })}
                    placeholder="e.g. Cloud Solutions Architect"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 text-sm text-white bg-white/[0.04] focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all"
                  />
                </div>
              </div>

              {/* Drag and Drop File Upload Area */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Upload Resume / CV <span className="text-brand-orange">*</span>
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                    dragActive
                      ? 'border-brand-cyan bg-brand-cyan/10'
                      : errors.cv
                      ? 'border-red-500/80 bg-red-500/5'
                      : 'border-white/15 bg-white/[0.02] hover:border-brand-cyan/40'
                  }`}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {cvFile ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="w-7 h-7 text-brand-cyan" />
                      <div className="text-left">
                        <p className="text-sm font-mono font-semibold text-white">{cvFile.name}</p>
                        <p className="text-[10px] font-mono text-slate-400">
                          {(cvFile.size / 1024 / 1024).toFixed(2)} MB &bull; Click to replace
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                      <p className="text-xs text-slate-300">
                        <span className="font-bold text-brand-cyan">Click to browse</span> or drag and drop your file here
                      </p>
                      <p className="text-[10px] font-mono text-slate-400">PDF, DOC, DOCX (Max 10MB)</p>
                    </div>
                  )}
                </div>
                {errors.cv && <p className="text-xs text-red-400 mt-1 font-mono">{errors.cv}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Cover Message / Summary
                </label>
                <textarea
                  rows={3}
                  value={form.coverMessage}
                  onChange={(e) => setForm({ ...form, coverMessage: e.target.value })}
                  placeholder="Tell us briefly about your current notice period, salary expectations, or preferred locations..."
                  className="w-full px-4 py-3 rounded-xl border border-white/10 text-sm text-white bg-white/[0.04] focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-ai-glow w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white font-heading font-bold text-sm shadow-glow-blue hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-70 active:scale-[0.98]"
              >
                {isSubmitting ? <span className="font-mono">Uploading &amp; Registering...</span> : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Candidate Profile</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};
