import { createMs } from 'enhanced-ms';
import { describe, expect, it } from 'vitest';

const ms = createMs({ language: 'cs' });

describe('Czech (Čeština)', () => {
  describe('format milliseconds', () => {
    it('formats with correct pluralization', () => {
      // 1 second -> sekunda
      expect(ms(1000)).toBe('1 sekunda');
      // 2 seconds -> sekundy
      expect(ms(2000)).toBe('2 sekundy');
      // 4 seconds -> sekundy
      expect(ms(4000)).toBe('4 sekundy');
      // 5 seconds -> sekund
      expect(ms(5000)).toBe('5 sekund');
    });

    it('formats with proper unit names', () => {
      // 1 day 2 hours 5 minutes
      const time = 86400000 + 2 * 3600000 + 5 * 60000;
      expect(ms(time)).toBe('1 den 2 hodiny 5 minut');
    });
  });

  describe('parse duration', () => {
    it('parses Czech duration strings', () => {
      expect(ms('1 sekunda')).toBe(1000);
      expect(ms('2 sekundy')).toBe(2000);
      expect(ms('5 sekund')).toBe(5000);
      expect(ms('1 den 2 hodiny')).toBe(86400000 + 2 * 3600000);
    });
  });
});
