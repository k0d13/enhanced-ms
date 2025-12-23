export default {
  decimal: ',',
  and: 'y',

  units: {
    NanoSecond: {
      name: (c) => (c === 1 ? 'nanosegundo' : 'nanosegundos'),
      abbreviation: 'ns',
      matches: ['nanosegundo', 'nanosegundos', 'ns'],
    },
    MicroSecond: {
      name: (c) => (c === 1 ? 'microsegundo' : 'microsegundos'),
      abbreviation: 'μs',
      matches: ['microsegundo', 'microsegundos', 'μs'],
    },
    MilliSecond: {
      name: (c) => (c === 1 ? 'milisegundo' : 'milisegundos'),
      abbreviation: 'ms',
      matches: ['milisegundo', 'milisegundos', 'ms'],
    },
    Second: {
      name: (c) => (c === 1 ? 'segundo' : 'segundos'),
      abbreviation: 's',
      matches: ['segundo', 'segundos', 's'],
    },
    Minute: {
      name: (c) => (c === 1 ? 'minuto' : 'minutos'),
      abbreviation: 'min',
      matches: ['minuto', 'minutos', 'min'],
    },
    Hour: {
      name: (c) => (c === 1 ? 'hora' : 'horas'),
      abbreviation: 'h',
      matches: ['hora', 'horas', 'h'],
    },
    Day: {
      name: (c) => (c === 1 ? 'día' : 'días'),
      abbreviation: 'd',
      matches: ['día', 'días', 'd'],
    },
    Week: {
      name: (c) => (c === 1 ? 'semana' : 'semanas'),
      abbreviation: 'sem',
      matches: ['semana', 'semanas', 'sem'],
    },
    Month: {
      name: (c) => (c === 1 ? 'mes' : 'meses'),
      abbreviation: 'mes',
      matches: ['mes', 'meses', 'mes'],
    },
    Year: {
      name: (c) => (c === 1 ? 'año' : 'años'),
      abbreviation: 'a',
      matches: ['año', 'años', 'a'],
    },
    Decade: {
      name: (c) => (c === 1 ? 'década' : 'décadas'),
      abbreviation: 'déc',
      matches: ['década', 'décadas', 'déc'],
    },
    Century: {
      name: (c) => (c === 1 ? 'siglo' : 'siglos'),
      abbreviation: 'sig',
      matches: ['siglo', 'siglos', 'sig'],
    },
    Millennium: {
      name: (c) => (c === 1 ? 'milenio' : 'milenios'),
      abbreviation: 'mil',
      matches: ['milenio', 'milenios', 'mil'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
