# church_webinfo

Eine schlanke, moderne Website-Vorlage für gemeinnützige Vereine – insbesondere Glaubensgemeinschaften und Gemeinden. Ziel ist eine Weboberfläche, die schnell lädt, für alle zugänglich ist, gut gefunden wird und sich ohne viel Aufwand pflegen lässt.

## Ziele

- **Mobile first** – entworfen für das Smartphone, auf Tablet und großen Bildschirmen ebenso sauber.
- **Barrierefreiheit von Anfang an** – orientiert an WCAG 2.2 (AA) bzw. BITV 2.0.
- **Schnelligkeit** – wenig JavaScript, optimierte Bilder, keine unnötigen Abhängigkeiten.
- **Gute Auffindbarkeit** – sinnvolle `robots.txt`, Sitemap, Metadaten und strukturierte Daten.
- **Modern, aber schlicht** – klares Design, kein Schnickschnack.
- **Datenschutzfreundlich** – keine externen Tracker, keine eingebundenen Fremd-Ressourcen ohne Notwendigkeit.

## Inhalte / Funktionen

### Startseite
- **Kurzvorstellung** der Gemeinde: Wer wir sind und was wir glauben (kurzer Text).
- **Livestream (Icecast)**
  - Direkte Einbindung eines oder mehrerer Icecast-Streams über einen barrierefreien Audio-Player.
  - Live-Anzeige: Ist gerade etwas live? (Abfrage z. B. über `status-json.xsl` des Icecast-Servers)
  - Anzeige des **nächsten Gottesdienstes**, wenn gerade nichts übertragen wird.
- **Adresse & Anfahrt**
  - Anschrift der Gemeinde
  - Hinweise zum Parken (und ggf. ÖPNV, barrierefreier Zugang)
  - Optional: Kartenlink (ohne eingebettete Fremd-Karte, um Datenschutz zu wahren)
- **Bilder** – Platz für ein bis zwei Bilder (z. B. Gebäude, Gemeinderaum) mit Alternativtexten.

### Pflichtseiten
- **Impressum** (gemäß § 5 DDG)
- **Datenschutzerklärung** (DSGVO), inkl. Hinweisen zum Stream-Server und Hosting
- Optional: **Erklärung zur Barrierefreiheit**

## Design

### Stil
- **Warm und einladend:** natürliche, erdige Farben (Creme/Off-White als Grundton, ein warmes Ocker/Gold als Akzentfarbe, dunkles Blau oder Anthrazit für Text und Buttons). Alle Farben werden als CSS-Variablen definiert, damit jede Gemeinde sie anpassen kann.
- **Typografie:** Serifenschrift für Überschriften (wirkt feierlich und vertraut), gut lesbare serifenlose Schrift für den Fließtext. Beide Schriften werden lokal gehostet.
- **Bildstarker Einstieg:** großes Hero-Bild mit dunklem Overlay und Gemeindename bzw. Leitvers als Headline, darunter ein klarer Call-to-Action (z. B. „Jetzt live hören“ / „Nächster Gottesdienst“).
- **Ruhige Abschnitte:** viel Weißraum, abwechselnd Text und Bild, Abschnittstitel mit kleinem Akzentstrich.
- **Akzentband:** ein farbiges Band mit 3–4 Icon-Kacheln (z. B. Gottesdienst, Livestream, Anfahrt, Kontakt) als Schnellzugriff.
- **Zitat-/Bibelvers-Block:** vollbreites Bild mit überlagertem Zitat als ruhiger Abschnittswechsel.
- **Organische Details** (optional, sparsam): weiche Übergänge oder unregelmäßige Kanten an Bildern per SVG-Maske, ohne die Ladezeit zu belasten.

### Seitenaufbau (Startseite)
1. Header: Logo, Navigation (mobil als Menü-Button), Adresse/Kontakt kompakt
2. Hero mit Headline und Call-to-Action
3. Akzentband mit Schnellzugriff
4. Livestream mit Live-Status und nächstem Gottesdienst
5. „Wer wir sind / Was wir glauben“ – Text mit Bild
6. Zitat-Block mit Hintergrundbild
7. Adresse, Anfahrt und Parkhinweise
8. Footer: Impressum, Datenschutz, Barrierefreiheit, Kontakt

### Mobile first
Die Basis-Styles gelten fürs Smartphone (einspaltig, alles untereinander). Größere Bildschirme werden ausschließlich über `min-width`-Media-Queries ergänzt (progressive Enhancement):

| Breakpoint | ab     | Typische Änderungen                                        |
|------------|--------|------------------------------------------------------------|
| Basis      | 0      | einspaltig, Menü-Button, Icon-Kacheln 2×2                  |
| `sm`       | 640px  | größere Abstände, Bilder breiter                           |
| `md`       | 768px  | Text und Bild nebeneinander, Icon-Kacheln in einer Reihe   |
| `lg`       | 1024px | volle Navigation im Header, maximale Inhaltsbreite         |
| `xl`       | 1280px | großzügigere Hero-Höhe und Abstände                        |

Grundprinzipien:
- Layout mit CSS Grid (`repeat(auto-fit, minmax(…, 1fr))`) und Flexbox mit `flex-wrap`, damit möglichst wenige Breakpoints nötig sind
- Fließende Schriftgrößen und Abstände per `clamp()`
- Relative Einheiten (`rem`, `%`, `vw`) statt fester Pixelwerte
- Bilder mit `max-width: 100%`, `aspect-ratio` und `object-fit: cover`
- Touch-Ziele mindestens 44 × 44 px
- Test auf echten Geräten und in mehreren Browsern

## Technische Anforderungen

### Barrierefreiheit
- Semantisches HTML (Landmarks, korrekte Überschriften-Hierarchie)
- Ausreichende Farbkontraste, Unterstützung für hellen/dunklen Modus
- Vollständige Tastaturbedienbarkeit, sichtbarer Fokus, „Zum Inhalt springen“-Link
- Audio-Player mit beschrifteten Bedienelementen und `aria-live` für den Live-Status
- Berücksichtigung von `prefers-reduced-motion`
- Sprache der Seite korrekt ausgezeichnet (`lang="de"`)

### Performance
- Statisch ausgelieferte Seiten, möglichst wenig JavaScript
- Responsive Bilder (`srcset`, moderne Formate wie AVIF/WebP), Lazy Loading
- Lokal gehostete Schriften (keine Google-Fonts-Anbindung)
- Zielwerte: Lighthouse ≥ 95 in allen Kategorien, gute Core Web Vitals

### SEO
- `robots.txt` mit Verweis auf die `sitemap.xml`
- Aussagekräftige `title`- und `meta description`-Tags, Canonical-URLs
- Open-Graph-Metadaten für das Teilen in Messengern / sozialen Netzwerken
- Strukturierte Daten (JSON-LD, z. B. `Church` / `PlaceOfWorship`, `Event` für Gottesdienste)

## Konfiguration (geplant)

Gemeindespezifische Inhalte sollen zentral pflegbar sein, damit die Vorlage für verschiedene Gemeinden wiederverwendet werden kann:

- Name, Kurzbeschreibung, Glaubensbekenntnis/Leitbild
- Adresse, Parkhinweise, Kontaktdaten
- Icecast-Stream-URL(s) und Status-Endpunkt
- Gottesdienstzeiten (regelmäßig und Sondertermine)
- Bilder mit Alternativtexten
- Angaben für Impressum und Datenschutzerklärung

## Entwicklung

Die Seite wird mit [Astro](https://astro.build) als statische Website gebaut. Voraussetzung ist Node.js ab Version 22.12.

```bash
npm install       # Abhängigkeiten installieren
npm run dev       # Entwicklungsserver auf http://localhost:4321
npm run build     # Typprüfung und Build nach dist/
npm run preview   # gebaute Seite lokal ansehen
```

Den Inhalt des Ordners `dist/` auf einen beliebigen Webspace hochladen – eine Datenbank oder Node.js auf dem Server ist nicht nötig.

### Projektstruktur

```
src/
├── config/
│   ├── gemeinde.ts     # alle Inhalte und Einstellungen der Gemeinde
│   └── bilder.ts       # Bilder mit Alternativtexten
├── assets/bilder/      # Bilddateien (werden beim Build optimiert)
├── components/         # Abschnitte der Seite (Header, Hero, Livestream, …)
├── layouts/            # Seitengerüst mit SEO-Metadaten
├── pages/              # jede Datei = eine Seite (inkl. robots.txt)
├── scripts/            # Browser-Logik für Live-Status und Termine
└── styles/global.css   # Design-Tokens und Basis-Styles
```

### Für eine Gemeinde anpassen

1. Inhalte in `src/config/gemeinde.ts` eintragen (inkl. `site`-URL, Stream und Gottesdienstzeiten)
2. Eigene Fotos in `src/assets/bilder/` ablegen und in `src/config/bilder.ts` eintragen
3. Farben bei Bedarf in `src/styles/global.css` unter „Design-Tokens“ ändern
4. Impressum und Datenschutzerklärung prüfen – die Texte sind Vorlagen und ersetzen keine Rechtsberatung

### Icecast-Live-Status

Der Live-Status wird im Browser über `status-json.xsl` des Icecast-Servers abgefragt. Der Server muss dafür CORS erlauben (Icecast ab 2.4 sendet standardmäßig `Access-Control-Allow-Origin: *`). Ist der Server nicht erreichbar, zeigt die Seite anhand des Gottesdienstplans an, ob laut Plan gerade etwas läuft.

## Status

Grundstruktur steht. Es fehlen noch echte Inhalte, Fotos und ein Social-Media-Vorschaubild.

## Lizenz

Noch festzulegen.
