# SEO Import — Quick Start Guide

> **Get maximum SEO + viral reach in 15 minutes.**

## Step 1: Clone & Configure (5 min)

```bash
# Clone
git clone https://github.com/Delqhi/seo-import.git

# Copy to your project
cp -r seo-import/templates/* your-project/
cp -r seo-import/scripts/* your-project/scripts/

# Configure (edit ONE file)
cp templates/seo-config.example.json your-project/seo-config.json
```

## Step 2: Edit seo-config.json (5 min)

```json
{
  "site": {
    "name": "Your Site",
    "url": "https://yoursite.com",
    "description": "Your description",
    "language": "en"
  },
  "organization": {
    "name": "Your Company",
    "logo": "https://yoursite.com/logo.png",
    "sameAs": ["https://github.com/you"]
  },
  "person": {
    "name": "Your Name",
    "jobTitle": "Your Title"
  },
  "social": {
    "twitter": "@yourhandle",
    "github": "https://github.com/you"
  }
}
```

## Step 3: Generate SEO Files (1 min)

```bash
node scripts/generate-seo.mjs
```

**Output:**
- ✅ robots.txt (AI crawlers allowed)
- ✅ ai.txt (AI instructions)
- ✅ llms.txt (LLM context)
- ✅ sitemap.xml (all pages)
- ✅ rss.xml (blog feed)
- ✅ _headers (Cloudflare headers)
- ✅ _redirects (www→non-www)

## Step 4: Deploy (4 min)

```bash
# Copy generated files to your public/ folder
cp templates/*.txt your-project/public/
cp templates/*.xml your-project/public/
cp templates/_headers your-project/public/
cp templates/_redirects your-project/public/

# Deploy to Cloudflare Pages
npx wrangler pages deploy your-project/dist --project-name your-site
```

## Step 5: Start Viral Growth (Ongoing)

Follow the **3x3 Framework** from `docs/VIRAL-GROWTH-PLAYBOOK.md`:

1. **Create 3 TikTok accounts**
2. **Post 3x/day on each** (45 posts/week)
3. **Repurpose to YouTube Shorts, Instagram Reels, Snapchat**
4. **Use Visual CTAs** (show URL being typed)
5. **Analyze daily, iterate hooks**

## Validation

```bash
# Check your SEO setup
node scripts/validate-schema.mjs

# Check AI visibility
node scripts/check-ai-visibility.mjs
```

## Next Steps

1. Read `docs/VIRAL-GROWTH-PLAYBOOK.md` — 3x3 Framework
2. Read `docs/AI-SEO-GUIDE.md` — 7 Pillars of AI SEO
3. Read `docs/YOUTUBE-SEO-GUIDE.md` — #1 AI visibility signal
4. Read `docs/TIKTOK-STRATEGY.md` — Fastest organic reach
5. Read `docs/CHECKLIST.md` — 80+ point checklist

---

**Questions?** Open an issue on GitHub.
