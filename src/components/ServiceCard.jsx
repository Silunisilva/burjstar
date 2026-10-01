import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ service, onSelect, onQuote }) {
  return (
    <div className="bg-white border-2 border-neutral-200/90 hover:border-[#D89828] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group">
      
      {/* Card Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Subtle Tag if present */}
        {service.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#D89828] text-black shadow-md font-sans">
              {service.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-neutral-900 group-hover:text-[#B57C1C] transition-colors mb-2.5 leading-snug">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 font-normal">
            {service.shortDesc}
          </p>

          {/* Quick Deliverable Points */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-1.5 mb-5 pt-3 border-t border-neutral-200">
              {service.features.slice(0, 3).map((feat, i) => (
                <li key={i} className="text-[11px] sm:text-xs text-neutral-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D89828] shrink-0 mt-1.5"></span>
                  <span className="leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3.5 border-t border-neutral-200">
          <button
            onClick={() => onSelect(service)}
            className="flex-1 py-2.5 px-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-xl border border-neutral-300 hover:border-neutral-400 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B57C1C]" />
          </button>
          
          <button
            onClick={() => onQuote(service)}
            className="py-2.5 px-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#D89828] hover:bg-[#E5AF4D] text-black rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center font-bold"
          >
            Enquire
          </button>
        </div>

      </div>

    </div>
  );
}

