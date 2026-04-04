#!/usr/bin/env node
/**
 * SEO Import — Universal SEO File Generator
 * Generates sitemap.xml, RSS, robots.txt, ai.txt, llms.txt, and _headers
 * from a single seo-config.json file.
 *
 * Usage: node scripts/generate-seo.mjs [path-to-config]
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = process.argv[2] || join(__dirname, '..', 'templates', 'seo-config.json');
const OUTPUT_DIR = process.argv[3] || join(__dirname, '..', 'public');

// ─── Load Config ───────────────────────────────────────────────────────
function loadConfig() {
  if (!existsSync(CONFIG_PATH)) {
    console.error(`❌ Config not found: ${CONFIG_PATH}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));
}

// ─── Fetch Blog Posts ──────────────────────────────────────────────────
async function fetchBlogPosts(config) {
  if (!config.blog?.enabled || !config.blog.source) return [];
  try {
    const res = await fetch(`${config.blog.source}/index.json`);
    if (!res.ok) return [];
    const index = await res.json();
    const posts = [];
    for (const entry of index) {
      const mdRes = await fetch(`${config.blog.source}/${entry.file}`);
      if (!mdRes.ok) continue;
      const md = await mdRes.text();
      const match = md.match(/^---\n([\s\S]*?)\n---/);
      if (!match) continue;
      const fm = match[1];
      const get = (k) => { const m = fm.match(new RegExp(`${k}:\\s*["']?([^"'\n]+)["']?`)); return m ? m[1].trim() : ''; };
      posts.push({
        slug: entry.file.replace('.md', ''),
        title: get('title'),
        date: get('date'),
        description: get('description') || get('excerpt') || '',
        author: get('author') || config.person?.name || config.organization?.name || '',
        tags: get('tags'),
        category: get('category') || '',
      });
    }
    return posts;
  } catch { return []; }
}

// ─── Helpers ───────────────────────────────────────────────────────────
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// ─── Generators ────────────────────────────────────────────────────────
function generateRobotsTxt(config) {
  return `User-agent: *
Allow: /

# AI Crawlers — ALL ALLOWED
User-agent: GPTBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: Omgilibot
Allow: /
User-agent: ImagesiftBot
Allow: /
User-agent: Diffbot
Allow: /

# Sitemap
Sitemap: ${config.site.url}/sitemap.xml

# Disallow internal/debug paths
Disallow: /cdn-cgi/
Disallow: /assets/
Disallow: /*?*
`;
}

function generateAiTxt(config) {
  return `# AI Crawler Instructions
# This file provides guidance to AI crawlers and LLM-based search engines

# About this site
Site-Name: ${config.site.name}
Site-Description: ${config.site.description}
Site-Author: ${config.person?.name || ''}
Site-Language: ${config.site.language}${config.site.alternateLanguages ? ', ' + config.site.alternateLanguages.join(', ') : ''}
Site-URL: ${config.site.url}
Site-Topics: ${config.organization?.knowsAbout?.join(', ') || ''}

# Main Products
${config.products?.map((p, i) => `Product-${i + 1}: ${p.name} - ${p.url} - ${p.description}`).join('\n') || '# No products defined'}

# Key Differentiators
${config.differentiators?.map(d => `- ${d}`).join('\n') || '# No differentiators defined'}

# Blog
${config.blog?.enabled ? `The blog at ${config.site.url}/blog contains articles about ${config.organization?.knowsAbout?.slice(0, 5).join(', ') || 'various topics'}.` : '# Blog not enabled'}

# Contact
${Object.entries(config.social || {}).map(([k, v]) => `${k}: ${v}`).join('\n') || '# No social links defined'}

# Crawling Preferences
Crawl-Delay: 1
Max-Depth: 10
`;
}

function generateLlmsTxt(config) {
  return `# ${config.site.name}

> ${config.site.description}

## Overview
${config.site.name} is ${config.site.description}

## Key Information
- **URL**: ${config.site.url}
- **Author**: ${config.person?.name || ''}
- **Organization**: ${config.organization?.name || ''}
- **Topics**: ${config.organization?.knowsAbout?.join(', ') || ''}

## Products
${config.products?.map(p => `- **${p.name}**: ${p.description} (${p.url})`).join('\n') || 'No products defined'}

## Links
${Object.entries(config.social || {}).map(([k, v]) => `- ${k}: ${v}`).join('\n') || 'No links defined'}
`;
}

function generateSitemap(config, posts) {
  const urls = config.pages?.map(p => `  <url>
    <loc>${config.site.url}${p.path}</loc>
    <changefreq>${p.changefreq || 'monthly'}</changefreq>
    <priority>${p.priority || '0.5'}</priority>
  </url>`).join('\n') || '';

  const blogUrls = posts.map(p => `  <url>
    <loc>${config.site.url}/blog/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>${esc(config.site.name)} Blog</news:name>
        <news:language>${config.site.language}</news:language>
      </news:publication>
      <news:publication_date>${p.date}</news:publication_date>
      <news:title>${esc(p.title)}</news:title>
    </news:news>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
${blogUrls}
</urlset>
`;
}

function generateRSS(config, posts) {
  const items = posts.slice(0, config.blog?.maxRssItems || 20).map(p => {
    const pubDate = new Date(p.date).toUTCString();
    const tags = p.tags.split(',').map(t => t.replace(/['"]/g, '').trim());
    return `    <item>
      <title>${esc(p.title)}</title>
      <link>${config.site.url}/blog/${p.slug}</link>
      <guid isPermaLink="true">${config.site.url}/blog/${p.slug}</guid>
      <description>${esc(p.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${esc(p.author)}</author>
      ${tags.map(t => `<category>${esc(t)}</category>`).join('\n      ')}
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${esc(config.site.name)} Blog</title>
    <description>${esc(config.site.description)}</description>
    <link>${config.site.url}/blog</link>
    <language>${config.site.language}-${config.site.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${config.site.url}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${config.organization?.logo || ''}</url>
      <title>${esc(config.site.name)}</title>
      <link>${config.site.url}/blog</link>
    </image>
${items}
  </channel>
</rss>
`;
}

function generateHeaders(config) {
  return `/* Cloudflare Pages Headers for AI & SEO Optimization */

# Security Headers
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

# AI Crawler Headers
/*
  X-Robots-Tag: index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1

# Cache Control for Static Assets
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Cache Control for SEO Files
/sitemap.xml
  Cache-Control: public, max-age=3600
  Content-Type: application/xml

/rss.xml
  Cache-Control: public, max-age=3600
  Content-Type: application/xml

/robots.txt
  Cache-Control: public, max-age=86400
  Content-Type: text/plain

/ai.txt
  Cache-Control: public, max-age=86400
  Content-Type: text/plain

/llms.txt
  Cache-Control: public, max-age=86400
  Content-Type: text/plain

# CORS for AI Crawlers
/*
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: GET, HEAD, OPTIONS
`;
}

function generateRedirects() {
  return `# Cloudflare Pages Redirects
# Old URL New URL Status

# www → non-www
https://www.:splat :splat 301

# Force HTTPS
http://:splat https://:splat 301
`;
}

// ─── Main ──────────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 SEO Import — Generating SEO files...\n');

  const config = loadConfig();
  const posts = await fetchBlogPosts(config);

  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = [
    { name: 'robots.txt', content: generateRobotsTxt(config) },
    { name: 'ai.txt', content: generateAiTxt(config) },
    { name: 'llms.txt', content: generateLlmsTxt(config) },
    { name: 'sitemap.xml', content: generateSitemap(config, posts) },
    { name: 'rss.xml', content: generateRSS(config, posts) },
    { name: '_headers', content: generateHeaders(config) },
    { name: '_redirects', content: generateRedirects() },
  ];

  for (const { name, content } of files) {
    writeFileSync(join(OUTPUT_DIR, name), content);
    console.log(`✅ ${name}`);
  }

  console.log(`\n📊 Summary:`);
  console.log(`   📄 ${files.length} files generated`);
  console.log(`   📝 ${posts.length} blog posts in sitemap`);
  console.log(`   🤖 AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended`);
  console.log(`   📡 RSS: ${Math.min(posts.length, config.blog?.maxRssItems || 20)} latest posts`);
  console.log(`\n✅ All SEO files generated successfully!`);
}

main().catch(console.error);
