import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

export default function Footer({ onOpenQuoteModal }) {
  return (
    <footer className="bg-[#F8FAFC] text-neutral-800 border-t border-neutral-200 pt-20 pb-8 relative overflow-hidden">

      {/* Background Architectural Blueprint Sketch Graphic */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[350px] opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 400 300" className="w-full h-full stroke-[#D89828] fill-none" strokeWidth="0.8">
          <rect x="50" y="50" width="300" height="200" strokeDasharray="4 4" />
          <line x1="50" y1="150" x2="350" y2="150" />
          <line x1="200" y1="50" x2="200" y2="250" />
          <polygon points="50,50 150,20 350,20 350,50" />
          <line x1="150" y1="20" x2="150" y2="150" />
          <circle cx="200" cy="150" r="40" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">

        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-200 items-start">

          {/* Col 1: Editorial Heading & CTA (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h3 className="text-3xl sm:text-4xl font-serif text-neutral-900 leading-[1.2] mb-6">
              Let's Build <br />
              Something <br />
              <span className="italic font-normal text-neutral-600">Extraordinary</span>
            </h3>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-gold-sm hover:shadow-gold-glow group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Col 2: Contact Info & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-xs sm:text-sm">
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-[#B57C1C] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B57C1C] shrink-0" />
                <span>{COMPANY_INFO.email} / {COMPANY_INFO.secondaryEmail}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-[#B57C1C] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B57C1C] shrink-0" />
                <span>{COMPANY_INFO.phoneDisplay || COMPANY_INFO.phone} (9:00 AM - 6:00 PM)</span>
              </a>

              <div className="flex items-start gap-3 text-neutral-600">
                <MapPin className="w-4 h-4 text-[#B57C1C] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
            </div>

            {/* Social Circle Icons with Brand Logos */}
            <div className="pt-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-2.5">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border-2 border-neutral-200 hover:border-[#0A66C2] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-[#0A66C2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 1.64 1.64 1.64 1.64 0 0 0-1.64-1.64Z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border-2 border-neutral-200 hover:border-[#E4405F] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-[#E4405F] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border-2 border-neutral-200 hover:border-[#25D366] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href={COMPANY_INFO.social.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border-2 border-neutral-200 hover:border-black flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border-2 border-neutral-200 hover:border-[#1877F2] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Brand Monogram & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="bg-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl border-2 border-neutral-200 hover:border-[#D89828] shadow-sm inline-flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Burj Star Logo"
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-sm"
                />
              </div>
            </Link>

            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              We provide turnkey general maintenance, certified AMC packages, and specialized contracting that elevate how people live and work across Abu Dhabi.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-neutral-600">
              <Link to="/about" className="hover:text-[#B57C1C]">About</Link>
              <Link to="/services" className="hover:text-[#B57C1C]">Services</Link>
              <Link to="/amc" className="hover:text-[#B57C1C] text-[#B57C1C] font-bold">AMC Packages</Link>
              <Link to="/projects" className="hover:text-[#B57C1C]">Projects</Link>
              <Link to="/careers" className="hover:text-[#B57C1C]">Careers</Link>
              <Link to="/contact" className="hover:text-[#B57C1C]">Contact</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} BURJSTAR ARCHITECTURE & MAINTENANCE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-800 cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-neutral-800 cursor-pointer">TERMS OF SERVICE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
