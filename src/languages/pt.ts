export default {
  decimal: ',',
  and: 'e',

  units: {
    nanosecond: {
      name: (c) => (c === 1 ? 'nanossegundo' : 'nanossegundos'),
      abbreviation: 'ns',
      matches: ['nanossegundo', 'nanossegundos', 'ns'],
    },
    microsecond: {
      name: (c) => (c === 1 ? 'microssegundo' : 'microssegundos'),
      abbreviation: 'μs',
      matches: ['microssegundo', 'microssegundos', 'μs'],
    },
    millisecond: {
      name: (c) => (c === 1 ? 'milissegundo' : 'milissegundos'),
      abbreviation: 'ms',
      matches: ['milissegundo', 'milissegundos', 'ms'],
    },
    second: {
      name: (c) => (c === 1 ? 'segundo' : 'segundos'),
      abbreviation: 's',
      matches: ['segundo', 'segundos', 's'],
    },
    minute: {
      name: (c) => (c === 1 ? 'minuto' : 'minutos'),
      abbreviation: 'm',
      matches: ['minuto', 'minutos', 'm'],
    },
    hour: {
      name: (c) => (c === 1 ? 'hora' : 'horas'),
      abbreviation: 'h',
      matches: ['hora', 'horas', 'h'],
    },
    day: {
      name: (c) => (c === 1 ? 'dia' : 'dias'),
      abbreviation: 'd',
      matches: ['dia', 'dias', 'd'],
    },
    week: {
      name: (c) => (c === 1 ? 'semana' : 'semanas'),
      abbreviation: 'sem',
      matches: ['semana', 'semanas', 'sem'],
    },
    month: {
      name: (c) => (c === 1 ? 'mês' : 'meses'),
      abbreviation: 'me',
      matches: ['mês', 'meses', 'me'],
    },
    year: {
      name: (c) => (c === 1 ? 'ano' : 'anos'),
      abbreviation: 'a',
      matches: ['ano', 'anos', 'a'],
    },
    decade: {
      name: (c) => (c === 1 ? 'década' : 'décadas'),
      abbreviation: 'dec',
      matches: ['década', 'décadas', 'dec'],
    },
    century: {
      name: (c) => (c === 1 ? 'século' : 'séculos'),
      abbreviation: 'sec',
      matches: ['século', 'séculos', 'sec'],
    },
    millennium: {
      name: (c) => (c === 1 ? 'milênio' : 'milênios'),
      abbreviation: 'mil',
      matches: ['milênio', 'milênios', 'mil'],
    },
  },
} satisfies import('./helpers/definition-types').LanguageDefinition;
