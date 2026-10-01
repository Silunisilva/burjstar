import React from 'react';
import { ShieldCheck, Clock, Award, Building, CheckCircle2 } from 'lucide-react';

export default function TrustHighlights() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Licensed & Certified",
      desc: "Abu Dhabi Municipality approved Grade-A classified engineering standards.",
      tag: "Verified"
    },
    {
      icon: Award,
      title: "Quality Workmanship",
      desc: "Strict QA/QC protocols, premium grade materials, and certified technicians.",
      tag: "Guaranteed"
    },
    {
      icon: Clock,
      title: "24/7 Rapid Response",
      desc: "Dedicated on-call mobile fleet with average 60-minute emergency response SLA.",
      tag: "Round-The-Clock"
    },
    {
      icon: Building,
      title: "Villas & Commercial",
      desc: "Specialized solutions for luxury villas, residential compounds, and high-rise towers.",
      tag: "Turnkey"
    }
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#111111]/90 backdrop-blur-md border border-neutral-800 hover:border-[#D89828]/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-gold-sm group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-[#D89828] group-hover:bg-[#D89828] group-hover:text-black transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D89828]/10 text-[#D89828] border border-[#D89828]/20">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-[#D89828] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
