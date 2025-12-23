export default {
  decimal: ',',
  and: 'et',

  units: {
    NanoSecond: {
      name: (c) => (c === 1 ? 'nanoseconde' : 'nanosecondes'),
      abbreviation: 'ns',
      matches: ['nanoseconde', 'nanosecondes', 'ns'],
    },
    MicroSecond: {
      name: (c) => (c === 1 ? 'microseconde' : 'microsecondes'),
      abbreviation: 'μs',
      matches: ['microseconde', 'microsecondes', 'μs'],
    },
    MilliSecond: {
      name: (c) => (c === 1 ? 'milliseconde' : 'millisecondes'),
      abbreviation: 'ms',
      matches: ['milliseconde', 'millisecondes', 'ms'],
    },
    Second: {
      name: (c) => (c === 1 ? 'seconde' : 'secondes'),
      abbreviation: 's',
      matches: ['seconde', 'secondes', 's'],
    },
    Minute: {
      name: (c) => (c === 1 ? 'minute' : 'minutes'),
      abbreviation: 'min',
      matches: ['minute', 'minutes', 'min'],
    },
    Hour: {
      name: (c) => (c === 1 ? 'heure' : 'heures'),
      abbreviation: 'h',
      matches: ['heure', 'heures', 'h'],
    },
    Day: {
      name: (c) => (c === 1 ? 'jour' : 'jours'),
      abbreviation: 'j',
      matches: ['jour', 'jours', 'j'],
    },
    Week: {
      name: (c) => (c === 1 ? 'semaine' : 'semaines'),
      abbreviation: 'sem',
      matches: ['semaine', 'semaines', 'sem'],
    },
    Month: {
      name: (_c) => 'mois', // In French, the singular and plural form is identical.
      abbreviation: 'mo',
      matches: ['mois', 'mo'],
    },
    Year: {
      name: (c) => (c === 1 ? 'an' : 'ans'),
      abbreviation: 'an',
      matches: ['an', 'ans'],
    },
    Decade: {
      name: (c) => (c === 1 ? 'décennie' : 'décennies'),
      abbreviation: 'dec',
      matches: ['décennie', 'décennies', 'dec'],
    },
    Century: {
      name: (c) => (c === 1 ? 'siècle' : 'siècles'),
      abbreviation: 'siè',
      matches: ['siècle', 'siècles', 'siè'],
    },
    Millennium: {
      name: (c) => (c === 1 ? 'millénaire' : 'millénaires'),
      abbreviation: 'mil',
      matches: ['millénaire', 'millénaires', 'mil'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
