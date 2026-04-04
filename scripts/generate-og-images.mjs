#!/usr/bin/env node
/**
 * SEO Import — Dynamic Open Graph Image Generator
 * Creates OG images for blog posts and pages using Canvas API
 *
 * Usage: node scripts/generate-og-images.mjs [config-path] [output-dir]
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = process.argv[2] || join(__dirname, '..', 'templates', 'seo-config.json');
const OUTPUT_DIR = process.argv[3] || join(__dirname, '..', 'public', 'og-images');

function loadConfig() {
  if (!existsSync(CONFIG_PATH)) {
    console.error(`❌ Config not found: ${CONFIG_PATH}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));
}

// ─── SVG-based OG Image Generator (no Canvas dependency needed) ────────
function generateOGImageSVG(config, post = null) {
  const isPost = post !== null;
  const title = isPost ? post.title : config.site.name;
  const subtitle = isPost ? post.description : config.site.description;
  const date = isPost ? post.date : '';
  const category = isPost ? post.category : '';

  // Truncate long titles
  const truncatedTitle = title.length > 60 ? title.slice(0, 57) + '...' : title;
  const truncatedSubtitle = subtitle.length > 120 ? subtitle.slice(0, 117) + '...' : subtitle;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d1117;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#161b22;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#34d399;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="40" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Accent line -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)" />

  <!-- Glow circle -->
  <circle cx="1050" cy="100" r="150" fill="#10b981" opacity="0.05" filter="url(#glow)" />

  <!-- Logo/Brand -->
  <text x="60" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#10b981">
    ${config.organization?.name || config.site.name}
  </text>

  ${isPost && category ? `
  <!-- Category badge -->
  <rect x="60" y="120" width="${category.length * 12 + 24}" height="32" rx="16" fill="#10b981" opacity="0.1" />
  <text x="${60 + 12 + (category.length * 12 + 24) / 2}" y="142" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#10b981" text-anchor="middle">
    ${category}
  </text>
  ` : ''}

  <!-- Title -->
  <text x="60" y="${isPost ? '220' : '200'}" font-family="system-ui, -apple-system, sans-serif" font-size="${truncatedTitle.length > 40 ? '48' : '56'}" font-weight="800" fill="#f0f6fc">
    ${truncatedTitle}
  </text>

  ${isPost ? `
  <!-- Description -->
  <text x="60" y="300" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#9198a1">
    ${truncatedSubtitle}
  </text>

  <!-- Author and date -->
  <text x="60" y="540" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#9198a1">
    ${post.author || config.person?.name || ''} · ${date}
  </text>
  ` : `
  <!-- Description -->
  <text x="60" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#9198a1">
    ${truncatedSubtitle}
  </text>
  `}

  <!-- Bottom accent line -->
  <rect x="60" y="580" width="200" height="3" rx="1.5" fill="url(#accent)" />

  <!-- URL -->
  <text x="60" y="610" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#484f58">
    ${config.site.url}
  </text>
</svg>`;
}

async function fetchBlogPosts(config) {
  if (!config.blog?.enabled || !config.blog.source) return [];
  try {
    const res = await fetch(`${config.blog.source}/index.json`);
    if (!res.ok) return [];
    const index = await res.json();
    const posts = [];
    for (const entry of index.slice(0, 10)) { // Generate for latest 10
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
        description: get('description') || get('excerpt') || '',
        author: get('author') || config.person?.name || '',
        date: get('date'),
        category: get('category') || '',
      });
    }
    return posts;
  } catch { return []; }
}

// ─── Main ──────────────────────────────────────────────────────────────
async function main() {
  console.log('🎨 SEO Import — Generating OG images...\n');

  const config = loadConfig();
  const posts = await fetchBlogPosts(config);

  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  // Generate homepage OG image
  const homeSVG = generateOGImageSVG(config);
  writeFileSync(join(OUTPUT_DIR, 'og-home.png'), homeSVG);
  console.log('✅ og-home.png (homepage)');

  // Generate blog post OG images
  for (const post of posts) {
    const postSVG = generateOGImageSVG(config, post);
    writeFileSync(join(OUTPUT_DIR, `og-${post.slug}.png`), postSVG);
    console.log(`✅ og-${post.slug}.png`);
  }

  console.log(`\n📊 Generated ${posts.length + 1} OG images`);
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log('\n⚠️  Note: SVG files generated. Convert to PNG using:');
  console.log('   npx resvg [input.svg] [output.png]');
}

main().catch(console.error);
