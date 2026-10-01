import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { BEFORE_AFTER_SHOWCASE } from '../data/projects';
import BeforeAfterCard from './BeforeAfterCard';

export default function BeforeAfterSlider({ onOpenQuoteModal, onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalItems = BEFORE_AFTER_SHOWCASE.length;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="relative">
      
      {/* Top Carousel Navigation Bar */}
      <div className="flex items-center justify-between gap-4 mb-8">
        
        {/* Progress Indicator */}
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-serif font-bold text-[#B57C1C] tracking-widest uppercase">
            Transformation {String(currentIndex + 1).padStart(2, '0')}
            {isDesktop && ` – ${String(Math.min(currentIndex + 2, totalItems)).padStart(2, '0')}`} / {String(totalItems).padStart(2, '0')}
          </span>
          <div className="hidden sm:flex items-center gap-1.5 ml-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#D89828] shadow-[0_0_8px_#D89828]'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-xl bg-white hover:bg-[#D89828] text-neutral-800 hover:text-black border border-neutral-300 hover:border-[#D89828] flex items-center justify-center transition-all shadow-sm active:scale-95 group"
            aria-label="Previous Transformations"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-xl bg-white hover:bg-[#D89828] text-neutral-800 hover:text-black border border-neutral-300 hover:border-[#D89828] flex items-center justify-center transition-all shadow-sm active:scale-95 group"
            aria-label="Next Transformations"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Carousel Viewport & Sliding Track */}
      <div 
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out -mx-3 sm:-mx-4"
          style={{
            transform: `translateX(-${currentIndex * (isDesktop ? 50 : 100)}%)`
          }}
        >
          {BEFORE_AFTER_SHOWCASE.map((item) => (
            <div
              key={item.id}
              className="w-full lg:w-1/2 shrink-0 px-3 sm:px-4"
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

      {/* Bottom Hint */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#B57C1C]" />
          <span>Interactive Slider: Drag the gold divider horizontally on any card to compare before/after details.</span>
        </span>
        <span className="hidden sm:inline font-mono text-[11px] text-neutral-500">
          Swipe or click arrows to explore all {totalItems} projects
        </span>
      </div>

    </div>
  );
}
