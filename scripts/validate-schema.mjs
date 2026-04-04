#!/usr/bin/env node
/**
 * SEO Import — JSON-LD Schema Validator
 * Validates all JSON-LD schemas against schema.org requirements
 *
 * Usage: node scripts/validate-schema.mjs [path-to-config]
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = process.argv[2] || join(__dirname, '..', 'templates', 'seo-config.json');

// ─── Load Config ───────────────────────────────────────────────────────
function loadConfig() {
  if (!existsSync(CONFIG_PATH)) {
    console.error(`❌ Config not found: ${CONFIG_PATH}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));
}

// ─── Validators ────────────────────────────────────────────────────────
const validators = {
  Organization: (config) => {
    const errors = [];
    if (!config.organization?.name) errors.push('Missing organization.name');
    if (!config.organization?.url && !config.site?.url) errors.push('Missing organization.url');
    if (!config.organization?.logo) errors.push('Missing organization.logo');
    return errors;
  },

  Person: (config) => {
    const errors = [];
    if (!config.person?.name) errors.push('Missing person.name');
    if (!config.person?.jobTitle) errors.push('Missing person.jobTitle');
    return errors;
  },

  WebSite: (config) => {
    const errors = [];
    if (!config.site?.name) errors.push('Missing site.name');
    if (!config.site?.url) errors.push('Missing site.url');
    return errors;
  },

  FAQPage: (config) => {
    const errors = [];
    if (!config.faq || config.faq.length === 0) errors.push('Missing or empty FAQ');
    if (config.faq && config.faq.length < 3) errors.push('FAQ should have at least 3 questions for rich snippets');
    config.faq?.forEach((q, i) => {
      if (!q.question) errors.push(`FAQ[${i}]: Missing question`);
      if (!q.answer) errors.push(`FAQ[${i}]: Missing answer`);
    });
    return errors;
  },

  Blog: (config) => {
    const errors = [];
    if (config.blog?.enabled && !config.blog?.source) errors.push('Blog enabled but no source URL');
    return errors;
  },

  Social: (config) => {
    const errors = [];
    if (!config.social?.twitter && !config.social?.github) errors.push('No social links configured');
    return errors;
  },

  YouTube: (config) => {
    const warnings = [];
    if (!config.youtube?.channelId) warnings.push('⚠️ No YouTube channel — #1 AI visibility signal missing');
    return warnings;
  },

  Pages: (config) => {
    const errors = [];
    if (!config.pages || config.pages.length === 0) errors.push('No pages defined for sitemap');
    const homePage = config.pages?.find(p => p.path === '/');
    if (!homePage) errors.push('Missing homepage (/) in pages');
    return errors;
  }
};

// ─── Main ──────────────────────────────────────────────────────────────
function main() {
  console.log('🔍 SEO Import — Validating schema...\n');

  const config = loadConfig();
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const [name, validate] of Object.entries(validators)) {
    const results = validate(config);
    const errors = results.filter(r => !r.startsWith('⚠️'));
    const warnings = results.filter(r => r.startsWith('⚠️'));

    if (errors.length === 0 && warnings.length === 0) {
      console.log(`✅ ${name}`);
    } else {
      for (const err of errors) {
        console.log(`❌ ${name}: ${err}`);
        totalErrors++;
      }
      for (const warn of warnings) {
        console.log(`${warn} (${name})`);
        totalWarnings++;
      }
    }
  }

  console.log(`\n📊 Results:`);
  console.log(`   ❌ ${totalErrors} errors`);
  console.log(`   ⚠️  ${totalWarnings} warnings`);

  if (totalErrors === 0) {
    console.log(`\n✅ All required fields present!`);
  } else {
    console.log(`\n❌ Fix errors before deploying`);
    process.exit(1);
  }
}

main();
