#!/usr/bin/env node
/**
 * SEO Import — AI Visibility Checker
 * Checks if your brand appears in AI search engine responses
 * Tests ChatGPT, Perplexity, and Claude visibility
 *
 * Usage: node scripts/check-ai-visibility.mjs [config-path]
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = process.argv[2] || join(__dirname, '..', 'templates', 'seo-config.json');

function loadConfig() {
  if (!existsSync(CONFIG_PATH)) {
    console.error(`❌ Config not found: ${CONFIG_PATH}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));
}

// ─── AI Platform Checks ────────────────────────────────────────────────
async function checkRobotsTxt(url) {
  try {
    const res = await fetch(`${url}/robots.txt`);
    if (!res.ok) return { status: '⚠️', message: 'No robots.txt found' };
    const text = await res.text();
    const bots = ['GPTBot', 'Google-Extended', 'CCBot', 'PerplexityBot', 'anthropic-ai'];
    const blocked = [];
    const allowed = [];

    for (const bot of bots) {
      const botSection = text.split(new RegExp(`User-agent:\\s*${bot}`, 'i'))[1];
      if (!botSection) {
        allowed.push(bot);
        continue;
      }
      const lines = botSection.split('\n').filter(l => l.trim());
      const hasDisallow = lines.some(l => l.trim().startsWith('Disallow:') && l.trim().split(':')[1].trim() === '/');
      const hasAllow = lines.some(l => l.trim().startsWith('Allow:'));

      if (hasDisallow && !hasAllow) {
        blocked.push(bot);
      } else {
        allowed.push(bot);
      }
    }

    return {
      status: blocked.length > 0 ? '❌' : '✅',
      blocked,
      allowed,
      message: blocked.length > 0
        ? `Blocked: ${blocked.join(', ')}`
        : `All ${allowed.length} AI crawlers allowed`
    };
  } catch (err) {
    return { status: '❌', message: `Failed to fetch: ${err.message}` };
  }
}

async function checkSitemap(url) {
  try {
    const res = await fetch(`${url}/sitemap.xml`);
    if (!res.ok) return { status: '❌', message: 'No sitemap.xml found' };
    const text = await res.text();
    const urlCount = (text.match(/<loc>/g) || []).length;
    return { status: '✅', message: `Sitemap found with ${urlCount} URLs` };
  } catch (err) {
    return { status: '❌', message: `Failed: ${err.message}` };
  }
}

async function checkSchemaMarkup(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return { status: '❌', message: 'Failed to fetch page' };
    const html = await res.text();
    const schemas = [];
    const matches = html.matchAll(/"@type":\s*"([^"]+)"/g);
    for (const match of matches) {
      schemas.push(match[1]);
    }
    const unique = [...new Set(schemas)];
    return {
      status: unique.length > 0 ? '✅' : '⚠️',
      schemas: unique,
      message: unique.length > 0
        ? `${unique.length} schema types found: ${unique.join(', ')}`
        : 'No JSON-LD schema found'
    };
  } catch (err) {
    return { status: '❌', message: `Failed: ${err.message}` };
  }
}

async function checkMetaTags(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return { status: '❌', message: 'Failed to fetch page' };
    const html = await res.text();

    const checks = {
      title: /<title>(.*?)<\/title>/i.test(html),
      description: /<meta\s+name="description"/i.test(html),
      ogTitle: /<meta\s+property="og:title"/i.test(html),
      ogDescription: /<meta\s+property="og:description"/i.test(html),
      ogImage: /<meta\s+property="og:image"/i.test(html),
      twitterCard: /<meta\s+name="twitter:card"/i.test(html),
      canonical: /<link\s+rel="canonical"/i.test(html),
      robots: /<meta\s+name="robots"/i.test(html),
    };

    const passed = Object.entries(checks).filter(([, v]) => v).length;
    const total = Object.keys(checks).length;
    const missing = Object.entries(checks).filter(([, v]) => !v).map(([k]) => k);

    return {
      status: passed === total ? '✅' : '⚠️',
      passed,
      total,
      missing,
      message: `${passed}/${total} meta tags present${missing.length > 0 ? `. Missing: ${missing.join(', ')}` : ''}`
    };
  } catch (err) {
    return { status: '❌', message: `Failed: ${err.message}` };
  }
}

async function checkPerformance(url) {
  try {
    const start = Date.now();
    const res = await fetch(url);
    const loadTime = Date.now() - start;
    return {
      status: loadTime < 2000 ? '✅' : '⚠️',
      loadTime,
      message: `Page loaded in ${loadTime}ms${loadTime > 2000 ? ' (slow!)' : ''}`
    };
  } catch (err) {
    return { status: '❌', message: `Failed: ${err.message}` };
  }
}

async function checkAiTxt(url) {
  try {
    const res = await fetch(`${url}/ai.txt`);
    if (!res.ok) return { status: '⚠️', message: 'No ai.txt found (recommended for AI crawlers)' };
    return { status: '✅', message: 'ai.txt found — AI-specific instructions present' };
  } catch {
    return { status: '⚠️', message: 'No ai.txt found' };
  }
}

async function checkLlmsTxt(url) {
  try {
    const res = await fetch(`${url}/llms.txt`);
    if (!res.ok) return { status: '⚠️', message: 'No llms.txt found (recommended for LLMs)' };
    return { status: '✅', message: 'llms.txt found — LLM context file present' };
  } catch {
    return { status: '⚠️', message: 'No llms.txt found' };
  }
}

async function checkRSS(url) {
  try {
    const res = await fetch(`${url}/rss.xml`);
    if (!res.ok) return { status: '⚠️', message: 'No RSS feed found' };
    const text = await res.text();
    const itemCount = (text.match(/<item>/g) || []).length;
    return { status: '✅', message: `RSS feed found with ${itemCount} items` };
  } catch {
    return { status: '⚠️', message: 'No RSS feed found' };
  }
}

// ─── Main ──────────────────────────────────────────────────────────────
async function main() {
  const config = loadConfig();
  const url = config.site?.url || 'https://me.delqhi.com';

  console.log(`🔍 AI Visibility Check for: ${url}\n`);
  console.log(`Site: ${config.site?.name || 'Unknown'}`);
  console.log(`Organization: ${config.organization?.name || 'Unknown'}`);
  console.log('');

  const checks = [
    { name: 'AI Crawler Access (robots.txt)', fn: () => checkRobotsTxt(url) },
    { name: 'Sitemap', fn: () => checkSitemap(url) },
    { name: 'Schema Markup (JSON-LD)', fn: () => checkSchemaMarkup(url) },
    { name: 'Meta Tags (OG, Twitter, etc.)', fn: () => checkMetaTags(url) },
    { name: 'Page Performance', fn: () => checkPerformance(url) },
    { name: 'AI Instructions (ai.txt)', fn: () => checkAiTxt(url) },
    { name: 'LLM Context (llms.txt)', fn: () => checkLlmsTxt(url) },
    { name: 'RSS Feed', fn: () => checkRSS(url) },
  ];

  let passed = 0;
  let warnings = 0;
  let failed = 0;

  for (const { name, fn } of checks) {
    const result = await fn();
    const icon = result.status === '✅' ? '✅' : result.status === '⚠️' ? '⚠️' : '❌';
    console.log(`${icon} ${name}: ${result.message}`);

    if (result.status === '✅') passed++;
    else if (result.status === '⚠️') warnings++;
    else failed++;
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ ${passed} passed`);
  console.log(`   ⚠️  ${warnings} warnings`);
  console.log(`   ❌ ${failed} failed`);

  const score = Math.round((passed / checks.length) * 100);
  console.log(`\n🎯 AI Visibility Score: ${score}/100`);

  if (score >= 80) {
    console.log('✅ Excellent! Your site is well-optimized for AI search engines.');
  } else if (score >= 60) {
    console.log('⚠️  Good, but there\'s room for improvement.');
  } else {
    console.log('❌ Your site needs significant optimization for AI search engines.');
  }

  // AI Platform Visibility Tests
  console.log(`\n🤖 Manual AI Visibility Tests:`);
  console.log(`   1. ChatGPT: Ask "What is ${config.organization?.name || config.site?.name}?"`);
  console.log(`   2. Perplexity: Search "${config.organization?.name || config.site?.name}"`);
  console.log(`   3. Claude: Ask about "${config.organization?.knowsAbout?.[0] || 'your topic'}"`);
  console.log(`   4. Google AI: Search "${config.site?.name}" in AI Mode`);
  console.log(`\n   Track: Does your brand appear? In what context?`);
}

main().catch(console.error);
