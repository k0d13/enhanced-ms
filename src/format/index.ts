import type { CompiledLanguage } from '~/language/compile';
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
 * skipping the options-resolution step. Used by `createMs` to avoid
 * resolving the same default options on every call.
 */
export function _formatMilliseconds(
  language: CompiledLanguage,
  milliseconds: number,
  resolvedOptions: ResolvedFormatOptions,
) {
  const {
    includedUnits,
    includeZero,
    unitLimit,
    unitSeparator,
    hideUnitNames,
    useAbbreviations,
    minimumDigits,
    __transformDuration__,
  } = resolvedOptions;

  let remaining = Math.abs(milliseconds);
  let duration = '';
  let partCount = 0;

  for (let i = 0; i < includedUnits.length; i++) {
    if (unitLimit !== -1 && partCount >= unitLimit) break;

    const unitKey = includedUnits[i]!;
    const langUnit = language.timeUnits[unitKey];
    if (!langUnit) continue;

    const amount = Math.trunc(remaining / langUnit.ms);
    remaining %= langUnit.ms;

    if (amount === 0 && !includeZero) continue;

    const amountText =
      minimumDigits === 2 && amount < 10
        ? `0${amount}`
        : minimumDigits > 0
          ? String(amount).padStart(minimumDigits, '0')
          : String(amount);

    let part = amountText;
    if (!hideUnitNames) {
      const factory =
        useAbbreviations && langUnit.abbreviation ? langUnit.abbreviation : langUnit.name;
      const unitName = typeof factory === 'function' ? factory(amount) : factory;
      part = useAbbreviations ? `${amountText}${unitName}` : `${amountText} ${unitName}`;
    }

    duration = partCount === 0 ? part : duration + unitSeparator + part;
    partCount++;
  }

  if (partCount === 0) return null;
  return __transformDuration__ ? __transformDuration__(duration) : duration;
}
