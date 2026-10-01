import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ArrowUpRight, Sparkles, Building2, Film, Play, X } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import VideoModal from '../components/VideoModal';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import { VIDEOS, VIDEO_CATEGORIES } from '../data/videos';

export default function Projects({ onSelectProject, onOpenQuoteModal }) {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [videoFilter, setVideoFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Auto-open project modal if ?id= is passed in URL
  useEffect(() => {
    const projectId = searchParams.get('id');
    if (projectId && onSelectProject) {
      const match = PROJECTS.find(p => p.id === projectId);
      if (match) {
        onSelectProject(match);
      }
    }
  }, [searchParams, onSelectProject]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const filteredVideos = useMemo(() => {
    if (videoFilter === 'all') return VIDEOS;
    return VIDEOS.filter(v => v.category === videoFilter);
  }, [videoFilter]);

  return (
    <div className="bg-white text-neutral-900 font-sans">
      <SEO 
        title="Project Portfolio & Work Reels | Landmark Works in Abu Dhabi"
        description="Explore our completed construction, villa civil works, turnkey interior fit-outs, and live video reels in Abu Dhabi."
      />

      {/* ========================================================================= */}
      {/* 1. PAGE HERO (Dark Architectural Hero with Editorial Heading)             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center pt-36 pb-20 overflow-hidden border-b border-neutral-200">
        
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
            alt="Luxury Villa Construction Portfolio Abu Dhabi"
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
                <span>PORTFOLIO SHOWCASE • 850+ DELIVERIES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.15] mb-6">
                Our Landmark Projects & <br />
                <span className="font-serif italic font-medium text-gold-gradient">Engineering Showcase</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-sans max-w-2xl font-light">
                From luxury private villas on Saadiyat and Yas Island to commercial towers in Al Reem and Maryah Island.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTER PILLS & MASONRY GALLERY                                         */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        
        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-14">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#D89828] text-black shadow-md font-bold'
                  : 'bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Varied Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2.5 ON-SITE VIDEOS & WORK REELS GALLERY                                   */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] text-neutral-900 border-t border-neutral-200 relative">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-neutral-200 pb-8">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#946317] bg-[#D89828]/15 px-3.5 py-1 rounded-md border border-[#D89828]/40 mb-3">
                LIVE ON-SITE CRAFTSMANSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-neutral-900 leading-tight">
                On-Site Videos & <span className="text-gold-gradient">Work Reels Gallery</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mt-2 font-normal">
                4K drone cinematography, site execution timelapses, and vertical short reels capturing precision craftsmanship.
              </p>
            </div>

            {/* Video Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {VIDEO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setVideoFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    videoFilter === cat.id
                      ? 'bg-[#D89828] text-black shadow-md'
                      : 'bg-white text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-300'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((vid) => {
              const isVertical = vid.aspect === '9:16';
              return (
                <div
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl border-2 border-neutral-200 hover:border-[#D89828] transition-all duration-500 hover:-translate-y-2 bg-neutral-900 flex flex-col justify-between"
                  style={{ minHeight: isVertical ? '440px' : '320px' }}
                >
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20"></div>

                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-black/85 text-[#D89828] text-[10px] font-black uppercase tracking-wider border border-[#D89828]/50 shadow-md">
                      {vid.categoryName}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="relative z-10 my-auto flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#D89828] text-black flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                      <svg className="w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10 p-5 pt-0 text-white">
                    <div className="flex items-center justify-between text-[11px] text-[#D89828] font-bold uppercase tracking-wider mb-1">
                      <span>{vid.location}</span>
                      <span className="text-gray-300 font-normal">{vid.views}</span>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#D89828] transition-colors leading-snug">
                      {vid.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BEFORE / AFTER COMPARISON SECTION                                      */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FBF9F5] text-neutral-900 border-y border-neutral-300">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <SectionHeading
            badge="Transformations"
            title="Before & After"
            titleHighlight="Restoration Portfolio"
            theme="light"
            description="Examine the drastic difference our skilled engineering and finishing teams make on tired properties."
          />

          <BeforeAfterSlider 
            onOpenQuoteModal={onOpenQuoteModal} 
            onSelectProject={onSelectProject}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM PROJECT SUBMIT CTA                                              */}
      {/* ========================================================================= */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4">
          Have a Project in Mind for Abu Dhabi?
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mb-8 leading-relaxed font-normal">
          Share your drawings, BOQs, or property specifications with our estimating team for a precise technical and financial proposal.
        </p>
        <button
          onClick={onOpenQuoteModal}
          className="px-6 py-3.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow-md"
        >
          Submit Project For Review
        </button>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onEnquire={(v) => {
            setSelectedVideo(null);
            onOpenQuoteModal(v.title);
          }}
        />
      )}

    </div>
  );
}
