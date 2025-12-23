import type { CompiledLanguage } from '~/language/compile';
import { formatUnit } from './format-unit';
import { parseMilliseconds } from './parse-milliseconds';
import {
  type FormatOptions,
  type FormatOptionsPreset,
  resolveFormatOptions,
} from './resolve-options';

/**
 * Formats a duration given in milliseconds into a human-readable string.
 *
 * @param milliseconds The duration in milliseconds to format
 * @param language The language settings to use for formatting
 * @param options Optional settings or preset to customise the output format
 * @returns A formatted duration string (e.g., "1 hour, 30 minutes") or `null` if the duration is invalid
 *
 * @example
 * formatMilliseconds(en, 90061000) // "1 day 1 hour 1 minute"
 * formatMilliseconds(ru, 90061000, { useAbbreviations: true }) // "1д 1ч 1м"
 */
export function formatMilliseconds(
  language: CompiledLanguage,
  milliseconds: number,
  options?: FormatOptions | FormatOptionsPreset,
) {
  const resolvedOptions = resolveFormatOptions(options);

  // ==== Parsing ==== //

  const { includedUnits } = resolvedOptions;
  const time = parseMilliseconds(milliseconds, includedUnits);
  const entries = [];
  for (const unit in time) {
    if (!language.timeUnits[unit])
      console.log(unit, Object.keys(language.timeUnits));

    entries.push({
      unit: language.timeUnits[unit]!,
      amount: time[unit as keyof typeof time],
    });
  }

  // ===== Filtering ===== //

  const { includeZero } = resolvedOptions;
  const filtered = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]!;
    if (entry.amount === null) continue;
    if (entry.amount === 0 && !includeZero) continue;
    filtered.push(entry);
  }

  // ===== Formatting ===== //

  const { unitLimit } = resolvedOptions;
  const formatted = [];
  for (let i = 0; i < filtered.length; i++) {
    const entry = filtered[i]!;
    if (unitLimit !== -1 && i >= unitLimit) break;
    const format = formatUnit(entry.unit, entry.amount!, resolvedOptions);
    formatted.push(format);
  }

  // ===== Joining ===== //

  const { unitSeparator, __transformDuration__ } = resolvedOptions;
  const duration = formatted.join(unitSeparator) || null;
  return duration && __transformDuration__
    ? __transformDuration__(duration)
    : duration;
}
