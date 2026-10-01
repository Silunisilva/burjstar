import { useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | ${COMPANY_INFO.shortName} Abu Dhabi`
      : `${COMPANY_INFO.name} | Construction & Property Maintenance`;
    
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || `${COMPANY_INFO.tagline}. Leading construction, AMC, HVAC, interior fit-out, and MEP solutions across Abu Dhabi & UAE.`);
    }
  }, [title, description]);

  return null;
}
