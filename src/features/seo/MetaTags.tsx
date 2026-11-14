import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  schema?: Record<string, unknown>;
  keywords?: string[];
}

const SITE_NAME = 'KAPI KAVACH SERVICES PVT. LTD.';
const BASE_URL = 'https://klaudhunter.com';
const DEFAULT_DESC = 'Professional verification, investigation, audit and risk management solutions for Banks, NBFCs, Insurance, FinTech and Corporate Organizations.';

export function MetaTags({
  title,
  description,
  canonical,
  ogImage = '/og-image.png',
  ogType = 'website',
  noIndex = false,
  schema,
  keywords,
}: MetaTagsProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = canonical || `${BASE_URL}${window.location.pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta
    setMeta('description', description || DEFAULT_DESC);

    if (keywords?.length) {
      setMeta('keywords', keywords.join(', '));
    }

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', url);

    // Robots
    setMeta('robots', noIndex ? 'noindex,nofollow' : 'index,follow');

    // Open Graph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description || DEFAULT_DESC, true);
    setMeta('og:url', url, true);
    setMeta('og:image', `${BASE_URL}${ogImage}`, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', SITE_NAME, true);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description || DEFAULT_DESC);
    setMeta('twitter:image', `${BASE_URL}${ogImage}`);

    // JSON-LD Schema
    if (schema) {
      const existingScript = document.querySelector('#json-ld-schema');
      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      // No cleanup needed - next page render overwrites
    };
  }, [fullTitle, description, url, ogImage, ogType, noIndex, schema, keywords]);

  return null;
}
