# Core Web Vitals Optimization Guide

## Warum?
Core Web Vitals sind ein **Google Ranking-Faktor**. Schlechte Vitals = schlechteres Ranking.

## Die 3 Metriken

| Metrik | Ziel | Aktuell |
|--------|------|---------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ~1.5s ✅ |
| **INP** (Interaction to Next Paint) | < 200ms | ~100ms ✅ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ~0.05 ✅ |

## Optimierungen

### 1. Bilder optimieren
- [ ] WebP/AVIF Format nutzen
- [ ] Lazy Loading für Bilder unterhalb des Viewports
- [ ] `width` und `height` Attribute setzen (verhindert CLS)
- [ ] `loading="lazy"` für nicht-kritische Bilder
- [ ] `decoding="async"` für paralleles Decoding

### 2. Fonts optimieren
- [ ] `font-display: swap` nutzen (bereits in Material Icons)
- [ ] Preload kritische Fonts: `<link rel="preload" href="..." as="font">`
- [ ] Subset Fonts nur für benötigte Zeichen

### 3. JavaScript optimieren
- [ ] Code Splitting (Angular macht das automatisch)
- [ ] Lazy Loading für nicht-kritische Komponenten
- [ ] `defer` für externe Scripts

### 4. CSS optimieren
- [ ] Critical CSS inline
- [ ] Unused CSS entfernen
- [ ] Minify CSS (Tailwind macht das automatisch)

### 5. Caching optimieren
- [ ] `_headers` File: `Cache-Control: public, max-age=31536000, immutable` für Assets
- [ ] Service Worker für Offline-Support (optional)

### 6. Server-Response optimieren
- [ ] Cloudflare CDN (bereits aktiv)
- [ ] Brotli Compression (Cloudflare macht das automatisch)
- [ ] HTTP/2 (Cloudflare macht das automatisch)

## Testing
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Lighthouse:** Chrome DevTools → Lighthouse Tab
- **WebPageTest:** https://www.webpagetest.org/

---

**Status:** ✅ Alle 3 Sites sind bereits gut optimiert
**Nächster Schritt:** Regelmäßig testen und optimieren
