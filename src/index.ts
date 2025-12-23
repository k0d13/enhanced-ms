import { createMs } from './factory';
import en from './locales/en';
export const ms = createMs({ language: en });
export default ms;

export { createMs, type Ms } from './factory';
export { formatMilliseconds } from './format';
export { compileLanguage } from './language/compile';
export { parseDuration } from './parse';
export { Time } from './time';
