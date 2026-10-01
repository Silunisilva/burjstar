// Featured and Portfolio Projects for Burj Star Construction & Property Maintenance
export const PROJECT_CATEGORIES = [
  { id: "all", name: "All Projects" },
  { id: "construction", name: "Construction & Civil" },
  { id: "maintenance", name: "Property Maintenance & AMC" },
  { id: "fitout", name: "Interior & Fit-Out" },
  { id: "hvac", name: "HVAC & MEP" },
  { id: "waterproofing", name: "Waterproofing" }
];

export const PROJECTS = [
  {
    id: "luxury-villa-saadiyat",
    title: "AL Reem Radiant Tower Interior Designs",
    category: "fitout",
    categoryName: "Interior & Fit-Out",
    location: "Radiant Tower, Al Reem Island, Abu Dhabi",
    client: "Radiant Tower Private Residence",
    year: "2025",
    duration: "55 Days (March 2 – April 27, 2025)",
    area: "Luxury Tower Residence & Living Spaces",
    image: "/images/beforenafter/interior/a-1.webp",
    featured: true,
    size: "large", // for masonry layout
    shortDesc: "A breathtaking turnkey interior transformation delivered within an expedited 55-day timeline (2nd March to 27th April 2025) in Radiant Tower, Al Reem Island. This comprehensive high-rise project encompassed bespoke civil spatial remodeling, advanced MEP infrastructure, designer gypsum false ceilings with ambient cove illumination, large-format precision tile works, luxury architectural painting, and custom contemporary woodwork.",
    challenge: "Executing a complete multi-trade luxury interior transformation—including MEP re-engineering, multi-level ceiling integration, and precision tiling—under strict high-rise building management regulations within a compressed 55-day handover schedule.",
    solution: "Mobilized specialized interior fit-out craftsmen, implemented laser-aligned surface leveling, and synchronized phased trade execution to achieve flawless five-star handover with zero operational disruption and full municipal compliance.",
    scope: [
      "Complete interior space planning & turnkey civil modifications",
      "Integrated MEP engineering (HVAC airflow, smart lighting & electrical DB)",
      "Multi-layered architectural gypsum ceilings with hidden LED coves",
      "Precision large-format porcelain & Italian marble tiling",
      "Luxury interior decorative painting & washable wall finishes",
      "Custom doors, feature wall paneling & architectural woodwork",
      "Fast-track 55-day delivery (March 2 – April 27, 2025) with building NOCs"
    ],
    // Before & After Gallery Images & Project Video Walkthrough
    beforeImages: [
      "/images/beforenafter/interior/b-1.webp",
      "/images/beforenafter/interior/b-2.jpeg"
    ],
    afterImages: [
      "/images/beforenafter/interior/a-1.webp",
      "/images/beforenafter/interior/a-2.webp",
      "/images/beforenafter/interior/a-3.webp",
      "/images/beforenafter/interior/a-4.webp"
    ],
    beforeVideo: "/images/beforenafter/interior/b-vd1.mp4",
    afterVideo: "/images/beforenafter/interior/a-vd1.mp4",
    videoTitle: "Completed Whole Project Video Walkthrough",
    gallery: [
      "/images/beforenafter/interior/a-1.webp",
      "/images/beforenafter/interior/a-2.webp",
      "/images/beforenafter/interior/a-3.webp",
      "/images/beforenafter/interior/a-4.webp"
    ]
  },
  {
    id: "commercial-tower-amc-reem",
    title: "Commercial Tower Total AMC & Facilities Care",
    category: "maintenance",
    categoryName: "Property Maintenance & AMC",
    location: "Al Reem Island, Abu Dhabi",
    client: "Prime Commercial Real Estate Group",
    year: "Ongoing (2023 - Present)",
    duration: "Multi-Year AMC",
    area: "34 Floors / 450,000 sq.ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    size: "normal",
    shortDesc: "Full comprehensive Annual Maintenance Contract covering central chillers, high-speed elevators, fire alarm systems, and 24/7 on-site technical teams.",
    challenge: "Maintaining continuous 100% operational uptime for 80+ tenant corporate offices with strict noise and response SLAs.",
    solution: "Stationed 24/7 dedicated certified MEP technician crew with computerized CAFM ticket tracking and automated preventive scheduling.",
    scope: [
      "24/7 On-site MEP engineering & rapid helpdesk",
      "Quarterly chiller plant, pumps, and VAV box balancing",
      "Elevator compliance & Civil Defense safety audits",
      "Power factor correction and electrical distribution upkeep"
    ]
  },
  {
    id: "executive-office-fitout",
    title: "Executive Corporate HQ Turnkey Interior Fit-Out",
    category: "fitout",
    categoryName: "Interior & Fit-Out",
    location: "Al Maryah Island, Abu Dhabi",
    client: "Financial Services Group",
    year: "2024",
    duration: "4 Months",
    area: "8,200 sq.ft",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    size: "normal",
    shortDesc: "Complete high-spec corporate fit-out with acoustic glass partitions, fluted oak paneling, ergonomic workstations, and automated circadian lighting.",
    challenge: "Fast-track execution within an active business tower without disrupting surrounding tenants.",
    solution: "Off-site CNC joinery prefabrication and silent night-shift installations with zero tolerance defect inspection.",
    scope: [
      "Acoustic double-glazed frameless office partitions",
      "Bespoke boardroom conference table & custom credenzas",
      "Linear magnetic track lighting & smart DALI controls",
      "Authority approvals (Abu Dhabi ADGM / Civil Defense)"
    ]
  },
  {
    id: "residential-compound-hvac-rehab",
    title: "50-Villa Compound HVAC System Overhaul & PPM",
    category: "hvac",
    categoryName: "HVAC & MEP",
    location: "Khalifa City, Abu Dhabi",
    client: "Residential Compound Management",
    year: "2023",
    duration: "3 Months",
    area: "50 Luxury Villas",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    size: "wide",
    shortDesc: "Major overhaul of 150+ ducted split AC condensing units, deep coil decontamination, duct sanitization, and digital thermostat retrofits.",
    challenge: "Severe coil degradation and reduced cooling efficiency caused by high summer heat and desert dust ingress.",
    solution: "Chemical coil foam wash, anti-corrosive epoxy protective coating on aluminum fins, and duct thermal sealing reducing power usage by 22%.",
    scope: [
      "Complete chemical cleaning of 150 condenser & evaporator coils",
      "Refrigerant leak detection, repair & charge balancing",
      "Antimicrobial air duct sanitization",
      "Wi-Fi smart thermostat installation for compound residents"
    ]
  },
  {
    id: "combo-roof-waterproofing-yas",
    title: "Villa Compound Combo Roof Waterproofing & Thermal Insulation",
    category: "waterproofing",
    categoryName: "Waterproofing",
    location: "Yas Island, Abu Dhabi",
    client: "Asset Management Company",
    year: "2024",
    duration: "2 Months",
    area: "35,000 sq.ft Roof Area",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    size: "normal",
    shortDesc: "Complete Abu Dhabi Municipality-approved Combo Roof PU foam insulation, liquid waterproofing membrane, and flood testing with 10-year warranty.",
    challenge: "Rectifying previous recurring rainwater leaks across flat concrete roofs before the winter season.",
    solution: "Complete removal of damaged old layers, high-density spray polyurethane foam application, elastomeric UV topcoat, and 48-hour standing water testing.",
    scope: [
      "Sprayed polyurethane foam for thermal insulation (U-value compliant)",
      "Liquid-applied acrylic UV protective coating",
      "Geotextile fabric & screed layer with slope correction",
      "10-Year official leak-proof warranty issued"
    ]
  },
  {
    id: "luxury-villa-kitchen-renovation",
    title: "Bespoke Modern Kitchen & Cabinetry Renovation",
    category: "fitout",
    categoryName: "Interior & Fit-Out",
    location: "Al Raha Beach, Abu Dhabi",
    client: "Private Residence",
    year: "2024",
    duration: "5 Weeks",
    area: "650 sq.ft",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    size: "normal",
    shortDesc: "Full contemporary open-plan kitchen remodel featuring matte anti-fingerprint cabinetry, Calacatta quartz waterfall island, and hidden breakfast bar.",
    challenge: "Reconfiguring existing MEP plumbing and gas conduits into a modern island layout without affecting structural floor slabs.",
    solution: "Laser scanning, raised screed conduit channels, and custom Blum motorized pull-outs with under-cabinet warm 3000K LED lighting.",
    scope: [
      "Custom German-hardware cabinetry & soft-close systems",
      "Calacatta gold quartz seamless countertops & backsplash",
      "Integrated smart appliances & hidden extractor hood",
      "Dedicated heavy-duty dirty kitchen aluminum storage"
    ]
  },
  {
    id: "hotel-lobby-marble-renovation",
    title: "Five-Star Hotel Marble Restoration & Tile Installation",
    category: "construction",
    categoryName: "Construction & Civil",
    location: "Corniche Road, Abu Dhabi",
    client: "Hospitality Landmark",
    year: "2023",
    duration: "6 Weeks",
    area: "14,000 sq.ft",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    size: "normal",
    shortDesc: "Precision installation and diamond polishing of large-format Italian Statuario marble slabs in the grand lobby and reception zones.",
    challenge: "Carrying out high-precision stone installation during operational hotel hours with strict zero-dust protocols.",
    solution: "Negative-pressure dust containment enclosures and diamond rotary planetary polishing machines operating during low-traffic windows.",
    scope: [
      "Laser-guided marble alignment and bookmatching",
      "Diamond pad grinding and high-gloss crystallization",
      "Epoxy seamless joint filling matching stone veins",
      "Anti-stain nano-impregnation sealant application"
    ]
  }
];

// Interactive Before / After comparisons
export const BEFORE_AFTER_SHOWCASE = [
  {
    id: "luxury-interior-turnkey-revamp",
    projectId: "luxury-villa-saadiyat",
    title: "AL Reem Radiant Tower Interior Designs",
    location: "Radiant Tower, Al Reem Island, Abu Dhabi",
    category: "High-Rise Interior Fit-Out",
    description: "Executed in a fast-track 55-day timeline (March 2 – April 27, 2025) in Radiant Tower, Al Reem Island. Complete turnkey transformation encompassing interior civil remodeling, MEP engineering, designer false ceilings with cove lighting, large-format precision tiling, and luxury decorative painting.",
    beforeImage: "/images/beforenafter/interior/b-1.webp",
    afterImage: "/images/beforenafter/interior/a-1.webp",
    beforeVideo: "/images/beforenafter/interior/b-vd1.mp4",
    afterVideo: "/images/beforenafter/interior/a-vd1.mp4",
    details: [
      "Fast-track 55-day delivery in Radiant Tower (March 2 – April 27, 2025)",
      "Turnkey interior space remodeling & civil fit-out",
      "Integrated MEP engineering (HVAC ducting & smart lighting)",
      "Bespoke gypsum false ceilings, porcelain tiling & luxury painting"
    ]
  },
  {
    id: "villa-facade-revamp",
    title: "Villa Facade Restoration & Painting",
    location: "Khalifa City, Abu Dhabi",
    category: "Exterior Civil & Painting",
    description: "Weather-worn, cracked exterior transformed into a modern luxury crisp white and gold accented villa facade with weatherproof Jotun Jotashield coating.",
    beforeImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=90",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
    details: [
      "Deep pressure washing & loose plaster removal",
      "Elastomeric crack filling & damp seal primer",
      "3 coats of Jotashield Extreme UV & dirt-resistant coating",
      "Modern LED exterior wall uplighting installation"
    ]
  },
  {
    id: "kitchen-transformation",
    title: "Outdated Kitchen to Luxury Modern Space",
    location: "Al Reem Island, Abu Dhabi",
    category: "Interior Fit-Out",
    description: "Cramped 15-year old kitchen transformed into a stunning open-concept culinary space with quartz waterfall island and seamless handleless cabinets.",
    beforeImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=90",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=90",
    details: [
      "Non-structural wall removal to open space",
      "Custom anti-fingerprint matte charcoal cabinetry",
      "Calacatta quartz waterfall edge island",
      "Recessed architectural cove lighting"
    ]
  },
  {
    id: "luxury-bathroom-renovation",
    title: "Master Suite Spa & Bathroom Renovation",
    location: "Saadiyat Island, Abu Dhabi",
    category: "Bathroom & Wet Areas",
    description: "Outdated tiled master bathroom stripped to core concrete and rebuilt with Italian terrazzo, freestanding matte stone tub, and thermostatic brushed gold rainfall showers.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=90",
    afterImage: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=90",
    details: [
      "Triple-layer polyurethane wet-area waterproofing",
      "Large-format bookmatched porcelain wall slabs",
      "Concealed thermostatic brushed brass mixers",
      "Custom fluted vanity with anti-fog LED backlit mirrors"
    ]
  },
  {
    id: "majlis-marble-flooring",
    title: "Penthouse Majlis & Marble Fit-Out",
    location: "Corniche Road, Abu Dhabi",
    category: "Civil Fit-Out & Joinery",
    description: "Standard commercial layout converted into a grand Emirati majlis with diamond-crystallized Statuario marble flooring and custom acoustic walnut fluting.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=90",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
    details: [
      "Diamond planetary grinding & mirror crystallization",
      "Acoustic fluted walnut wall panelling & hidden brass trims",
      "Smart scene-based architectural mood lighting",
      "Zero-lip precision tile and marble alignment"
    ]
  },
  {
    id: "ac-chiller-overhaul",
    title: "Chiller Plant & HVAC Overhaul",
    location: "Mussafah, Abu Dhabi",
    category: "HVAC & Mechanical",
    description: "Severely corroded condenser coils and clogged air ducts refurbished to restore 100% cooling capacity and cut energy bills by 28%.",
    beforeImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=90",
    afterImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=90",
    details: [
      "Acid-free chemical foam coil descaling",
      "Rotary brush robotic duct cleaning & sanitizing",
      "Fan motor bearing replacement & vibration dampers",
      "Digital airflow and pressure balancing certification"
    ]
  }
];
