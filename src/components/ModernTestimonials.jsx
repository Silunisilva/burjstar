import React from 'react';
import { Star, CheckCircle2, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEWS_SUMMARY } from '../data/reviews';

export default function ModernTestimonials() {
  // Split the 8 reviews into 2 distinct rows
  const mid = Math.ceil(REVIEWS.length / 2);
  const row1 = REVIEWS.slice(0, mid);
  const row2 = REVIEWS.slice(mid);

  // Duplicate each row for seamless infinite marquee loop
  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];

  const renderCard = (rev, keyPrefix) => (
    <div
      key={`${keyPrefix}-${rev.id}`}
      className="w-[340px] sm:w-[390px] shrink-0 bg-white border-2 border-neutral-200 hover:border-[#D89828] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg relative group overflow-hidden select-none cursor-pointer"
    >
      {/* Subtle Luxury Gold Background Glow on Hover */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D89828]/10 rounded-full blur-3xl group-hover:bg-[#D89828]/20 transition-all pointer-events-none"></div>

      {/* Top Section */}
      <div>
        {/* Rating Stars & Service Badge */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(rev.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            ))}
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D89828]/15 text-[#946317] border border-[#D89828]/30 shrink-0">
            {rev.serviceUsed}
          </span>
        </div>

        {/* Highlight Plaque */}
        {rev.highlight && (
          <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] font-bold text-neutral-800">
            <Sparkles className="w-3 h-3 text-[#B57C1C]" />
            <span>{rev.highlight}</span>
          </div>
        )}

        {/* Review Quote Text */}
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal mb-5 italic">
          "{rev.content}"
        </p>
      </div>

      {/* Bottom Author Profile */}
      <div className="pt-3.5 border-t border-neutral-200 flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <img
              src={rev.avatar}
              alt={rev.author}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#D89828]/60"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
              <CheckCircle2 className="w-2 h-2 text-white" />
            </div>
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-serif font-bold text-neutral-900 group-hover:text-[#B57C1C] transition-colors truncate">
              {rev.author}
            </h4>
            <p className="text-[11px] text-neutral-500 flex items-center gap-1 truncate font-medium">
              <MapPin className="w-3 h-3 text-[#B57C1C] shrink-0" />
              <span>{rev.location || rev.role}</span>
            </p>
          </div>
        </div>

        <span className="text-[10px] text-neutral-400 font-mono shrink-0">
          {rev.date}
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full relative">
      
      {/* 1. Clean Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6 border-b border-neutral-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D89828]/15 border border-[#D89828]/40 text-[#946317] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-sm">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>CLIENT EXPERIENCES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 leading-tight">
            What Abu Dhabi Property Owners <br className="hidden sm:inline" />
            <span className="text-gold-gradient italic">Say About Our Work</span>
          </h2>
        </div>

        {/* Google Reviews Live Rating Link */}
        <a
          href={GOOGLE_REVIEWS_SUMMARY.googleMapsPlaceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-white border border-neutral-300 hover:border-[#D89828] px-4 py-2.5 rounded-2xl shadow-sm transition-all group self-start sm:self-auto"
        >
          <div className="flex items-center gap-1 text-amber-500">
            <span className="text-lg font-bold text-neutral-900 leading-none mr-1">4.9</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <div className="border-l border-neutral-200 pl-3 text-left">
            <span className="text-[11px] font-bold text-neutral-900 block group-hover:text-[#B57C1C] transition-colors flex items-center gap-1">
              <span>Google Verified</span>
              <ExternalLink className="w-3 h-3 text-[#B57C1C]" />
            </span>
            <span className="text-[10px] text-neutral-500 block">128+ Reviews</span>
          </div>
        </a>
      </div>

      {/* 2. Two-Row Infinite Auto-Sliding Marquee Track */}
      <div className="relative overflow-hidden py-2 space-y-5">
        
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

        {/* Row 1: Slides Left Smoothly */}
        <div className="flex gap-5 animate-marquee-left">
          {row1Loop.map((rev, idx) => renderCard(rev, `r1-${idx}`))}
        </div>

        {/* Row 2: Slides Right Smoothly */}
        <div className="flex gap-5 animate-marquee-right">
          {row2Loop.map((rev, idx) => renderCard(rev, `r2-${idx}`))}
        </div>

      </div>

    </div>
  );
}
