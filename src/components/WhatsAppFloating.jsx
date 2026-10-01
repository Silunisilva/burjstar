import React, { useState } from 'react';
import { MessageSquare, X, ShieldAlert, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: "24/7 Emergency Breakdown",
      sub: "AC failure, water leak, electrical trip",
      icon: ShieldAlert,
      color: "text-amber-400",
      msg: "Hello Burj Star, I have an urgent breakdown emergency in Abu Dhabi that requires immediate technician dispatch."
    },
    {
      title: "AMC Contract Enquiry",
      sub: "Villa, Building or Office packages",
      icon: FileText,
      color: "text-[#D89828]",
      msg: "Hello Burj Star, I would like to get a quotation for an Annual Maintenance Contract (AMC)."
    },
    {
      title: "Construction & Fit-Out",
      sub: "New villa build, civil, interior design",
      icon: CheckCircle2,
      color: "text-emerald-400",
      msg: "Hello Burj Star, I have a construction / fit-out project in Abu Dhabi and would like to share my drawings and requirements."
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#121212] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Burj Star Direct Desk</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  Online | Quick Response in Abu Dhabi
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Options */}
          <div className="p-4 flex flex-col gap-2.5 bg-neutral-900/90">
            <p className="text-xs text-gray-400 font-medium px-1">
              Select what you need help with to start a direct WhatsApp chat:
            </p>

            {quickOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <a
                  key={idx}
                  href={createWhatsAppUrl(opt.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/50 hover:border-emerald-500/50 transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className={`p-2 rounded-lg bg-neutral-900 ${opt.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {opt.title}
                      </h5>
                      <p className="text-[11px] text-gray-400">{opt.sub}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-neutral-950 text-center text-[10px] text-gray-500 border-t border-neutral-800">
            Pre-fills your WhatsApp chat automatically.
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-4 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Open WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline pr-1">
          WhatsApp Us
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
      </button>

    </div>
  );
}
