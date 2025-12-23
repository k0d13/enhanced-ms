import type { Time } from '~/time';

// ===== Options ===== //

export interface FormatOptions {
  /**
   * Hide unit names from the output.
   * - Used as part of the `colonNotation` preset.
   * @default false
   */
  hideUnitNames?: boolean;

  /**
   * Use abbreviations for unit names.
   * @default false
   */
  useAbbreviations?: boolean;

  /**
   * Include units with the value 0 in the output.
   * - Used as part of the `colonNotation` preset.
   * @default false
   */
  includeZero?: boolean;

  /**
   * Include milliseconds in the output.
   * - Shorthand for adding `millisecond` to the `includedUnits` option.
   * @default false
   */
  includeMs?: boolean;

  /**
   * Include sub-millisecond units in the output.
   * - Enabling this option will automatically enable the `includeMs` option.
   * - Shorthand for adding `microsecond` and `nanosecond` to the `includedUnits` option.
   * @default false
   */
  includeSubMs?: boolean;

  /**
   * Which units should be included in the output.
   * @default ['year', 'day', 'hour', 'minute', 'second']
   */
  includedUnits?: Lowercase<Time.Key>[];

  /**
   * The maximum number of units to include in the output.
   * - If the value is -1, all units will be included.
   * @default -1
   */
  unitLimit?: number;

  /**
   * The separator to use between units.
   * @default ' '
   */
  unitSeparator?: string;

  /**
   * The minimum number of digits for a unit, aka will pad with zeroes.
   * - Used as part of the `colonNotation` preset.
   * @default 0
   */
  minimumDigits?: number;

  /**
   * @internal
   */
  __transformDuration__?: ((duration: string) => string) | undefined;
}

export const defaultFormatOptions = Object.freeze({
  hideUnitNames: false,
  useAbbreviations: false,
  includeZero: false,
  includeMs: false,
  includeSubMs: false,
  includedUnits: ['year', 'day', 'hour', 'minute', 'second'],
  unitLimit: -1,
  unitSeparator: ' ',
  minimumDigits: 0,
} satisfies Required<Omit<FormatOptions, `__${string}__`>>);

// ===== Presets ===== //

export const formatOptionsPresets = Object.freeze({
  short: {
    useAbbreviations: true,
    unitLimit: 2,
  },
  fullPrecision: {
    includeMs: true,
    includeSubMs: true,
  },
  colonNotation: {
    hideUnitNames: true,
    unitLimit: 3,
    includeZero: true,
    includedUnits: ['hour', 'minute', 'second'],
    unitSeparator: ':',
    minimumDigits: 2,
    // I couldn't think of an option that would be better than this
    __transformDuration__: (d) => (d.startsWith('00:') ? d.slice(3) : d),
  },
} satisfies Record<string, FormatOptions>);

/**
 * - `'short'`: e.g. `1m 30s`
 * - `'fullPrecision'`: e.g. `10 seconds 100 milliseconds 100 microseconds 100 nanoseconds`
 * - `'colonNotation'`: e.g. `00:01:30`
 */
export type FormatOptionsPreset = keyof typeof formatOptionsPresets;

// ===== Resolve ===== //

export function resolveFormatOptions(
  options?: FormatOptions | FormatOptionsPreset,
) {
  if (!options) {
    return resolveFormatOptions(defaultFormatOptions);
  } else if (typeof options === 'string') {
    const preset = formatOptionsPresets[options];
    return resolveFormatOptions(preset);
  }

  let {
    hideUnitNames = defaultFormatOptions.hideUnitNames,
    useAbbreviations = defaultFormatOptions.useAbbreviations,
    includeZero = defaultFormatOptions.includeZero,
    includeMs = defaultFormatOptions.includeMs,
    includeSubMs = defaultFormatOptions.includeSubMs,
    includedUnits = defaultFormatOptions.includedUnits,
    unitLimit = defaultFormatOptions.unitLimit,
    unitSeparator = defaultFormatOptions.unitSeparator,
    minimumDigits = defaultFormatOptions.minimumDigits,
    __transformDuration__,
  } = options;

  if (includeMs || includeSubMs) {
    includedUnits = [...includedUnits];
    if (includeMs) includedUnits.push('millisecond');
    if (includeSubMs) includedUnits.push('nanosecond', 'microsecond');
  }

  return {
    hideUnitNames,
    useAbbreviations,
    includeZero,
    includedUnits,
    unitLimit,
    unitSeparator,
    minimumDigits,
    __transformDuration__,
  };
}

export type ResolvedFormatOptions = ReturnType<typeof resolveFormatOptions>;
