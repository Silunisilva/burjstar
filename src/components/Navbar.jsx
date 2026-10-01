import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Home,
  Building2,
  Wrench,
  ShieldCheck,
  Briefcase,
  Users,
  PhoneCall,
  FileText,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
  MapPin,
  Compass
} from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';
import { SERVICES } from '../data/services';

// Custom Worker with Tool (Man + Wrench) Icon for Services
function WorkerWithTool({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Safety Hardhat / Worker Head */}
      <path d="M5 8a3.5 3.5 0 0 1 7 0" />
      <path d="M4 8.5h9" />
      <path d="M6 9v1a2.5 2.5 0 0 0 5 0V9" />
      
      {/* Worker Body */}
      <path d="M2 20v-1a4 4 0 0 1 4-4h4" />
      
      {/* Tool / Wrench */}
      <path d="m15 15 5.5 5.5" />
      <path d="M18.5 11.5a2.5 2.5 0 0 0-2.8-2.3l.8.8a1 1 0 0 1 0 1.4l-1.4 1.4a1 1 0 0 1-1.4 0l-.8-.8a2.5 2.5 0 0 0 2.3 2.8l2.8 2.8 2.5-2.5-2-2z" />
    </svg>
  );
}

export default function Navbar({ onOpenQuoteModal }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesFlyoutOpen, setIsServicesFlyoutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesFlyoutOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Building2 },
    { name: '16 Services', path: '/services', icon: WorkerWithTool, isServices: true },
    { name: 'AMC Packages', path: '/amc', icon: ShieldCheck, badge: 'Popular' },
    { name: 'Projects & Reels', path: '/projects', icon: Briefcase },
    { name: 'Careers', path: '/careers', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: PhoneCall },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP HEADER BAR (Compact Navbar with Pop-Out High-Visibility Logo)      */}
      {/* ========================================================================= */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/98 backdrop-blur-md py-2 border-b border-neutral-200 shadow-md'
          : 'bg-white/95 backdrop-blur-md py-2.5 border-b border-neutral-200/90 shadow-sm'
          }`}
      >
        <div className="max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between h-14 sm:h-16">

          {/* Brand Logo & Accreditation (3D Pop-Out Floating Card extending beyond navbar boundary) */}
          <div className="flex items-center gap-3 sm:gap-6 relative">
            <Link
              to="/"
              className="relative flex items-center group shrink-0 -my-3 sm:-my-5 z-50"
              aria-label="Burj Star Home"
            >
              {/* 3D Elevated Card with Gloss & Beveled Edges Pop-out */}
              <div className="relative bg-gradient-to-b from-white via-white to-neutral-50 rounded-2xl sm:rounded-3xl px-4 sm:px-6 pt-3.5 sm:pt-4.5 pb-2.5 sm:pb-3.5 mt-20 border-t border-l border-white/90 border-r-2 border-r-[#D89828]/80 border-b-4 border-b-[#B57C1C] shadow-[0_16px_36px_rgba(0,0,0,0.22),0_6px_18px_rgba(216,152,40,0.35),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.06)] transition-all duration-300 transform-gpu group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_50px_rgba(0,0,0,0.3),0_8px_26px_rgba(216,152,40,0.5)] group-hover:scale-105 active:translate-y-0.5 flex items-center justify-center overflow-hidden">
                {/* 3D Glass Light Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/90 pointer-events-none opacity-80" />

                <img
                  src="/logo.png"
                  alt="Burj Star General Maintenance & Contracting"
                  className="relative z-10 h-16 sm:h-20 md:h-24 lg:h-26 w-auto max-w-none object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-2.5 pl-4 sm:pl-5 border-l-2 border-neutral-200 text-xs text-neutral-700 font-semibold">
              <MapPin className="w-4 h-4 text-[#B57C1C]" />
              <span>Abu Dhabi, UAE</span>
              <span className="text-neutral-300">•</span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#946317] bg-[#D89828]/20 px-3 py-1 rounded-full border border-[#D89828]/50 shadow-sm">
                ADM Grade-A Licensed
              </span>
            </div>
          </div>

          {/* Right Header Actions (Hotline + AMC Quote Button + Mobile Menu Trigger) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* 24/7 Rapid Emergency Phone */}
            <a
              href={`tel:${COMPANY_INFO.emergencyPhoneRaw || COMPANY_INFO.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200/90 border border-neutral-300 text-neutral-900 text-xs font-bold transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#B57C1C]" />
              <span>24/7 Hotline: {COMPANY_INFO.emergencyPhone}</span>
            </a>

            {/* Get AMC Quote Primary CTA */}
            <button
              onClick={() => onOpenQuoteModal('Header Direct Quote')}
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>Get AMC Quote</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-neutral-900 hover:text-black lg:hidden rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 shadow-sm"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HIGH-VISIBILITY FLOATING VERTICAL DOCK (Icons + Name on Hover + Logo)  */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
        <div className="bg-white/98 backdrop-blur-2xl border-2 border-[#D89828] shadow-[0_20px_60px_rgba(0,0,0,0.18),0_0_35px_rgba(216,152,40,0.3)] rounded-3xl p-2 sm:p-2.5 flex flex-col items-center gap-2.5 transition-all duration-300 ring-1 ring-black/5 hover:shadow-[0_25px_70px_rgba(0,0,0,0.25),0_0_45px_rgba(216,152,40,0.4)]">

          {/* Top High-Visibility Navbar Logo (3D Pop-out Floating Emblem Badge) */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center my-2">
            <Link
              to="/"
              className="absolute -inset-2.5 sm:-inset-3.5 rounded-2xl m-2 sm:rounded-3xl bg-gradient-to-b from-white via-white to-neutral-50 p-2.5 flex items-center justify-center border-t border-l border-white/90 border-r-2 border-r-[#D89828] border-b-4 border-b-[#946317] shadow-[0_12px_28px_rgba(0,0,0,0.24),0_6px_18px_rgba(216,152,40,0.45),inset_0_2px_4px_rgba(255,255,255,1)] transition-all duration-300 transform-gpu group hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.32),0_8px_25px_rgba(216,152,40,0.6)] active:translate-y-0.5 z-10 overflow-hidden"
              aria-label="Burj Star Home"
            >
              {/* 3D Glass Light Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-white/70 pointer-events-none opacity-80" />

              <img
                src="/logo.png"
                alt="Burj Star Logo"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-transform duration-200"
              />

              {/* Tooltip Label on Hover */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-neutral-950 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl whitespace-nowrap shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50 border border-[#D89828]/60 flex items-center gap-2">
                <span className="text-[#D89828]">★</span>
                <span>BURJ STAR HOME</span>
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-neutral-950 border-t border-r border-[#D89828]/60 rotate-45"></div>
              </div>
            </Link>
          </div>

          {/* Gold Decorative Divider */}
          <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#D89828] to-transparent my-0.5" />

          {/* Vertically Stacked Icon Navigation Items */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const IconComponent = link.icon;

              // 16 SERVICES Link with Icon + Flyout Menu on hover
              if (link.isServices) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setIsServicesFlyoutOpen(true)}
                    onMouseLeave={() => setIsServicesFlyoutOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-200 select-none shadow-sm ${active
                        ? 'bg-[#D89828] text-black shadow-md scale-110 font-black ring-2 ring-[#B57C1C]'
                        : 'text-neutral-800 bg-neutral-100/90 hover:bg-[#D89828] hover:text-black hover:scale-110 border border-neutral-200 hover:border-[#D89828]'
                        }`}
                      aria-label={link.name}
                    >
                      <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
                    </Link>

                    {/* Hover Tooltip Label (Visible when Flyout is not hovered) */}
                    {!isServicesFlyoutOpen && (
                      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-neutral-950 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl whitespace-nowrap shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50 border border-[#D89828]/60 flex items-center gap-2">
                        <span>{link.name}</span>
                        <ChevronLeft className="w-4 h-4 text-[#D89828]" />
                        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-neutral-950 border-t border-r border-[#D89828]/60 rotate-45"></div>
                      </div>
                    )}

                    {/* 16 Services Left Flyout Panel */}
                    {isServicesFlyoutOpen && (
                      <div className="absolute right-full top-1/2 -translate-y-1/2 pr-4 w-[580px] xl:w-[640px] z-50 animate-fade-in">
                        <div className="bg-white border-2 border-[#D89828] rounded-3xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25),0_0_40px_rgba(216,152,40,0.2)]">

                          <div className="flex items-center justify-between pb-3.5 mb-4 border-b-2 border-neutral-100">
                            <div className="flex items-center gap-2.5">
                              <span className="w-3 h-3 rounded-full bg-[#D89828] animate-pulse"></span>
                              <h4 className="text-xs font-serif font-black text-neutral-900 uppercase tracking-wider">
                                All 16 Specialized Service Disciplines
                              </h4>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#D89828]/20 text-[#946317] border border-[#D89828]/50 shadow-sm">
                              Abu Dhabi Core
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2.5 mb-4">
                            {SERVICES.map((srv, idx) => (
                              <Link
                                key={srv.id}
                                to={`/services#${srv.id}`}
                                onClick={() => setIsServicesFlyoutOpen(false)}
                                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-neutral-50 hover:bg-amber-50 border border-neutral-200 hover:border-[#D89828] transition-all text-[11px] font-bold text-neutral-900 hover:text-black group/item"
                              >
                                <span className="font-mono text-[#B57C1C] font-black text-[11px] mt-0.5">
                                  {(idx + 1).toString().padStart(2, '0')}.
                                </span>
                                <span className="truncate group-hover/item:translate-x-0.5 transition-transform">{srv.title}</span>
                              </Link>
                            ))}
                          </div>

                          <div className="pt-3.5 border-t border-neutral-200 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-neutral-600">
                              ADM Grade-A & ADDC Certified
                            </span>
                            <Link
                              to="/services"
                              onClick={() => setIsServicesFlyoutOpen(false)}
                              className="px-4 py-2 bg-[#D89828] hover:bg-[#E5AF4D] text-black font-extrabold text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md"
                            >
                              View All Services →
                            </Link>
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-200 select-none shadow-sm ${active
                      ? 'bg-[#D89828] text-black shadow-md scale-110 font-black ring-2 ring-[#B57C1C]'
                      : 'text-neutral-800 bg-neutral-100/90 hover:bg-[#D89828] hover:text-black hover:scale-110 border border-neutral-200 hover:border-[#D89828]'
                      }`}
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
                    {link.badge && !active && (
                      <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#D89828] ring-2 ring-white animate-pulse"></span>
                    )}
                  </Link>

                  {/* Hover Tooltip Label (High Contrast Luxury Badge) */}
                  <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-neutral-950 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl whitespace-nowrap shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50 border border-[#D89828]/60 flex items-center gap-2">
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-[#D89828] text-black">
                        {link.badge}
                      </span>
                    )}
                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-neutral-950 border-t border-r border-[#D89828]/60 rotate-45"></div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Gold Decorative Divider */}
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#D89828] to-transparent my-0.5" />

          {/* Quick Action Icons at Bottom of Vertical Dock */}
          <div className="flex flex-col gap-2">
            {/* Get Quote Quick Icon */}
            <div className="relative group">
              <button
                onClick={() => onOpenQuoteModal('Vertical Nav Quote')}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-amber-500/15 hover:bg-[#D89828] text-[#946317] hover:text-black border-2 border-[#D89828]/60 hover:border-[#D89828] transition-all duration-200 shadow-sm hover:scale-110"
                aria-label="Get AMC Quote"
              >
                <FileText className="w-5 h-5 stroke-[2.4]" />
              </button>
              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-neutral-950 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl whitespace-nowrap shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50 border border-[#D89828]/60 flex items-center gap-2">
                <span>Get AMC Quote</span>
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-neutral-950 border-t border-r border-[#D89828]/60 rotate-45"></div>
              </div>
            </div>

            {/* WhatsApp Quick Icon */}
            <div className="relative group">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white transition-all duration-200 shadow-md hover:scale-110 ring-2 ring-[#25D366]/30"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-5 h-5 stroke-[2.4]" />
              </a>
              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-neutral-950 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl whitespace-nowrap shadow-2xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50 border border-[#D89828]/60 flex items-center gap-2">
                <span className="text-[#25D366]">●</span>
                <span>WhatsApp Direct</span>
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-neutral-950 border-t border-r border-[#D89828]/60 rotate-45"></div>
              </div>
            </div>
          </div>

        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 3. MOBILE VERTICAL DRAWER (Responsive)                                    */}
      {/* ========================================================================= */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white border-l-2 border-neutral-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-neutral-100">
                <Link to="/" onClick={() => setIsMobileOpen(false)} className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="Burj Star Logo"
                    className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2.5 text-neutral-700 hover:text-black rounded-xl hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Vertical Text Links on Mobile */}
              <nav className="mt-6 flex flex-col gap-2.5">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  const IconComponent = link.icon;

                  if (link.isServices) {
                    return (
                      <div key={link.name} className="flex flex-col">
                        <div className="flex items-center justify-between rounded-xl overflow-hidden">
                          <Link
                            to={link.path}
                            onClick={() => setIsMobileOpen(false)}
                            className={`flex-1 flex items-center gap-3 px-4 py-3 text-xs font-extrabold tracking-wider uppercase transition-all ${active
                              ? 'bg-[#D89828] text-black font-black shadow-sm'
                              : 'text-neutral-800 hover:text-black hover:bg-neutral-100'
                              }`}
                          >
                            <IconComponent className="w-4.5 h-4.5 text-[#B57C1C]" />
                            <span>{link.name}</span>
                          </Link>
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="p-3 bg-neutral-100 text-neutral-800 hover:text-black ml-1 rounded-xl"
                            aria-label="Toggle 16 services"
                          >
                            <ChevronDown
                              className={`w-4 h-4 text-[#B57C1C] transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''
                                }`}
                            />
                          </button>
                        </div>

                        {/* Mobile 16 Disciplines list */}
                        {isMobileServicesOpen && (
                          <div className="mt-2 p-3.5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-2 animate-fade-in">
                            <div className="text-[10px] font-black text-[#946317] uppercase tracking-wider mb-2">
                              16 Core Disciplines:
                            </div>
                            {SERVICES.map((srv, idx) => (
                              <Link
                                key={srv.id}
                                to={`/services#${srv.id}`}
                                onClick={() => setIsMobileOpen(false)}
                                className="block py-1.5 text-xs font-semibold text-neutral-800 hover:text-[#B57C1C] transition-colors"
                              >
                                <span className="font-mono text-[#B57C1C] text-[11px] mr-2 font-black">
                                  {(idx + 1).toString().padStart(2, '0')}.
                                </span>
                                {srv.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all ${active
                        ? 'bg-[#D89828] text-black font-black shadow-sm'
                        : 'text-neutral-800 hover:text-black hover:bg-neutral-100'
                        }`}
                    >
                      <IconComponent className="w-4.5 h-4.5 text-[#B57C1C]" />
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="ml-auto text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#D89828] text-black">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t-2 border-neutral-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    onOpenQuoteModal('Mobile Drawer Quote');
                  }}
                  className="w-full py-3.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
                >
                  Request AMC Quote
                </button>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl text-center shadow-md transition-all"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-neutral-100 text-xs text-neutral-700 font-medium">
              <p>Al Nahyan, Abu Dhabi, UAE</p>
              <p className="text-[#B57C1C] font-extrabold mt-1">
                {COMPANY_INFO.emergencyPhone || COMPANY_INFO.phone}
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}



