import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote, MapPin, Sparkles, ArrowUpRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEWS_SUMMARY } from '../data/reviews';

export default function ModernTestimonials({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  const categories = [
    { id: 'all', name: 'All Verified Reviews' },
    { id: 'amc', name: 'Villa & Building AMC' },
    { id: 'fitout', name: 'Interior & Fit-Out' },
    { id: 'waterproofing', name: 'Waterproofing' },
    { id: 'hvac', name: 'HVAC & MEP' }
  ];

  const filteredReviews = REVIEWS.filter((rev) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'amc') return rev.serviceUsed.includes('AMC');
    if (activeTab === 'fitout') return rev.serviceUsed.includes('Fit-Out') || rev.serviceUsed.includes('Joinery') || rev.serviceUsed.includes('Tiling');
    if (activeTab === 'waterproofing') return rev.serviceUsed.includes('Waterproofing');
    if (activeTab === 'hvac') return rev.serviceUsed.includes('HVAC') || rev.serviceUsed.includes('MEP') || rev.serviceUsed.includes('Chiller');
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerView = isDesktop ? 3 : 1;
  const maxIndex = Math.max(0, filteredReviews.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Reset index when filter changes
  const handleTabChange = (id) => {
    setActiveTab(id);
    setCurrentIndex(0);
  };

  return (
    <div className="w-full">
      {/* 1. Header with Google Plaque & Filter Pills */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 border-b border-neutral-200 pb-8">
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            {/* Google "G" Colored SVG Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span className="font-semibold text-neutral-800 tracking-widest text-[11px]">GOOGLE VERIFIED CLIENT REVIEWS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-neutral-900 leading-tight">
            Trusted by Abu Dhabi's <span className="text-gold-gradient italic">Estate Owners & Managers</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mt-2 font-normal">
            Direct feedback from luxury villa owners, asset managers, and commercial clients across Abu Dhabi.
          </p>
        </div>

        {/* Google Summary Badge */}
        <div className="flex items-center gap-4 bg-white border border-neutral-300 p-4 sm:p-5 rounded-2xl shadow-md shrink-0 self-start lg:self-auto">
          <div className="flex flex-col items-center justify-center pr-4 border-r border-neutral-200">
            <span className="text-3xl font-serif font-black text-neutral-900 leading-none">4.9</span>
            <div className="flex items-center gap-0.5 text-amber-400 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-neutral-900">128+ Reviews</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">98% 5-Star</span>
            </div>
            <span className="text-[11px] text-neutral-500 block mt-0.5">Top-Rated Maintenance & Contracting</span>
            <a
              href={GOOGLE_REVIEWS_SUMMARY.googleMapsPlaceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold text-[#B57C1C] hover:text-[#946317] inline-flex items-center gap-1 mt-1 transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Category Filter Pills + Carousel Arrows */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === cat.id
                  ? 'bg-[#D89828] text-black font-bold shadow-sm'
                  : 'bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-xl bg-white hover:bg-[#D89828] text-neutral-800 hover:text-black border border-neutral-300 hover:border-[#D89828] flex items-center justify-center transition-all shadow-sm active:scale-95 group"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-xl bg-white hover:bg-[#D89828] text-neutral-800 hover:text-black border border-neutral-300 hover:border-[#D89828] flex items-center justify-center transition-all shadow-sm active:scale-95 group"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* 3. Testimonials Carousel Viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out -mx-3"
          style={{
            transform: `translateX(-${currentIndex * (isDesktop ? 33.333 : 100)}%)`
          }}
        >
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="w-full lg:w-1/3 shrink-0 px-3"
            >
              <div className="h-full bg-white border-2 border-neutral-200 hover:border-[#D89828] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl relative group overflow-hidden">
                
                {/* Top Section */}
                <div>
                  {/* Rating Stars, Date & Service Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D89828]/15 text-[#946317] border border-[#D89828]/30 shrink-0 font-semibold">
                      {rev.serviceUsed}
                    </span>
                  </div>

                  {/* Highlight Plaque */}
                  {rev.highlight && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-[11px] font-bold text-neutral-800">
                      <Sparkles className="w-3 h-3 text-[#B57C1C]" />
                      <span>{rev.highlight}</span>
                    </div>
                  )}

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal mb-6 relative z-10 italic">
                    "{rev.content}"
                  </p>
                </div>

                {/* Bottom Author Profile */}
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative shrink-0">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#D89828]/60"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                        <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-serif font-bold text-neutral-900 group-hover:text-[#B57C1C] transition-colors truncate">
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
            </div>
          ))}
        </div>
      </div>

      {/* 4. Trust Metric Badges Strip */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[#F8FAFC] border border-neutral-200 p-6 rounded-3xl shadow-sm">
        <div className="text-center p-3 border-r border-neutral-200 last:border-r-0">
          <span className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 block">4.9 / 5.0</span>
          <span className="text-xs text-[#946317] font-bold uppercase tracking-wider mt-1 block">Google Rating</span>
        </div>
        <div className="text-center p-3 border-r border-neutral-200 last:border-r-0">
          <span className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 block">98%</span>
          <span className="text-xs text-[#946317] font-bold uppercase tracking-wider mt-1 block">5-Star Feedback</span>
        </div>
        <div className="text-center p-3 border-r border-neutral-200 last:border-r-0">
          <span className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 block">&lt; 60 Min</span>
          <span className="text-xs text-[#946317] font-bold uppercase tracking-wider mt-1 block">Emergency SLA</span>
        </div>
        <div className="text-center p-3">
          <span className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 block">100%</span>
          <span className="text-xs text-[#946317] font-bold uppercase tracking-wider mt-1 block">In-House Staff</span>
        </div>
      </div>

      {/* 5. Bottom Call to Action */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#FBF9F5] border border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-2xl bg-[#D89828]/20 border border-[#D89828] flex items-center justify-center text-[#B57C1C] shrink-0">
            <Quote className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-neutral-900">
              Ready to Experience Premium Contracting in Abu Dhabi?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 font-normal">
              Get an itemized technical proposal and site inspection within 24 hours.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all font-bold"
          >
            <span>Request Free Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
