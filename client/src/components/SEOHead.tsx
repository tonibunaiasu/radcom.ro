import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  titleKey: string;
  descriptionKey: string;
  path?: string;
  imageUrl?: string;
}

export function SEOHead({ titleKey, descriptionKey, path = '', imageUrl }: SEOHeadProps) {
  const { t, i18n } = useTranslation();
  
  const title = t(titleKey);
  const description = t(descriptionKey);
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/logo-blue.png`;
  const ogImage = imageUrl || defaultImage;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'RADCOM, iFleet, OptiFare, eXact, transport public, ITS, e-ticketing, fleet management, Romania');
    updateMetaTag('author', 'RADCOM');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', i18n.language);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:locale', i18n.language === 'ro' ? 'ro_RO' : 'en_US', true);
    updateMetaTag('og:site_name', 'RADCOM', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Alternate language links
    let alternateLang = document.querySelector(`link[rel="alternate"][hreflang="${i18n.language === 'en' ? 'ro' : 'en'}"]`);
    if (!alternateLang) {
      alternateLang = document.createElement('link');
      alternateLang.setAttribute('rel', 'alternate');
      document.head.appendChild(alternateLang);
    }
    alternateLang.setAttribute('hreflang', i18n.language === 'en' ? 'ro' : 'en');
    alternateLang.setAttribute('href', fullUrl);

  }, [title, description, fullUrl, ogImage, i18n.language]);

  return null;
}
