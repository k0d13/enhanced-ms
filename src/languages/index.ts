import type { LanguageDefinition } from './helpers/definition-types';

import cs from './cs';
import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';
import mi from './mi';
import nl from './nl';
import pl from './pl';
import ru from './ru';
import zhCN from './zh-CN';

// This prevents the whole language definition being included in the dts output
type Locale =
  | 'cs'
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'it'
  | 'mi'
  | 'nl'
  | 'pl'
  | 'ru'
  | 'zh-CN';
type Languages = Record<Locale, LanguageDefinition>;
export const languages: Languages = {
  cs,
  de,
  en,
  es,
  fr,
  it,
  mi,
  nl,
  pl,
  ru,
  'zh-CN': zhCN,
};
