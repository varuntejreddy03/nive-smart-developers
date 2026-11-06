export interface IndustrySector {
  id: string;
  name: string;
  desc: string;
  iconName: string;
  roles: string[];
}

export interface EngagementModel {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface CorePrinciple {
  title: string;
  desc: string;
  iconName: string;
}

export const siteContent = {
  company: {
    name: "Nive Smart Developers",
    legalName: "Nive Smart Developers Pvt. Ltd.",
    cin: "U68100AP2025PTC121779",
    subtitle: "Strategic Workforce Solutions, Executive Search & Talent Advisory",
    tagline: "Empowering Enterprises. Inspiring Careers. Delivering Excellence.",
    description: "Connecting forward-thinking enterprises with top-tier talent. Premier recruitment consultancy and executive search firm specializing in IT, Engineering, Healthcare, Finance, and Enterprise Operations.",
    registeredOffice: {
      title: "Registered Corporate Office",
      address: "6-31-6B, Vaikuntapuram, Revenue Ward No. 8",
      region: "Kavali, Nellore – 524201, Andhra Pradesh, India",
      cin: "U68100AP2025PTC121779",
      phone: "+91 83175 66125",
      phoneTel: "+918317566125",
      altPhone: "+91 98493 32868",
      altPhoneTel: "+919849332868",
      email: "niveinfo99@gmail.com",
    },
    ukOffice: {
      title: "United Kingdom & International Desk",
      address: "Arthur Street, Luton, LU1 3SG",
      region: "Bedfordshire, United Kingdom",
      phone: "+44 7466 929441",
      phoneTel: "+447466929441",
      email: "niveinfo99@gmail.com",
    },
    whatsappUrl: "https://wa.me/918317566125?text=Hi%2C%20I%20would%20like%20to%20discuss%20workforce%20solutions%20with%20Nive%20Smart%20Developers.",
    hours: "Monday – Friday: 9:00 AM – 6:00 PM | Saturday: 9:00 AM – 1:00 PM IST",
    socials: {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
    },
    copyright: "© 2026 Nive Smart Developers Pvt. Ltd. All rights reserved. CIN: U68100AP2025PTC121779.",
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ],

  hero: {
    badge: "Premier Talent Solutions & Executive Search",
    headlinePart1: "Empowering Enterprises with",
    headlineHighlight: "Exceptional Talent",
    lead: "Nive Smart Developers Pvt. Ltd. delivers precision-driven talent acquisition and workforce solutions across IT, Engineering, Healthcare, Finance, and Enterprise Management. We act as your strategic hiring ally, matching vetted professionals who accelerate organizational success.",
    tagline: "Empowering Enterprises. Inspiring Careers. Delivering Excellence.",
    ctaPrimary: "Hire Top Talent",
    ctaSecondary: "Submit Your CV",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
  },

  stats: [
    { value: "650+", label: "Successful Placements", sub: "Across Domestic & Global Enterprise Hubs" },
    { value: "99%", label: "Client Retention Rate", sub: "Trusted recurring talent partnerships" },
    { value: "24-48h", label: "Shortlist Turnaround", sub: "Rapid delivery of pre-screened candidate dossiers" },
    { value: "7+", label: "Specialized Practices", sub: "Domain-focused recruitment consultants" },
  ],

  industries: [
    {
      id: "it-technology",
      name: "Information Technology & Software",
      desc: "Full-Stack Engineering, Cloud Architecture, Cybersecurity & Enterprise ERP",
      iconName: "Cpu",
      roles: [
        "Software Architects & Full-Stack Developers",
        "Cloud Solutions Architects (AWS, Azure, GCP)",
        "DevOps & Site Reliability Engineers",
        "SAP & Oracle Enterprise Consultants",
        "Data Engineers, Scientists & Analytics Leads",
        "Cybersecurity Specialists & SOC Analysts",
        "AI / Machine Learning Engineers",
        "Product Managers & Technical Business Analysts",
        "Quality Assurance & Test Automation Engineers",
        "Database Administrators & Data Warehouse Specialists",
        "IT Infrastructure & Network Engineers",
        "Enterprise IT Support & Systems Administrators"
      ],
    },
    {
      id: "engineering",
      name: "Engineering & Technical Infrastructure",
      desc: "Mechanical, Electrical, Industrial, Civil & Automation Specialists",
      iconName: "Wrench",
      roles: [
        "Mechanical & Design Engineers",
        "Electrical & Electronics Specialists",
        "Automation, PLC & Robotics Engineers",
        "Civil & Structural Project Engineers",
        "Industrial Process & Quality Assurance Leads",
        "CAD / CAM Modeling Specialists",
        "Plant Operations & Maintenance Managers"
      ],
    },
    {
      id: "healthcare",
      name: "Healthcare & Life Sciences",
      desc: "Clinical Operations, Hospital Administration, Biotech & Allied Healthcare Staff",
      iconName: "Stethoscope",
      roles: [
        "Hospital & Healthcare Facility Administrators",
        "Clinical Research Associates & Coordinators",
        "Medical Records & Health Informatics Leads",
        "Allied Health & Diagnostics Specialists",
        "Healthcare Quality, Safety & Compliance Officers",
        "Pharmaceutical Regulatory Affairs Specialists"
      ],
    },
    {
      id: "finance-accounting",
      name: "Banking, Finance & Accounting",
      desc: "Corporate Controllers, Financial Analysts, Tax Advisors & Risk Officers",
      iconName: "TrendingUp",
      roles: [
        "Financial Controllers & VP Finance",
        "Senior FP&A Analysts & Corporate Modelers",
        "Statutory & Internal Audit Specialists",
        "Tax Consultants & Regulatory Compliance Leads",
        "Treasury & Cash Management Officers",
        "Payroll Operations & Billing Managers"
      ],
    },
    {
      id: "administration",
      name: "Corporate Operations & Administration",
      desc: "Executive Assistants, HR Leaders, Facilities & Office Management",
      iconName: "Briefcase",
      roles: [
        "Executive Assistants & C-Suite Chiefs of Staff",
        "Human Resources Business Partners (HRBP)",
        "Talent Acquisition & People Operations Leads",
        "Corporate Facilities & Workplace Managers",
        "Document Control & Compliance Coordinators",
        "Corporate Administrative Managers"
      ],
    },
    {
      id: "customer-service",
      name: "Customer Experience & Client Relations",
      desc: "Customer Success Leads, Contact Center Supervisors & Helpdesk Experts",
      iconName: "Headphones",
      roles: [
        "Customer Success Managers (CSM)",
        "Call Center Operations & Team Supervisors",
        "Client Relationship & Key Account Managers",
        "Tier-2 & Tier-3 Technical Helpdesk Specialists",
        "Customer Experience (CX) Strategists",
        "Service Delivery & Client Retention Leads"
      ],
    },
    {
      id: "other-specialist",
      name: "Supply Chain, Legal & Specialized Practices",
      desc: "Procurement Officers, Logistics Directors, Legal Counsel & Custom Engagements",
      iconName: "Layers",
      roles: [
        "Supply Chain & Global Logistics Coordinators",
        "Strategic Sourcing & Vendor Procurement Managers",
        "Corporate Legal Counsel & Contract Specialists",
        "Corporate Communications & Brand Managers",
        "Bespoke Workforce & Project Engagements"
      ],
    }
  ] as IndustrySector[],

  methodology: [
    {
      number: "01",
      title: "Strategic Discovery",
      subtitle: "Intelligent Market Mapping & Headhunting",
      description: "We deploy specialized talent intelligence tools, passive candidate networks, and deep sector contacts to pinpoint exceptional professionals aligned precisely with your mandate.",
      iconName: "Search",
      badge: "Targeted Sourcing",
    },
    {
      number: "02",
      title: "Rigorous Screening",
      subtitle: "Multi-Tiered Credential & Background Audit",
      description: "Our sector-specific consultants carry out extensive technical screenings, employment verification, qualifications auditing, and right-to-work compliance before any CV reaches you.",
      iconName: "FileCheck",
      badge: "Quality Guaranteed",
    },
    {
      number: "03",
      title: "Holistic Assessment",
      subtitle: "Competency Benchmarking & Culture Alignment",
      description: "We evaluate candidates against both functional prerequisites and your company culture, leadership philosophy, problem-solving style, and long-term retention goals.",
      iconName: "BarChart3",
      badge: "360° Evaluation",
    },
    {
      number: "04",
      title: "Precision Delivery",
      subtitle: "Curated Shortlists & Onboarding Advisory",
      description: "You receive 3 to 5 premier candidate dossiers complete with consultant interview appraisals, compensation benchmarks, and structured coordination through offer acceptance.",
      iconName: "Users",
      badge: "High-Impact Placement",
    },
  ] as MethodologyStep[],

  engagementModels: [
    {
      title: "Direct Hire & Permanent Staffing",
      subtitle: "Building resilient core teams for sustained organizational expansion",
      badge: "Core Workforce Solutions",
      description: "Designed for expanding organizations requiring high-performing permanent team members. We manage the full candidate acquisition cycle from proactive outreach to offer acceptance and retention assurance.",
      features: [
        "In-depth market compensation benchmarking and talent availability analytics",
        "Full-cycle recruitment management and candidate pipeline nurturing",
        "Rigorous behavioral, technical, and cultural suitability assessment",
        "Transparent fee architecture backed by replacement guarantee periods",
        "Comprehensive educational, employment, and credentials verification"
      ],
      iconName: "UserCheck",
    },
    {
      title: "Executive Search & Leadership Advisory",
      subtitle: "Discreet headhunting for CXO, Director, and Principal Specialist appointments",
      badge: "Executive Advisory",
      description: "Crafted specifically for mission-critical senior leadership and niche architectural roles where precision, discretion, and deep industry relationship networks are imperative.",
      features: [
        "Confidential, targeted headhunting of proven industry leaders",
        "Custom leadership profile mapping and executive competency scoring",
        "Deep technical and strategic evaluations conducted by domain specialists",
        "Cross-border talent relocation and mobility advisory support",
        "Direct partner-led engagement throughout the executive search lifecycle"
      ],
      iconName: "Award",
    }
  ] as EngagementModel[],

  aboutValues: [
    {
      title: "Uncompromising Integrity",
      desc: "We prioritize total honesty in candidate representation, market salary benchmarks, and hiring realistic timelines. Clear, authentic guidance at every phase.",
      iconName: "ShieldCheck",
    },
    {
      title: "Sector-Specific Precision",
      desc: "We avoid flooding inboxes with generic resumes. Our dedicated domain recruiters deliver pre-screened professionals who exceed your technical requirements.",
      iconName: "Target",
    },
    {
      title: "Human-Centric Stewardship",
      desc: "Candidates and clients are valued partners. We offer mentorship, constructive feedback, and professional respect throughout the talent acquisition experience.",
      iconName: "Heart",
    },
    {
      title: "Agile Execution & Speed",
      desc: "Speed to hire is essential in competitive talent markets. Our lean, technology-enabled sourcing workflows deliver vetted shortlists in days, not weeks.",
      iconName: "Zap",
    },
  ] as CorePrinciple[],

  candidateValueProps: [
    {
      title: "Personalized Career Coaching",
      desc: "We guide you through resume optimization, interview preparation, and compensation negotiations, ensuring your strengths are highlighted to senior decision-makers.",
      iconName: "Compass",
    },
    {
      title: "Access to Unadvertised Mandates",
      desc: "Gain privileged access to high-impact career opportunities across India and international markets that are exclusively managed by Nive Smart Developers.",
      iconName: "Lock",
    },
    {
      title: "Transparent & Timely Updates",
      desc: "No radio silence. You receive honest recruiter feedback, clear status timelines, and proactive career consultation at every juncture.",
      iconName: "MessageSquare",
    },
  ],

  ctaBanner: {
    badge: "Accelerate Your Hiring Goals",
    title: "Ready to Transform Your Talent Strategy?",
    subtitle: "Whether you require permanent specialist appointments, contract experts, or senior executive leadership, Nive Smart Developers provides bespoke recruitment solutions driven by deep domain mastery.",
    ctaPrimary: "Connect with Our Talent Team",
    ctaSecondary: "Chat on WhatsApp",
  }
};
