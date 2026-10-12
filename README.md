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

## Status

Projekt in der Planungsphase. Technologie-Stack und Projektstruktur folgen.

## Lizenz

Noch festzulegen.
