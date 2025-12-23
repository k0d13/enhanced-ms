import { createMs } from 'enhanced-ms';
import { describe, expect, it } from 'vitest';

const ms = createMs({ language: 'zh-CN' });

describe('Chinese Simplified (中文简体)', () => {
  describe('format milliseconds', () => {
    it('formats seconds correctly', () => {
      expect(ms(1000)).toBe('1 秒');
      expect(ms(5000)).toBe('5 秒');
    });

    it('formats with proper unit names', () => {
      // 1 day 2 hours 5 minutes
      const time = 86400000 + 2 * 3600000 + 5 * 60000;
      expect(ms(time)).toBe('1 天 2 小时 5 分钟');
    });

    it('formats hours and minutes', () => {
      expect(ms(3600000)).toBe('1 小时');
      expect(ms(60000)).toBe('1 分钟');
      expect(ms(3660000)).toBe('1 小时 1 分钟');
    });
  });

  describe('parse duration', () => {
    it('parses Chinese duration strings', () => {
      expect(ms('1 秒')).toBe(1000);
      expect(ms('5 秒')).toBe(5000);
      expect(ms('1 天 2 小时')).toBe(86400000 + 2 * 3600000);
    });
  });
});
