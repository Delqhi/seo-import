import fs from 'fs';
import path from 'path';

// Usage: node scripts/generate-sitemap.mjs <baseUrl> <outDir> <routes... comma separated>
const baseUrl = process.argv[2] || 'https://opensin.ai';
const outDir = process.argv[3] || './public';
const routesRaw = process.argv[4] || '/';

const routes = routesRaw.split(',').map(r => r.trim());

console.log(`[SEO-IMPORT] Generating sitemap.xml for ${routes.length} routes...`);

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const today = new Date().toISOString().split('T')[0];

for (const route of routes) {
  const loc = route === '/' ? baseUrl : `${baseUrl}${route.startsWith('/') ? '' : '/'}${route}`;
  sitemap += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
}

sitemap += `</urlset>\n`;

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
console.log(`[SEO-IMPORT] ✅ Successfully generated sitemap.xml at ${path.join(outDir, 'sitemap.xml')}`);
