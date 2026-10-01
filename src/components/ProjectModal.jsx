import React, { useState } from 'react';
import { X, MapPin, Calendar, CheckCircle2, Ruler, UserCheck, MessageSquare, Sparkles, Film } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';
import Button from './Button';

export default function ProjectModal({ project, onClose, onEnquire }) {
  const [activeMediaTab, setActiveMediaTab] = useState('after');

  if (!project) return null;

  const handleWhatsApp = () => {
    const text = `Hello Burj Star, I saw your project "${project.title}" in ${project.location} and would like to discuss a similar project for my property.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md text-white hover:text-[#D89828] border border-white/10 flex items-center justify-center transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D89828] text-black shadow-md">
              {project.categoryName}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-2 leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs">
            <div>
              <span className="text-neutral-500 block mb-0.5">Location</span>
              <span className="font-semibold text-neutral-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B57C1C]" />
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-0.5">Project Scope</span>
              <span className="font-semibold text-neutral-900 flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 text-[#B57C1C]" />
                {project.area || 'Full Facility'}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-0.5">Timeline / Year</span>
              <span className="font-semibold text-neutral-900 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#B57C1C]" />
                {project.duration || project.year}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-0.5">Client Type</span>
              <span className="font-semibold text-neutral-900 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-[#B57C1C]" />
                {project.client || 'Confidential'}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#946317] mb-2">
              Project Overview
            </h4>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              {project.shortDesc}
            </p>
          </div>

          {/* Engineering Challenge & Solution */}
          {project.challenge && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1.5">
                  The Engineering Challenge
                </h5>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1.5">
                  Our Delivered Solution
                </h5>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {/* Scope Checklist */}
          {project.scope && (
            <div>
              <h4 className="text-sm font-serif font-bold text-neutral-900 mb-3">
                Key Technical Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.scope.map((item, i) => (
                  <li key={i} className="text-xs text-neutral-700 flex items-start gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#B57C1C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project Media Showcase: Before & After Photos & Video Walkthrough */}
          {(project.beforeImages || project.afterImages || project.afterVideo || project.gallery) && (
            <div className="pt-2 border-t border-neutral-200">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h4 className="text-sm font-serif font-bold text-neutral-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B57C1C]" />
                  Project Visual Documentation & Walkthrough
                </h4>
                
                {/* Media Switcher Tabs */}
                <div className="flex items-center gap-1 bg-neutral-200/70 p-1 rounded-xl text-xs font-bold">
                  {project.afterImages && (
                    <button
                      onClick={() => setActiveMediaTab('after')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        activeMediaTab === 'after'
                          ? 'bg-[#D89828] text-black shadow-sm font-black'
                          : 'text-neutral-700 hover:text-black'
                      }`}
                    >
                      After Handover ({project.afterImages.length})
                    </button>
                  )}
                  {project.beforeImages && (
                    <button
                      onClick={() => setActiveMediaTab('before')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        activeMediaTab === 'before'
                          ? 'bg-[#D89828] text-black shadow-sm font-black'
                          : 'text-neutral-700 hover:text-black'
                      }`}
                    >
                      Before / Construction ({project.beforeImages.length})
                    </button>
                  )}
                  {project.afterVideo && (
                    <button
                      onClick={() => setActiveMediaTab('video')}
                      className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                        activeMediaTab === 'video'
                          ? 'bg-black text-[#D89828] shadow-sm font-black'
                          : 'text-neutral-700 hover:text-black'
                      }`}
                    >
                      <Film className="w-3.5 h-3.5 text-[#D89828]" />
                      <span>Video Walkthrough</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Tab 1: After Handover Images */}
              {activeMediaTab === 'after' && project.afterImages && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 animate-fade-in">
                  {project.afterImages.map((imgUrl, idx) => (
                    <div key={idx} className="relative group/img h-32 sm:h-36 rounded-xl overflow-hidden border border-neutral-300 shadow-sm bg-neutral-100">
                      <img src={imgUrl} alt={`${project.title} After ${idx + 1}`} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-emerald-600/90 text-white text-[9px] font-black uppercase tracking-wider shadow">
                        AFTER #{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Before Images */}
              {activeMediaTab === 'before' && project.beforeImages && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 animate-fade-in">
                  {project.beforeImages.map((imgUrl, idx) => (
                    <div key={idx} className="relative group/img h-32 sm:h-36 rounded-xl overflow-hidden border border-neutral-300 shadow-sm bg-neutral-100">
                      <img src={imgUrl} alt={`${project.title} Before ${idx + 1}`} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300 filter brightness-95" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/85 text-amber-400 text-[9px] font-black uppercase tracking-wider border border-amber-500/40 shadow">
                        BEFORE #{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Completed Project Video Walkthrough */}
              {activeMediaTab === 'video' && project.afterVideo && (
                <div className="rounded-2xl overflow-hidden border-2 border-[#D89828] bg-black shadow-xl animate-fade-in">
                  <div className="p-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs text-white">
                    <span className="font-bold flex items-center gap-2">
                      <Film className="w-4 h-4 text-[#D89828]" />
                      {project.videoTitle || 'Completed Project Video Walkthrough'}
                    </span>
                    <span className="text-[10px] font-mono text-[#D89828] bg-[#D89828]/20 px-2 py-0.5 rounded border border-[#D89828]/40">
                      4K Ultra HD
                    </span>
                  </div>
                  <div className="relative aspect-video w-full bg-black">
                    <video
                      src={project.afterVideo}
                      controls
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Fallback to standard gallery if no before/after split */}
              {!project.beforeImages && !project.afterImages && !project.afterVideo && project.gallery && (
                <div className="grid grid-cols-3 gap-2.5">
                  {project.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="h-28 rounded-xl overflow-hidden border border-neutral-200">
                      <img src={imgUrl} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-600 font-medium">
            Need a similar execution for your property in Abu Dhabi?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              onClick={handleWhatsApp}
              variant="whatsapp"
              size="sm"
              icon={MessageSquare}
              className="flex-1 sm:flex-none shadow-sm"
            >
              WhatsApp Discuss
            </Button>
            <Button
              onClick={() => {
                onClose();
                onEnquire(project);
              }}
              variant="gold"
              size="sm"
              className="flex-1 sm:flex-none shadow-sm"
            >
              Request Quote
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
