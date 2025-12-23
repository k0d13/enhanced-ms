export default {
  decimal: ',',
  and: 'en',

  units: {
    NanoSecond: {
      name: (c) => (c === 1 ? 'nanoseconde' : 'nanoseconden'),
      abbreviation: 'ns',
      matches: ['nanoseconde', 'nanoseconden', 'ns'],
    },
    MicroSecond: {
      name: (c) => (c === 1 ? 'microseconde' : 'microseconden'),
      abbreviation: 'μs',
      matches: ['microseconde', 'microseconden', 'μs'],
    },
    MilliSecond: {
      name: (c) => (c === 1 ? 'milliseconde' : 'milliseconden'),
      abbreviation: 'ms',
      matches: ['milliseconde', 'milliseconden', 'ms'],
    },
    Second: {
      name: (c) => (c === 1 ? 'seconde' : 'seconden'),
      abbreviation: 's',
      matches: ['seconde', 'seconden', 's'],
    },
    Minute: {
      name: (c) => (c === 1 ? 'minuut' : 'minuten'),
      abbreviation: 'min',
      matches: ['minuut', 'minuten', 'min'],
    },
    Hour: {
      name: (c) => (c === 1 ? 'uur' : 'uren'),
      abbreviation: 'h',
      matches: ['uur', 'uren', 'h'],
    },
    Day: {
      name: (c) => (c === 1 ? 'dag' : 'dagen'),
      abbreviation: 'd',
      matches: ['dag', 'dagen', 'd'],
    },
    Week: {
      name: (c) => (c === 1 ? 'week' : 'weken'),
      abbreviation: 'w',
      matches: ['week', 'weken', 'w'],
    },
    Month: {
      name: (c) => (c === 1 ? 'maand' : 'maanden'),
      abbreviation: 'mnd',
      matches: ['maand', 'maanden', 'mnd'],
    },
    Year: {
      name: (c) => (c === 1 ? 'jaar' : 'jaren'),
      abbreviation: 'jr',
      matches: ['jaar', 'jaren', 'jr'],
    },
    Decade: {
      name: (c) => (c === 1 ? 'decennium' : 'decennia'),
      abbreviation: 'dec',
      matches: ['decennium', 'decennia', 'dec'],
    },
    Century: {
      name: (c) => (c === 1 ? 'eeuw' : 'eeuwen'),
      abbreviation: 'eeuw',
      matches: ['eeuw', 'eeuwen'],
    },
    Millennium: {
      name: (c) => (c === 1 ? 'millennium' : 'millennia'),
      abbreviation: 'mil',
      matches: ['millennium', 'millennia', 'mil'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
