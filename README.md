# SEO Import — Universal SEO & AI Search Optimization Template

> Plug & Play SEO template. Clone, configure, deploy. Dominate Google AND AI search.

## Quick Start

```bash
# Clone into your project
git clone https://github.com/Delqhi/seo-import.git
cp -r seo-import/templates/* your-project/
cp -r seo-import/scripts/* your-project/scripts/

# Configure
cp templates/seo-config.example.json your-project/seo-config.json
# Edit seo-config.json with your site info

# Generate SEO files
node scripts/generate-seo.mjs

# Done! Your site is now optimized for:
# ✅ Google Search
# ✅ Bing Search
# ✅ ChatGPT Search (87.4% of AI traffic)
# ✅ Perplexity AI
# ✅ Claude AI
# ✅ Google AI Mode / AI Overviews
```

## What's Included

### 📄 Core Files
| File | Purpose |
|------|---------|
| `templates/index.html` | SEO-optimized HTML with all meta tags |
| `templates/robots.txt` | AI crawler allowlist |
| `templates/ai.txt` | AI-specific crawler instructions |
| `templates/sitemap.xml` | Dynamic sitemap generator |
| `templates/rss.xml` | RSS feed generator |
| `templates/_headers` | Cloudflare Pages headers |
| `templates/_redirects` | Cloudflare Pages redirects |

### 🏗️ JSON-LD Structured Data
| Schema | File | Purpose |
|--------|------|---------|
| Organization | `templates/json-ld/organization.json` | Company/brand identity |
| Person | `templates/json-ld/person.json` | Author/creator identity |
| WebSite | `templates/json-ld/website.json` | Site search & identity |
| WebPage | `templates/json-ld/webpage.json` | Per-page metadata |
| Article | `templates/json-ld/article.json` | Blog post structured data |
| FAQPage | `templates/json-ld/faq.json` | FAQ rich snippets |
| BreadcrumbList | `templates/json-ld/breadcrumb.json` | Navigation breadcrumbs |
| Product | `templates/json-ld/product.json` | Product listings |
| SoftwareApplication | `templates/json-ld/software.json` | Software/apps |
| VideoObject | `templates/json-ld/video.json` | Video embeds |
| SpeakableSpecification | `templates/json-ld/speakable.json` | Voice assistant optimization |
| HowTo | `templates/json-ld/howto.json` | Tutorial content |

### 📊 Scripts
| Script | Purpose |
|--------|---------|
| `generate-seo.mjs` | Main SEO file generator (sitemap, RSS, robots) |
| `validate-schema.mjs` | JSON-LD schema validator |
| `check-ai-visibility.mjs` | AI crawler accessibility checker |
| `generate-og-images.mjs` | Open Graph image generator |

### 📖 Documentation
| Doc | Content |
|-----|---------|
| `docs/AI-SEO-GUIDE.md` | Complete AI search optimization guide |
| `docs/SCHEMA-REFERENCE.md` | All JSON-LD schemas explained |
| `docs/CHECKLIST.md` | Pre-deployment SEO checklist |

## Configuration

Edit `seo-config.json`:

```json
{
  "site": {
    "name": "Your Site Name",
    "url": "https://yoursite.com",
    "description": "Your site description",
    "language": "en",
    "alternateLanguages": ["de", "es"]
  },
  "organization": {
    "name": "Your Company",
    "logo": "https://yoursite.com/logo.png",
    "sameAs": ["https://github.com/you", "https://twitter.com/you"]
  },
  "blog": {
    "enabled": true,
    "source": "https://raw.githubusercontent.com/user/blog-repo/main/index.json",
    "postsPerPage": 10
  },
  "social": {
    "twitter": "@yourhandle",
    "github": "https://github.com/you",
    "linkedin": "https://linkedin.com/in/you"
  }
}
```

## AI Search Engine Coverage

This template optimizes for:

| Platform | Market Share | Optimization Method |
|----------|-------------|-------------------|
| **ChatGPT Search** | 87.4% | Bing indexing, FAQ schema, fresh content |
| **Perplexity** | 5.2% | Recency, Reddit signals, structured data |
| **Google AI Mode** | 4.1% | E-E-A-T, Shopping Graph, schema markup |
| **Claude** | 2.1% | Long-form content, academic attribution |
| **Google Search** | Traditional | Core Web Vitals, meta tags, sitemap |
| **Bing Search** | Traditional | Sitemap, robots.txt, meta tags |

## The 7 Pillars of AI SEO (GEO)

1. **Content Structure** — Q&A headings, front-loaded data, 15+ named entities per page
2. **Brand Authority** — YouTube presence, web mentions, Reddit, verified reviews
3. **Technical Readiness** — AI crawler access, schema markup, llms.txt, fast loading
4. **Platform-Specific** — Optimize differently for ChatGPT, Perplexity, Claude, Google AI
5. **Freshness** — Content updated within 30 days gets 3.2x more AI citations
6. **Cross-Platform Presence** — Consistent mentions across website, YouTube, Reddit, news
7. **Measurement** — Track visibility rate, not rankings. Monitor dark AI traffic.

## License

Apache 2.0 — Use freely in any project.
