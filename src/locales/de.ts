// RIP @DEVTomatoCake

export default {
  decimal: ',',
  and: 'und',

  units: {
    Nanosecond: {
      name: (c) => (c === 1 ? 'Nanosekunde' : 'Nanosekunden'),
      abbreviation: 'ns',
      matches: ['ns', 'nanos', 'nanosekunde', 'nanosekunden'],
    },
    Microsecond: {
      name: (c) => (c === 1 ? 'Mikrosekunde' : 'Mikrosekunden'),
      abbreviation: 'μs',
      matches: ['us', 'mk', 'mikrosekunde', 'mikrosekunden', 'mikros'],
    },
    Millisecond: {
      name: (c) => (c === 1 ? 'Millisekunde' : 'Millisekunden'),
      abbreviation: 'ms',
      matches: ['ms', 'ml', 'mi', 'millisekunde', 'millisekunden', 'millis'],
    },
    Second: {
      name: (c) => (c === 1 ? 'Sekunde' : 'Sekunden'),
      abbreviation: 'Sek.',
      matches: ['s', 'sekunde', 'sekunden', 'sek', 'seks'],
    },
    Minute: {
      name: (c) => (c === 1 ? 'Minute' : 'Minuten'),
      abbreviation: 'Min.',
      matches: ['m', 'minute', 'minuten', 'min', 'mins'],
    },
    Hour: {
      name: (c) => (c === 1 ? 'Stunde' : 'Stunden'),
      abbreviation: 'Std.',
      matches: ['h', 'stunde', 'stunden', 'st'],
    },
    Day: {
      name: (c) => (c === 1 ? 'Tag' : 'Tage'),
      abbreviation: 'T.',
      matches: ['d', 't', 'tag', 'tage'],
    },
    Week: {
      name: (c) => (c === 1 ? 'Woche' : 'Wochen'),
      abbreviation: 'W.',
      matches: ['w', 'wo', 'woche', 'wochen'],
    },
    Month: {
      name: (c) => (c === 1 ? 'Monat' : 'Monate'),
      abbreviation: 'M.',
      matches: ['mo', 'monat', 'monate'],
    },
    Year: {
      name: (c) => (c === 1 ? 'Jahr' : 'Jahre'),
      abbreviation: 'J.',
      matches: ['y', 'a', 'j', 'jahr', 'jahre'],
    },
    Decade: {
      name: (c) => (c === 1 ? 'Jahrzehnt' : 'Jahrzehnte'),
      abbreviation: 'Jz.',
      matches: ['jz', 'jahrzehnt', 'jahrzehnte'],
    },
    Century: {
      name: (c) => (c === 1 ? 'Jahrhundert' : 'Jahrhunderte'),
      abbreviation: 'Jh.',
      matches: ['c', 'jh', 'jhd', 'jahrhundert', 'jahrhunderte'],
    },
    Millennium: {
      name: (c) => (c === 1 ? 'Jahrtausend' : 'Jahrtausende'),
      abbreviation: 'Jt.',
      matches: ['jt', 'jtd', 'jtsd', 'jahrt', 'jahrtausend', 'jahrtausende'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
