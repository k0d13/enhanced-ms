import type { CompiledLanguage } from '../language/compile';

/**
 * Parse a human-readable duration string into milliseconds.
 *
 * @param language The compiled language used for parsing
 * @param duration The duration string to parse (e.g., "2h 30m", "1 day, 5 hours")
 * @returns The total duration in milliseconds, including 0 if the duration is invalid
 *
 * @example
 * parseDuration(en, "2h 30m") // 9000000
 * parseDuration(de, "2 stunden 30 minuten") // 9000000
 */
export function parseDuration(language: CompiledLanguage, duration: string) {
  const matches = duration.toLowerCase().match(language.matcherRegex);
  if (!matches || matches.length === 0) return null;

  let total = 0;
  for (let i = 0; i < matches.length; i += 2) {
    const ms = language.timeUnits[matches[i + 1]!]?.ms;
    if (ms) total += Number(matches[i]!) * ms;
  }
  return total;
}
