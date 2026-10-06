import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftRight, Sliders, Sparkles, MapPin, ArrowUpRight, MessageSquare, Film, Play, Volume2, VolumeX, Eye } from 'lucide-react';
import { createWhatsAppUrl } from '../data/companyInfo';
import { PROJECTS } from '../data/projects';

export default function BeforeAfterCard({ item, onOpenQuoteModal, onSelectProject }) {
  const navigate = useNavigate();
  const [sliderPos, setSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'side-by-side'
  const [isMuted, setIsMuted] = useState(true);
  
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  const hasVideo = Boolean(item.beforeVideo || item.afterVideo);
  const targetProjectId = item.projectId || 'luxury-villa-saadiyat';

  // Synchronize playback between before & after videos
  useEffect(() => {
    if (!hasVideo) return;
    const afterVid = afterVideoRef.current;
    const beforeVid = beforeVideoRef.current;
    
    if (afterVid && beforeVid) {
      const handleTimeUpdate = () => {
        if (Math.abs(beforeVid.currentTime - afterVid.currentTime) > 0.3) {
          beforeVid.currentTime = afterVid.currentTime;
        }
      };
      afterVid.addEventListener('timeupdate', handleTimeUpdate);
      return () => afterVid.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, [hasVideo, viewMode]);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleWhatsApp = () => {
    const text = `Hello Burj Star, I saw your Before & After transformation for "${item.title}" and would like to get a quote for my property.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  const handleOpenProject = () => {
    const matchedProject = PROJECTS.find(p => p.id === targetProjectId) || PROJECTS[0];
    if (onSelectProject && matchedProject) {
      onSelectProject(matchedProject);
    } else {
      navigate(`/projects?id=${targetProjectId}`);
    }
  };

  const renderMedia = (src, isVideo, alt, isBefore = false) => {
    if (isVideo) {
      return (
        <video
          ref={isBefore ? beforeVideoRef : afterVideoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className={`absolute inset-0 w-full h-full object-cover ${!isBefore ? 'filter brightness-105' : 'filter brightness-95'}`}
        />
      );
    }
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${!isBefore ? 'filter brightness-105' : 'filter brightness-95'}`}
        style={isBefore ? { width: '100%', height: '100%', objectFit: 'cover' } : undefined}
      />
    );
  };

  return (
    <div className="bg-white border-2 border-neutral-200 hover:border-[#D89828] rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Top Card Header: Title & View Mode Toggle */}
      <div className="p-4 sm:p-5 pb-3 sm:pb-4 flex flex-wrap items-center justify-between gap-2.5 border-b border-neutral-200 bg-neutral-50/90">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {item.location && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#946317] flex items-center gap-1 truncate max-w-full">
                <MapPin className="w-3 h-3 text-[#B57C1C] shrink-0" />
                <span className="truncate">{item.location}</span>
              </span>
            )}
            {hasVideo && (
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/20 text-[#B57C1C] border border-[#D89828]/40 flex items-center gap-1 shrink-0">
                <Film className="w-2.5 h-2.5" /> Video
              </span>
            )}
          </div>
          <h3 
            onClick={handleOpenProject}
            className="text-sm sm:text-base font-serif font-bold text-neutral-900 hover:text-[#B57C1C] cursor-pointer transition-colors flex items-center gap-1.5 leading-snug line-clamp-1"
            title="Click to view full project case study & walkthrough video"
          >
            <span className="truncate">{item.title}</span>
            <Eye className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#B57C1C] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-neutral-200/70 p-0.5 sm:p-1 rounded-xl border border-neutral-300 text-[11px] sm:text-xs shrink-0">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-2 sm:px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1 ${
              viewMode === 'slider' ? 'bg-[#D89828] text-black shadow-sm font-black' : 'text-neutral-600 hover:text-black'
            }`}
          >
            <ArrowLeftRight className="w-3 h-3" />
            <span className="hidden sm:inline">Slider</span>
          </button>
          <button
            onClick={() => setViewMode('side-by-side')}
            className={`px-2 sm:px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1 ${
              viewMode === 'side-by-side' ? 'bg-[#D89828] text-black shadow-sm font-black' : 'text-neutral-600 hover:text-black'
            }`}
          >
            <Sliders className="w-3 h-3" />
            <span className="hidden sm:inline">Side-by-Side</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Visual Comparison Area */}
      <div className="p-3 sm:p-5 bg-neutral-100">
        {viewMode === 'slider' ? (
          <div
            className="relative w-full h-[340px] sm:h-[420px] lg:h-[390px] xl:h-[430px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-neutral-300 shadow-md group/slider"
            onMouseMove={handleSliderMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER Media (Full background) */}
            {renderMedia(item.afterVideo || item.afterImage, Boolean(item.afterVideo), `${item.title} After`, false)}
            <span className="absolute top-3.5 right-3.5 z-10 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AFTER
            </span>

            {/* BEFORE Media (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              {renderMedia(item.beforeVideo || item.beforeImage, Boolean(item.beforeVideo), `${item.title} Before`, true)}
              <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-black/90 text-amber-400 text-[11px] font-black uppercase tracking-wider border border-amber-500/50 shadow-lg">
                BEFORE
              </span>
            </div>

            {/* Gold Divider Line & Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#D89828] shadow-[0_0_15px_#D89828]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#D89828] text-black flex items-center justify-center shadow-2xl border-2 border-white font-bold group-hover/slider:scale-110 transition-transform">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Instruction Overlay */}
            <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none px-3">
              <span className="text-[11px] font-bold text-white bg-black/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 shadow-md">
                ↔ Drag slider left / right to compare {hasVideo ? 'video frames' : 'details'}
              </span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="relative h-[220px] sm:h-[300px] rounded-xl overflow-hidden border-2 border-neutral-300 shadow-md">
              {item.beforeVideo ? (
                <video src={item.beforeVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <img src={item.beforeImage} alt={`${item.title} Before`} className="w-full h-full object-cover" />
              )}
              <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/90 text-amber-400 text-[11px] font-bold border border-amber-500/40">
                BEFORE
              </span>
            </div>
            <div className="relative h-[220px] sm:h-[300px] rounded-xl overflow-hidden border-2 border-emerald-500 shadow-md">
              {item.afterVideo ? (
                <video src={item.afterVideo} autoPlay loop muted playsInline className="w-full h-full object-cover filter brightness-105" />
              ) : (
                <img src={item.afterImage} alt={`${item.title} After`} className="w-full h-full object-cover filter brightness-105" />
              )}
              <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> AFTER
              </span>
            </div>
          </div>
        )}
      </div>

      {/* View Full Project Case Study Bar */}
      <div className="px-4 sm:px-5 py-2.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
        <button
          onClick={handleOpenProject}
          className="text-[11px] sm:text-xs font-bold text-neutral-800 hover:text-[#B57C1C] flex items-center gap-1.5 group/btn transition-colors"
        >
          <Film className="w-3.5 h-3.5 text-[#B57C1C]" />
          <span className="truncate">Explore Case Study & Walkthrough</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#B57C1C] shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>

      {/* Clean Bottom Actions */}
      <div className="p-3 sm:p-4 bg-white border-t border-neutral-200 flex items-center gap-2 sm:gap-3">
        <button
          onClick={handleWhatsApp}
          className="flex-1 py-2 sm:py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>
        
        <button
          onClick={() => onOpenQuoteModal && onOpenQuoteModal(`Renovation: ${item.title}`)}
          className="flex-1 py-2 sm:py-2.5 px-3 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-xl shadow-gold-sm hover:shadow-gold-glow flex items-center justify-center gap-1 transition-all"
        >
          <span>Get Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
