import { createMs } from 'enhanced-ms';
import { describe, expect, it } from 'vitest';

const ms = createMs({ language: 'pl' });

describe('Polish (Polski)', () => {
  describe('format milliseconds', () => {
    it('formats with correct pluralization', () => {
      // 1 second -> sekunda
      expect(ms(1000)).toBe('1 sekunda');
      // 2 seconds -> sekundy
      expect(ms(2000)).toBe('2 sekundy');
      // 5 seconds -> sekund
      expect(ms(5000)).toBe('5 sekund');
      // 12 seconds -> sekund (teen)
      expect(ms(12000)).toBe('12 sekund');
      // 22 seconds -> sekundy (ends in 2 but not teen)
      expect(ms(22000)).toBe('22 sekundy');
      // 25 seconds -> sekund
      expect(ms(25000)).toBe('25 sekund');
    });

    it('formats with proper unit names', () => {
      // 1 day 2 hours 5 minutes
      const time = 86400000 + 2 * 3600000 + 5 * 60000;
      expect(ms(time)).toBe('1 dzień 2 godziny 5 minut');
    });
  });

  describe('parse duration', () => {
    it('parses Polish duration strings', () => {
      expect(ms('1 sekunda')).toBe(1000);
      expect(ms('2 sekundy')).toBe(2000);
      expect(ms('5 sekund')).toBe(5000);
      expect(ms('1 dzień 2 godziny')).toBe(86400000 + 2 * 3600000);
    });
  });
});
