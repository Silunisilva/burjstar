import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/companyInfo';

export default function SEO({ title, description, keywords, image }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title 
      ? (title.includes(COMPANY_INFO.shortName) ? title : `${title} | ${COMPANY_INFO.shortName} Abu Dhabi`)
      : `${COMPANY_INFO.name} | Construction & Property Maintenance Abu Dhabi`;
    
    document.title = fullTitle;

    const descContent = description || `${COMPANY_INFO.tagline}. Leading construction, AMC, HVAC, interior fit-out, and MEP solutions across Abu Dhabi & UAE.`;
    const canonicalUrl = `https://burjstar.co${pathname === '/' ? '' : pathname}`;
    const previewImage = image || 'https://burjstar.co/logo.png';

    // Helper to update or create meta tags
    const setMetaTag = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('name', 'description', descContent);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', descContent);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', previewImage);

    // Twitter Card
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', descContent);
    setMetaTag('name', 'twitter:image', previewImage);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, image, pathname]);

  return null;
}

