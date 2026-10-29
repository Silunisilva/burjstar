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
    id: "kca-villa-external-work",
    title: "KCA Villa External Work Project",
    category: "construction",
    categoryName: "Exterior Civil & Landscaping",
    location: "Khalifa City A (KCA), Abu Dhabi",
    client: "Private Residential Client",
    year: "2025",
    duration: "4 Weeks",
    area: "Full Villa Exterior & Boundary Walls",
    image: "/images/beforenafter/External/a2.webp",
    featured: true,
    size: "normal",
    shortDesc: "Comprehensive exterior restoration, boundary wall construction, modern interlock paving, weather-resistant facade coatings, and outdoor living integration for a luxury private villa in Khalifa City A (KCA), Abu Dhabi.",
    challenge: "Overhauling weathered exterior surfaces, boundary walls, and uneven ground levels while ensuring zero disruption to villa access and complete protection against harsh desert UV exposure.",
    solution: "Applied high-grade elastomeric crack sealants, multi-coat Jotashield UV protection, laser-leveled subbase for heavy-duty interlock paving, and integrated landscape MEP drainage.",
    scope: [
      "Boundary wall structural civil works & fine plastering",
      "Jotun Jotashield Extreme UV & weather-resistant facade painting",
      "Heavy-duty interlocking pavers for driveway and courtyard",
      "Exterior architectural LED facade & landscape lighting"
    ],
    beforeImages: [
      "/images/beforenafter/External/b2.webp",
      "/images/beforenafter/External/b3.webp",
      "/images/beforenafter/External/b4.webp"
    ],
    afterImages: [
      "/images/beforenafter/External/a2.webp",
      "/images/beforenafter/External/a3.webp"
    ],
    beforeVideo: "/images/beforenafter/External/b1.mp4",
    afterVideo: "/images/beforenafter/External/a1.mp4",
    videoTitle: "Completed KCA Villa External Walkthrough Video",
    gallery: [
      "/images/beforenafter/External/a2.webp",
      "/images/beforenafter/External/a3.webp",
      "/images/beforenafter/External/b2.webp",
      "/images/beforenafter/External/b3.webp",
      "/images/beforenafter/External/b4.webp"
    ]
  },
  {
    id: "jubail-island-chandelier-installation",
    title: "Jubail Island AUH 5MH Chandelier Installation Project",
    category: "fitout",
    categoryName: "MEP & Luxury Lighting Fit-Out",
    location: "Jubail Island, Abu Dhabi",
    client: "Luxury Villa Residence",
    year: "2025",
    duration: "2 Weeks",
    area: "Double-Height Grand Foyer & Living (5M Height)",
    image: "/images/beforenafter/Chandelier/ai.webp",
    featured: true,
    size: "normal",
    shortDesc: "Specialized engineering and high-ceiling installation of a monumental 5-meter luxury crystal chandelier in a prestigious private villa on Jubail Island, Abu Dhabi. Included structural ceiling slab reinforcement, motorized winch hoisting mechanism, custom electrical wiring, and multi-tier crystal balancing.",
    challenge: "Safely mounting and wiring a heavy, multi-tier custom chandelier at an elevated 5-meter ceiling height in a finished high-end foyer without damaging surrounding architectural plaster or delicate marble floors.",
    solution: "Engineered customized ceiling truss anchors and safety harness scaffolding, integrated an automated lowering winch for future maintenance, and calibrated electrical load distribution.",
    scope: [
      "Structural slab load analysis & certified ceiling anchor rigging",
      "5-Meter high-reach scaffolding & motorized hoist installation",
      "Dedicated electrical feed, dimmer automation & surge protection",
      "Precision multi-tier crystal assembly & illumination testing"
    ],
    beforeImages: [
      "/images/beforenafter/Chandelier/b1.webp",
      "/images/beforenafter/Chandelier/b2.webp"
    ],
    afterImages: [
      "/images/beforenafter/Chandelier/ai.webp"
    ],
    afterVideo: "/images/beforenafter/Chandelier/chandelier_reel.mp4",
    videoTitle: "Completed Jubail Island 5M Chandelier Installation Reel",
    gallery: [
      "/images/beforenafter/Chandelier/ai.webp",
      "/images/beforenafter/Chandelier/b1.webp",
      "/images/beforenafter/Chandelier/b2.webp"
    ]
  },
  {
    id: "al-ain-villa-bathroom-renovation",
    title: "Al Ain Villa Bathrooms Renovation Project (Master Vanity & Tiling)",
    category: "fitout",
    categoryName: "Bathroom & Wet Areas Fit-Out",
    location: "Al Ain, Abu Dhabi, UAE",
    client: "Private Villa Estate Client",
    year: "2025",
    duration: "3 Weeks",
    area: "Luxury Villa Master & Main Bathrooms",
    image: "/images/beforenafter/bathroom1/after_1.jpg",
    featured: true,
    size: "normal",
    shortDesc: "Turnkey luxury bathroom renovation delivered in 2025 for a private villa in Al Ain. Comprehensive remodel featuring full demolition, certified multi-layer waterproofing, large-format grey porcelain wall and floor slabs, custom floating marble-finish double vanity, frameless mirrors, and concealed drainage MEP.",
    challenge: "Replacing dated sanitary piping, broken tiles, and uneven subflooring while ensuring 100% leak-proof waterproofing and modern minimalist aesthetics.",
    solution: "Stripped space to core structure, applied heavy-duty polyurethane liquid waterproofing membrane with 48-hour flood testing, and installed laser-aligned large-format porcelain slabs with bespoke floating vanity.",
    scope: [
      "Complete demolition & subfloor leveling",
      "Multi-layer certified elastomeric wet-area waterproofing",
      "Large-format Italian-style porcelain wall & floor tiling",
      "Custom floating double-basin vanity with marble countertop",
      "Concealed MEP sanitary plumbing & modern linear floor drainage",
      "Frameless vanity mirrors & moisture-resistant LED lighting"
    ],
    beforeImages: [
      "/images/beforenafter/bathroom1/before_1.jpg",
      "/images/beforenafter/bathroom1/before_2.jpg"
    ],
    afterImages: [
      "/images/beforenafter/bathroom1/after_1.jpg",
      "/images/beforenafter/bathroom1/after_2.jpg",
      "/images/beforenafter/bathroom1/after_3.jpg"
    ],
    beforeVideo: "/images/beforenafter/bathroom1/before_video.mp4",
    afterVideo: "/images/beforenafter/bathroom1/after_video.mp4",
    videoTitle: "Completed Al Ain Villa Master Bathroom Walkthrough Video",
    gallery: [
      "/images/beforenafter/bathroom1/after_1.jpg",
      "/images/beforenafter/bathroom1/after_2.jpg",
      "/images/beforenafter/bathroom1/after_3.jpg",
      "/images/beforenafter/bathroom1/before_1.jpg",
      "/images/beforenafter/bathroom1/before_2.jpg"
    ]
  },
  {
    id: "al-ain-villa-guest-bathroom-renovation",
    title: "Al Ain Villa Bathrooms Renovation Project (Ensuite & Walk-In Shower)",
    category: "fitout",
    categoryName: "Bathroom & Wet Areas Fit-Out",
    location: "Al Ain, Abu Dhabi, UAE",
    client: "Private Villa Estate Client",
    year: "2025",
    duration: "3 Weeks",
    area: "Luxury Villa Ensuite Bathroom & Walk-In Shower",
    image: "/images/beforenafter/bathroom2/after_1.jpg",
    featured: true,
    size: "normal",
    shortDesc: "Second complete bathroom renovation delivered in 2025 as part of the Al Ain private villa estate upgrade. Stripped raw blockwork shell rebuilt into a pristine luxury bathroom featuring certified wet-area waterproofing, full-height light grey porcelain cladding, custom frameless glass shower enclosure, wall-hung concealed cistern WC, and integrated LED ceiling spots.",
    challenge: "Reconstructing the entire bathroom space from rough blockwork and bare conduits while ensuring precise plumbing fall, flawless waterproofing, and clean minimalist finish in a compact luxury layout.",
    solution: "Applied high-performance liquid elastomeric waterproofing membrane with flood test, engineered concealed wall-hung cistern framework, installed precision glass shower partitions, and leveled floor drainage.",
    scope: [
      "Subfloor screeding, wall plastering & laser leveling",
      "Multi-coat certified liquid elastomeric wet-area waterproofing",
      "Full-height light grey porcelain wall & floor tiling",
      "Custom frameless tempered glass walk-in shower enclosure",
      "Wall-hung WC with concealed in-wall cistern & dual-flush plate",
      "Modern sanitary fixtures, chrome bidet spray & recessed ceiling spotlights"
    ],
    beforeImages: [
      "/images/beforenafter/bathroom2/before_1.jpg",
      "/images/beforenafter/bathroom2/before_2.jpg"
    ],
    afterImages: [
      "/images/beforenafter/bathroom2/after_1.jpg",
      "/images/beforenafter/bathroom2/after_2.jpg",
      "/images/beforenafter/bathroom2/after_3.jpg"
    ],
    beforeVideo: "/images/beforenafter/bathroom2/before_video.mp4",
    afterVideo: "/images/beforenafter/bathroom2/after_video.mp4",
    videoTitle: "Completed Al Ain Villa Ensuite Walkthrough Video",
    gallery: [
      "/images/beforenafter/bathroom2/after_1.jpg",
      "/images/beforenafter/bathroom2/after_2.jpg",
      "/images/beforenafter/bathroom2/after_3.jpg",
      "/images/beforenafter/bathroom2/before_1.jpg",
      "/images/beforenafter/bathroom2/before_2.jpg"
    ]
  },
  {
    id: "al-ain-villa-powder-bathroom-renovation",
    title: "Al Ain Villa Bathrooms Renovation Project (Guest Vanity & Modern Sanitary)",
    category: "fitout",
    categoryName: "Bathroom & Wet Areas Fit-Out",
    location: "Al Ain, Abu Dhabi, UAE",
    client: "Private Villa Estate Client",
    year: "2025",
    duration: "3 Weeks",
    area: "Luxury Villa Guest Bathroom & Shower",
    image: "/images/beforenafter/bathroom3/after_2.jpg",
    featured: true,
    size: "normal",
    shortDesc: "Third complete bathroom renovation delivered in 2025 on the Al Ain private villa estate project. Complete strip-out of outdated blue ceramic fixtures, multi-coat certified waterproofing, large-format grey porcelain cladding, custom floating single vanity, wall-hung WC with concealed cistern, and walk-in glass shower.",
    challenge: "Overhauling dated sanitary lines, broken floor tiles, and obsolete plumbing while ensuring 100% leak-proof waterproofing and high-spec minimalist finishing.",
    solution: "Demolished old blue ceramic suite, applied double-coat liquid elastomeric waterproofing membrane with 48-hr flood test, and installed laser-aligned large-format grey porcelain tiles with concealed Geberit wall-hung cistern.",
    scope: [
      "Demolition of old blue ceramic suite & subfloor leveling",
      "Multi-coat certified liquid elastomeric wet-area waterproofing",
      "Full-height large-format grey porcelain wall & floor tiling",
      "Custom floating single vanity with modern rectangular basin",
      "Wall-hung WC with concealed in-wall cistern & dual flush",
      "Modern shower fixtures, stainless bidet spray & recessed ceiling lighting"
    ],
    beforeImages: [
      "/images/beforenafter/bathroom3/before_1.jpg",
      "/images/beforenafter/bathroom3/before_2.jpg",
      "/images/beforenafter/bathroom3/before_3.jpg"
    ],
    afterImages: [
      "/images/beforenafter/bathroom3/after_1.jpg",
      "/images/beforenafter/bathroom3/after_2.jpg",
      "/images/beforenafter/bathroom3/after_3.jpg"
    ],
    beforeVideo: "/images/beforenafter/bathroom3/before_video.mp4",
    afterVideo: "/images/beforenafter/bathroom3/after_video.mp4",
    videoTitle: "Completed Al Ain Villa Bathroom 03 Walkthrough Video",
    gallery: [
      "/images/beforenafter/bathroom3/after_2.jpg",
      "/images/beforenafter/bathroom3/after_1.jpg",
      "/images/beforenafter/bathroom3/after_3.jpg",
      "/images/beforenafter/bathroom3/before_2.jpg",
      "/images/beforenafter/bathroom3/before_1.jpg",
      "/images/beforenafter/bathroom3/before_3.jpg"
    ]
  },

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
    id: "kca-villa-external-transformation",
    projectId: "kca-villa-external-work",
    title: "KCA Villa External Work Project",
    location: "Khalifa City A (KCA), Abu Dhabi",
    category: "Exterior Civil & Landscaping",
    description: "Complete exterior transformation of a luxury private villa in Khalifa City A (KCA), Abu Dhabi. Features structural boundary wall civil works, weatherproof Jotun facade painting, interlocking paver driveways, and architectural landscape lighting.",
    beforeImage: "/images/beforenafter/External/b2.webp",
    afterImage: "/images/beforenafter/External/a2.webp",
    beforeVideo: "/images/beforenafter/External/b1.mp4",
    afterVideo: "/images/beforenafter/External/a1.mp4",
    details: [
      "Boundary wall structural civil construction & plastering",
      "UV-resistant weatherproof Jotashield exterior facade painting",
      "Precision interlock paver and patio tile installation",
      "Exterior landscape MEP, drainage & architectural uplighting"
    ]
  },
  {
    id: "jubail-island-chandelier-transformation",
    projectId: "jubail-island-chandelier-installation",
    title: "Jubail Island AUH 5MH Chandelier Installation",
    location: "Jubail Island, Abu Dhabi",
    category: "MEP & Luxury Lighting Fit-Out",
    description: "Specialized high-ceiling structural chandelier installation (5-meter height) in an ultra-luxury private residence on Jubail Island, Abu Dhabi. Encompassed ceiling load-bearing structural reinforcement, heavy-duty motorized winch hoisting, specialized electrical conduit routing, and bespoke crystal alignment.",
    beforeImage: "/images/beforenafter/Chandelier/b1.webp",
    afterImage: "/images/beforenafter/Chandelier/ai.webp",
    afterVideo: "/images/beforenafter/Chandelier/chandelier_reel.mp4",
    details: [
      "5-Meter high-reach structural ceiling anchoring & load testing",
      "Motorized winch hoisting system for maintenance access",
      "Dedicated electrical conduits, surge protection & architectural dimming",
      "Delicate hand-assembled multi-tier crystal balancing & illumination calibration"
    ]
  },
  {
    id: "al-ain-villa-bathroom-renovation",
    projectId: "al-ain-villa-bathroom-renovation",
    title: "Al Ain Villa Bathrooms Renovation (Bathroom 01 – Master Double Vanity)",
    location: "Al Ain, Abu Dhabi, UAE",
    category: "Luxury Bathroom Renovation",
    description: "First luxury bathroom transformation delivered as part of the Al Ain Villa Bathrooms Renovation Project (Completed in 2025). Features complete strip-out, certified multi-layer waterproofing, precision large-format grey porcelain wall cladding, floating marble-finish double vanity with dual mirrors, and modern concealed MEP drainage.",
    beforeImage: "/images/beforenafter/bathroom1/before_1.jpg",
    afterImage: "/images/beforenafter/bathroom1/after_1.jpg",
    beforeVideo: "/images/beforenafter/bathroom1/before_video.mp4",
    afterVideo: "/images/beforenafter/bathroom1/after_video.mp4",
    details: [
      "Delivered in 2025 across luxury private villa bathrooms in Al Ain",
      "Demolition, screeding & multi-layer elastomeric waterproofing with flood testing",
      "Large-format porcelain wall & floor tiling with zero-lip laser alignment",
      "Custom floating marble-vein double vanity, concealed MEP plumbing & modern LED coves"
    ]
  },
  {
    id: "al-ain-villa-guest-bathroom-renovation",
    projectId: "al-ain-villa-guest-bathroom-renovation",
    title: "Al Ain Villa Bathrooms Renovation (Bathroom 02 – Blockwork Ensuite & Shower)",
    location: "Al Ain, Abu Dhabi, UAE",
    category: "Luxury Bathroom Fit-Out",
    description: "Second complete bathroom renovation delivered on the Al Ain Villa Bathrooms Renovation Project (Completed in 2025). Rebuilt from a stripped raw blockwork shell into a pristine luxury bathroom with certified wet-area waterproofing, full-height light grey porcelain cladding, custom frameless glass shower enclosure, wall-hung concealed cistern WC, and integrated LED downlights.",
    beforeImage: "/images/beforenafter/bathroom2/before_1.jpg",
    afterImage: "/images/beforenafter/bathroom2/after_1.jpg",
    beforeVideo: "/images/beforenafter/bathroom2/before_video.mp4",
    afterVideo: "/images/beforenafter/bathroom2/after_video.mp4",
    details: [
      "Delivered in 2025 as part of the Al Ain private villa estate renovation",
      "Raw masonry & blockwork preparation, screeding & certified waterproofing",
      "Full-height light grey porcelain wall cladding with zero-lip laser joints",
      "Custom frameless glass walk-in shower, wall-hung WC & recessed LED ceiling downlights"
    ]
  },
  {
    id: "al-ain-villa-powder-bathroom-renovation",
    projectId: "al-ain-villa-powder-bathroom-renovation",
    title: "Al Ain Villa Bathrooms Renovation (Bathroom 03 – Guest Vanity & Modern Sanitary)",
    location: "Al Ain, Abu Dhabi, UAE",
    category: "Luxury Bathroom Renovation",
    description: "Third complete bathroom renovation executed on the Al Ain Villa Bathrooms Renovation Project (Completed in 2025). Transformed an outdated blue ceramic suite into a sleek contemporary bathroom with certified multi-layer waterproofing, large-format grey porcelain tiles, floating single vanity with quartz-look basin, wall-hung WC with concealed Geberit cistern, and walk-in glass shower cubicle.",
    beforeImage: "/images/beforenafter/bathroom3/before_2.jpg",
    afterImage: "/images/beforenafter/bathroom3/after_2.jpg",
    beforeVideo: "/images/beforenafter/bathroom3/before_video.mp4",
    afterVideo: "/images/beforenafter/bathroom3/after_video.mp4",
    details: [
      "Delivered in 2025 as part of the Al Ain private villa estate renovation",
      "Full strip-out of outdated blue ceramics, subfloor screeding & waterproofing",
      "Precision large-format grey porcelain wall & floor tiling",
      "Modern floating vanity sink, wall-hung WC with concealed cistern & walk-in shower"
    ]
  }
];
