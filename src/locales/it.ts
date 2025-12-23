export default {
  decimal: ',',
  and: 'e',

  units: {
    NanoSecond: {
      name: (c) => (c === 1 ? 'nanosecondo' : 'nanosecondi'),
      abbreviation: 'ns',
      matches: ['nanosecondo', 'nanosecondi', 'ns'],
    },
    MicroSecond: {
      name: (c) => (c === 1 ? 'microsecondo' : 'microsecondi'),
      abbreviation: 'μs',
      matches: ['microsecondo', 'microsecondi', 'μs'],
    },
    MilliSecond: {
      name: (c) => (c === 1 ? 'millisecondo' : 'millisecondi'),
      abbreviation: 'ms',
      matches: ['millisecondo', 'millisecondi', 'ms'],
    },
    Second: {
      name: (c) => (c === 1 ? 'secondo' : 'secondi'),
      abbreviation: 's',
      matches: ['secondo', 'secondi', 's'],
    },
    Minute: {
      name: (c) => (c === 1 ? 'minuto' : 'minuti'),
      abbreviation: 'min',
      matches: ['minuto', 'minuti', 'min'],
    },
    Hour: {
      name: (c) => (c === 1 ? 'ora' : 'ore'),
      abbreviation: 'h',
      matches: ['ora', 'ore', 'h'],
    },
    Day: {
      name: (c) => (c === 1 ? 'giorno' : 'giorni'),
      abbreviation: 'g',
      matches: ['giorno', 'giorni', 'g'],
    },
    Week: {
      name: (c) => (c === 1 ? 'settimana' : 'settimane'),
      abbreviation: 'sett',
      matches: ['settimana', 'settimane', 'sett'],
    },
    Month: {
      name: (c) => (c === 1 ? 'mese' : 'mesi'),
      abbreviation: 'mes',
      matches: ['mese', 'mesi', 'mes'],
    },
    Year: {
      name: (c) => (c === 1 ? 'anno' : 'anni'),
      abbreviation: 'a',
      matches: ['anno', 'anni', 'a'],
    },
    Decade: {
      name: (c) => (c === 1 ? 'decennio' : 'decenni'),
      abbreviation: 'dec',
      matches: ['decennio', 'decenni', 'dec'],
    },
    Century: {
      name: (c) => (c === 1 ? 'secolo' : 'secoli'),
      abbreviation: 'sc',
      matches: ['secolo', 'secoli', 'sc'],
    },
    Millennium: {
      name: (c) => (c === 1 ? 'millennio' : 'millenni'),
      abbreviation: 'mil',
      matches: ['millennio', 'millenni', 'mil'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
