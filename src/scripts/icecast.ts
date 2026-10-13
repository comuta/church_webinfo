/**
 * Fragt den Status eines Icecast-Servers ab (`status-json.xsl`).
 *
 * Gibt `true` zurück, wenn der Mountpoint gerade sendet, `false`, wenn nicht,
 * und `null`, wenn der Status nicht ermittelt werden konnte (z. B. Server
 * nicht erreichbar oder CORS nicht erlaubt).
 */
export async function istLive(statusUrl: string, mount: string): Promise<boolean | null> {
  try {
    const antwort = await fetch(statusUrl, { cache: 'no-store', signal: AbortSignal.timeout(8000) });
    if (!antwort.ok) return null;

    const daten = await antwort.json();
    const quellen = daten?.icestats?.source;
    if (!quellen) return false;

    // Icecast liefert bei einer einzigen Quelle ein Objekt statt eines Arrays
    const liste: { listenurl?: string }[] = Array.isArray(quellen) ? quellen : [quellen];
    return liste.some((q) => q.listenurl?.endsWith(mount));
  } catch {
    return null;
  }
}
