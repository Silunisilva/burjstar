import React from 'react';
import { MapPin, Calendar, ArrowUpRight, Eye } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const isLarge = project.size === 'large';
  const isWide = project.size === 'wide';

  return (
    <div 
      onClick={() => onSelect(project)}
      className={`group relative overflow-hidden rounded-2xl bg-[#121318] border border-neutral-700/80 hover:border-[#D89828] cursor-pointer transition-all duration-500 shadow-xl hover:shadow-gold-sm ${
        isLarge ? 'md:col-span-2 md:row-span-2 min-h-[380px] lg:min-h-[460px]' : 
        isWide ? 'md:col-span-2 min-h-[280px] lg:min-h-[340px]' : 
        'min-h-[280px] lg:min-h-[340px]'
      }`}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
      />

      {/* High-Contrast Gradient Overlay for crystal clear readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20 opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>

      {/* Top Badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-black/90 backdrop-blur-md text-[#D89828] border border-[#D89828]/50 shadow-md">
          {project.categoryName}
        </span>
        
        <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D89828] group-hover:text-black group-hover:border-[#D89828] transition-all duration-300 shadow-lg">
          <Eye className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-10 flex flex-col justify-end">
        <div className="flex items-center gap-4 text-xs font-semibold text-gray-200 mb-2">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D89828]" />
            {project.location}
          </span>
          {project.year && (
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Calendar className="w-3.5 h-3.5 text-[#D89828]" />
              {project.year}
            </span>
          )}
        </div>

        <h3 className={`font-serif font-bold text-white group-hover:text-[#D89828] transition-colors leading-tight ${
          isLarge ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-lg sm:text-xl'
        }`}>
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 mt-2.5 font-normal leading-relaxed">
          {project.shortDesc}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D89828] group-hover:translate-x-1 transition-transform">
          <span>View Project Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

    </div>
  );
}
