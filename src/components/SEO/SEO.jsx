import { useEffect } from 'react';

const setMetaTag = (attrName, attrValue, content) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setCanonical = (url) => {
  if (!url) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

const setStructuredData = (schemaId, schemaData) => {
  let script = document.getElementById(schemaId);
  if (!schemaData) {
    if (script) script.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
};

const SEO = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://hitechgym.in/og-image.jpg',
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage,
  schema
}) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update Meta Description
    if (description) {
      setMetaTag('name', 'description', description);
    }

    // 3. Update Canonical URL
    if (canonical) {
      setCanonical(canonical);
    }

    // 4. Update Open Graph
    setMetaTag('property', 'og:title', ogTitle || title);
    setMetaTag('property', 'og:description', ogDescription || description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    // 5. Update Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', twitterTitle || ogTitle || title);
    setMetaTag('name', 'twitter:description', twitterDescription || ogDescription || description);
    setMetaTag('name', 'twitter:image', twitterImage || ogImage);

    // 6. Inject Route-Specific JSON-LD
    if (schema) {
      setStructuredData('route-jsonld', schema);
    }

    return () => {
      // Clean up route-specific schema when leaving route
      const routeScript = document.getElementById('route-jsonld');
      if (routeScript) {
        routeScript.remove();
      }
    };
  }, [
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterTitle,
    twitterDescription,
    twitterImage,
    schema
  ]);

  return null;
};

export default SEO;
