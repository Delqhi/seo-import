# SEO Import — Universal SEO & AI Search Optimization Template

> **Plug & Play SEO template.** Clone, configure, deploy. Dominate Google, ChatGPT, Perplexity, Claude, AND YouTube.

## 🚀 Quick Start (30 seconds)

```bash
# 1. Clone
git clone https://github.com/Delqhi/seo-import.git

# 2. Copy to your project
cp -r seo-import/templates/* your-project/
cp -r seo-import/scripts/* your-project/scripts/

# 3. Configure (edit ONE file)
cp templates/seo-config.example.json your-project/seo-config.json
# Edit seo-config.json with your site info

# 4. Generate
node scripts/generate-seo.mjs

# ✅ Done — optimized for Google + ALL AI search engines
```

## 📊 Why This Matters (2026 Data)

| Metric | Stat | Source |
|--------|------|--------|
| AI search traffic growth | **+1,200%** in 2025 | Adobe Analytics |
| ChatGPT share of AI traffic | **87.4%** | Conductor, 3.3B sessions |
| Brands invisible to AI | **85.7%** | Loamly, 2,014 companies |
| AI visitor conversion rate | **3x** organic | Microsoft Clarity |
| AI signup conversion | **11x** organic | Microsoft Clarity |
| YouTube → AI visibility correlation | **0.737** | Ahrefs, 75K brands |
| Fresh content (30 days) citation boost | **3.2x** | Kevin Indig, 1.2M citations |
| 15+ named entities per page | **4.8x** citations | Kevin Indig |
| Q&A headings vs generic | **2x** citations | Kevin Indig |
| AI Overviews in searches | **48%** | Digital Applied, Mar 2026 |

## 📦 What's Included

### Core Files
| File | Purpose |
|------|---------|
| `templates/seo-config.json` | **Single config file** — everything generated from here |
| `templates/index.html` | SEO-optimized HTML with all meta tags + JSON-LD |
| `templates/robots.txt` | AI crawler allowlist (GPTBot, ClaudeBot, PerplexityBot, etc.) |
| `templates/ai.txt` | AI-specific crawler instructions with full site context |
| `templates/llms.txt` | LLM context file for AI models |
| `templates/sitemap.xml` | Dynamic sitemap with blog posts + Google News tags |
| `templates/rss.xml` | RSS feed for content syndication |
| `templates/_headers` | Cloudflare Pages security + AI crawler headers |
| `templates/_redirects` | www→non-www, HTTP→HTTPS redirects |

### JSON-LD Structured Data (12 schemas)
| Schema | Purpose | Impact |
|--------|---------|--------|
| Organization | Brand identity | AI entity recognition |
| Person | Author identity | E-E-A-T signals |
| WebSite | Site search + identity | Google SearchAction |
| WebPage | Per-page metadata | Rich snippets |
| Article | Blog post data | AI citation boost |
| FAQPage | FAQ rich snippets | 2x more citations |
| BreadcrumbList | Navigation breadcrumbs | SERP display |
| Product | Product listings | Shopping Graph |
| SoftwareApplication | Software/apps | Developer search |
| VideoObject | Video embeds | YouTube + AI video |
| SpeakableSpecification | Voice assistants | Siri, Alexa, Google |
| HowTo | Tutorial content | How-to rich results |

### Scripts
| Script | Purpose |
|--------|---------|
| `generate-seo.mjs` | Main generator (sitemap, RSS, robots, ai.txt, llms.txt, headers) |
| `validate-schema.mjs` | JSON-LD schema validator against schema.org |
| `check-ai-visibility.mjs` | AI crawler accessibility checker |
| `generate-og-images.mjs` | Dynamic Open Graph image generator |

### Documentation
| Doc | Content |
|-----|---------|
| `docs/AI-SEO-GUIDE.md` | Complete 2026 AI search optimization guide |
| `docs/YOUTUBE-SEO-GUIDE.md` | YouTube SEO strategy (#1 AI visibility signal) |
| `docs/REDDIT-STRATEGY.md` | Reddit strategy for Perplexity citations |
| `docs/SCHEMA-REFERENCE.md` | All 12 JSON-LD schemas explained |
| `docs/CHECKLIST.md` | 60+ point pre-deployment checklist |
| `docs/CONTENT-OPTIMIZATION.md` | Entity extraction, Q&A format, freshness |

## ⚙️ Configuration

Edit `seo-config.json` — **the only file you need to change**:

```json
{
  "site": {
    "name": "Your Site",
    "url": "https://yoursite.com",
    "description": "Your description",
    "language": "en",
    "alternateLanguages": ["de", "es"],
    "themeColor": "#0d1117"
  },
  "organization": {
    "name": "Your Company",
    "logo": "https://yoursite.com/logo.png",
    "sameAs": ["https://github.com/you", "https://twitter.com/you"],
    "knowsAbout": ["AI", "Software", "Open Source"]
  },
  "person": {
    "name": "Your Name",
    "jobTitle": "Your Title",
    "sameAs": ["https://github.com/you"]
  },
  "blog": {
    "enabled": true,
    "source": "https://raw.githubusercontent.com/user/blog-repo/main",
    "postsPerPage": 10
  },
  "youtube": {
    "channelId": "UCxxxxxxxxxxxx",
    "channelUrl": "https://youtube.com/@yourchannel"
  },
  "social": {
    "twitter": "@yourhandle",
    "github": "https://github.com/you",
    "linkedin": "https://linkedin.com/in/you",
    "reddit": "https://reddit.com/u/you"
  }
}
```

## 🎯 The 7 Pillars of AI SEO (GEO)

### 1. Content Structure
- **Q&A headings** → 2x more citations
- **Front-load data** → First 30% captures 44.2% of citations
- **15+ named entities** → 4.8x citation boost
- **Direct answers** → Write like answering a question

### 2. Brand Authority
| Signal | Correlation | Action |
|--------|------------|--------|
| **YouTube** | **0.737** | Create videos, embed in posts |
| Web mentions | 0.664 | Guest posts, PR, partnerships |
| Reddit | 0.423 | Genuine community participation |
| Backlinks | 0.218 | Quality over quantity |

### 3. Technical Readiness
- ✅ AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot)
- ✅ Schema markup (Organization, Article, FAQ minimum)
- ✅ `llms.txt` + `ai.txt` files
- ✅ Fast loading (<2s), mobile-friendly
- ✅ Sitemap + RSS feed

### 4. Platform-Specific
- **ChatGPT**: Bing ranking, FAQ schema, fresh content
- **Perplexity**: Reddit presence, recency (46.7% Reddit sources)
- **Claude**: Long-form authoritative content
- **Google AI**: E-E-A-T, structured data, Shopping Graph

### 5. Freshness
- Content <30 days old = **3.2x** more citations
- Update important pages quarterly minimum
- Add "Last updated" dates

### 6. Cross-Platform Presence
- Website → YouTube → Reddit → LinkedIn → GitHub → News
- Consistent brand mentions across all platforms

### 7. Measurement
- **Visibility rate** (not rankings) — % of prompts where brand appears
- **Dark AI traffic** — up to 80% appears as "Direct" in GA4
- **Referral traffic** — from known AI domains

## 📈 Platform Coverage

| Platform | Share | Optimization |
|----------|-------|-------------|
| **ChatGPT Search** | 87.4% | Bing indexing, FAQ schema, fresh content |
| **Perplexity** | 5.2% | Reddit signals, recency, structured data |
| **Google AI Mode** | 4.1% | E-E-A-T, Shopping Graph, schema |
| **Claude** | 2.1% | Long-form content, academic attribution |
| **Google Search** | Traditional | Core Web Vitals, meta tags, sitemap |
| **YouTube Search** | #1 signal | Video schema, transcripts, engagement |
| **Bing Search** | Traditional | Sitemap, robots.txt, meta tags |

## 🏗️ Architecture

```
seo-import/
├── templates/
│   ├── seo-config.json          ← Edit this ONE file
│   ├── index.html               ← SEO HTML template
│   ├── robots.txt               ← AI crawler allowlist
│   ├── ai.txt                   ← AI instructions
│   ├── llms.txt                 ← LLM context
│   ├── sitemap.xml              ← Dynamic sitemap
│   ├── rss.xml                  ← RSS feed
│   ├── _headers                 ← Cloudflare headers
│   ├── _redirects               ← Cloudflare redirects
│   └── json-ld/                 ← 12 JSON-LD schemas
│       ├── organization.json
│       ├── person.json
│       ├── website.json
│       ├── webpage.json
│       ├── article.json
│       ├── faq.json
│       ├── breadcrumb.json
│       ├── product.json
│       ├── software.json
│       ├── video.json
│       ├── speakable.json
│       └── howto.json
├── scripts/
│   ├── generate-seo.mjs         ← Main generator
│   ├── validate-schema.mjs      ← Schema validator
│   ├── check-ai-visibility.mjs  ← AI crawler checker
│   └── generate-og-images.mjs   ← OG image generator
└── docs/
    ├── AI-SEO-GUIDE.md          ← Complete AI SEO guide
    ├── YOUTUBE-SEO-GUIDE.md     ← YouTube strategy
    ├── REDDIT-STRATEGY.md       ← Reddit for Perplexity
    ├── SCHEMA-REFERENCE.md      ← All schemas explained
    ├── CHECKLIST.md             ← 60+ point checklist
    └── CONTENT-OPTIMIZATION.md  ← Entity extraction guide
```

## 🤝 Used By

- [me.delqhi.com](https://me.delqhi.com) — Personal site + blog (81 posts)
- [opensin.ai](https://opensin.pages.dev) — OpenSIN platform
- [my.opensin.ai](https://my.opensin.ai) — MyOpenSIN premium

## 📄 License

Apache 2.0 — Use freely in any project.
