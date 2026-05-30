# enhanced-ms

## 5.0.0

### Major Changes

- d57f030: Return null from ms(string) if no duration strings are found within input
- 8d0b67c: Locales are now tree-shakeable, reducing bundle size for consumers
  who only need a single locale. Import your locale directly instead of
  passing a string.

  ```diff
  - ms({ language: 'de' })
  + import de from 'enhanced-ms/locales/de';
  + const ms = createMs({ language: de })
  + ms()
  ```

### Minor Changes

- 8d0b67c: Format throughput improved by up to 5x. The internal pipeline was reduced
  from four passes to one, with option presets cached at module load so
  common calls make zero allocations.

### Patch Changes

- 8d0b67c: Parse throughput improved by ~25% and GC pressure reduced at runtime.
  Language definitions are no longer mutated on compile, and memory usage
  per unit dropped from N allocations to one.

## 4.3.0

### Minor Changes

- fecdea7: Add support for Portuguese

## 4.2.0

### Minor Changes

- d59d860: Add support for Polish, Czech, and Chinese (Simplified)

## 4.1.0

### Minor Changes

- 37840a3: Added language support for Dutch, French, Italian and Spanish

### Patch Changes

- 10d9b89: Fixed handling of `includeMs` and `includeSubMs` options

## 4.0.0

### Major Changes

- 8d46d9d: Codebase rewrite to improve readability and performance

  - Added new `createMs` function to create a new instance of `ms` with custom language and formatting options

    - With this change, the `ms` function no longer accepts a language via its parameters, use `createMs` instead

  - Improved performance of formatting milliseconds by up to 10%
  - Added additional options to `FormatOptions` for more customisation

    - Replaced `shortFormat` with `useAbbreviations`
    - Added `hideUnitNames`, `includeZero`, `includedUnits`, `unitLimit`, `unitSeparator`, `minimumDigits`
    - Added format option presets: `short`, `fullPrecision`, `colonNotation`

  - Improved base performance of parsing durations by up to 1,100%
  - Removed ability for parse to handle maths operators, this will likely be re-added in a future version as an option
