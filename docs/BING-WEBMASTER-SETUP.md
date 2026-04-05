# Bing Webmaster Tools Setup Guide

## Warum?
Bing ist die #2 Suchmaschine und wird von ChatGPT als Datenquelle genutzt. Bing Webmaster Tools sind kostenlos und einfach einzurichten.

## Schritt-für-Schritt

### 1. Bing Webmaster Tools öffnen
- Gehe zu: https://www.bing.com/webmasters
- Melde dich mit deinem Microsoft Account an (oder erstelle einen)

### 2. Domains hinzufügen

**Für jede Domain:**
1. Klicke auf **"URL hinzufügen"**
2. Gib die Domain ein:
   - `https://me.delqhi.com`
   - `https://opensin.ai`
   - `https://my.opensin.ai`
   - `https://docs.opensin.ai`
3. Wähle **"XML-Sitemap"** als Verifizierungsmethode
4. Bing erkennt automatisch die Sitemap wenn sie im `robots.txt` verlinkt ist

### 3. Alternative: HTML-Datei
1. Lade die Verifizierungs-HTML-Datei von Bing herunter
2. Lege sie in den `public/` Ordner jeder Site
3. Deploye
4. Klicke auf **"Bestätigen"**

### 4. Sitemap einreichen
- Gehe zu **"Sitemaps"**
- Gib die Sitemap-URL ein (z.B. `https://me.delqhi.com/sitemap.xml`)
- Klicke auf **"Einreichen"**

### 5. SEO-Reports prüfen
- **SEO-Bericht:** Technische Probleme finden
- **Backlinks:** Wer linkt auf dich?
- **Keywords:** Welche Suchbegriffe funktionieren?

---

**Dauer:** ~10 Minuten für alle 4 Domains
**Impact:** 🟡 Mittel — Bing ist kleiner, aber wichtig für AI-Suche
