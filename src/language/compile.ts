import { Time } from '../time';
import type { LanguageDefinition } from './definition';

export interface CompiledLanguage {
  andValue: string | ((count: number) => string) | undefined;
  decimalSeparator: '.' | ',';
  thousandSeparator: '.' | ',';
  supportsAbbreviation: boolean;
  matcherRegex: RegExp;
  timeUnits: Readonly<
    Record<
      string,
      {
        ms: Time.Value;
        name: string | ((count: number) => string);
        abbreviation?: string | ((count: number) => string);
        matches: Lowercase<string>[];
      }
    >
  >;
}

const cache = new WeakMap<LanguageDefinition, Readonly<CompiledLanguage>>();

export function compileLanguage(definition: LanguageDefinition) {
  const cached = cache.get(definition);
  if (cached) return cached;

  const andValue = definition.and;
  const decimalSeparator = definition.decimal;
  const thousandSeparator = decimalSeparator === '.' ? ',' : '.';
  const supportsAbbreviation = Object.values(definition.units).every((u) => u.abbreviation);

  const matcherRegex = new RegExp(
    `(?![${decimalSeparator}${thousandSeparator}])` +
      `[\\d${decimalSeparator}${thousandSeparator}]+|` +
      '(?<=\\s|\\d)((?:-)?(' +
      Object.values(definition.units)
        .flatMap(({ matches }) => matches)
        .sort((a, b) => b.length - a.length)
        .join('|') +
      '))',
    'gi',
  );

  const timeUnits: Record<
    string,
    {
      ms: Time.Value;
      name: string | ((count: number) => string);
      abbreviation?: string | ((count: number) => string);
      matches: Lowercase<string>[];
    }
  > = {};
  for (const [u, d] of Object.entries(definition.units)) {
    const ms = Time[u as Time.Key];
    const entry = { ...d, ms };
    timeUnits[u.toLowerCase()] = entry;
    for (const k of d.matches) timeUnits[k] = entry;
  }

  const compiled = Object.freeze({
    andValue,
    decimalSeparator,
    thousandSeparator,
    supportsAbbreviation,
    matcherRegex,
    timeUnits,
  });

  cache.set(definition, compiled);
  return compiled;
}
