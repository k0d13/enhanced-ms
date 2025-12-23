import { Time } from '../time';
import type { LanguageDefinition } from './definition';

const kCompiled = Symbol('compiled');

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

export function compileLanguage(
  definition: LanguageDefinition,
): CompiledLanguage {
  if (kCompiled in definition) return definition[kCompiled] as CompiledLanguage;

  const andValue = definition.and;
  const decimalSeparator = definition.decimal;
  const thousandSeparator = decimalSeparator === '.' ? ',' : '.';
  const supportsAbbreviation = Object.values(definition.units) //
    .every((u) => u.abbreviation);

  const matcherRegex = new RegExp(
    `(?![${decimalSeparator}${thousandSeparator}])` + // Don't match single .,
      `[\\d${decimalSeparator}${thousandSeparator}]+|` + // Numbers
      '(?<=\\s|\\d)((?:-)?(' + // Units
      Object.values(definition.units)
        .flatMap(({ matches }) => matches)
        .sort((a, b) => b.length - a.length)
        .join('|') +
      '))',
    'gi',
  );

  const timeEntries = Object.entries(definition.units).flatMap(([u, d]) => {
    const ms = Time[u as Time.Key];
    return [u.toLowerCase(), ...d.matches] //
      .map((k) => [k, { ...d, ms }] as const);
  });
  const timeUnits = Object.fromEntries(timeEntries);

  const compiled = Object.freeze({
    andValue,
    decimalSeparator,
    thousandSeparator,
    supportsAbbreviation,
    matcherRegex,
    timeUnits,
  });
  Object.assign(definition, { [kCompiled]: compiled });
  return compiled;
}
