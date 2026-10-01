// Burj Star General Maintenance & Property Management LLC - Central Configuration
export const COMPANY_INFO = {
  name: "Burj Star General Maintenance & Property Management LLC",
  shortName: "Burj Star",
  tagline: "Premier Annual Maintenance (AMC), Contracting & Property Management in Abu Dhabi",
  established: "22/12/2022",
  crNumber: "CN-2894510",
  municipalityLicense: "ADM-ENG-74921",
  
  // Contact details
  phone: "0524505388",
  phoneDisplay: "052 450 5388",
  phoneRaw: "+971524505388",
  mobile: "+971 52 450 5388",
  mobileRaw: "+971524505388",
  emergencyPhone: "052 450 5388",
  emergencyPhoneRaw: "+971524505388",
  whatsapp: "052 450 5388",
  whatsappRaw: "971524505388", // formatted for wa.me
  email: "info@burjstar.co",
  secondaryEmail: "burjstar111@gmail.com",
  supportEmail: "info@burjstar.co",
  careersEmail: "burjstar111@gmail.com",
  
  // Address & Geo
  address: {
    street: "P162, Emirates Dermatology Building, 6th Floor Office No. 615, Al Nahyan",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    full: "P162, Emirates Dermatology Building, 6th Floor Office No. 615, Al Nahyan, Abu Dhabi, UAE",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.2981084227367!2d54.3828949!3d24.4756855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e664878a4866b%3A0x6d04d8058448ea97!2sAl%20Nahyan%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
  },
  
  // Working hours
  workingHours: {
    office: "Saturday - Thursday: 9:00 AM – 6:00 PM (9 Hours)",
    emergency: "24/7 Rapid Emergency Response Team",
    friday: "Friday: 24/7 Emergency On-Call"
  },
  
  // Coverage areas across UAE
  serviceAreas: [
    "Al Nahyan & Abu Dhabi Downtown",
    "Saadiyat Island & Cultural District",
    "Yas Island & Al Raha Beach",
    "Al Reem Island & Al Maryah Island",
    "Khalifa City & Shakhbout City",
    "Mohamed Bin Zayed City (MBZ)",
    "Mussafah Industrial & Commercial",
    "Al Ain & Greater Abu Dhabi Emirate"
  ],
  
  // Social links
  social: {
    facebook: "https://web.facebook.com/people/Burjstar-general-Maintenance/61581214320119/?mibextid=wwXIfr&rdid=EMHqShhXlFQ4I0Pg&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F18jDp6Mvw6%2F%3Fmibextid%3DwwXIfr%26ref%3D1%26_rdc%3D1%26_rdr",
    instagram: "https://www.instagram.com/burjstar381?stkn=MWU3c3Q2NW5iOTgycQ%3D%3D",
    tiktok: "https://www.tiktok.com/@burjstarproperties?_r=1&_t=ZS-9A1L4WbuYtU",
    linkedin: "https://www.linkedin.com/in/burj-star-undefined-574657376/",
    whatsapp: "https://wa.me/971524505388"
  },
  
  // Quick trust stats
  stats: [
    { label: "Completed Projects", value: "850+" },
    { label: "Active AMC Contracts", value: "320+" },
    { label: "Established In", value: "2022" },
    { label: "Certified Technicians", value: "95+" }
  ]
};

// Helper to construct formatted WhatsApp URL
export const createWhatsAppUrl = (messageText) => {
  const cleanNumber = COMPANY_INFO.whatsappRaw;
  const encodedMsg = encodeURIComponent(messageText || "Hello Burj Star General Maintenance, I would like to inquire about your Annual Maintenance Contracts (AMC) and services in Abu Dhabi.");
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
};
