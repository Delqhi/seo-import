# SEO Import — Pre-Deployment Checklist

## Technical SEO
- [ ] robots.txt exists and allows all AI crawlers
- [ ] sitemap.xml includes all pages and blog posts
- [ ] RSS feed generated with latest posts
- [ ] ai.txt created with site context for AI
- [ ] llms.txt created with LLM instructions
- [ ] _headers configured for Cloudflare Pages
- [ ] _redirects configured (www → non-www, HTTP → HTTPS)
- [ ] favicon.ico present
- [ ] Canonical URL set on all pages

## Meta Tags
- [ ] `<title>` — unique, descriptive, under 60 chars
- [ ] `<meta name="description">` — compelling, under 160 chars
- [ ] `<meta name="keywords">` — relevant keywords
- [ ] `<link rel="canonical">` — correct URL
- [ ] `<meta name="robots">` — index, follow
- [ ] `<meta name="theme-color">` — brand color

## Open Graph
- [ ] `og:title` — compelling title
- [ ] `og:description` — description under 200 chars
- [ ] `og:type` — website/article/product
- [ ] `og:url` — canonical URL
- [ ] `og:image` — 1200x630px minimum
- [ ] `og:image:width` and `og:image:height`
- [ ] `og:locale` — language code
- [ ] `og:site_name` — brand name

## Twitter Cards
- [ ] `twitter:card` — summary_large_image
- [ ] `twitter:title` — title
- [ ] `twitter:description` — description
- [ ] `twitter:image` — image URL
- [ ] `twitter:site` — @handle
- [ ] `twitter:creator` — @handle

## JSON-LD Structured Data
- [ ] Organization schema
- [ ] Person/Author schema
- [ ] WebSite schema with SearchAction
- [ ] FAQPage schema (if FAQ exists)
- [ ] BreadcrumbList schema
- [ ] Article schema (on blog posts)
- [ ] Product schema (if products exist)
- [ ] SoftwareApplication schema (if software)
- [ ] VideoObject schema (if videos embedded)
- [ ] SpeakableSpecification schema (for voice)
- [ ] HowTo schema (for tutorials)

## AI Search Engine Optimization
- [ ] GPTBot allowed in robots.txt
- [ ] ClaudeBot allowed in robots.txt
- [ ] PerplexityBot allowed in robots.txt
- [ ] Google-Extended allowed in robots.txt
- [ ] FAQPage JSON-LD with 5+ Q&As
- [ ] Content has 15+ named entities per page
- [ ] Q&A formatted headings
- [ ] Data front-loaded (first 30%)
- [ ] Content updated within 30 days
- [ ] YouTube presence linked
- [ ] Cross-platform mentions (Reddit, GitHub, LinkedIn)

## Performance
- [ ] Page loads in < 2 seconds
- [ ] Images optimized (WebP/AVIF)
- [ ] Lazy loading on images below fold
- [ ] Preload critical resources
- [ ] Minified CSS/JS
- [ ] CDN configured (Cloudflare)

## Content
- [ ] All blog posts have unique titles
- [ ] All blog posts have descriptions/excerpts
- [ ] All blog posts have tags
- [ ] All blog posts have dates in ISO format
- [ ] No duplicate content
- [ ] Internal linking between related posts
- [ ] External links to authoritative sources

## Validation
- [ ] Schema.org validator passes (validator.schema.org)
- [ ] Google Rich Results Test passes
- [ ] Open Graph debugger passes (developers.facebook.com/tools/debug)
- [ ] Twitter Card validator passes (cards-dev.twitter.com)
- [ ] No 404 errors on internal links
- [ ] Mobile-friendly test passes
