import type { Gottesdienst, Sondertermin } from '../config/gemeinde';

export interface Termin {
  titel: string;
  beginn: Date;
  ende: Date;
}

const MINUTE = 60_000;

function mitUhrzeit(datum: Date, uhrzeit: string): Date {
  const [stunden, minuten] = uhrzeit.split(':').map(Number);
  const d = new Date(datum);
  d.setHours(stunden, minuten, 0, 0);
  return d;
}

/**
 * Liefert alle Termine der nächsten `tage` Tage (inklusive bereits laufender),
 * sortiert nach Beginn.
 *
 * Die Berechnung erfolgt in der Zeitzone des Browsers. Für Besucher aus der
 * Umgebung der Gemeinde ist das die richtige Ortszeit.
 */
export function kommendeTermine(
  regelmaessig: Gottesdienst[],
  sondertermine: Sondertermin[],
  jetzt = new Date(),
  tage = 14,
): Termin[] {
  const termine: Termin[] = [];

  for (let i = 0; i <= tage; i++) {
    const tag = new Date(jetzt);
    tag.setDate(jetzt.getDate() + i);
    for (const g of regelmaessig) {
      if (g.wochentag !== tag.getDay()) continue;
      const beginn = mitUhrzeit(tag, g.uhrzeit);
      termine.push({ titel: g.titel, beginn, ende: new Date(beginn.getTime() + g.dauerMinuten * MINUTE) });
    }
  }

  for (const s of sondertermine) {
    const beginn = mitUhrzeit(new Date(`${s.datum}T00:00:00`), s.uhrzeit);
    termine.push({ titel: s.titel, beginn, ende: new Date(beginn.getTime() + s.dauerMinuten * MINUTE) });
  }

  return termine.filter((t) => t.ende > jetzt).sort((a, b) => a.beginn.getTime() - b.beginn.getTime());
}

export function laeuftGerade(termin: Termin, jetzt = new Date()): boolean {
  return termin.beginn <= jetzt && jetzt < termin.ende;
}

export function terminFormatieren(termin: Termin): string {
  return new Intl.DateTimeFormat('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(termin.beginn) + ' Uhr';
}
