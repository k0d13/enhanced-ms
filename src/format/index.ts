import type { CompiledLanguage } from '~/language/compile';
import { formatUnit } from './format-unit';
import {
  type FormatOptions,
  type FormatOptionsPreset,
  type ResolvedFormatOptions,
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
  return _formatMilliseconds(language, milliseconds, resolveFormatOptions(options));
}

/**
 * Internal variant that accepts a pre-resolved options object directly,
 * skipping the options-resolution step.  Used by `createMs` to avoid
 * resolving the same default options on every call.
 */
export function _formatMilliseconds(
  language: CompiledLanguage,
  milliseconds: number,
  resolvedOptions: ResolvedFormatOptions,
) {
  const { includedUnits, includeZero, unitLimit, unitSeparator, __transformDuration__ } =
    resolvedOptions;

  // Single pass: decompose milliseconds, filter zeros, and format — all at
  // once.  This replaces the original four separate passes (parseMilliseconds
  // → entries[] → filtered[] → formatted[]) with a single loop and one array.
  let remaining = Math.abs(milliseconds);
  const parts: string[] = [];

  for (let i = 0; i < includedUnits.length; i++) {
    // Honour unitLimit early to skip unnecessary iterations
    if (unitLimit !== -1 && parts.length >= unitLimit) break;

    const unitKey = includedUnits[i]!;
    const langUnit = language.timeUnits[unitKey];
    if (!langUnit) continue;

    const amount = Math.trunc(remaining / langUnit.ms);
    remaining %= langUnit.ms;

    if (amount === 0 && !includeZero) continue;

    parts.push(formatUnit(langUnit, amount, resolvedOptions));
  }

  const duration = parts.length > 0 ? parts.join(unitSeparator) : null;
  return duration && __transformDuration__ ? __transformDuration__(duration) : duration;
}
