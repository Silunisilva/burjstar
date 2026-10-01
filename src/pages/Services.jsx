import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  ArrowUpRight, 
  ShieldCheck, 
  FileText, 
  MessageSquare, 
  PhoneCall, 
  CheckCircle2, 
  ChevronDown,
  ArrowRight,
  X
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../data/services';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

export default function Services({ onOpenQuoteModal, onSelectService }) {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const serviceId = searchParams.get('id');
    if (serviceId) {
      const match = SERVICES.find(s => s.id === serviceId);
      if (match) {
        onSelectService(match);
      }
    }
  }, [searchParams, onSelectService]);

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return SERVICES;
    const q = searchQuery.toLowerCase().trim();
    return SERVICES.filter((srv) => {
      return (
        srv.title.toLowerCase().includes(q) ||
        srv.shortDesc.toLowerCase().includes(q) ||
        (srv.fullDesc && srv.fullDesc.toLowerCase().includes(q)) ||
        (srv.features && srv.features.some(f => f.toLowerCase().includes(q))) ||
        (srv.popularFor && srv.popularFor.some(p => p.toLowerCase().includes(q)))
      );
    });
  }, [searchQuery]);

  const faqs = [
    {
      q: "Are your engineers and technicians certified to execute projects in Abu Dhabi?",
      a: "Yes, 100%. All our engineers, supervisors, and technicians hold valid certifications and work in strict compliance with Abu Dhabi Municipality (DMT), Abu Dhabi Distribution Company (ADDC), and Civil Defense regulations."
    },
    {
      q: "Do you handle municipality permits, approvals, and NOCs for contracting works?",
      a: "Yes. For structural modifications, civil extensions, MEP installations, and interior fit-outs, our engineering department coordinates all required DMT submissions, structural drawings, and municipal NOC permits."
    },
    {
      q: "Do you provide turnkey interior design and custom joinery/cabinetry?",
      a: "Absolutely. We manage everything from 3D conceptual modeling and material selection to custom aluminum & wooden cabinet manufacturing, countertop fabrication, lighting, and final handover."
    },
    {
      q: "Where can I find Burj Star's Annual Maintenance Contract (AMC) packages?",
      a: "All our residential villa and commercial Annual Maintenance Contracts (AMC), including 6 BHK Villa and 4 BHK / 3 BHK+MR apartment tiers, are hosted on our dedicated AMC page."
    }
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans">
      <SEO 
        title="Services & Capabilities | 16 Specialized Works in Abu Dhabi | Burj Star"
        description="Explore all 16 specialized construction, MEP, HVAC, civil, and property maintenance services offered by Burj Star in Abu Dhabi."
      />

      {/* ========================================================================= */}
      {/* 1. PAGE HERO (Dark Architectural Hero with Editorial Heading)             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden border-b border-neutral-200">
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
            alt="Engineering & Maintenance Services Abu Dhabi"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="flex items-start gap-8 sm:gap-12">
            
            <div className="hidden sm:flex flex-col items-center justify-between h-52 py-1 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89828]"></span>
              <div className="w-[1px] h-full bg-gradient-to-b from-[#D89828] via-neutral-600 to-[#D89828] my-2"></div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89828]"></span>
            </div>

            <div className="max-w-4xl text-left animate-fade-up">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D89828] mb-4 flex items-center gap-2">
                <span>16 SPECIALIZED SERVICE DISCIPLINES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.15] mb-6">
                Our Construction & <br />
                <span className="font-serif italic font-medium text-gold-gradient">Property Maintenance Services</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-sans max-w-3xl font-light">
                Delivering specialized civil contracting, HVAC & chiller maintenance, MEP engineering, and total facility care across Abu Dhabi with strict municipal compliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES SEARCH & FULL-WIDTH 16 CARDS GRID                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        
        {/* Sleek Full-Width Search Header Bar */}
        <div className="bg-[#F8FAFC] border border-neutral-200 rounded-2xl p-4 sm:p-6 mb-12 shadow-sm flex flex-col sm:row gap-4 items-center justify-between">
          
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D89828] animate-pulse"></span>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900">
                All Engineering & Maintenance Disciplines
              </h2>
              <p className="text-xs text-neutral-500">
                {searchQuery ? `Showing ${filteredServices.length} of ${SERVICES.length} services` : `Showing all ${SERVICES.length} comprehensive services`}
              </p>
            </div>
          </div>

          {/* Search Input Box */}
          <div className="relative w-full sm:w-96 shrink-0">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. AC, Electrical, Civil, Painting...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-white border border-neutral-300 rounded-xl text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={onSelectService}
                onQuote={(s) => onOpenQuoteModal(s.title)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-[#F8FAFC] rounded-3xl border border-neutral-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">No matching services found</h3>
            <p className="text-sm text-neutral-600 mb-6">No services matched "{searchQuery}". Try searching for another discipline or reset your query.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-2.5 bg-[#D89828] text-black text-xs font-bold uppercase rounded-xl shadow-gold-sm"
            >
              Clear Search
            </button>
          </div>
        )}

      </section>

      {/* ========================================================================= */}
      {/* 3. DEDICATED AMC PORTAL BANNER (Full-Width)                               */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FBF9F5] text-neutral-900 border-y border-neutral-200 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-md">
            
            <div className="max-w-3xl text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#946317] mb-3 block">
                ANNUAL MAINTENANCE CONTRACTS (AMC)
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-neutral-900 mb-3 leading-tight">
                Looking for 24/7 Annual Maintenance Contracts?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Visit our dedicated AMC section for structured 6 BHK Villa, 4 BHK, and 3 BHK+MR apartment packages featuring quarterly preventive visits and 60-minute rapid emergency SLAs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/amc"
                className="px-6 py-3.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore AMC Packages & Rates</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={createWhatsAppUrl("Hello Burj Star, I would like to inquire about your Annual Maintenance Contract (AMC) packages.")}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp AMC Inquiry</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FAQ ACCORDION                                                          */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Common Questions About Our"
          titleHighlight="Contracting Works"
          description="Everything you need to know about our municipal compliance, project timelines, and contracting standards."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-neutral-200 rounded-2xl overflow-hidden transition-colors shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-serif font-bold text-neutral-900">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#B57C1C] transition-transform duration-300 shrink-0 ${
                  openFaq === idx ? 'rotate-180' : ''
                }`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200 font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}


