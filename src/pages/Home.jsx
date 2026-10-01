import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  Compass, 
  Home as HomeIcon, 
  Building2, 
  Armchair, 
  ClipboardList, 
  Star, 
  Award, 
  Users, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Eye,
  Camera,
  X,
  Quote,
  ArrowRight,
  Wrench,
  Wind,
  Zap,
  Droplets,
  HardHat,
  Hammer,
  Paintbrush,
  Grid,
  CloudRain,
  Flame,
  Fan,
  Layers,
  Cpu
} from 'lucide-react';
import SEO from '../components/SEO';
import GalleryModal from '../components/GalleryModal';
import VideoModal from '../components/VideoModal';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ModernTestimonials from '../components/ModernTestimonials';
import HeroStats from '../components/HeroStats';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import { VIDEOS, VIDEO_CATEGORIES } from '../data/videos';
import { REVIEWS, GOOGLE_REVIEWS_SUMMARY } from '../data/reviews';

export default function Home({ onOpenQuoteModal, onSelectService, onSelectProject }) {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [videoFilter, setVideoFilter] = useState('all');
  const [activeStep, setActiveStep] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);

  // Hero Slideshow with Light-Themed Images (Bright Luxury Architecture & Interiors)
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=95",
      tag: "LUXURY RESIDENTIAL VILLAS",
      title: "Timeless Spaces.",
      subtitle: "Built Around You.",
      location: "Saadiyat Island & Yas Island, Abu Dhabi"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=95",
      tag: "COMMERCIAL & CIVIL CONTRACTING",
      title: "Landmark Builds.",
      subtitle: "Engineered For Scale.",
      location: "Al Maryah & Al Reem Island, Abu Dhabi"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=95",
      tag: "TURNKEY INTERIOR FIT-OUT",
      title: "Bespoke Interiors.",
      subtitle: "Crafted To Perfection.",
      location: "Corniche & Saadiyat Beach, Abu Dhabi"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=95",
      tag: "TOTAL PROPERTY CARE",
      title: "24/7 Facility Care.",
      subtitle: "Protecting Asset Value.",
      location: "Abu Dhabi & Western Region"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // 16 Core Engineering Disciplines (in exact required order)
  const coreDisciplines = [
    {
      id: "general-maintenance",
      num: "01",
      title: "General Contracting",
      tagline: "Handyman & Quick Fixes",
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1000&q=85",
      icon: Wrench,
      path: "/services"
    },
    {
      id: "ac-maintenance-repair",
      num: "02",
      title: "AC Maintenance & Repair",
      tagline: "HVAC, Chiller & Coil Wash",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=85",
      icon: Wind,
      path: "/services"
    },
    {
      id: "interior-works",
      num: "03",
      title: "Interior Designs",
      tagline: "Turnkey Fit-Out & Bespoke Spaces",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
      icon: Armchair,
      path: "/services"
    },
    {
      id: "civil-works",
      num: "04",
      title: "Civil Works",
      tagline: "Structural Concrete & Slabs",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
      icon: HardHat,
      path: "/services"
    },
    {
      id: "mep-maintenance",
      num: "05",
      title: "MEP Maintenance",
      tagline: "Total Mechanical, Electrical & Plumbing",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=85",
      icon: Cpu,
      path: "/services"
    },
    {
      id: "elevator-excavator-maintenance",
      num: "06",
      title: "Elevator & Excavator Maintenance",
      tagline: "Vertical Transport & Heavy Machinery",
      image: "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=1000&q=85",
      icon: Layers,
      path: "/services"
    },
    {
      id: "fire-fighting-services",
      num: "07",
      title: "Fire Fighting Services",
      tagline: "Civil Defense Alarms & Pumps",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=85",
      icon: Flame,
      path: "/services"
    },
    {
      id: "chiller-maintenance",
      num: "08",
      title: "Chiller Maintenance and Services",
      tagline: "Central Chillers & Towers",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=85",
      icon: Fan,
      path: "/services"
    },
    {
      id: "electrical-works",
      num: "09",
      title: "Electrical Works",
      tagline: "ADDC Certified Wiring & DB",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=85",
      icon: Zap,
      path: "/services"
    },
    {
      id: "plumbing-works",
      num: "10",
      title: "Plumbing Works",
      tagline: "Pumps, Leak Trace & Drains",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=85",
      icon: Droplets,
      path: "/services"
    },
    {
      id: "tile-works",
      num: "11",
      title: "Tile Works",
      tagline: "Porcelain & Italian Marble",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
      icon: Grid,
      path: "/services"
    },
    {
      id: "carpentry-works",
      num: "12",
      title: "Carpentry Works",
      tagline: "Custom Joinery & Doors",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85",
      icon: Hammer,
      path: "/services"
    },
    {
      id: "painting-works",
      num: "13",
      title: "Painting Works",
      tagline: "Luxury Interior & Facades",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=85",
      icon: Paintbrush,
      path: "/services"
    },
    {
      id: "building-maintenance",
      num: "14",
      title: "Building Maintenance",
      tagline: "Multi-Storey Tower Upkeep",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
      icon: Building2,
      path: "/services"
    },
    {
      id: "annual-maintenance-contract-amc",
      num: "15",
      title: "Annual Maintenance Contract AMC",
      tagline: "Scheduled PPM & 24/7 SLA",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
      icon: ShieldCheck,
      path: "/amc"
    },
    {
      id: "waterproofing-works",
      num: "16",
      title: "Waterproofing Works",
      tagline: "Combo Roof & Tanking",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=85",
      icon: CloudRain,
      path: "/services"
    }
  ];

  const filteredGallery = galleryFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === galleryFilter);

  const filteredVideos = videoFilter === 'all'
    ? VIDEOS
    : VIDEOS.filter(v => v.category === videoFilter);

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Survey",
      phase: "Phase 01",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90",
      desc: "3D laser site survey, structural audit, and transparent itemized BOQ.",
      tag: "Laser 3D Audit"
    },
    {
      num: "02",
      title: "3D BIM & Permits",
      phase: "Phase 02",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
      desc: "Photorealistic BIM models with DMT & Civil Defense approvals.",
      tag: "DMT Permitting"
    },
    {
      num: "03",
      title: "Civil & MEP Build",
      phase: "Phase 03",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=90",
      desc: "Post-tension structures and certified electro-mechanical build.",
      tag: "Structural & MEP"
    },
    {
      num: "04",
      title: "Finishing & Handover",
      phase: "Phase 04",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
      desc: "Italian marble crystallization and zero-defect keys handover.",
      tag: "Zero-Defect Snag"
    },
    {
      num: "05",
      title: "24/7 Beyond Care",
      phase: "Phase 05",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
      desc: "Quarterly preventative upkeep with 60-minute emergency SLA.",
      tag: "60-Min SLA Care"
    }
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans">
      <SEO 
        title="Burj Star | Architecture, Construction & Maintenance Abu Dhabi"
        description="From concept to completion, Burj Star crafts extraordinary spaces that elevate living and stand the test of time across Abu Dhabi."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Fixed Height Viewport - Zero Height Jump On Slide)       */}
      {/* ========================================================================= */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center pt-32 pb-14 sm:pb-16 overflow-hidden select-none">
        
        {/* Slideshow Background Layers with Fixed Dimensions */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transition: 'opacity 1.2s ease-in-out, transform 8s ease-out' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
            />
            {/* Cinematic dark overlay to make white text ultra-crisp and legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 sm:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
          </div>
        ))}

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D89828]/15 rounded-full blur-[130px] pointer-events-none"></div>

        {/* Large Architectural Brand Watermark in Hero Background */}
        <div className="absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 text-[80px] sm:text-[130px] md:text-[170px] lg:text-[210px] font-serif font-black text-white/[0.04] select-none pointer-events-none tracking-tighter leading-none hidden sm:block">
          BURJSTAR
        </div>

        {/* Main Hero Body Container (Fixed Height Text Wrapper) */}
        <div className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full my-auto">
          <div className="flex items-center gap-8">
            
            {/* Left Vertical Architectural Line Indicator */}
            <div className="hidden sm:flex flex-col items-center justify-between h-56 py-1 select-none shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#D89828] shadow-[0_0_10px_#D89828]"></span>
              <div className="w-[1.5px] h-full bg-gradient-to-b from-[#D89828] via-white/30 to-[#D89828] my-2"></div>
              <span className="w-2 h-2 rounded-full bg-[#D89828] shadow-[0_0_10px_#D89828]"></span>
            </div>

            {/* Main Editorial Text with Fixed Height so layout NEVER jumps */}
            <div className="max-w-2xl text-left min-h-[300px] flex flex-col justify-center">
              
              {/* Prestigious Brand Hallmark & Category Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white mb-4 shadow-sm w-fit">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D89828] animate-pulse"></span>
                <span className="font-serif font-black tracking-[0.2em] text-xs sm:text-sm text-white uppercase">
                  BURJ<span className="text-[#D89828]">STAR</span>
                </span>
                <span className="text-white/40 text-xs font-bold">|</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-white/90 uppercase tracking-widest">
                  {heroSlides[currentSlide].tag}
                </span>
              </div>

              {/* Balanced Professional Serif Heading with Burj Star Brand */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif text-white font-extrabold leading-[1.14] mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                <span className="text-white">Burj Star Delivers </span>
                <span className="font-serif italic font-bold text-[#E5AF4D]">
                  {heroSlides[currentSlide].title}
                </span> <br />
                <span className="text-white/95 block mt-1">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>

              {/* Concise High-Contrast Description with Brand Name */}
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans max-w-xl mb-6 font-medium drop-shadow-sm">
                From concept to turnkey delivery, <strong className="text-white font-bold">Burj Star</strong> delivers extraordinary spaces, bespoke fit-outs, and certified engineering upkeep across Abu Dhabi.
              </p>

              {/* Action Buttons & Slideshow Navigation */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#portfolio-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#before-after-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('before-after-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-black/40 hover:bg-black/60 text-white hover:text-[#D89828] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg border border-white/25 hover:border-[#D89828] backdrop-blur-md transition-all shadow-sm group cursor-pointer"
                >
                  <span>Before & After</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D89828] transition-transform group-hover:translate-x-1" />
                </a>

                {/* Fixed Slideshow Controls */}
                <div className="flex items-center gap-1.5 ml-auto sm:ml-4 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-sm">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D89828] text-white hover:text-black flex items-center justify-center transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-bold text-white px-2.5 font-serif">
                    0{currentSlide + 1} / 0{heroSlides.length}
                  </span>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D89828] text-white hover:text-black flex items-center justify-center transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED PROJECTS (Clean Heading Alignment & Large Highlighted Images)  */}
      {/* ========================================================================= */}
      <section id="portfolio-section" className="pb-20 sm:pb-28 bg-[#FBF9F5] text-neutral-900 relative scroll-mt-20">
        
        {/* Dynamic Luxurious Hero Stats Bar (Overlapping Half on Hero & Half on Featured Projects) */}
        <div className="relative z-30 -translate-y-8 sm:-translate-y-1/2 -mb-4 sm:-mb-14">
          <HeroStats onOpenQuoteModal={onOpenQuoteModal} />
        </div>

        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full pt-2 sm:pt-4">
          
          {/* Aligned Top Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-neutral-300 pb-8">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#946317] bg-[#D89828]/20 px-3 py-1 rounded-md border border-[#D89828]/40 mb-3">
                FEATURED PROJECTS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-neutral-900 leading-tight">
                Spaces That Define <span className="text-[#946317] italic">Excellence</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 max-w-xl mt-2 font-medium">
                Signature luxury villas, commercial towers, and multi-year facility maintenance contracts in Abu Dhabi.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 hover:bg-[#D89828] text-xs font-bold uppercase tracking-wider text-white hover:text-black transition-all shadow-md self-start md:self-auto shrink-0 group"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D89828] group-hover:text-black" />
            </Link>
          </div>

          {/* Large Highlighted Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Horizon Residence */}
            <div 
              onClick={() => onOpenQuoteModal('Horizon Residence (Saadiyat Villa)')}
              className="group relative h-[440px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border-2 border-neutral-300 hover:border-[#D89828] transition-all duration-500 hover:-translate-y-1.5"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=95"
                alt="Horizon Residence"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[#D89828] text-[11px] font-bold uppercase tracking-wider border border-[#D89828]">
                  Luxury Villa
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <h4 className="text-xl font-serif font-bold text-white leading-tight group-hover:text-[#D89828] transition-colors">
                    Horizon Residence
                  </h4>
                  <p className="text-xs text-gray-200 font-medium mt-1">Saadiyat Island, Abu Dhabi</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D89828] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  <ArrowUpRight className="w-5 h-5 font-bold" />
                </div>
              </div>
            </div>

            {/* Card 2: Stacked 2 Landscape Cards */}
            <div className="flex flex-col gap-6">
              <div 
                onClick={() => onOpenQuoteModal('Aurora Office Tower')}
                className="group relative h-[207px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border-2 border-neutral-300 hover:border-[#D89828] transition-all duration-500 hover:-translate-y-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=95"
                  alt="Aurora Office Tower"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <h4 className="text-base font-serif font-bold text-white group-hover:text-[#D89828] transition-colors">
                      Aurora Office Tower
                    </h4>
                    <p className="text-[11px] text-gray-200 font-medium">Al Reem Island, Abu Dhabi</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D89828] text-black flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
                    <ArrowUpRight className="w-4 h-4 font-bold" />
                  </div>
                </div>
              </div>

              <div 
                onClick={() => onOpenQuoteModal('Edgewood Villa')}
                className="group relative h-[207px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border-2 border-neutral-300 hover:border-[#D89828] transition-all duration-500 hover:-translate-y-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=95"
                  alt="Edgewood Villa"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <h4 className="text-base font-serif font-bold text-white group-hover:text-[#D89828] transition-colors">
                      Edgewood Villa
                    </h4>
                    <p className="text-[11px] text-gray-200 font-medium">Yas Island, Abu Dhabi</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D89828] text-black flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
                    <ArrowUpRight className="w-4 h-4 font-bold" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Maple Street Residences */}
            <div 
              onClick={() => onOpenQuoteModal('Maple Street Residences')}
              className="group relative h-[440px] rounded-3xl overflow-hidden cursor-pointer shadow-xl border-2 border-neutral-300 hover:border-[#D89828] transition-all duration-500 hover:-translate-y-1.5"
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=95"
                alt="Maple Street Residences"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[#D89828] text-[11px] font-bold uppercase tracking-wider border border-[#D89828]">
                  Commercial AMC
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <h4 className="text-xl font-serif font-bold text-white leading-tight group-hover:text-[#D89828] transition-colors">
                    Maple Residences
                  </h4>
                  <p className="text-xs text-gray-200 font-medium mt-1">Al Maryah Island, Abu Dhabi</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D89828] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  <ArrowUpRight className="w-5 h-5 font-bold" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.5 BEFORE AFTER SLIDER SHOWCASE                                          */}
      {/* ========================================================================= */}
      <section id="before-after-section" className="py-24 sm:py-32 bg-white text-neutral-900 border-t border-neutral-200 relative scroll-mt-20">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-neutral-200 pb-8">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#946317] bg-[#D89828]/15 px-3.5 py-1 rounded-md border border-[#D89828]/40 mb-3">
                LIVE TRANSFORMATIONS SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-neutral-900 leading-tight">
                Before & After <span className="text-gold-gradient italic">Restoration & Finish</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mt-2 font-normal">
                Witness all real transformations at once. Drag the interactive split slider on any project to compare initial site conditions against our handover finishes.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D89828] hover:bg-[#E5AF4D] text-xs font-bold uppercase tracking-wider text-black transition-all shadow-gold-sm hover:shadow-gold-glow group self-start md:self-auto shrink-0"
            >
              <span>Explore All Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* All Transformations Displayed At Once */}
          <BeforeAfterSlider 
            onOpenQuoteModal={onOpenQuoteModal} 
            onSelectProject={onSelectProject}
          />

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE ENGINEERING DISCIPLINES (16 Visual Trades with Images)            */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] text-neutral-900 border-t border-neutral-200 relative overflow-hidden">
        
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D89828]/10 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
          
          {/* Top Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-neutral-200 pb-8">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#946317] bg-[#D89828]/15 px-3.5 py-1 rounded-md border border-[#D89828]/40 mb-3">
                CORE ENGINEERING DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-neutral-900 leading-tight">
                Core Engineering <span className="text-gold-gradient italic">Disciplines</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mt-2 font-normal">
                Comprehensive in-house technical trades and certified engineering solutions delivered across residential villas, commercial towers, and industrial facilities in Abu Dhabi.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D89828] hover:bg-[#E5AF4D] text-xs font-bold uppercase tracking-wider text-black transition-all shadow-gold-sm hover:shadow-gold-glow self-start md:self-auto shrink-0 group"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* 16 Core Disciplines Clean Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5 sm:gap-5">
            {coreDisciplines.map((srv) => {
              return (
                <div
                  key={srv.id}
                  onClick={() => onOpenQuoteModal(`Discipline: ${srv.title}`)}
                  className="group relative h-[310px] sm:h-[330px] rounded-2xl overflow-hidden cursor-pointer shadow-md border-2 border-neutral-200 hover:border-[#D89828] transition-all duration-500 hover:-translate-y-2 bg-neutral-900 flex flex-col justify-end"
                >
                  {/* Full Background Visual Image */}
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 contrast-105 group-hover:brightness-105"
                  />
                  
                  {/* Dark Vignette Overlay for High Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Bottom Content Metadata (Clean, Modern & Minimalist) */}
                  <div className="relative z-10 p-5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D89828] block mb-1">
                      {srv.tagline}
                    </span>
                    <h3 className="text-base font-serif font-bold text-white group-hover:text-[#D89828] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Trust & Assurance Matrix */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3 first:pl-0">
              <ShieldCheck className="w-6 h-6 text-[#B57C1C] shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 block">Grade-A ADM Approved</span>
                <span className="text-[10px] text-neutral-500">Estidama Pearl-2 Certified</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3">
              <Sparkles className="w-6 h-6 text-[#B57C1C] shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 block">60-Min Emergency SLA</span>
                <span className="text-[10px] text-neutral-500">24/7 Rapid Response Dispatch</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3">
              <Users className="w-6 h-6 text-[#B57C1C] shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 block">100% In-House Engineers</span>
                <span className="text-[10px] text-neutral-500">Zero Subcontracting Dilution</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3 last:pr-0">
              <Award className="w-6 h-6 text-[#B57C1C] shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 block">10-Year Warranty</span>
                <span className="text-[10px] text-neutral-500">On Waterproofing & Structures</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CURATED ARCHITECTURAL VISUAL GALLERY (Full-Width Photo Showcase)        */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white text-neutral-900 border-t border-neutral-200 relative">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#946317] bg-[#D89828]/15 px-3.5 py-1 rounded-md border border-[#D89828]/40 mb-3">
              VISUAL INSPIRATION & PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 leading-tight mb-3">
              Curated Architectural <span className="text-gold-gradient italic">Visual Gallery</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              High-resolution photographic portfolio of our specialized engineering, fit-out, and property maintenance works across Abu Dhabi.
            </p>
          </div>

          {/* Full-Width Photo Gallery Grid (Pure Image Showcase) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative h-[300px] sm:h-[340px] xl:h-[360px] rounded-2xl overflow-hidden cursor-pointer shadow-md border-2 border-neutral-200 hover:border-[#D89828] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(216,152,40,0.15)] bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt="Gallery Showcase"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                />
                
                {/* Subtle Hover Center Glow & Expand Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-md text-[#D89828] border border-[#D89828]/60 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Camera className="w-5 h-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.5 ON-SITE VIDEOS & WORK REELS GALLERY (Vibrant Video Showcase)          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-neutral-900 border-t border-neutral-200 relative">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-neutral-200 pb-8">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#946317] bg-[#D89828]/15 px-3.5 py-1 rounded-md border border-[#D89828]/40 mb-3">
                LIVE ON-SITE CRAFTSMANSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-neutral-900 leading-tight">
                On-Site Videos & <span className="text-gold-gradient">Work Reels</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mt-2 font-normal">
                Watch 4K drone fly-throughs, construction timelapses, and vertical reels of our luxury fit-out executions across Abu Dhabi.
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
                      ? 'bg-[#D89828] text-black shadow-gold-sm'
                      : 'bg-white text-neutral-700 hover:text-black hover:bg-neutral-100 border border-neutral-300'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Videos & Reels Grid (Mixed 16:9 and 9:16 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((vid) => {
              const isVertical = vid.aspect === '9:16';
              return (
                <div
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl border-2 border-neutral-300 hover:border-[#D89828] transition-all duration-500 hover:-translate-y-2 bg-neutral-900 flex flex-col justify-between"
                  style={{ minHeight: isVertical ? '440px' : '320px' }}
                >
                  {/* Poster Image Thumbnail */}
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20"></div>

                  {/* Top Badges */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-black/85 text-[#D89828] text-[10px] font-black uppercase tracking-wider border border-[#D89828]/50 shadow-md">
                      {vid.categoryName}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                      {vid.duration}
                    </span>
                  </div>

                  {/* Pulsing Play Button Center */}
                  <div className="relative z-10 my-auto flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#D89828] text-black flex items-center justify-center shadow-gold-glow group-hover:scale-115 transition-transform duration-300">
                      <svg className="w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Metadata */}
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
      {/* 5. OUR PROVEN METHODOLOGY (Exact Modern Reference Layout)                 */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white text-neutral-900 relative overflow-hidden border-t border-neutral-200">
        
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D89828]/5 rounded-full blur-[220px] pointer-events-none"></div>

        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8 border-b border-neutral-200 pb-10">
            <div>
              <span className="text-[#B57C1C] text-xs sm:text-sm font-semibold tracking-wider block mb-3">
                / Engineering Methodology
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-neutral-900 tracking-tight leading-[1.08]">
                Certified<br />
                <span className="text-gold-gradient italic">Excellence</span>
              </h2>
            </div>

            <div className="lg:max-w-md">
              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                From initial 3D laser scanning and municipality permitting to turnkey zero-defect execution and 24/7 care. Choose reliability, choose Burj Star.
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-5 text-xs sm:text-sm font-bold">
                <button
                  onClick={onOpenQuoteModal}
                  className="text-[#B57C1C] hover:text-[#D89828] inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
                >
                  <span>Consult Our Engineers</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onOpenQuoteModal("Methodology & Project Tender")}
                  className="text-neutral-700 hover:text-black inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
                >
                  <span>Request Tender Schedule</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* 5-Card Visual Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => {
                    setActiveStep(idx);
                    onOpenQuoteModal(`Process Phase: ${step.title}`);
                  }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative h-[360px] sm:h-[390px] rounded-[26px] overflow-hidden cursor-pointer transition-all duration-500 border-2 ${
                    isActive 
                      ? 'border-[#D89828] shadow-[0_10px_30px_rgba(216,152,40,0.2)] -translate-y-2' 
                      : 'border-neutral-300 hover:border-[#D89828]/70 hover:-translate-y-1.5 shadow-md'
                  } bg-neutral-900`}
                >
                  {/* Full Background Image */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter ${
                      isActive ? 'brightness-105 contrast-105' : 'brightness-90 contrast-100 group-hover:brightness-100'
                    }`}
                  />

                  {/* Dark Vignette Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>

                  {/* Top Step Number Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono font-bold text-gray-300 border border-white/10">
                      {step.num}
                    </span>
                  </div>

                  {/* Bottom Text Label & Circular Action Button */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                    <div className="flex-1 pr-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D89828] block mb-1">
                        {step.tag}
                      </span>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-snug group-hover:text-[#D89828] transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Circular Action Button */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-xl ${
                        isActive
                          ? 'bg-[#D89828] text-black scale-105 shadow-gold-glow'
                          : 'bg-[#181920]/90 text-white/90 border border-neutral-700/80 group-hover:bg-[#D89828] group-hover:text-black group-hover:border-[#D89828] group-hover:scale-105'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Minimalist Progress Slider Track */}
          <div className="mt-12 flex justify-center items-center">
            <div className="w-48 sm:w-64 h-[3px] bg-neutral-200 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-[#D89828] rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_#D89828]"
                style={{
                  width: '20%',
                  transform: `translateX(${activeStep * 100}%)`
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CLIENT TESTIMONIALS & GOOGLE REVIEWS SECTION                           */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] text-neutral-900 border-t border-neutral-200 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ModernTestimonials onOpenQuoteModal={onOpenQuoteModal} />
        </div>
      </section>

      {/* Visual Gallery Lightbox Modal */}
      {selectedGalleryItem && (
        <GalleryModal
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
          onEnquire={(item) => {
            setSelectedGalleryItem(null);
            onOpenQuoteModal(item.title);
          }}
        />
      )}

      {/* Video and Reels Playback Modal */}
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
