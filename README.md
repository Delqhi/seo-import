# SEO Import — Universal SEO & AI Search Optimization Template

> **Plug & Play SEO template.** Clone, configure, deploy. Dominate Google, ChatGPT, Perplexity, Claude, YouTube, AND Reddit.

## 🚀 Quick Start (30 seconds)

### Method 1: The Automated Auto-Injector (Recommended)
Automatically inject all SEO templates, AEO components, and scripts into your project:

```bash
# 1. Clone
git clone https://github.com/Delqhi/seo-import.git

# 2. Run the Auto-Injector on your target project
node seo-import/cli.js inject /path/to/your-project

# 3. Update your package.json with your actual domain
# 4. Run your standard build (the injector automatically chained the SEO steps)
```

### Method 2: Manual (Legacy)

```bash
# 1. Clone
git clone https://github.com/Delqhi/seo-import.git

# 2. Copy to your project
cp -r seo-import/templates/* your-project/
cp -r seo-import/scripts/* your-project/scripts/

# 3. Configure (edit ONE file)
cp templates/seo-config.example.json your-project/seo-config.json

# 4. Generate
node scripts/generate-seo.mjs

# ✅ Done — optimized for ALL search engines
```

## 📊 Why This Matters (2026 Data)

| Metric | Stat | Source |
|--------|------|--------|
| AI search traffic growth | **+1,200%** in 2025 | Adobe Analytics |
| ChatGPT share of AI traffic | **87.4%** | Conductor, 3.3B sessions |
| Brands invisible to AI | **85.7%** | Loamly, 2,014 companies |
| AI visitor conversion rate | **3x** organic | Microsoft Clarity |
| AI signup conversion | **11x** organic | Microsoft Clarity |
| **YouTube → AI visibility** | **0.737 correlation** | Ahrefs, 75K brands |
| Custom thumbnail CTR boost | **8-15x** vs auto-generated | Digital Applied |
| YouTube watch time from recommendations | **70%** | YouTube |
| Fresh content (30 days) citation boost | **3.2x** | Kevin Indig, 1.2M citations |
| 15+ named entities per page | **4.8x** citations | Kevin Indig |
| Q&A headings vs generic | **2x** citations | Kevin Indig |
| Reddit in Perplexity citations | **46.7%** | Profound data |
| AI Overviews in Google searches | **48%** | Digital Applied, Mar 2026 |
| Organic CTR decline with AI Overviews | **-61%** | Digital Applied |

## 📦 What's Included

### Core Files (9 files)
| File | Purpose |
|------|---------|
| `seo-config.json` | **Single config file** — everything generated from here |
| `index.html` | SEO-optimized HTML with all meta tags + JSON-LD |
| `robots.txt` | AI crawler allowlist (GPTBot, ClaudeBot, PerplexityBot, etc.) |
| `ai.txt` | AI-specific crawler instructions with full site context |
| `llms.txt` | LLM context file for AI models |
| `sitemap.xml` | Dynamic sitemap with blog posts + Google News tags |
| `rss.xml` | RSS feed for content syndication |
| `_headers` | Cloudflare Pages security + AI crawler headers |
| `_redirects` | www→non-www, HTTP→HTTPS redirects |

### JSON-LD Structured Data (12 schemas)
Organization, Person, WebSite, WebPage, Article, FAQPage, BreadcrumbList, Product, SoftwareApplication, VideoObject, SpeakableSpecification, HowTo

### Scripts (4 tools)
| Script | Purpose |
|--------|---------|
| `generate-seo.mjs` | Main generator (sitemap, RSS, robots, ai.txt, llms.txt, headers) |
| `validate-schema.mjs` | JSON-LD schema validator against schema.org |
| `check-ai-visibility.mjs` | AI crawler accessibility checker + scoring |
| `generate-og-images.mjs` | Dynamic Open Graph image generator |

### Documentation (10 guides)
| Doc | Content |
|-----|---------|
| `AI-SEO-GUIDE.md` | Complete 2026 AI search optimization (7 pillars) |
| `YOUTUBE-SEO-GUIDE.md` | YouTube SEO strategy — #1 AI visibility signal |
| `YOUTUBE-SHORTS-GUIDE.md` | YouTube Shorts viral strategy for maximum reach |
| `TIKTOK-STRATEGY.md` | TikTok viral strategy — fastest organic reach |
| `INSTAGRAM-STRATEGY.md` | Instagram Reels strategy — 2.4B users |
| `X-TWITTER-STRATEGY.md` | X/Twitter strategy — #1 AI/Tech discourse platform |
| `LINKEDIN-STRATEGY.md` | LinkedIn B2B strategy — 20x engagement |
| `REDDIT-STRATEGY.md` | Reddit strategy for Perplexity citations (46.7%) |
| `PINTEREST-STRATEGY.md` | Pinterest visual search engine strategy |
| `EMAIL-STRATEGY.md` | Email marketing — $36 ROI per $1 spent |
| `MAXIMUM-REACH-PLAYBOOK.md` | Complete 30-day plan for maximum reach |
| `CONTENT-OPTIMIZATION.md` | Entity extraction, Q&A format, semantic SEO |
| `SCHEMA-REFERENCE.md` | All 12 JSON-LD schemas with examples |
| `CHECKLIST.md` | 80+ point pre-deployment checklist |

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
    "channelUrl": "https://youtube.com/@yourchannel",
    "uploadFrequency": "2-3 per week",
    "shortsFrequency": "daily"
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
- **Semantic SEO** → Topic clusters, not keywords

### 2. Brand Authority
| Signal | Correlation | Action |
|--------|------------|--------|
| **YouTube** | **0.737** | Videos, Shorts, embeds, transcripts |
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
- Website → YouTube → YouTube Shorts → Reddit → LinkedIn → GitHub → News
- Consistent brand mentions across all platforms

### 7. Measurement
- **Visibility rate** (not rankings) — % of prompts where brand appears
- **Dark AI traffic** — up to 80% appears as "Direct" in GA4
- **YouTube metrics** — CTR, watch time, subscriber growth

## 📈 Platform Coverage

| Platform | Share/Impact | Optimization |
|----------|-------------|-------------|
| **ChatGPT Search** | 87.4% AI traffic | Bing indexing, FAQ schema, fresh content |
| **Perplexity** | 5.2% AI traffic | Reddit signals, recency, structured data |
| **Google AI Mode** | 4.1% AI traffic | E-E-A-T, Shopping Graph, schema |
| **Claude** | 2.1% AI traffic | Long-form content, academic attribution |
| **YouTube** | **#1 AI signal** | Video SEO, Shorts, transcripts, embeds |
| **Reddit** | 46.7% Perplexity sources | Community participation, detailed posts |
| **Google Search** | Traditional | Core Web Vitals, meta tags, sitemap |

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
├── scripts/
│   ├── generate-seo.mjs         ← Main generator
│   ├── validate-schema.mjs      ← Schema validator
│   ├── check-ai-visibility.mjs  ← AI crawler checker
│   └── generate-og-images.mjs   ← OG image generator
└── docs/
    ├── AI-SEO-GUIDE.md          ← Complete AI SEO guide
    ├── YOUTUBE-SEO-GUIDE.md     ← YouTube strategy (#1 signal)
    ├── YOUTUBE-SHORTS-GUIDE.md  ← Shorts viral strategy
    ├── REDDIT-STRATEGY.md       ← Reddit for Perplexity
    ├── SCHEMA-REFERENCE.md      ← All schemas explained
    ├── CHECKLIST.md             ← 80+ point checklist
    └── CONTENT-OPTIMIZATION.md  ← Entity extraction guide
```

## 🤝 Used By

- [me.delqhi.com](https://me.delqhi.com) — Personal site + blog (81 posts)
- [opensin.ai](https://opensin.pages.dev) — OpenSIN platform
- [my.opensin.ai](https://my.opensin.ai) — MyOpenSIN premium

## 📄 License

Apache 2.0 — Use freely in any project.
