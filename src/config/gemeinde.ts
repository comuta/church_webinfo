/**
 * Zentrale Konfiguration der Gemeinde.
 *
 * Alle gemeindespezifischen Inhalte werden hier gepflegt. Für eine andere
 * Gemeinde reicht es, diese Datei sowie die Bilder in `src/config/bilder.ts`
 * anzupassen.
 *
 * Hinweis: Diese Datei wird auch von `astro.config.mjs` geladen und darf
 * deshalb keine Bilder oder anderen Assets importieren.
 */

/** 0 = Sonntag, 1 = Montag, … 6 = Samstag (wie `Date.getDay()`) */
export type Wochentag = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Gottesdienst {
  titel: string;
  wochentag: Wochentag;
  /** Uhrzeit im Format "HH:MM" (Ortszeit der Gemeinde) */
  uhrzeit: string;
  /** Dauer in Minuten, wird für die Live-Anzeige verwendet */
  dauerMinuten: number;
}

export interface Sondertermin {
  titel: string;
  /** Datum im Format "YYYY-MM-DD" */
  datum: string;
  uhrzeit: string;
  dauerMinuten: number;
}

export const gemeinde = {
  name: 'Christliche Gemeinde Musterstadt',
  kurzname: 'Gemeinde Musterstadt',
  /** Öffentliche Adresse der Website, ohne Schrägstrich am Ende */
  site: 'https://www.example.org',
  /** Kurzbeschreibung für Suchmaschinen (ca. 150 Zeichen) */
  beschreibung:
    'Christliche Gemeinde in Musterstadt: Gottesdienste, Livestream, Anfahrt und alles Wissenswerte über unseren Glauben.',

  hero: {
    titel: 'Herzlich willkommen',
    untertitel: 'Ein Ort zum Ankommen, Glauben und Gemeinschaft erleben.',
  },

  glaube: {
    titel: 'Was wir glauben',
    absaetze: [
      'Wir sind eine christliche Gemeinde, die ihren Glauben auf die Bibel gründet. Im Mittelpunkt steht Jesus Christus, durch den Gott uns seine Liebe und Vergebung schenkt.',
      'Unsere Gottesdienste sind offen für alle – ganz gleich, ob Sie schon lange glauben, auf der Suche sind oder einfach einmal vorbeischauen möchten.',
    ],
  },

  zitat: {
    text: 'Kommt her zu mir, alle, die ihr mühselig und beladen seid; ich will euch erquicken.',
    quelle: 'Matthäus 11,28',
  },

  adresse: {
    strasse: 'Musterstraße 1',
    plz: '12345',
    ort: 'Musterstadt',
    land: 'Deutschland',
    /** Link zu einem Kartendienst; wird nur als Link angeboten, nicht eingebettet */
    kartenLink: 'https://www.openstreetmap.org/search?query=Musterstra%C3%9Fe%201%2C%2012345%20Musterstadt',
  },

  anfahrt: {
    parken: [
      'Kostenlose Parkplätze direkt hinter dem Gemeindehaus (Zufahrt über die Nebenstraße).',
      'Zwei ausgewiesene Behindertenparkplätze befinden sich direkt am Eingang.',
    ],
    oepnv: ['Bushaltestelle „Musterplatz“ (Linien 1 und 5), ca. 3 Minuten Fußweg.'],
    barrierefreiheit: 'Der Gottesdienstraum ist stufenlos über eine Rampe erreichbar.',
  },

  kontakt: {
    telefon: '+49 123 456789',
    email: 'info@example.org',
  },

  stream: {
    /** Direkte URL des Icecast-Mountpoints */
    url: 'https://stream.example.org/gottesdienst',
    /** Status-Endpunkt des Icecast-Servers */
    statusUrl: 'https://stream.example.org/status-json.xsl',
    /** Name des Mountpoints, wie er in der Status-Abfrage erscheint */
    mount: '/gottesdienst',
    mimeType: 'audio/mpeg',
  },

  gottesdienste: {
    regelmaessig: [
      { titel: 'Gottesdienst', wochentag: 0, uhrzeit: '10:00', dauerMinuten: 90 },
      { titel: 'Bibelstunde', wochentag: 3, uhrzeit: '19:30', dauerMinuten: 60 },
    ] satisfies Gottesdienst[],
    sondertermine: [] as Sondertermin[],
  },

  /** Angaben für das Impressum (§ 5 DDG) */
  impressum: {
    traeger: 'Christliche Gemeinde Musterstadt e. V.',
    vertretenDurch: 'Max Mustermann (1. Vorsitzender)',
    registergericht: 'Amtsgericht Musterstadt',
    registernummer: 'VR 12345',
    verantwortlichInhalt: 'Max Mustermann, Musterstraße 1, 12345 Musterstadt',
  },

  /** Angaben für die Datenschutzerklärung */
  datenschutz: {
    verantwortlicher: 'Christliche Gemeinde Musterstadt e. V., Musterstraße 1, 12345 Musterstadt',
    hoster: 'Musterhosting GmbH, Hostweg 1, 12345 Hoststadt',
    streamAnbieter: 'eigener Icecast-Server der Gemeinde',
    stand: '2026-10-13',
  },
};
