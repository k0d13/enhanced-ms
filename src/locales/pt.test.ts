import { createMs } from 'enhanced-ms';
import { describe, expect, it } from 'vitest';

const ms = createMs({ language: 'pt' });

describe('Portuguese', () => {
  describe('format milliseconds', () => {
    it('formats milliseconds with default options', () => {
      expect(ms(90061)).toBe('1 minuto 30 segundos');
      expect(ms(90061000)).toBe('1 dia 1 hora 1 minuto 1 segundo');
    });

    it('returns null for sub one second with default options', () => {
      expect(ms(0)).toBeNull();
    });

    it('format using short preset', () => {
      expect(ms(90061, 'short')).toBe('1m 30s');
      expect(ms(90061000, 'short')).toBe('1d 1h');
    });

    it('format using colon notation preset', () => {
      expect(ms(90061, 'colonNotation')).toBe('01:30');
      expect(ms(90061000, 'colonNotation')).toBe('25:01:01');
    });

    it('formats with use abbreviations', () => {
      const options = { useAbbreviations: true };
      expect(ms(90061, options)).toBe('1m 30s');
      expect(ms(90061000, options)).toBe('1d 1h 1m 1s');
    });

    it('formats with unit limit', () => {
      const options = { unitLimit: 1 };
      expect(ms(90061, options)).toBe('1 minuto');
      expect(ms(90061000, options)).toBe('1 dia');
    });
  });

  describe('parse duration', () => {
    it('parses durations', () => {
      expect(ms('1 minuto 30 segundos')).toBe(90000);
      expect(ms('1m 30s')).toBe(90000);
      expect(ms('1 minuto 30 segundos 61 milissegundos')).toBe(90061);
      expect(ms('1m 30s 61ms')).toBe(90061);
    });

    it('parses portuguese-specific unit names and abbreviations', () => {
      expect(ms('2 meses')).toBe(2 * 2_628_000_000);
      expect(ms('2 semanas')).toBe(2 * 604_800_000);
      expect(ms('2sem')).toBe(2 * 604_800_000);
    });

    it('parses accented portuguese unit names correctly', () => {
      expect(ms('2 séculos')).toBe(2 * 3_153_600_000_000);
      expect(ms('2 milênios')).toBe(2 * 31_536_000_000_000);
    });

    it('returns zero for invalid durations', () => {
      expect(ms('nyr9341')).toBe(0);
      expect(ms('o4utrc89nyt')).toBe(0);
    });
  });
});
