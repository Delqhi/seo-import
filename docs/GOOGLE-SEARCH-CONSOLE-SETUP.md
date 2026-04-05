# Google Search Console Setup Guide

## Warum?
Google Search Console ist **ESSENTIELL** für SEO. Ohne GSC weißt du nicht, wie Google deine Seiten sieht, welche Keywords funktionieren, und ob es Indexierungsprobleme gibt.

## Schritt-für-Schritt

### 1. Google Search Console öffnen
- Gehe zu: https://search.google.com/search-console
- Melde dich mit deinem Google Account an: `zukunftsorientierte.energie@gmail.com`

### 2. Domains hinzufügen

**Für jede Domain:**

#### me.delqhi.com
1. Klicke auf **"Property hinzufügen"**
2. Wähle **"Domain"** (nicht URL-Präfix!)
3. Gib ein: `me.delqhi.com`
4. Google zeigt dir einen TXT Record → **kopiere den Wert**

**Bei Cloudflare DNS eintragen:**
- Gehe zu Cloudflare Dashboard → DNS → Records
- Erstelle TXT Record:
  - Name: `@`
  - Inhalt: `google-site-verification=XXXXX` (den kopierten Wert)
  - TTL: Auto
- Klicke in GSC auf **"Bestätigen"**

#### opensin.ai
1. Property hinzufügen → Domain → `opensin.ai`
2. TXT Record kopieren
3. In Cloudflare DNS eintragen (sobald Nameserver durch sind)
4. Bestätigen

#### my.opensin.ai
1. Property hinzufügen → Domain → `my.opensin.ai`
2. TXT Record kopieren
3. In Cloudflare DNS eintragen
4. Bestätigen

#### docs.opensin.ai
1. Property hinzufügen → Domain → `docs.opensin.ai`
2. TXT Record kopieren
3. In Cloudflare DNS eintragen
4. Bestätigen

### 3. Sitemap einreichen

**Für jede Property:**
1. Gehe zu **"Sitemaps"** im linken Menü
2. Gib die Sitemap-URL ein:
   - me.delqhi.com: `https://me.delqhi.com/sitemap.xml`
   - opensin.ai: `https://opensin.ai/sitemap.xml`
   - my.opensin.ai: `https://my.opensin.ai/sitemap.xml`
   - docs.opensin.ai: `https://docs.opensin.ai/sitemap.xml`
3. Klicke auf **"Einreichen"**

### 4. Wichtige Einstellungen

**Für jede Property:**
- **Internationale Targeting:** Sprache auf "Deutsch" setzen
- **URL-Prüfung:** Teste wichtige URLs auf Indexierbarkeit
- **Core Web Vitals:** Überwache Ladezeiten
- **Seitenabdeckung:** Prüfe auf 404er und Fehler

### 5. Monitoring (wöchentlich)
- **Suchperformance:** Welche Keywords bringen Traffic?
- **Seitenabdeckung:** Gibt es neue Fehler?
- **Core Web Vitals:** Sind die Ladezeiten okay?
- **Manuelle Maßnahmen:** Gibt es Penalties?

---

**Dauer:** ~15 Minuten für alle 4 Domains
**Impact:** 🔴 Hoch — Ohne GSC blind fliegen
