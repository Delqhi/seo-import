#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = process.argv[3];

if (process.argv[2] !== 'inject' || !targetDir) {
  console.log(`
🚀 OpenSIN SEO & AEO Auto-Injector

Usage: node cli.js inject <target-project-dir>

This script injects the absolute ultimate SEO/AEO configuration into your project to maximize reach across traditional search engines and AI crawlers (ChatGPT, Perplexity, Claude).
  `);
  process.exit(1);
}

const targetPath = path.resolve(process.cwd(), targetDir);

if (!fs.existsSync(targetPath)) {
  console.error(`❌ Target directory not found: ${targetPath}`);
  process.exit(1);
}

console.log(`\n🔥 Injecting SEO Non-Plus-Ultra into: ${targetPath} ...\n`);

const publicDir = path.join(targetPath, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const templatesDir = path.join(__dirname, 'templates');
const filesToCopy = ['_headers', '_redirects', 'robots.txt'];

for (const file of filesToCopy) {
  const src = path.join(templatesDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(publicDir, file));
    console.log(`✅ Injected ${file} into public/`);
  }
}

const wellKnownDir = path.join(publicDir, '.well-known');
if (!fs.existsSync(wellKnownDir)) fs.mkdirSync(wellKnownDir, { recursive: true });
if (fs.existsSync(path.join(templatesDir, 'security.txt'))) {
  fs.copyFileSync(path.join(templatesDir, 'security.txt'), path.join(wellKnownDir, 'security.txt'));
  console.log(`✅ Injected security.txt into public/.well-known/`);
}

const targetComponentsDir = path.join(targetPath, 'src', 'components', 'seo');
if (!fs.existsSync(targetComponentsDir)) fs.mkdirSync(targetComponentsDir, { recursive: true });

const reactComponentsDir = path.join(__dirname, 'components', 'react');
if (fs.existsSync(reactComponentsDir)) {
  for (const file of fs.readdirSync(reactComponentsDir)) {
    fs.copyFileSync(path.join(reactComponentsDir, file), path.join(targetComponentsDir, file));
    console.log(`✅ Injected React component: ${file}`);
  }
}

const pkgPath = path.join(targetPath, 'package.json');
if (fs.existsSync(pkgPath)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    pkg.scripts = pkg.scripts || {};
    
    pkg.scripts['seo:sitemap'] = 'node ./scripts/seo/generate-sitemap.mjs https://YOUR_DOMAIN_HERE ./dist /';
    pkg.scripts['seo:llms'] = 'node ./scripts/seo/build-llms-txt.mjs ./src ./dist https://YOUR_DOMAIN_HERE';
    
    if (pkg.scripts.build && !pkg.scripts.build.includes('seo:')) {
      pkg.scripts.build = `${pkg.scripts.build} && npm run seo:sitemap && npm run seo:llms`;
    }

    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    console.log(`✅ Injected SEO build scripts into package.json`);
  } catch (e) {
    console.error(`⚠️ Could not update package.json: ${e.message}`);
  }
}

const targetScriptsDir = path.join(targetPath, 'scripts', 'seo');
if (!fs.existsSync(targetScriptsDir)) fs.mkdirSync(targetScriptsDir, { recursive: true });

const scriptsDir = path.join(__dirname, 'scripts');
const scriptsToCopy = ['build-llms-txt.mjs', 'generate-sitemap.mjs'];

for (const script of scriptsToCopy) {
  const src = path.join(scriptsDir, script);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(targetScriptsDir, script));
    console.log(`✅ Injected script: ${script}`);
  }
}

console.log(`
🎉 INJECTION COMPLETE! 

Next Steps:
1. Update 'YOUR_DOMAIN_HERE' in your package.json scripts
2. Import the <SeoHead /> and <StructuredData /> components into your pages
3. Ensure your site uses Semantic HTML (main, article, section)

Run 'npm run build' to see the magic happen!
`);
