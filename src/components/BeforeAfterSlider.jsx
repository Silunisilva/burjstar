import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { BEFORE_AFTER_SHOWCASE } from '../data/projects';
import BeforeAfterCard from './BeforeAfterCard';

function CarouselRow({ title, badge, items, onOpenQuoteModal, onSelectProject, rowIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalItems = items.length;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2 items displayed simultaneously on desktop, 1 on mobile
  const itemsPerView = isDesktop ? 2 : 1;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  return (
    <div className="bg-neutral-50/70 border border-neutral-200/90 rounded-3xl p-4 sm:p-6 lg:p-7 shadow-sm">
      
      {/* Row Header: Category Badge & Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-200">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <span className="text-[11px] sm:text-xs font-serif font-black text-[#946317] bg-[#D89828]/20 px-3 py-1 rounded-md border border-[#D89828]/40 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D89828] animate-pulse"></span>
            {badge}
          </span>
          <span className="hidden sm:inline text-neutral-300 font-bold">•</span>
          <h3 className="text-sm sm:text-base font-serif font-bold text-neutral-900 tracking-tight">
            {title}
          </h3>
        </div>

        {/* Top Right: Progress Status */}
        <span className="text-xs font-serif font-bold text-[#B57C1C] tracking-wider uppercase">
          Showing {currentIndex + 1} – {Math.min(currentIndex + itemsPerView, totalItems)} of {totalItems}
        </span>
      </div>

      {/* Carousel Track: 2 cards at once on desktop (50% each), 1 on mobile (100%) */}
      <div 
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out -mx-3"
          style={{
            transform: `translateX(-${currentIndex * (isDesktop ? 50 : 100)}%)`
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full lg:w-1/2 shrink-0 px-3"
            >
              <BeforeAfterCard
                item={item}
                onOpenQuoteModal={onOpenQuoteModal}
                onSelectProject={onSelectProject}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls Bar: Sliding Arrows & Dots ON BOTTOM LEFT */}
      <div className="mt-6 pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Bottom Left: Sliding Arrows + Indicator Dots */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#D89828] text-neutral-800 hover:text-black border border-neutral-300 hover:border-[#D89828] flex items-center justify-center transition-all shadow-sm active:scale-95 group cursor-pointer"
              aria-label={`Previous transformation in ${badge}`}
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#D89828] text-neutral-800 hover:text-black border border-neutral-300 hover:border-[#D89828] flex items-center justify-center transition-all shadow-sm active:scale-95 group cursor-pointer"
              aria-label={`Next transformation in ${badge}`}
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Indicator Pills */}
          <div className="flex items-center gap-1.5 ml-1">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 bg-[#D89828] shadow-[0_0_8px_#D89828]'
                    : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-xs font-mono font-medium text-neutral-500 ml-1.5 hidden sm:inline">
            Slide for next project →
          </span>
        </div>

        {/* Bottom Right: Interactive Tip */}
        <span className="flex items-center gap-1.5 text-xs text-neutral-600">
          <Sparkles className="w-3.5 h-3.5 text-[#B57C1C] shrink-0" />
          <span>Drag the gold slider on any card to compare before vs after.</span>
        </span>

      </div>

    </div>
  );
}

export default function BeforeAfterSlider({ onOpenQuoteModal, onSelectProject }) {
  // Row 1: Projects 1, 2, 3
  const row1Items = BEFORE_AFTER_SHOWCASE.slice(0, 3);
  
  // Row 2: Projects 4, 5, 6
  const row2Items = BEFORE_AFTER_SHOWCASE.slice(3, 6);

  return (
    <div className="space-y-10 sm:space-y-12">
      
      {/* Row 1: 3 Projects Carousel (2 displayed at once) */}
      <CarouselRow
        rowIndex={0}
        badge="Row 01 • Turnkey Transformations"
        title="Interiors, Exterior Civil & MEP Engineering"
        items={row1Items}
        onOpenQuoteModal={onOpenQuoteModal}
        onSelectProject={onSelectProject}
      />

      {/* Row 2: 3 Projects Carousel (2 displayed at once) */}
      <CarouselRow
        rowIndex={1}
        badge="Row 02 • Al Ain Villa Bathroom Suite"
        title="Al Ain Villa 3-Bathroom Comprehensive Renovation Project"
        items={row2Items}
        onOpenQuoteModal={onOpenQuoteModal}
        onSelectProject={onSelectProject}
      />

      {/* Overall Showcase Summary Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600 pt-1">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#B57C1C]" />
          <span>Interactive Slider: Drag the gold divider horizontally on any card to compare before/after details.</span>
        </span>
        <span className="hidden sm:inline font-mono text-[11px] text-neutral-500">
          6 Live Handover Transformations Across 2 Curated Carousel Rows
        </span>
      </div>

    </div>
  );
}


