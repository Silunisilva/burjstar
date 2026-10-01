// Service Categories for Services Page
export const SERVICE_CATEGORIES = [
  { id: "all", name: "All Services" },
  { id: "facility", name: "General & Maintenance" },
  { id: "mep", name: "MEP, AC & Fire Systems" },
  { id: "civil", name: "Civil, Fit-Out & Finishing" }
];

// Official 16 Services for /services Page
export const SERVICES = [
  {
    id: "general-maintenance",
    title: "General Contracting",
    category: "facility",
    categoryName: "General & Maintenance",
    shortDesc: "Rapid-response handyman, fixtures, silicon sealant, lock repairs, and odd job maintenance across Abu Dhabi.",
    fullDesc: "Prompt, courteous, and efficient handyman assistance for minor repairs, furniture assembly, TV wall mounting, door lock repairs, curtain hanging, silicon sealing, and quick fixes.",
    icon: "Wrench",
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=80",
    features: [
      "Same-day emergency response across Abu Dhabi",
      "Door lock, hinge, and hardware replacements",
      "Silicon sealants around bathtubs, sinks, and windows",
      "Curtain track, blind, and TV bracket installations",
      "Drywall patching, minor grouting, and touchups",
      "Transparent upfront pricing with zero hidden fees"
    ],
    popularFor: ["Tenants", "Homeowners", "Offices", "Retail Stores"]
  },
  {
    id: "ac-maintenance-repair",
    title: "AC Maintenance & Repair",
    category: "mep",
    categoryName: "MEP, AC & Fire Systems",
    shortDesc: "Specialist central chillers, VRF systems, ducted splits, package units servicing, duct cleaning and refrigerant diagnostics across Abu Dhabi.",
    fullDesc: "Abu Dhabi's climate demands peak cooling performance. Our HVAC engineers ensure energy efficiency, optimal indoor air quality, and zero downtime across district cooling interfaces, rooftop package units, VRF systems, and split AC units with certified chemical coil cleaning and airflow balancing.",
    icon: "Wind",
    badge: "Core Service",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Chiller plant & cooling tower servicing",
      "Comprehensive coil cleaning & chemical treatment",
      "Compressor troubleshooting & refrigerant recharge",
      "Air duct disinfection & indoor air quality optimization",
      "Thermostat calibration & BMS integration",
      "Preventive filter replacement & motor belt checks"
    ],
    popularFor: ["Commercial Buildings", "Villas", "Retail Showrooms", "Hotels"]
  },
  {
    id: "interior-works",
    title: "Interior Designs",
    category: "civil",
    categoryName: "Civil, Fit-Out & Finishing",
    shortDesc: "Turnkey luxury interior fit-outs, 3D architectural design, bespoke joinery, gypsum ceilings, partitions, and custom styling in Abu Dhabi.",
    fullDesc: "From 3D photorealistic spatial designs to complete turnkey handover. We craft bespoke residential villa interiors, high-end corporate offices, and contemporary retail spaces with full Abu Dhabi Municipality approvals.",
    icon: "Armchair",
    badge: "Bespoke Fit-Out",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    features: [
      "Complete residential & commercial interior fit-outs",
      "Gypsum ceiling designs, partitions & acoustic walls",
      "Custom luxury joinery, millwork & display units",
      "Turnkey lighting design & smart ambiance integration",
      "3D spatial planning, material boards & BOQ estimation",
      "Municipal & building authority approvals (NOC)"
    ],
    popularFor: ["Luxury Villas", "Corporate Offices", "Retail Boutiques", "Penthouses"]
  },
  {
    id: "civil-works",
    title: "Civil Works",
    category: "civil",
    categoryName: "Civil, Fit-Out & Finishing",
    shortDesc: "Structural concrete, boundary walls, block work, interlock, building extensions, and civil renovations across Abu Dhabi.",
    fullDesc: "Licensed general contractor handling structural concrete works, boundary walls, building expansions, core renovations, and structural retrofitting with strict compliance with Abu Dhabi Municipality (DMT) engineering codes.",
    icon: "HardHat",
    badge: "Structural",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    features: [
      "Civil construction & structural steel/concrete works",
      "Villa extensions & majlis construction",
      "Demolition, excavation, and site leveling",
      "Municipality permitting and engineering certifications",
      "Dedicated on-site QA/QC and HSE safety supervision",
      "Full turnkey civil contracting lifecycle"
    ],
    popularFor: ["New Villa Builds", "Commercial Properties", "Industrial Warehouses", "Property Renovations"]
  },
  {
    id: "mep-maintenance",
    title: "MEP Maintenance",
    category: "mep",
    categoryName: "MEP, AC & Fire Systems",
    shortDesc: "Integrated mechanical, electrical, and plumbing engineering systems maintenance for residential and commercial assets in Abu Dhabi.",
    fullDesc: "Complete preventive and corrective lifecycle care for power distribution switchboards, ventilation air handlers (FAHU), booster pump stations, drainage sumps, and building automation controllers.",
    icon: "Cpu",
    badge: "Integrated MEP",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    features: [
      "Integrated mechanical, electrical, and plumbing upkeep",
      "Sub-main distribution board & switchgear monitoring",
      "Booster pumps, water transfer systems & valves testing",
      "Exhaust, ventilation & fresh air handling units (FAHU)",
      "Preventive thermal scans & circuit load balancing",
      "24/7 rapid emergency call-out response team"
    ],
    popularFor: ["Commercial Towers", "Residential Compounds", "Hospitals", "Hotels"]
  },
  {
    id: "elevator-excavator-maintenance",
    title: "Elevator & Excavator Maintenance",
    category: "facility",
    categoryName: "General & Maintenance",
    shortDesc: "Certified passenger & freight elevator maintenance, safety compliance inspections, hydraulic repairs, and excavator heavy machinery servicing.",
    fullDesc: "Comprehensive vertical transport upkeep and heavy machinery support. We deliver Civil Defense compliant elevator inspections, cable tensioning, emergency rescue protocol audits, along with excavator hydraulic and engine maintenance for construction and industrial fleets in Abu Dhabi.",
    icon: "Layers",
    badge: "Heavy Equipment & Lifts",
    image: "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=800&q=80",
    features: [
      "Civil Defense compliant elevator safety certifications",
      "Passenger & freight lift preventive maintenance",
      "Traction cable, motor & governor calibration",
      "Hydraulic excavator system overhaul & fluid diagnostics",
      "Heavy plant machinery routine servicing & grease checks",
      "24/7 emergency lift breakdown response"
    ],
    popularFor: ["Commercial Towers", "Residential Buildings", "Construction Fleets", "Industrial Facilities"]
  },
  {
    id: "fire-fighting-services",
    title: "Fire Fighting Services",
    category: "mep",
    categoryName: "MEP, AC & Fire Systems",
    shortDesc: "Civil Defense compliant fire alarm testing, sprinkler maintenance, fire pump flow tests, and smoke management systems in Abu Dhabi.",
    fullDesc: "Ensuring life safety and regulatory compliance with Abu Dhabi Civil Defense standards. We inspect and service fire alarm control panels (FACP), diesel and electric fire pumps, wet risers, deluge systems, and emergency lighting.",
    icon: "Flame",
    badge: "Civil Defense",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80",
    features: [
      "Civil Defense certified maintenance & inspection logs",
      "Fire alarm control panels (FACP) & smoke detector testing",
      "Fire sprinkler heads, deluge systems & risers pressure checks",
      "Fire pump set (Diesel, Electric, Jockey) flow rate tests",
      "Fire hose reels, landing valves & cabinet inspections",
      "Emergency exit signage & central battery lighting upkeep"
    ],
    popularFor: ["Commercial Towers", "Industrial Plants", "Shopping Centers", "Residential Buildings"]
  },
  {
    id: "chiller-maintenance",
    title: "Chiller Maintenance and Services",
    category: "mep",
    categoryName: "MEP, AC & Fire Systems",
    shortDesc: "Air-cooled & water-cooled centrifugal/screw chillers, cooling towers, chemical descaling, and condenser pump servicing in Abu Dhabi.",
    fullDesc: "Maximizing thermodynamic efficiency and eliminating cooling downtime for central chiller plants. We provide oil testing, vibration diagnostics, tube cleaning, refrigerant reclamation, and BMS automated sequencing.",
    icon: "Fan",
    badge: "District Cooling",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    features: [
      "Air-cooled & water-cooled centrifugal/screw chiller servicing",
      "Cooling tower chemical descaling & drift eliminator cleaning",
      "Chilled water pump alignment, seal replacement & vibration testing",
      "Refrigerant leak detection, oil analysis & filter drier replacement",
      "Microprocessor controller calibration & BMS integration",
      "Emergency standby compressor diagnostics"
    ],
    popularFor: ["High-rise Buildings", "Malls", "Hospitals", "District Cooling Substations"]
  },
  {
    id: "electrical-works",
    title: "Electrical Works",
    category: "mep",
    categoryName: "MEP, AC & Fire Systems",
    shortDesc: "ADDC-compliant electrical installations, MDB/SMDB panel boards, rewiring, smart lighting, load balancing, and fault detection in Abu Dhabi.",
    fullDesc: "Our licensed electrical engineers provide comprehensive power distribution, lighting design, switchgear maintenance, surge protection, and power factor correction for low and medium voltage systems across Abu Dhabi.",
    icon: "Zap",
    badge: "ADDC Licensed",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    features: [
      "Main Distribution Board (MDB) & DB dressing/upgrades",
      "ADDC code compliance checks & certification",
      "Thermal imaging inspection for electrical hotspots",
      "Architectural LED & smart home automation wiring",
      "Short-circuit tracing and emergency power restoration",
      "Generator and UPS backup system maintenance"
    ],
    popularFor: ["Villas", "Commercial Buildings", "Data Centers", "Industrial Facilities"]
  },
  {
    id: "plumbing-works",
    title: "Plumbing Works",
    category: "mep",
    categoryName: "MEP, AC & Fire Systems",
    shortDesc: "High-pressure booster pumps, acoustic underground leak detection, drainage clearing, water heaters, and sanitary fixtures in Abu Dhabi.",
    fullDesc: "Complete potable water piping, drainage networks, sewer line jetting, water heater installation, and booster pump troubleshooting to prevent water loss and costly structural damage across residential and commercial properties.",
    icon: "Droplets",
    badge: "Sanitary & Piping",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Non-destructive acoustic water leak detection",
      "Booster and transfer water pump overhaul",
      "Central water filtration & solar heater installation",
      "High-pressure hydro-jetting drainage unclogging",
      "PPR / PEX pipe re-plumbing and valve replacements",
      "Luxury bathroom sanitaryware installation"
    ],
    popularFor: ["Residential Villas", "Hotels", "Restaurants", "Apartment Complexes"]
  },
  {
    id: "tile-works",
    title: "Tile Works",
    category: "civil",
    categoryName: "Civil, Fit-Out & Finishing",
    shortDesc: "Precision porcelain, ceramic, natural marble, granite, and interlocking paver installation for floors, walls, and outdoor patios in Abu Dhabi.",
    fullDesc: "Master tilers specializing in large-format porcelain slabs, bookmatched Italian marble, bathroom mosaics, swimming pool tiles, and heavy-duty outdoor driveway pavers with laser-level precision.",
    icon: "Grid",
    badge: "Precision Marble",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: [
      "Large-format porcelain slab installation (120x240cm+)",
      "Natural Italian marble polishing & bookmatching",
      "Waterproof bathroom & wet area tiling with epoxy grout",
      "Interlock pavers for driveways, villas & courtyards",
      "Subfloor screeding and leveling",
      "Tile re-grouting and crack replacement"
    ],
    popularFor: ["Villa Living Rooms", "Luxury Bathrooms", "Hotel Lobbies", "Outdoor Patios"]
  },
  {
    id: "carpentry-works",
    title: "Carpentry Works",
    category: "civil",
    categoryName: "Civil, Fit-Out & Finishing",
    shortDesc: "Custom wooden doors, decorative pergolas, bespoke wardrobes, acoustic wood paneling, and architectural millwork in Abu Dhabi.",
    fullDesc: "In-house joinery workshop producing bespoke solid wood and veneered doors, luxury walk-in closets, TV media units, outdoor wooden pergolas, and decorative architectural paneling.",
    icon: "Hammer",
    badge: "Bespoke Joinery",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom solid wood & fire-rated engineered doors",
      "Luxury walk-in closet systems & modular wardrobes",
      "Outdoor timber & composite pergolas for gardens",
      "Fluted wood wall paneling and acoustic baffles",
      "Cabinet restoration, lock fitting, and hinge realignment",
      "High-end veneer and lacquer finishes"
    ],
    popularFor: ["Villas", "Penthouses", "Executive Boardrooms", "Restaurants"]
  },
  {
    id: "painting-works",
    title: "Painting Works",
    category: "civil",
    categoryName: "Civil, Fit-Out & Finishing",
    shortDesc: "Interior & exterior premium painting, weather-resistant facade coatings, epoxy floorings, and decorative textured finishes in Abu Dhabi.",
    fullDesc: "High-grade surface preparation, crack filling, primer application, and finish coatings using top UAE-certified brands (Jotun, National Paints). Built to withstand Abu Dhabi's extreme sunlight and coastal humidity.",
    icon: "Paintbrush",
    badge: "Luxury Finishing",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    features: [
      "UV-resistant & weatherproof exterior facade painting",
      "Interior luxury matte, silk, and textured finishes (Stucco, Velvet)",
      "Industrial anti-slip epoxy floor coatings",
      "Wood polishing, staining & protective varnishing",
      "Surface crack repair and damp-proof primer treatment",
      "High-rise rope access / cradle facade painting"
    ],
    popularFor: ["Villa Facades", "Offices", "Car Parks & Basements", "Apartments"]
  },
  {
    id: "building-maintenance",
    title: "Building Maintenance",
    category: "facility",
    categoryName: "General & Maintenance",
    shortDesc: "Multi-storey residential & commercial tower upkeep, facade cleaning, common area MEP, and lifecycle asset protection in Abu Dhabi.",
    fullDesc: "Designed for building owners, real estate developers, and owners' associations (OA). We protect real estate asset value through rigorous planned preventive maintenance (PPM) and rapid fault resolution.",
    icon: "Building2",
    badge: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    features: [
      "Multi-storey residential & commercial tower asset protection",
      "Common area lighting, elevators & facade maintenance oversight",
      "Garbage chute sanitization & building plumbing networks",
      "Roof integrity, basement sump pumps & drainage inspection",
      "Landlord asset preservation with routine audit logs",
      "Scheduled preventive upkeep with digital portal reporting"
    ],
    popularFor: ["Commercial Towers", "Residential Buildings", "Shopping Centers", "Mixed-use Developments"]
  },
  {
    id: "annual-maintenance-contract-amc",
    title: "Annual Maintenance Contract AMC",
    category: "facility",
    categoryName: "General & Maintenance",
    shortDesc: "Structured annual maintenance contracts (AMC) with scheduled quarterly PPM visits and 24/7 rapid emergency dispatch across Abu Dhabi.",
    fullDesc: "Our Annual Maintenance Contracts (AMC) protect real estate value and eliminate unexpected repair bills for luxury villas, residential communities, and commercial towers. Includes scheduled PPM, 60-min emergency SLAs, and digital job cards.",
    icon: "ShieldCheck",
    badge: "24/7 AMC",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Customized annual maintenance contracts (AMC) for villas & towers",
      "Scheduled quarterly Planned Preventive Maintenance (PPM)",
      "Guaranteed 60-minute emergency breakdown dispatch SLA",
      "Dedicated multi-skilled technicians & technical account manager",
      "Digital service inspection sheets & asset tracking",
      "Exclusive discounts on replacement parts & equipment overhauls"
    ],
    popularFor: ["6 BHK Villas", "4 BHK Apartments", "3 BHK+MR Apartments", "Commercial Towers"]
  },
  {
    id: "waterproofing-works",
    title: "Waterproofing Works",
    category: "civil",
    categoryName: "Civil, Fit-Out & Finishing",
    shortDesc: "Torch-on membrane, combo roof system, polyurethane liquid coatings, wet area tanking, and basement leak stoppage in Abu Dhabi.",
    fullDesc: "Protect your property from rain leaks and moisture ingress. Certified applicators for Abu Dhabi Municipality combo roof waterproofing systems, basement retaining walls, swimming pool tanking, and wet area sealing.",
    icon: "CloudRain",
    badge: "10-Yr Warranty",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Abu Dhabi approved Combo Roof thermal & waterproofing system",
      "SBS torch-applied bitumen membrane systems",
      "Polyurethane liquid elastomeric roof coatings",
      "Bathroom, kitchen & balcony wet area tanking",
      "Water tank food-grade epoxy waterproofing",
      "10-Year official leak-proof warranty certificate"
    ],
    popularFor: ["Villa Roofs", "Commercial Buildings", "Water Tanks", "Swimming Pools"]
  }
];

// 17 Official AMC Services Provided Under Annual Contracts in Abu Dhabi
export const AMC_SERVICES = [
  {
    id: "hvac-ac-maintenance-ad",
    title: "HVAC and AC maintenance Abu Dhabi",
    category: "mep",
    categoryName: "HVAC & Cooling",
    shortDesc: "Central chillers, VRF systems, ducted splits, chemical coil wash, duct sanitization, and refrigerant diagnostics in Abu Dhabi.",
    fullDesc: "Ensure continuous cooling and optimum indoor air quality throughout Abu Dhabi's harsh summer with certified coil pressure washing, airflow balancing, filter replacements, and compressor diagnostics.",
    icon: "Wind",
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    features: [
      "Complete chemical coil cleaning & flush",
      "Compressor diagnostics & refrigerant gas top-up",
      "Air duct disinfection & IAQ optimization",
      "Thermostat calibration & BMS integration"
    ]
  },
  {
    id: "elevator-escalator-ad",
    title: "elevator and escalator maintenance Abu Dhabi",
    category: "specialty",
    categoryName: "Vertical Transport",
    shortDesc: "Certified vertical transport safety inspections, preventive maintenance, motor overhauls, and emergency rescue in Abu Dhabi.",
    fullDesc: "Ensuring zero downtime and strict adherence to Abu Dhabi Civil Defense safety codes for hydraulic, traction, and panoramic passenger elevators, freight lifts, and escalators.",
    icon: "ChevronsUpDown",
    image: "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=800&q=80",
    features: [
      "Civil Defense compliant safety certifications",
      "Traction cable tension & governor testing",
      "Door operator & sensor precision calibration",
      "24/7 passenger entrapment rescue readiness"
    ]
  },
  {
    id: "interior-design-ad",
    title: "interior design Abu Dhabi",
    category: "fitout",
    categoryName: "Interior & Fit-Out",
    shortDesc: "Turnkey luxury interior design, 3D spatial planning, bespoke joinery, and complete fit-out execution in Abu Dhabi.",
    fullDesc: "From 3D architectural renders to turnkey fit-out delivery. We craft bespoke residential villa interiors, high-end offices, and contemporary retail spaces with municipal approvals.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    features: [
      "Bespoke 3D spatial concept & renders",
      "Gypsum false ceilings & mood LED lighting",
      "Custom wall paneling & architectural moldings",
      "Turnkey execution with DMT municipal approvals"
    ]
  },
  {
    id: "general-constructing-ad",
    title: "General constructing Abu Dhabi",
    category: "civil",
    categoryName: "Construction & Civil",
    shortDesc: "End-to-end building construction, structural post-tension slabs, civil renovations, extensions, and commercial project management.",
    fullDesc: "Licensed general contractor handling structural concrete works, boundary walls, building expansions, core renovations, and structural retrofitting with strict compliance with DMT engineering codes.",
    icon: "HardHat",
    badge: "Structural",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    features: [
      "Civil construction & structural steel/concrete",
      "Villa extensions, majlis & boundary walls",
      "Excavation, shoring & site leveling",
      "Dedicated on-site QA/QC & safety supervision"
    ]
  },
  {
    id: "electrical-services-ad",
    title: "electrical services Abu Dhabi",
    category: "mep",
    categoryName: "Electrical & Power",
    shortDesc: "ADDC-compliant electrical installations, MDB/SMDB panel boards, rewiring, smart lighting, load balancing, and fault detection.",
    fullDesc: "Comprehensive power distribution, lighting design, switchgear maintenance, surge protection, and power factor correction for low and medium voltage systems across Abu Dhabi.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    features: [
      "Main Distribution Board (MDB) & DB dressing",
      "ADDC code compliance checks & certification",
      "Thermal imaging for electrical hotspot prevention",
      "Short-circuit tracing & emergency power restoration"
    ]
  },
  {
    id: "plumber-services-ad",
    title: "plumber services Abu Dhabi",
    category: "mep",
    categoryName: "Plumbing & Drainage",
    shortDesc: "High-pressure booster pumps, acoustic underground leak detection, drainage clearing, water heaters, and sanitary fixtures.",
    fullDesc: "Complete potable water piping, drainage networks, sewer line jetting, water heater installation, and booster pump troubleshooting to prevent water damage across residential and commercial properties.",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Non-destructive acoustic water leak detection",
      "Booster and transfer water pump overhaul",
      "Central water filtration & solar heater maintenance",
      "High-pressure hydro-jetting drainage unclogging"
    ]
  },
  {
    id: "painting-services-ad",
    title: "painting services Abu Dhabi",
    category: "civil",
    categoryName: "Painting & Finishes",
    shortDesc: "Interior & exterior premium painting, weather-resistant facade coatings, epoxy floorings, and decorative textured finishes.",
    fullDesc: "High-grade surface preparation, crack filling, primer application, and finish coatings using top UAE-certified brands (Jotun, National Paints) built for Abu Dhabi weather.",
    icon: "Paintbrush",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    features: [
      "UV-resistant & weatherproof exterior facade painting",
      "Interior luxury matte, silk, and textured finishes",
      "Industrial anti-slip epoxy floor coatings",
      "Wood polishing, staining & protective varnishing"
    ]
  },
  {
    id: "villa-maintenance-ad",
    title: "Villa maintenance Abu Dhabi",
    category: "amc",
    categoryName: "Residential AMC",
    shortDesc: "Dedicated all-inclusive residential villa care including swimming pool, garden MEP, AC units, roof, and emergency support.",
    fullDesc: "Tailored specifically for luxury villas across Saadiyat, Yas Island, Khalifa City, and Al Raha. We take complete ownership of your villa's continuous upkeep with scheduled PPM and 60-min emergency response.",
    icon: "Home",
    badge: "Villa Care",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Dedicated multi-skilled technician team on call",
      "AC deep cleaning, chemical wash & duct care",
      "Swimming pool pump, filtration & water balance",
      "Automatic irrigation system & landscape MEP"
    ]
  },
  {
    id: "building-maintenance-ad",
    title: "building maintenance Abu Dhabi",
    category: "amc",
    categoryName: "Commercial AMC",
    shortDesc: "Multi-story residential & commercial property maintenance, facade cleaning, common area MEP, and lifecycle asset management.",
    fullDesc: "Designed for building owners, real estate developers, and owners' associations (OA). We protect real estate asset value through rigorous planned preventive maintenance (PPM).",
    icon: "Building2",
    badge: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    features: [
      "Common area MEP (Lighting, pumps, fire, ventilation)",
      "Facade maintenance & window cleaning management",
      "Garbage chute cleaning and waste management",
      "Roof, basement sump pumps & waterproofing maintenance"
    ]
  },
  {
    id: "facility-management-ad",
    title: "facility management Abu Dhabi",
    category: "amc",
    categoryName: "Facility Management",
    shortDesc: "Integrated Hard FM (engineering, MEP) and Soft FM (cleaning, security, waste) solutions for corporate and institutional facilities.",
    fullDesc: "Total Facilities Management (TFM) aligning international ISO standards with local UAE regulatory frameworks for corporate headquarters, compounds, and campuses.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Integrated Hard & Soft FM delivery models",
      "CAFM computerized asset maintenance tracking",
      "Energy conservation audits & utility optimization",
      "24/7 dedicated helpdesk management for tenants"
    ]
  },
  {
    id: "general-maintenance-ad",
    title: "general maintenance Abu Dhabi",
    category: "amc",
    categoryName: "General Maintenance",
    shortDesc: "Quick-dispatch handyman and multi-skilled technicians for fast repairs, fixtures, lock replacement, and odd repairs.",
    fullDesc: "Prompt, courteous, and efficient handyman assistance for minor repairs, furniture assembly, TV wall mounting, door lock repairs, curtain hanging, silicon sealing, and quick fixes.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=80",
    features: [
      "Same-day emergency dispatch across Abu Dhabi",
      "Door lock, hinge, and hardware replacements",
      "Silicon sealants around bathtubs, sinks, and windows",
      "Drywall patching, minor grouting, and touchups"
    ]
  },
  {
    id: "tiles-installation-ad",
    title: "tiles installation Abu Dhabi",
    category: "civil",
    categoryName: "Flooring & Tiling",
    shortDesc: "Precision porcelain, ceramic, natural marble, granite, and interlocking paver installation for floors, walls, and outdoor patios.",
    fullDesc: "Master tilers specializing in large-format porcelain slabs, bookmatched Italian marble, bathroom mosaics, swimming pool tiles, and heavy-duty outdoor driveway pavers.",
    icon: "Grid",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: [
      "Large-format porcelain slab installation (120x240cm+)",
      "Natural Italian marble polishing & bookmatching",
      "Waterproof bathroom & wet area tiling with epoxy grout",
      "Interlock pavers for driveways, villas & courtyards"
    ]
  },
  {
    id: "carpenter-service-ad",
    title: "carpenter service Abu Dhabi",
    category: "fitout",
    categoryName: "Joinery & Woodwork",
    shortDesc: "Custom wooden doors, decorative pergolas, bespoke wardrobes, acoustic wood paneling, and architectural millwork.",
    fullDesc: "In-house joinery workshop producing bespoke solid wood and veneered doors, luxury walk-in closets, TV media units, outdoor wooden pergolas, and decorative architectural paneling.",
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom solid wood & fire-rated engineered doors",
      "Luxury walk-in closet systems & modular wardrobes",
      "Outdoor timber & composite pergolas for gardens",
      "Cabinet restoration, lock fitting, and hinge realignment"
    ]
  },
  {
    id: "glass-installation-ad",
    title: "glass installation Abu Dhabi",
    category: "specialty",
    categoryName: "Glazing & Glass",
    shortDesc: "Frameless glass shower partitions, tempered glass balustrades, shopfront glazing, skylights, and acoustic double glazing.",
    fullDesc: "Precision-engineered safety glass solutions including frameless shower enclosures, tempered glass stair railings, modern office acoustic glass partitions, and UV-tinted architectural glazing.",
    icon: "Maximize2",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    features: [
      "10mm / 12mm Toughened safety glass shower enclosures",
      "Balcony & staircase stainless steel & glass balustrades",
      "Acoustic double-glazed office demountable partitions",
      "Commercial retail shopfront glazing"
    ]
  },
  {
    id: "aluminum-cabinets-ad",
    title: "aluminum cabinets Abu Dhabi",
    category: "fitout",
    categoryName: "Cabinetry & Storage",
    shortDesc: "Durable, termite-proof, fire-resistant 100% aluminum storage cabinets, outdoor kitchens, vanity units, and utility storage.",
    fullDesc: "Aluminum cabinetry is the gold standard for UAE weather — immune to humidity, water damage, termites, and warping. Ideal for outdoor BBQ areas, laundry rooms, and wet utility kitchens.",
    icon: "Box",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    features: [
      "100% waterproof, rustproof & fire-resistant aluminum",
      "Termite and pest-proof lifetime durability",
      "Modern powder-coated colors (Woodgrain, Matte Charcoal)",
      "Outdoor villa BBQ counters and weather-resistant storage"
    ]
  },
  {
    id: "kitchen-cabinets-ad",
    title: "kitchen cabinets Abu Dhabi",
    category: "fitout",
    categoryName: "Kitchen Joinery",
    shortDesc: "German/Italian style modular kitchens, quartz & granite countertops, smart pull-out organizers, and full kitchen remodels.",
    fullDesc: "Transforming kitchens into culinary showpieces. We design, manufacture, and install modular kitchen cabinetry featuring acrylic, lacquer, solid wood, and anti-fingerprint matte finishes.",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom 3D kitchen design with ergonomic work triangles",
      "High-gloss acrylic, matte PET & natural veneer shutters",
      "Quartz, porcelain, and natural granite countertops",
      "Blum soft-close drawers and magic corner pull-outs"
    ]
  },
  {
    id: "water-proofing-service-ad",
    title: "water proofing service Abu Dhabi",
    category: "specialty",
    categoryName: "Waterproofing",
    shortDesc: "Torch-on membrane, combo roof system, polyurethane liquid coatings, wet area tanking, and basement leak stoppage in Abu Dhabi.",
    fullDesc: "Protect your property from rain leaks and moisture ingress. Certified applicators for Abu Dhabi Municipality combo roof waterproofing systems, basement retaining walls, swimming pool tanking, and wet area sealing.",
    icon: "CloudRain",
    badge: "10-Yr Warranty",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Abu Dhabi approved Combo Roof thermal & waterproofing system",
      "SBS torch-applied bitumen membrane systems",
      "Polyurethane liquid elastomeric roof coatings",
      "Bathroom, kitchen & balcony wet area tanking"
    ]
  }
];

export const CONTRACTING_SERVICES = SERVICES;
export const ALL_SERVICES = [...SERVICES, ...AMC_SERVICES];

// Official AMC Packages Structure
export const AMC_PACKAGES = {
  villa: {
    title: "Luxury Villa AMC",
    type: "villa",
    types: [
      {
        id: "villa-6bhk",
        name: "Villa – 6 BHK",
        subtitle: "Luxury Independent Villa Package (Abu Dhabi)",
        plans: [
          {
            tier: "Basic",
            price: "11,500",
            currency: "AED",
            period: "Yearly",
            tagline: "Essential preventive maintenance & emergency support",
            badge: null,
            features: [
              "3 Scheduled AC Planned Preventive Maintenance (PPM) Visits",
              "Unlimited Emergency Call-outs for HVAC & Power Breakdowns",
              "Standard 4-Hour Response Time SLA",
              "Basic Electrical & Plumbing Inspection & Fixture Repairs",
              "Routine Roof & Drainage Check prior to Rain Seasons",
              "Digital Service Reports & Job Sign-off"
            ],
            highlight: false
          },
          {
            tier: "Standard",
            price: "13,200",
            currency: "AED",
            period: "Yearly",
            tagline: "Most popular full-coverage package for luxury villas",
            badge: "Most Popular",
            features: [
              "4 Scheduled AC Planned Preventive Maintenance Visits (Deep Chemical Wash)",
              "Unlimited 24/7 Priority Emergency Call-outs (2-Hour SLA Response)",
              "Complete Electrical Thermal Imaging & DB Dressing Check",
              "Plumbing Booster Pump Overhaul & Potable Water Tank Inspection",
              "Minor Carpentry, Grouting & Silicon Sealant Maintenance",
              "10% Discount on Replacement Spare Parts & Materials"
            ],
            highlight: true
          },
          {
            tier: "Premium",
            price: "15,800",
            currency: "AED",
            period: "Yearly",
            tagline: "VIP comprehensive care with 60-min emergency response",
            badge: "VIP Comprehensive",
            features: [
              "5-6 Scheduled AC PPM Visits including Air Duct Sanitization",
              "Guaranteed 60-Minute Rapid Emergency Dispatch (24/7 VIP Priority)",
              "Complete Electrical, Plumbing, Chiller & MEP Preventive Care",
              "2 Certified Water Tank Cleaning & Disinfection Services Included",
              "Dedicated VIP Technical Account Manager & Direct WhatsApp Channel",
              "15% Discount on Spare Parts + AED 500 Annual Material Allowance"
            ],
            highlight: false
          }
        ]
      }
    ]
  },
  apartment: {
    title: "Residential Apartment AMC",
    type: "apartment",
    types: [
      {
        id: "apt-4bhk",
        name: "Apartment – 4 BHK",
        subtitle: "Comprehensive 4 Bedroom Apartment Maintenance (Abu Dhabi)",
        plans: [
          {
            tier: "Basic",
            price: "4,500",
            currency: "AED",
            period: "Yearly",
            tagline: "Essential AC & MEP maintenance",
            badge: null,
            features: [
              "3 Scheduled AC Filter & Coil Cleaning Visits",
              "Unlimited Emergency Call-outs for AC & Electrical Breakdowns",
              "4-Hour Emergency SLA Response",
              "Standard Plumbing & Drainage Clearing",
              "Digital Inspection Checklists"
            ],
            highlight: false
          },
          {
            tier: "Standard",
            price: "5,800",
            currency: "AED",
            period: "Yearly",
            tagline: "All-inclusive peace of mind for 4 BHK residences",
            badge: "Recommended",
            features: [
              "4 AC Preventive Visits with Chemical Coil Wash & Drain Flush",
              "24/7 Priority Emergency Dispatch (2-Hour SLA)",
              "Complete Electrical DB Inspection & Load Balancing",
              "Full Bathroom & Kitchen Plumbing Fixture Checkups",
              "10% Discount on Spare Parts"
            ],
            highlight: true
          },
          {
            tier: "Premium",
            price: "7,200",
            currency: "AED",
            period: "Yearly",
            tagline: "VIP full-care package with fastest emergency response",
            badge: "VIP Tier",
            features: [
              "4-5 AC Visits + Duct Disinfection & Thermostat Calibration",
              "Guaranteed 60-Minute Rapid Emergency Response",
              "Complete Electrical, Plumbing & Handyman Support",
              "15% Discount on Spare Parts + Free Minor Consumables",
              "Dedicated Account Manager Support"
            ],
            highlight: false
          }
        ]
      },
      {
        id: "apt-3bhk-mr",
        name: "Apartment – 3 BHK + MR",
        subtitle: "3 Bedroom + Maid's Room Package (Abu Dhabi)",
        plans: [
          {
            tier: "Basic",
            price: "3,800",
            currency: "AED",
            period: "Yearly",
            tagline: "Standard preventive servicing & breakdown support",
            badge: null,
            features: [
              "3 Scheduled AC Cleaning Visits",
              "Unlimited Emergency Breakdown Attendance",
              "4-Hour Response Time SLA",
              "Basic Electrical & Plumbing Fixes",
              "Digital Job Sheets"
            ],
            highlight: false
          },
          {
            tier: "Standard",
            price: "4,900",
            currency: "AED",
            period: "Yearly",
            tagline: "Most selected plan for 3 BHK + Maid's residences",
            badge: "Best Value",
            features: [
              "4 Scheduled AC Chemical Cleaning & Flush Visits",
              "2-Hour Priority Emergency Response SLA",
              "Full Electrical DB & Plumbing Network Check",
              "Handyman Minor Repairs & Grouting",
              "10% Discount on Replacement Parts"
            ],
            highlight: true
          },
          {
            tier: "Premium",
            price: "6,200",
            currency: "AED",
            period: "Yearly",
            tagline: "VIP comprehensive care with 60-min emergency response",
            badge: "VIP Comprehensive",
            features: [
              "4-5 AC Visits + Duct Sanitization",
              "Guaranteed 60-Minute Rapid Emergency Dispatch",
              "Unlimited Handyman & Preventive MEP Checkups",
              "15% Discount on Spare Parts + Minor Consumables Included",
              "Direct VIP Line Support"
            ],
            highlight: false
          }
        ]
      }
    ]
  }
};
