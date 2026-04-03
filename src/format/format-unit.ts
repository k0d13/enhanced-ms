import type { CompiledLanguage } from '~/language/compile';
import type { ResolvedFormatOptions } from './resolve-options';

/**
 * Formats a unit and amount into a duration string.
 *
 * @param unit Language-specific time unit object
 * @param amount The numeric amount of the time unit (e.g., 2 for "2 hours")
 * @param options Formatting options
 * @returns Formatted duration string
 *
 * @example
 * formatUnit(en.timeUnits.hour, 2, { useAbbreviations: false }) // "2 hours"
 * formatUnit(en.timeUnits.hour, 2, { useAbbreviations: true }) // "2h"
 */
export function formatUnit(
  unit: CompiledLanguage['timeUnits'][string],
  count: number,
  options: Pick<ResolvedFormatOptions, 'useAbbreviations' | 'hideUnitNames' | 'minimumDigits'>,
) {
  const { useAbbreviations, hideUnitNames, minimumDigits } = options;

  // Skip padStart entirely when minimumDigits is 0 (the default) — avoids a
  // string method call on every formatted unit.
  const countStr = String(count);
  const amount = minimumDigits > countStr.length ? countStr.padStart(minimumDigits, '0') : countStr;

  if (hideUnitNames) return amount;
  const name = pluraliseUnit(unit, count, options);
  // Avoid a ternary + extra concat for the common abbreviation-less path
  return useAbbreviations ? `${amount}${name}` : `${amount} ${name}`;
}

/**
 * Returns the singular or plural form of a unit based on the amount.
 *
 * @param unit Language-specific time unit object
 * @param amount The numeric amount to determine pluralisation
 * @param options Formatting options
 * @returns Pluralised unit
 *
 * @example
 * pluraliseUnit(en.timeUnits.hour, 1, { useAbbreviations: true }) // "h"
 * pluraliseUnit(en.timeUnits.hour, 2, { useAbbreviations: false }) // "hours"
 */
export function pluraliseUnit(
  unit: CompiledLanguage['timeUnits'][string],
  count: number,
  options: Pick<ResolvedFormatOptions, 'useAbbreviations'>,
) {
  const { useAbbreviations } = options;
  const factory = useAbbreviations && unit.abbreviation ? unit.abbreviation : unit.name;
  return typeof factory === 'function' ? factory(count < 0 ? -count : count) : factory;
}
