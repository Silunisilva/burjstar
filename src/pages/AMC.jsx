import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  Phone, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  Building2, 
  Home as HomeIcon, 
  Wrench, 
  Zap, 
  Droplets, 
  Wind, 
  ChevronRight, 
  HelpCircle,
  Award,
  FileCheck,
  Headphones,
  Check,
  X as XIcon,
  Layers,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';
import { AMC_PACKAGES } from '../data/services';

export default function AMC({ onOpenQuoteModal, onSelectService }) {
  const [propertyType, setPropertyType] = useState('villa'); // 'villa' | 'apartment'
  const [selectedApartmentType, setSelectedApartmentType] = useState('apt-4bhk'); // 'apt-4bhk' | 'apt-3bhk-mr'
  const [activeFaq, setActiveFaq] = useState(null);

  // Get active plans based on selections
  const currentCategoryData = AMC_PACKAGES[propertyType];
  const activeTypeData = propertyType === 'villa' 
    ? currentCategoryData.types[0]
    : currentCategoryData.types.find(t => t.id === selectedApartmentType) || currentCategoryData.types[0];

  const plans = activeTypeData.plans;

  const faqs = [
    {
      q: "What is an Annual Maintenance Contract (AMC) in Abu Dhabi?",
      a: "An AMC is a formal annual agreement where Burj Star provides planned preventative maintenance (PPM) and unlimited 24/7 reactive emergency repair services for your HVAC, electrical, plumbing, civil, and specialized systems across Abu Dhabi."
    },
    {
      q: "How fast is the emergency response time under the AMC?",
      a: "Our response SLA ranges from 60 minutes for Premium VIP contracts to 2 hours for Standard contracts and 4 hours for Basic tiers. Our emergency helpdesk operates 24/7/365 across all Abu Dhabi regions."
    },
    {
      q: "Can I customize the services included in my villa or apartment package?",
      a: "Yes. While our 6 BHK Villa, 4 BHK Apartment, and 3 BHK+MR packages provide structured pricing, we can tailor the scope to include swimming pool MEP, specialized elevator maintenance, custom kitchen joinery upkeep, or commercial facilities."
    },
    {
      q: "Are spare parts included in the AMC package price?",
      a: "Routine servicing, labor, inspection checklists, and minor consumables are 100% included. For replacement hardware or major overhauls, Standard and Premium contracts include material discounts (10%-15%) and dedicated annual allowances."
    },
    {
      q: "Are your technicians certified by Abu Dhabi Municipality & ADDC?",
      a: "Yes. All Burj Star engineers and technicians hold official Abu Dhabi Department of Municipalities & Transport (DMT), Civil Defense, and ADDC electrical/plumbing certifications."
    }
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans min-h-screen">
      <SEO 
        title="Annual Maintenance Contracts (AMC) Abu Dhabi | Luxury Villa & Apartment Care | Burj Star"
        description="Official Annual Maintenance Contracts (AMC) in Abu Dhabi. Structured packages for 6 BHK Luxury Villas, 4 BHK & 3 BHK+MR Apartments with 24/7 emergency dispatch."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-neutral-200">
        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D89828]/10 rounded-full blur-[220px] pointer-events-none"></div>

        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10 text-center">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D89828]/15 border border-[#D89828]/50 text-[#946317] text-xs font-black uppercase tracking-[0.25em] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D89828] animate-pulse"></span>
            <span>ANNUAL MAINTENANCE CONTRACTS (AMC)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-neutral-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Annual Maintenance Contract <br />
            <span className="text-gold-gradient italic">Abu Dhabi</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mt-6 font-normal leading-relaxed">
            Zero downtime, certified multi-skilled engineering, and 24/7 rapid emergency dispatch protecting luxury residential and commercial assets across Abu Dhabi.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => onOpenQuoteModal("Annual Maintenance Contract (AMC)")}
              className="px-8 py-4 rounded-xl bg-[#D89828] hover:bg-[#E5AF4D] text-black font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-gold-sm hover:shadow-gold-glow flex items-center gap-2 group"
            >
              <span>Request Custom AMC Proposal</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={createWhatsAppUrl("Hello Burj Star, I would like to inquire about your Annual Maintenance Contract (AMC) packages.")}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 hover:border-[#D89828] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>

          {/* 4 Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14 pt-10 border-t border-neutral-200">
            <div className="flex items-center justify-center gap-2 text-left">
              <Clock className="w-5 h-5 text-[#B57C1C] shrink-0" />
              <div>
                <div className="text-xs font-bold text-neutral-900">60-Min Emergency SLA</div>
                <div className="text-[11px] text-neutral-500">Rapid Abu Dhabi Dispatch</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-left">
              <ShieldCheck className="w-5 h-5 text-[#B57C1C] shrink-0" />
              <div>
                <div className="text-xs font-bold text-neutral-900">DMT & ADDC Certified</div>
                <div className="text-[11px] text-neutral-500">100% Code Compliant</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-left">
              <Wrench className="w-5 h-5 text-[#B57C1C] shrink-0" />
              <div>
                <div className="text-xs font-bold text-neutral-900">Comprehensive Upkeep</div>
                <div className="text-[11px] text-neutral-500">HVAC, MEP & Civil Works</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-left">
              <FileCheck className="w-5 h-5 text-[#B57C1C] shrink-0" />
              <div>
                <div className="text-xs font-bold text-neutral-900">Transparent BOQ</div>
                <div className="text-[11px] text-neutral-500">Zero Hidden Charges</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE PRICING & PACKAGES MATRIX                                 */}
      {/* ========================================================================= */}
      <section id="packages" className="py-20 sm:py-28 bg-[#F8FAFC] relative border-t border-neutral-200">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#946317] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Transparent Annual Plans
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              Tailored AMC <span className="text-gold-gradient italic">Packages</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 font-normal">
              Select your property type below to view transparent yearly maintenance packages. Inclusions can be customized upon inquiry.
            </p>

            {/* Property Type Category Toggle */}
            <div className="inline-flex p-1.5 rounded-2xl bg-neutral-200/80 border border-neutral-300 mt-8 shadow-sm">
              <button
                onClick={() => setPropertyType('villa')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  propertyType === 'villa'
                    ? 'bg-[#D89828] text-black shadow-sm font-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                <HomeIcon className="w-4 h-4" />
                <span>Luxury Villa (6 BHK)</span>
              </button>

              <button
                onClick={() => setPropertyType('apartment')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  propertyType === 'apartment'
                    ? 'bg-[#D89828] text-black shadow-sm font-black'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Apartments (4 BHK / 3 BHK+MR)</span>
              </button>
            </div>

            {/* Apartment Sub-type Switcher */}
            {propertyType === 'apartment' && (
              <div className="flex justify-center gap-3 mt-4 animate-fade-in">
                <button
                  onClick={() => setSelectedApartmentType('apt-4bhk')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    selectedApartmentType === 'apt-4bhk'
                      ? 'bg-[#D89828]/20 border-[#D89828] text-[#946317]'
                      : 'bg-white border-neutral-300 text-neutral-700 hover:text-black'
                  }`}
                >
                  4 BHK Apartment
                </button>
                <button
                  onClick={() => setSelectedApartmentType('apt-3bhk-mr')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    selectedApartmentType === 'apt-3bhk-mr'
                      ? 'bg-[#D89828]/20 border-[#D89828] text-[#946317]'
                      : 'bg-white border-neutral-300 text-neutral-700 hover:text-black'
                  }`}
                >
                  3 BHK + Maid's Room (3BHK+MR)
                </button>
              </div>
            )}

          </div>

          {/* 3 Tier Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {plans.map((plan) => {
              const isHighlighted = plan.highlight;
              return (
                <div
                  key={plan.tier}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative bg-white ${
                    isHighlighted
                      ? 'border-2 border-[#D89828] shadow-[0_15px_40px_rgba(216,152,40,0.15)] lg:-translate-y-2 ring-1 ring-[#D89828]/30'
                      : 'border border-neutral-200 hover:border-neutral-300 shadow-md'
                  }`}
                >
                  {/* Highlight Pill Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D89828] text-black text-[10px] font-black uppercase tracking-widest shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#946317]">
                        {activeTypeData.name}
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-700 font-mono font-bold">
                        {plan.tier} Tier
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                      {plan.tier} Package
                    </h3>
                    <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
                      {plan.tagline}
                    </p>

                    {/* Price Block */}
                    <div className="pb-6 mb-6 border-b border-neutral-200">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs font-bold text-neutral-500">{plan.currency}</span>
                        <span className="text-4xl sm:text-5xl font-serif font-extrabold text-neutral-900 tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-neutral-500 font-medium">/{plan.period.toLowerCase()}</span>
                      </div>
                      <div className="text-[11px] text-[#946317] mt-1 font-semibold">
                        + VAT (Flexible Quarterly / Annual Payments)
                      </div>
                    </div>

                    {/* Feature Inclusions Checklist */}
                    <div className="space-y-3 mb-8">
                      <div className="text-[11px] font-black uppercase tracking-wider text-neutral-500 mb-2">
                        Package Inclusions:
                      </div>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B57C1C] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-200">
                    <button
                      onClick={() => onOpenQuoteModal(`AMC Package: ${activeTypeData.name} (${plan.tier} - AED ${plan.price})`)}
                      className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        isHighlighted
                          ? 'bg-[#D89828] hover:bg-[#E5AF4D] text-black shadow-gold-sm hover:shadow-gold-glow'
                          : 'bg-neutral-900 hover:bg-[#D89828] text-white hover:text-black shadow-sm'
                      }`}
                    >
                      <span>Inquire About This Package</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href={createWhatsAppUrl(`Hello Burj Star, I would like to inquire about the ${activeTypeData.name} - ${plan.tier} Package (AED ${plan.price}/year).`)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 hover:text-black text-[11px] font-bold tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Direct WhatsApp Inquiry</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Package Inclusions Clarification Note */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-center max-w-2xl mx-auto">
            <p className="text-xs text-neutral-800 font-normal">
              💡 <span className="font-bold text-neutral-900">Need Custom Services?</span> Scope of services differs per package. Contact our engineering team to customize specific MEP, swimming pool, or elevator coverage.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY CHOOSE BURJ STAR AMC                                               */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#946317] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              The Burj Star Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
              Why Property Owners Trust <span className="text-gold-gradient italic">Our AMC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-neutral-200 relative group hover:border-[#D89828] transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#D89828]/20 border border-[#D89828]/60 flex items-center justify-center text-[#B57C1C] mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-neutral-900 mb-2">
                Guaranteed 60-Min Emergency SLA
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Dedicated mobile rapid-response vans stationed across Abu Dhabi Island, Saadiyat, Yas, and Khalifa City ensure emergency breakdown attendance within 60 minutes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-neutral-200 relative group hover:border-[#D89828] transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#D89828]/20 border border-[#D89828]/60 flex items-center justify-center text-[#B57C1C] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-neutral-900 mb-2">
                100% Certified In-House Technicians
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                No third-party subcontractors. All HVAC technicians, plumbers, and electrical specialists are directly employed, police-verified, and ADDC/DMT certified.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-neutral-200 relative group hover:border-[#D89828] transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#D89828]/20 border border-[#D89828]/60 flex items-center justify-center text-[#B57C1C] mb-5">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-neutral-900 mb-2">
                Digital Job Cards & Asset Reports
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Every PPM visit and breakdown repair includes photorealistic before/after logs, signed digital job cards, and transparent equipment health reports.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-[#946317] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
              Annual Maintenance Contract <span className="text-gold-gradient italic">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-neutral-200 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-neutral-900 hover:text-[#B57C1C] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#B57C1C] font-serif text-lg">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200 pt-4 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM CTA BANNER                                                      */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="p-8 sm:p-14 rounded-3xl bg-neutral-900 border border-[#D89828]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left text-white">
            <div>
              <span className="text-[#D89828] text-xs font-black uppercase tracking-[0.25em] block mb-2">
                CUSTOM ESTATE & COMMERCIAL AMC
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Manage Multiple Properties or Commercial Facilities?
              </h2>
              <p className="text-sm text-gray-300 max-w-xl mt-3 font-normal">
                We craft custom facility management and bulk AMC contracts for residential compounds, commercial towers, and hotel apartments across Abu Dhabi.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <button
                onClick={() => onOpenQuoteModal("Commercial & Bulk AMC Proposal")}
                className="px-8 py-4 rounded-xl bg-[#D89828] hover:bg-[#E5AF4D] text-black font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-gold-sm hover:shadow-gold-glow"
              >
                Request Enterprise Quotation
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-7 py-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-600 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D89828]" />
                <span>Call {COMPANY_INFO.phoneDisplay || COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

