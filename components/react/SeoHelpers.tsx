import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

/**
 * A simple SEO component to update document title, meta description, and canonical URL.
 */
export function SeoHead({ title, description, canonicalUrl, ogImage }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }
    
    if (ogImage) {
      let metaOgImage = document.querySelector('meta[property="og:image"]');
      if (!metaOgImage) {
        metaOgImage = document.createElement('meta');
        metaOgImage.setAttribute('property', 'og:image');
        document.head.appendChild(metaOgImage);
      }
      metaOgImage.setAttribute('content', ogImage);
    }
  }, [title, description, canonicalUrl, ogImage]);

  return null;
}

/**
 * Injects JSON-LD structured data into the <head> of the document.
 */
export function StructuredData({ data }: { data: Record<string, any> }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}
