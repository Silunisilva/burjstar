import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Building, 
  HardHat, 
  Clock, 
  ArrowUpRight,
  Sparkles,
  Compass,
  Layers
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

export default function About({ onOpenQuoteModal }) {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      desc: "Upfront itemized pricing, certified material specifications, and zero hidden costs. We build enduring trust with our clients."
    },
    {
      icon: Award,
      title: "Engineering Excellence",
      desc: "Every project is overseen by qualified UAE-licensed engineers who enforce uncompromising architectural standards."
    },
    {
      icon: Clock,
      title: "Speed & 24/7 Reliability",
      desc: "Meeting strict project milestones and guaranteeing a 60-minute emergency breakdown response across all Abu Dhabi zones."
    },
    {
      icon: Heart,
      title: "Client-Centric Care",
      desc: "Tailoring every AMC and turnkey contracting scope to the exact requirements, scale, and budget of the property owner."
    }
  ];

  const milestones = [
    { year: "2010", title: "Inception in Abu Dhabi", desc: "Started as a specialized MEP & HVAC technical contracting unit in Mussafah Industrial Area." },
    { year: "2016", title: "General Civil Contracting", desc: "Obtained Abu Dhabi Municipality civil classification for luxury villa and commercial building works." },
    { year: "2019", title: "Total Facility Management & AMC", desc: "Launched 24/7 dedicated residential compound and commercial tower AMC divisions." },
    { year: "2024", title: "450+ Landmark Deliveries", desc: "Managing premier luxury properties across Saadiyat, Yas Island, Reem, and Greater Abu Dhabi." }
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans">
      <SEO 
        title="About Us | Architecture, Construction & Maintenance Abu Dhabi"
        description="Learn about Burj Star Abu Dhabi. Over 15 years of excellence in civil contracting, luxury villa construction, MEP maintenance, and facility management."
      />

      {/* ========================================================================= */}
      {/* 1. PAGE HERO                                                              */}
      {/* ========================================================================= */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden border-b border-neutral-200">
        
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=2400&q=80"
            alt="Burj Star Abu Dhabi Engineering"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="flex items-start gap-8 sm:gap-12">
            
            {/* Left Vertical Architectural Indicator */}
            <div className="hidden sm:flex flex-col items-center justify-between h-56 py-1 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89828]"></span>
              <div className="w-[1px] h-full bg-gradient-to-b from-[#D89828] via-neutral-600 to-[#D89828] my-2"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89828]"></span>
            </div>

            <div className="max-w-3xl text-left animate-fade-up">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D89828] mb-4 flex items-center gap-2">
                <span>ABOUT BURJ STAR ABU DHABI</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.15] mb-6">
                Building Quality. Preserving Value. <br />
                <span className="font-serif italic font-medium text-gold-gradient">Engineering Excellence.</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-sans max-w-2xl font-light">
                Burj Star is an established Abu Dhabi contractor recognized for technical mastery, transparent project management, and unwavering 24/7 property care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. COMPANY OVERVIEW (Warm-White Architectural Layout)                      */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5] text-neutral-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B57C1C] mb-3">
                OUR LEGACY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 leading-[1.2] mb-6">
                Over 15 Years of Technical Mastery in <br />
                <span className="font-serif italic font-medium text-[#946317]">Abu Dhabi's Built Environment</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed mb-5 font-normal">
                Headquartered in Abu Dhabi, {COMPANY_INFO.name} was established with a clear mandate: to provide high-caliber, engineering-grade construction and building maintenance services that property owners can rely on without hesitation.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-8">
                Whether executing a complex structural villa expansion, upgrading a commercial chiller plant, or delivering 24/7 responsive facility maintenance, our teams operate with rigorous QA/QC protocols and strict compliance with Abu Dhabi Municipality codes.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-neutral-300">
                {COMPANY_INFO.stats.map((st, i) => (
                  <div key={i} className="text-left">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#946317] block">{st.value}</span>
                    <span className="text-[11px] text-neutral-600 font-sans block mt-1">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Architectural Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-300 group">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                  alt="Architects on Site Abu Dhabi"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-900 flex items-center justify-between shadow-lg">
                  <div>
                    <h4 className="text-sm font-serif font-bold text-neutral-900">Full In-House Engineering Fleet</h4>
                    <p className="text-xs text-neutral-600">Over 95+ certified engineers & technicians across UAE</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#D89828] flex items-center justify-center text-black font-bold shrink-0 shadow-sm">
                    <HardHat className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MISSION, VISION & CORE VALUES                                          */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white text-neutral-900 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <SectionHeading
            badge="Our Guiding Principles"
            title="Mission, Vision & Core Values"
            theme="light"
            description="The pillars that define our daily operations, engineering decisions, and client relationships across the UAE."
          />

          {/* Mission & Vision 2-Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <div className="bg-[#F8FAFC] border border-neutral-200 hover:border-[#D89828] rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#D89828]/20 border border-[#D89828]/50 flex items-center justify-center text-[#B57C1C] mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                To deliver world-class construction contracting and total property lifecycle maintenance across Abu Dhabi by combining technical innovation, strict safety compliance, transparent pricing, and rapid on-the-ground execution.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-neutral-200 hover:border-[#D89828] rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#D89828]/20 border border-[#D89828]/50 flex items-center justify-center text-[#B57C1C] mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                To be Abu Dhabi's foremost trusted general contractor and facility maintenance brand, recognized for elevating property value, ensuring sustainable energy efficiency, and setting benchmarks in client satisfaction.
              </p>
            </div>

          </div>

          {/* 4 Core Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-[#F8FAFC] p-6 rounded-2xl border border-neutral-200 hover:border-[#D89828]/60 transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-[#B57C1C] mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-neutral-900 mb-2">{val.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GROWTH & MILESTONES (Warm-White Architectural Layout)                   */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5] text-neutral-900 relative border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <SectionHeading
            badge="Our Journey"
            title="Growth & Milestones"
            theme="light"
            description="A consistent track record of expanding engineering capabilities and delivering on landmark UAE projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-sm relative group hover:border-[#D89828] transition-colors">
                <span className="text-3xl font-serif font-bold text-[#946317] block mb-2">{m.year}</span>
                <h4 className="text-base font-serif font-bold text-neutral-900 mb-2">{m.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SERVICE COVERAGE MAP                                                   */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white text-neutral-900 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#946317] mb-3 block">
                GEOGRAPHIC REACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4 leading-tight">
                Serving All Prime Zones in <br />
                <span className="text-gold-gradient">Abu Dhabi & UAE</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                Our fleet of mobile technical response units are deployed throughout key hubs in the emirate, ensuring rapid on-site arrival for both planned visits and emergency call-outs.
              </p>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#D89828] text-black flex items-center justify-center shrink-0 font-bold shadow-xs">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-neutral-900">Average 60-Minute Response Time</h4>
                  <p className="text-xs text-neutral-600">Guaranteed in all primary Abu Dhabi mainland & island zones</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {COMPANY_INFO.serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-neutral-200 hover:border-[#D89828]/50 text-xs sm:text-sm text-neutral-800 transition-colors shadow-xs">
                    <MapPin className="w-4 h-4 text-[#B57C1C] shrink-0" />
                    <span className="font-medium font-sans">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION                                                         */}
      {/* ========================================================================= */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4">
          Ready to Partner with Burj Star?
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-8 font-normal">
          Get in touch with our engineering directors to discuss your upcoming construction project or request a competitive AMC contract quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-gold-sm hover:shadow-gold-glow"
          >
            Request a Consultation
          </button>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
