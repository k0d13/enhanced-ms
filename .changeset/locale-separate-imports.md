---
"enhanced-ms": major
---

Locales are now tree-shakeable, reducing bundle size for consumers
who only need a single locale. Import your locale directly instead of
passing a string.

```diff
- ms({ language: 'de' })
+ import de from 'enhanced-ms/locales/de';
+ const ms = createMs({ language: de })
+ ms()
```
