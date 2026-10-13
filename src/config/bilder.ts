/**
 * Bilder der Gemeinde.
 *
 * Die Platzhalter in `src/assets/bilder/` durch eigene Fotos (JPG/PNG/WebP)
 * ersetzen und hier importieren. Astro erzeugt daraus beim Build automatisch
 * optimierte Varianten in mehreren Größen.
 *
 * Der Alternativtext beschreibt, was auf dem Bild zu sehen ist. Rein
 * dekorative Bilder erhalten einen leeren Alternativtext.
 */
import hero from '../assets/bilder/hero.svg';
import gemeinde from '../assets/bilder/gemeinde.svg';

export const bilder = {
  /** Großes Bild im Kopfbereich, wird auch für das Zitat und Social-Media-Vorschauen genutzt */
  hero: { src: hero, alt: '' },
  /** Bild neben „Was wir glauben“ */
  gemeinde: { src: gemeinde, alt: 'Zeichnung des Gemeindehauses mit Kreuz auf dem Dach' },
};
