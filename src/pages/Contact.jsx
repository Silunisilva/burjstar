import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Building2, 
  PhoneCall, 
  FileText,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

export default function Contact({ onOpenQuoteModal }) {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Direct Desk",
      primary: COMPANY_INFO.phoneDisplay || COMPANY_INFO.phone,
      sub: "Office Line (Sat - Thu, 8:00 AM - 6:30 PM)",
      action: `tel:${COMPANY_INFO.phoneRaw}`,
      btnText: "Call Now",
      btnVariant: "dark"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Direct",
      primary: COMPANY_INFO.whatsapp,
      sub: "Instant chat, drawing reviews & fast quotes",
      action: createWhatsAppUrl(),
      btnText: "Chat on WhatsApp",
      btnVariant: "whatsapp",
      isExternal: true
    },
    {
      icon: Mail,
      title: "Official Email",
      primary: COMPANY_INFO.email,
      sub: "Send RFQs, BOQs, and general tenders",
      action: `mailto:${COMPANY_INFO.email}`,
      btnText: "Email Us",
      btnVariant: "dark"
    },
    {
      icon: PhoneCall,
      title: "24/7 Rapid Emergency",
      primary: COMPANY_INFO.emergencyPhone,
      sub: "60-Min dispatch for AC breakdown & MEP faults",
      action: `tel:${COMPANY_INFO.mobileRaw}`,
      btnText: "Emergency Call",
      btnVariant: "gold"
    }
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans">
      <SEO 
        title="Contact Us | Abu Dhabi Office & 24/7 Engineering Support"
        description="Get in touch with Burj Star Construction & Property Maintenance Abu Dhabi. Phone, WhatsApp, office location in Mussafah, and fast enquiry form."
      />

      {/* ========================================================================= */}
      {/* 1. PAGE HERO (Dark Architectural Hero with Editorial Heading)             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden border-b border-neutral-200">
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
            alt="Abu Dhabi Commercial Real Estate"
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
                <span>CONNECT WITH OUR DIRECTORS & ENGINEERS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.15] mb-6">
                Let's Discuss Your Project or <br />
                <span className="font-serif italic font-medium text-gold-gradient">Maintenance Requirements</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-sans max-w-2xl font-light">
                Reach our Abu Dhabi engineering team for on-site property surveys, customized AMC tenders, or emergency technical dispatch.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 4 CONTACT CARDS                                                        */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-neutral-200 hover:border-[#D89828] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-[#B57C1C] group-hover:bg-[#D89828] group-hover:text-black transition-colors duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#946317] block mb-1.5">
                    {card.title}
                  </span>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-neutral-900 mb-2 break-words">
                    {card.primary}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-normal">
                    {card.sub}
                  </p>
                </div>

                <a
                  href={card.action}
                  target={card.isExternal ? "_blank" : "_self"}
                  rel="noreferrer"
                  className={`py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-center transition-all ${
                    card.btnVariant === 'gold' 
                      ? 'bg-[#D89828] text-black hover:bg-[#E5AF4D] shadow-sm font-bold' 
                      : card.btnVariant === 'whatsapp' 
                      ? 'bg-[#25D366] text-white hover:bg-[#20ba59] shadow-sm font-bold' 
                      : 'bg-neutral-900 text-white hover:bg-black border border-neutral-800 font-bold'
                  }`}
                >
                  {card.btnText}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SPLIT INQUIRY FORM & HEADQUARTERS LOCATION (Warm-White Background)      */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5] text-neutral-900 border-y border-neutral-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B57C1C] mb-3 block">
                SEND AN ENQUIRY
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4 leading-tight">
                Request an Inspection or Proposal
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 mb-8 leading-relaxed font-normal">
                Fill out the form below with your property details. We prepare itemized estimates and arrange site visits across Abu Dhabi within 24 hours.
              </p>

              <ContactForm />
            </div>

            {/* Right: Office Info & AMC Banner & Map (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* AMC Fast Quote Banner */}
              <div className="bg-white border border-neutral-300 rounded-3xl p-7 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D89828] flex items-center justify-center text-black font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-neutral-900">
                      Need an Annual Maintenance Contract?
                    </h4>
                    <p className="text-xs text-[#B57C1C] font-semibold">Villa • Tower • Office</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-5">
                  Use our customized AMC questionnaire to specify your property type, AC units, and location for an exact proposal.
                </p>
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  Open AMC Quote Calculator
                </button>
              </div>

              {/* Office Details */}
              <div className="bg-white border border-neutral-300 rounded-3xl p-7 shadow-lg">
                <h4 className="text-sm font-serif font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B57C1C]" />
                  Abu Dhabi Headquarters
                </h4>
                <div className="space-y-3 text-xs text-neutral-700">
                  <p className="leading-relaxed">
                    <strong className="text-neutral-900">Address:</strong> {COMPANY_INFO.address.full}
                  </p>
                  <p>
                    <strong className="text-neutral-900">Operating Hours:</strong> {COMPANY_INFO.workingHours.office}
                  </p>
                  <p className="text-emerald-700 font-semibold">
                    <strong className="text-neutral-900">Emergency Response:</strong> 24 Hours / 7 Days a Week
                  </p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden border border-neutral-300 h-64 sm:h-72 relative shadow-lg">
                <iframe
                  title="Burj Star Abu Dhabi Office Map"
                  src={COMPANY_INFO.address.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
