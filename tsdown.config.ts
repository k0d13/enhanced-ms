import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts', 'src/locales/*.ts', '!**/*.test.ts'],
  target: 'es2020',
});
