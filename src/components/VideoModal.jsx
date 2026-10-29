import React from 'react';
import { X, MapPin, Play, MessageSquare, ArrowUpRight, Film, Eye } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

export default function VideoModal({ video, onClose, onEnquire }) {
  if (!video) return null;

  const isVertical = video.aspect === '9:16';

  const handleWhatsApp = () => {
    const text = `Hello Burj Star, I watched your video/reel "${video.title}" in ${video.location} and would like to discuss a similar project.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/88 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${isVertical ? 'max-w-lg' : 'max-w-4xl'} bg-white border-2 border-[#D89828] rounded-3xl shadow-2xl overflow-hidden my-6`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/80 backdrop-blur-md text-white hover:text-[#D89828] border border-white/20 flex items-center justify-center transition-colors shadow-2xl"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Player Box */}
        <div className={`relative ${isVertical ? 'h-[500px] sm:h-[580px]' : 'h-[280px] sm:h-[460px]'} w-full bg-black overflow-hidden flex items-center justify-center`}>
          <video
            src={video.videoUrl}
            poster={video.thumbnail}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain bg-black"
          >
            Your browser does not support video playback.
          </video>

          {/* Floating Tag */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-[#D89828] text-black text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 font-sans">
              <Film className="w-3.5 h-3.5" /> {video.categoryName}
            </span>
          </div>
        </div>

        {/* Content Footer */}
        <div className="p-6 sm:p-7 space-y-4 bg-white border-t border-neutral-200 text-neutral-900">
          <div className="flex items-center justify-between gap-4 text-xs font-bold text-neutral-700">
            <div className="flex items-center gap-1.5 text-[#B57C1C]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="text-neutral-900 font-semibold">{video.location}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500 font-medium">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.duration}</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 leading-snug">
            {video.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
            {video.desc}
          </p>

          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3.5">
            <span className="text-xs text-neutral-600 font-medium">
              Ready to start your next construction or fit-out project?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleWhatsApp}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnquire(video);
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md font-bold"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
