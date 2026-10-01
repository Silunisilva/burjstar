import React from 'react';
import { X, MapPin, ArrowUpRight, MessageSquare, Building2 } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

export default function GalleryModal({ item, onClose, onEnquire }) {
  if (!item) return null;

  const handleWhatsApp = () => {
    const text = `Hello Burj Star, I saw the showcase image "${item.title}" in ${item.location} and would like to discuss a similar project for my property.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white border-2 border-[#D89828]/50 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Large High-Res Image Showcase */}
        <div className="relative h-[320px] sm:h-[480px] w-full overflow-hidden bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/80 backdrop-blur-md text-white hover:text-[#D89828] border border-white/20 flex items-center justify-center transition-colors shadow-xl"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#D89828] text-black shadow-md font-sans">
              {item.categoryName}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mt-3 leading-tight drop-shadow-md">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Content & Specs */}
        <div className="p-6 sm:p-8 space-y-6 bg-white text-neutral-900">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <MapPin className="w-5 h-5 text-[#B57C1C] shrink-0" />
              <span className="font-semibold text-neutral-900">{item.location}</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#946317]">
              Abu Dhabi Municipality Approved Execution
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans font-normal">
            {item.desc}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-600 font-medium">
              Interested in similar construction, fit-out, or AMC services?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleWhatsApp}
                className="flex-1 sm:flex-none px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2 font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnquire(item);
                }}
                className="flex-1 sm:flex-none px-6 py-3 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md font-bold"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
