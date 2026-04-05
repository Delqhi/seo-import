# GA4 Analytics Setup Guide

## Warum?
Google Analytics 4 ist **ESSENTIELL** um zu verstehen woher dein Traffic kommt, welche Seiten funktionieren, und wie Nutzer sich verhalten.

## Schritt-für-Schritt

### 1. GA4 Property erstellen
1. Gehe zu: https://analytics.google.com/
2. Melde dich mit `zukunftsorientierte.energie@gmail.com` an
3. Klicke auf **"Konto erstellen"**
   - Kontoname: `OpenSIN`
4. Klicke auf **"Property erstellen"**
   - Property-Name: `me.delqhi.com`
   - Zeitzone: `Europe/Berlin`
   - Währung: `EUR`
5. Klicke auf **"Erweiterte Optionen anzeigen"**
   - Erstelle auch eine Universal Analytics Property (optional)

### 2. Data Stream einrichten
1. Wähle **"Web"** als Plattform
2. Website-URL: `https://me.delqhi.com`
3. Stream-Name: `me.delqhi.com`
4. Klicke auf **"Stream erstellen"**
5. **Kopiere die Mess-ID** (beginnt mit `G-`)

### 3. Tracking Code einfügen

**In `src/index.html` vor `</head>` einfügen:**
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

**Ersetze `G-XXXXXXX` mit deiner echten Mess-ID.**

### 4. Für opensin.ai und my.opensin.ai
- Erstelle separate Data Streams für jede Domain
- Oder nutze einen Stream für alle Subdomains

### 5. Wichtige Events einrichten
- **page_view** (automatisch)
- **scroll** (automatisch)
- **click** (automatisch)
- **file_download** (automatisch)
- **blog_post_view** (custom event)
- **cta_click** (custom event)
- **newsletter_signup** (custom event)

### 6. Custom Events in Angular
```typescript
// In blog-post.component.ts
declare global {
  interface Window { gtag: (...args: any[]) => void; }
}

// Track blog post view
if (typeof window.gtag === 'function') {
  window.gtag('event', 'blog_post_view', {
    post_title: post.title,
    post_category: post.category,
    post_id: post.id
  });
}
```

### 7. Monitoring
- **Echtzeit:** Wer ist gerade auf der Seite?
- **Akquisition:** Woher kommt der Traffic?
- **Engagement:** Welche Seiten werden am meisten gelesen?
- **Monetarisierung:** Newsletter Signups, Produkt-Klicks

---

**Dauer:** ~10 Minuten
**Impact:** 🔴 Hoch — Ohne Analytics blind fliegen
