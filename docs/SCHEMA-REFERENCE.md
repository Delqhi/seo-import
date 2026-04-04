# SCHEMA-REFERENCE.md — Complete JSON-LD Schema Reference

## Overview

This template includes **12 JSON-LD schemas** optimized for both traditional search engines AND AI search platforms.

## 1. Organization Schema

**Purpose:** Brand identity for AI entity recognition
**Impact:** AI platforms use this to understand your company/brand

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OpenSIN",
  "alternateName": "Open Source Intelligence Network",
  "url": "https://opensin.ai",
  "logo": "https://me.delqhi.com/logo.png",
  "description": "Open multi-agent orchestration with A2A protocol at scale.",
  "sameAs": ["https://github.com/OpenSIN-AI", "https://x.com/delqhi"],
  "knowsAbout": ["AI Agents", "Multi-Agent Systems", "Open Source"]
}
```

## 2. Person Schema

**Purpose:** Author identity for E-E-A-T signals
**Impact:** Google and AI use this for author credibility

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jeremy Schulze",
  "alternateName": "Delqhi",
  "url": "https://me.delqhi.com",
  "jobTitle": "Senior AI & Software Engineer",
  "worksFor": { "@type": "Organization", "name": "OpenSIN" },
  "sameAs": ["https://github.com/Delqhi", "https://x.com/delqhi"],
  "knowsAbout": ["AI", "TypeScript", "Open Source"]
}
```

## 3. WebSite Schema

**Purpose:** Site identity + search functionality
**Impact:** Enables Google site search in results

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OpenSIN Blog",
  "url": "https://me.delqhi.com",
  "publisher": { "@type": "Organization", "name": "OpenSIN" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://me.delqhi.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

## 4. Article Schema

**Purpose:** Blog post structured data
**Impact:** AI citation boost, rich snippets

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Was ist OpenSIN?",
  "description": "OpenSIN ist das erste Agent-to-Agent Netzwerk...",
  "author": { "@type": "Person", "name": "Jeremy Schulze" },
  "publisher": { "@type": "Organization", "name": "OpenSIN" },
  "datePublished": "2026-04-04",
  "dateModified": "2026-04-04",
  "url": "https://me.delqhi.com/blog/was-ist-opensin",
  "keywords": "OpenSIN, AI Agents, A2A Protocol",
  "articleSection": "Vergleich",
  "inLanguage": "de"
}
```

## 5. FAQPage Schema

**Purpose:** FAQ rich snippets in search results
**Impact:** 2x more AI citations

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist OpenSIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OpenSIN ist das erste Agent-to-Agent Netzwerk..."
      }
    }
  ]
}
```

## 6. BreadcrumbList Schema

**Purpose:** Navigation breadcrumbs in SERPs
**Impact:** Better click-through rates

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://me.delqhi.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://me.delqhi.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Post Title", "item": "https://me.delqhi.com/blog/post" }
  ]
}
```

## 7. Product Schema

**Purpose:** Product listings in search results
**Impact:** Shopping Graph integration, price display

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MyOpenSIN",
  "description": "Premium AI agent orchestration platform",
  "brand": { "@type": "Brand", "name": "OpenSIN" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "49.00",
    "availability": "https://schema.org/InStock"
  }
}
```

## 8. SoftwareApplication Schema

**Purpose:** Software/app listings
**Impact:** Developer search visibility

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "OpenSIN",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any",
  "programmingLanguage": "TypeScript",
  "codeRepository": "https://github.com/Delqhi/opensin"
}
```

## 9. VideoObject Schema

**Purpose:** Video embeds for AI and search
**Impact:** YouTube + AI video citations

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "OpenSIN Tutorial",
  "description": "How to set up OpenSIN in 5 minutes",
  "thumbnailUrl": "https://me.delqhi.com/thumbnail.jpg",
  "uploadDate": "2026-04-04",
  "duration": "PT5M30S",
  "contentUrl": "https://youtube.com/watch?v=xxx"
}
```

## 10. SpeakableSpecification Schema

**Purpose:** Voice assistant optimization
**Impact:** Siri, Alexa, Google Assistant read your content

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is OpenSIN?",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".speakable-summary"]
  }
}
```

## 11. HowTo Schema

**Purpose:** Tutorial content in search results
**Impact:** How-to rich results, step-by-step display

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up OpenSIN",
  "description": "Step-by-step guide to deploying OpenSIN",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Clone the Repository",
      "text": "Run git clone https://github.com/Delqhi/opensin"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Install Dependencies",
      "text": "Run npm install in the project directory"
    }
  ]
}
```

## 12. WebPage Schema

**Purpose:** Per-page metadata
**Impact:** Enhanced SERP display

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "OpenSIN Blog",
  "description": "Blog about AI agents and multi-agent orchestration",
  "url": "https://me.delqhi.com/blog",
  "isPartOf": { "@type": "WebSite", "name": "OpenSIN" }
}
```

## Validation

Use these tools to validate your schemas:
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org/
- **JSON-LD Playground:** https://json-ld.org/playground/
