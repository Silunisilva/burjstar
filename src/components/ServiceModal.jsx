import React from 'react';
import { X, CheckCircle2, Shield, MessageSquare, ArrowRight, Layers } from 'lucide-react';
import { getServiceIcon } from '../utils/serviceIcons';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';
import Button from './Button';

export default function ServiceModal({ service, onClose, onEnquire }) {
  if (!service) return null;

  const IconComponent = getServiceIcon(service.icon);

  const handleWhatsApp = () => {
    const text = `Hello Burj Star, I would like to get a quote and details for "${service.title}" in Abu Dhabi.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white hover:text-[#D89828] border border-white/10 flex items-center justify-center transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D89828] border border-[#D89828]/40 shadow-sm">
                {service.categoryName}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-2 leading-tight">
                {service.title}
              </h3>
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-[#D89828] flex items-center justify-center text-black shadow-lg shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#946317] mb-2">
              Service Overview & UAE Scope
            </h4>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              {service.fullDesc || service.shortDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          {service.features && service.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                Key Deliverables & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#B57C1C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Popular Applications */}
          {service.popularFor && (
            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Ideal For Property Types:
              </h5>
              <div className="flex flex-wrap gap-2">
                {service.popularFor.map((item, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-lg bg-white text-neutral-800 border border-neutral-300 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-600 font-medium">
            Certified Abu Dhabi engineering team on standby
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              onClick={handleWhatsApp}
              variant="whatsapp"
              size="sm"
              icon={MessageSquare}
              className="flex-1 sm:flex-none shadow-sm"
            >
              WhatsApp Enquiry
            </Button>
            <Button
              onClick={() => {
                onClose();
                onEnquire(service);
              }}
              variant="gold"
              size="sm"
              className="flex-1 sm:flex-none shadow-sm"
            >
              Request Quote
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
