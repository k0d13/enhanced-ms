import { Time } from '~/time';

const TIME_KEY_UPPER = Object.fromEntries(
  Object.keys(Time).map((k) => [k.toLowerCase(), k]),
) as Record<Lowercase<Time.Key>, Time.Key>;

/**
 * Converts milliseconds into an object containing time units.
 *
 * @param milliseconds The duration in milliseconds to be parsed
 * @param includedUnits The units to include in the parsed object
 * @returns An object containing the parsed time units
 *
 * @example
 * parseMilliseconds(90061000, ['day', 'minute']) // { Day: 1, Minute: 61 }
 * parseMilliseconds(90061000, ['day', 'minute', 'second']) // { Day: 1, Minute: 1, Second: 1 }
 */
export function parseMilliseconds(
  milliseconds: number,
  includedUnits: Lowercase<keyof typeof Time>[],
) {
  let remaining = milliseconds;
  const parsed: Partial<Record<Lowercase<Time.Key>, number>> = {};

  for (const unit of includedUnits) {
    const key = TIME_KEY_UPPER[unit];
    const ms = Time[key];
    parsed[unit] = Math.trunc(remaining / ms);
    remaining %= ms;
  }

  return parsed;
}
