# Hanna Zeyer — Homepage

Gebaut mit [Astro](https://astro.build). Wird automatisch veröffentlicht, wenn etwas auf GitHub gepusht wird (ca. 1–2 Minuten).

---

## Neues Projekt hinzufügen

### 1. Bilder hochladen
Erstelle einen Ordner unter `public/img/mein-projekt/` und lege die Bilder darin ab.

### 2. Neue `.md`-Datei anlegen
Kopiere eine bestehende Datei aus `src/content/projekte/` (z.B. `hautsam.md`),
bennene sie nach dem Projekt (z.B. `neues-stueck.md`) und passe die Felder an:

```markdown
---
title: "Titel des Projekts"
genre: "Theaterstück"          # z.B. Theaterstück, Ausstellung, Performance, Tanzstück
ort: "Theater XY, Stadt 2025"
coverImg: "img/neues-stueck/cover.jpg"   # Titelbild für die Projektliste
coverAlt: ""                             # Alternativtext (für Barrierefreiheit)
reihenfolge: 1                           # niedrig = weiter oben in der Liste
bilder:
  - src: "img/neues-stueck/01.jpg"
    alt: ""
    large: false     # true = Bild nimmt 2 Spalten ein
  - src: "img/neues-stueck/02.jpg"
    alt: ""
    large: true
credits:
  - rolle: "Regie"
    name: "Vorname Nachname"
  - rolle: "Bühnenbild"
    name: "Hanna Zeyer"
---

Beschreibungstext des Projekts hier. Kann auch *kursiv* und
<a href="https://link.de">Links</a> enthalten.
```

### 3. Pushen — fertig!
Commit und Push auf GitHub → die Seite baut sich automatisch neu.

---

## Lokal testen
```bash
npm install
npm run dev
# → http://localhost:4321
```

---

## Was liegt wo

| Pfad | Inhalt |
|---|---|
| `src/content/projekte/` | Eine `.md`-Datei pro Projekt |
| `public/img/` | Alle Bilder |
| `public/styles/global.css` | Style |
| `src/layouts/BaseLayout.astro` | Navigation & Footer |
| `src/pages/projekte/[slug].astro` | Vorlage für jede Projektseite (automatisch) |
| `src/pages/projekte/index.astro` | Projektliste (automatisch aus den .md-Dateien) |
| `.github/workflows/deploy.yml` | Auto-Deploy bei jedem Push |

---
