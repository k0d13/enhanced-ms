import { _formatMilliseconds } from './format';
import {
  type FormatOptions,
  type FormatOptionsPreset,
  resolveFormatOptions,
} from './format/resolve-options';
import { compileLanguage } from './language/compile';
import type { LanguageDefinition } from './language/definition';
import en from './locales/en';
import { parseDuration } from './parse';

/**
 * A function that formats and parses durations.
 */
export interface Ms {
  /**
   * Formats a duration from milliseconds to a human-readable string.
   *
   * @params milliseconds The duration in milliseconds to format
   * @returns The formatted duration string, or null if the duration is invalid
   *
   * @example
   * ms(90061) // "1 minute 30 seconds"
   */
  (milliseconds: number): string | null;

  /**
   * Formats a duration from milliseconds to a human-readable string.
   *
   * @params milliseconds The duration in milliseconds to format
   * @params options The formatting options to use
   * @returns The formatted duration string, or null if the duration is invalid
   *
   * @example
   * ms(90061, { useAbbreviations: true }) // "1m 30s"
   * ms(90061, { unitLimit: 1 }) // "1 minute"
   * ms(90061, { useAbbreviations: true, unitLimit: 1 }) // "1m"
   */
  (milliseconds: number, options: FormatOptions): string | null;

  /**
   * Formats a duration from milliseconds to a human-readable string.
   *
   * @params milliseconds The duration in milliseconds to format
   * @params preset The formatting preset to use
   * @returns The formatted duration string, or null if the duration is invalid
   *
   * @example
   * ms(90061, 'short') // "1m 30s"
   * ms(90061, 'colonNotation') // "00:01:30"
   */
  (milliseconds: number, options: FormatOptionsPreset): string | null;

  /**
   * Parse a human-readable duration string into milliseconds.
   *
   * @params duration The duration string to parse (e.g., "2h 30m", "1 day, 5 hours")
   * @returns The total duration in milliseconds, or null if the duration is invalid
   *
   * @example
   * ms("1 minute 30 seconds") // 90061
   * ms("1m 30s") // 90061
   */
  (duration: string): number;
}

export interface CreateMsOptions {
  /**
   * The language to use for formatting and parsing.
   * @default English
   */
  language?: LanguageDefinition;

  /**
   * Default formatting options to use.
   */
  formatOptions?: FormatOptions | FormatOptionsPreset;
}

/**
 * Creates a new function that formats and parses durations using the specified options as defaults.
 *
 * @param options The options to use for formatting and parsing
 * @returns A new function that formats and parses durations
 *
 * @example
 * const ms = createMs({ formatOptions: 'short' });
 * import de from 'enhanced-ms/locales/de';
 * const ms = createMs({ language: de });
 */
export function createMs(options: CreateMsOptions) {
  const language = compileLanguage(options.language ?? en);
  // Resolve once at construction time; the result is reused for every call
  // that does not supply per-call options.
  const defaultResolvedOptions = resolveFormatOptions(options.formatOptions);

  function ms(...args: [number, (FormatOptions | FormatOptionsPreset)?] | [string]) {
    switch (typeof args[0]) {
      case 'number': {
        const [milliseconds, callOptions] = args;

        // Fast-path: no per-call options — reuse the pre-resolved defaults
        // without any object allocation.
        if (callOptions === undefined) {
          return _formatMilliseconds(language, milliseconds, defaultResolvedOptions);
        }

        return _formatMilliseconds(language, milliseconds, resolveFormatOptions(callOptions));
      }

      case 'string': {
        const [duration] = args;
        return parseDuration(language, duration);
      }

      default:
        throw new Error('Invalid arguments');
    }
  }

  return ms as Ms;
}
