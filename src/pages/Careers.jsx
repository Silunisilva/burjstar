import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp, 
  Shield, 
  Award, 
  Users, 
  Mail, 
  MessageSquare,
  Sparkles,
  Building2
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import JobApplyModal from '../components/JobApplyModal';
import { COMPANY_PERKS, JOB_OPENINGS } from '../data/careers';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

const PERK_ICONS = {
  TrendingUp,
  Shield,
  Award,
  Users
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="bg-white text-neutral-900 font-sans">
      <SEO 
        title="Careers & Engineering Opportunities | Burj Star Abu Dhabi"
        description="Join Burj Star Construction & Property Maintenance. Explore open civil engineering, MEP technician, and estimation jobs in Abu Dhabi."
      />

      {/* ========================================================================= */}
      {/* 1. PAGE HERO (Dark Architectural Hero with Editorial Heading)             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden border-b border-neutral-200">
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
            alt="Burj Star Engineering Careers in Abu Dhabi"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="flex items-start gap-8 sm:gap-12">
            
            <div className="hidden sm:flex flex-col items-center justify-between h-56 py-1 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89828]"></span>
              <div className="w-[1px] h-full bg-gradient-to-b from-[#D89828] via-neutral-400 to-[#D89828] my-2"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89828]"></span>
            </div>

            <div className="max-w-3xl text-left animate-fade-up">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D89828] mb-4 flex items-center gap-2">
                <span>CAREER OPPORTUNITIES • JOIN OUR TEAM</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.15] mb-6">
                Build Landmark Spaces With <br />
                <span className="font-serif italic font-medium text-gold-gradient">Abu Dhabi's Elite Engineers</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-sans max-w-2xl font-light">
                Discover rewarding career opportunities across civil engineering, MEP systems, high-end interior joinery, and facility asset management.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PERKS & WHY GROW WITH US (Light Theme Background)                      */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white text-neutral-900 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <SectionHeading
            badge="Engineering Careers"
            title="Why Grow Your Career"
            titleHighlight="With Burj Star?"
            theme="light"
            description="We invest in our engineering workforce through continuous technical training, competitive UAE compensation, and clear leadership pathways."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {COMPANY_PERKS.map((perk, idx) => {
              const Icon = PERK_ICONS[perk.icon] || Award;
              return (
                <div
                  key={idx}
                  className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#D89828] transition-colors shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-neutral-300 flex items-center justify-center text-[#B57C1C] mb-5 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-neutral-900 mb-2.5">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Open Positions List */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-8 border-l-4 border-[#D89828] pl-4">
              Current Openings in Abu Dhabi
            </h3>

            <div className="space-y-6">
              {JOB_OPENINGS.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border-2 border-neutral-200 hover:border-[#D89828] rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-200">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#D89828]/15 text-[#946317] border border-[#D89828]/30">
                          {job.department}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700">
                          {job.type}
                        </span>
                        <span className="text-xs text-neutral-600 flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#B57C1C]" />
                          {job.location}
                        </span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900">
                        {job.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="px-6 py-3 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow-md self-start lg:self-auto shrink-0 flex items-center gap-2"
                    >
                      <span>Apply for Role</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Specs */}
                  <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B57C1C]" />
                        Key Requirements
                      </h5>
                      <ul className="space-y-2 text-xs text-neutral-600 font-normal">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#B57C1C] font-bold">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-[#B57C1C]" />
                        Core Responsibilities
                      </h5>
                      <ul className="space-y-2 text-xs text-neutral-600 font-normal">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#B57C1C] font-bold">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* General Resume Drop Section */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4 bg-[#F8FAFC] rounded-3xl border border-neutral-200 my-16 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-2">
          Don't See Your Exact Role?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed font-normal">
          We are always looking for exceptional civil engineers, MEP technicians, and project managers. Send your CV directly to our HR team for future openings.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${COMPANY_INFO.careersEmail}?subject=General%20Engineering%20Application%20-%20Abu%20Dhabi`}
            className="px-6 py-3.5 border-2 border-neutral-300 hover:border-neutral-900 bg-white text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Mail className="w-4 h-4 text-[#B57C1C]" />
            <span>Email CV: {COMPANY_INFO.careersEmail}</span>
          </a>
          <a
            href={createWhatsAppUrl("Hello Burj Star HR, I am interested in joining your engineering / technician team in Abu Dhabi.")}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp HR Team</span>
          </a>
        </div>
      </section>

      {/* Modals */}
      {selectedJob && (
        <JobApplyModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

    </div>
  );
}
