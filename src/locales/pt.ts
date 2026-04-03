export default {
  decimal: ',',
  and: 'e',

  units: {
    Nanosecond: {
      name: (c) => (c === 1 ? 'nanossegundo' : 'nanossegundos'),
      abbreviation: 'ns',
      matches: ['nanossegundo', 'nanossegundos', 'ns'],
    },
    Microsecond: {
      name: (c) => (c === 1 ? 'microssegundo' : 'microssegundos'),
      abbreviation: 'μs',
      matches: ['microssegundo', 'microssegundos', 'μs'],
    },
    Millisecond: {
      name: (c) => (c === 1 ? 'milissegundo' : 'milissegundos'),
      abbreviation: 'ms',
      matches: ['milissegundo', 'milissegundos', 'ms'],
    },
    Second: {
      name: (c) => (c === 1 ? 'segundo' : 'segundos'),
      abbreviation: 's',
      matches: ['segundo', 'segundos', 's'],
    },
    Minute: {
      name: (c) => (c === 1 ? 'minuto' : 'minutos'),
      abbreviation: 'm',
      matches: ['minuto', 'minutos', 'm'],
    },
    Hour: {
      name: (c) => (c === 1 ? 'hora' : 'horas'),
      abbreviation: 'h',
      matches: ['hora', 'horas', 'h'],
    },
    Day: {
      name: (c) => (c === 1 ? 'dia' : 'dias'),
      abbreviation: 'd',
      matches: ['dia', 'dias', 'd'],
    },
    Week: {
      name: (c) => (c === 1 ? 'semana' : 'semanas'),
      abbreviation: 'sem',
      matches: ['semana', 'semanas', 'sem'],
    },
    Month: {
      name: (c) => (c === 1 ? 'mês' : 'meses'),
      abbreviation: 'me',
      matches: ['mês', 'meses', 'me'],
    },
    Year: {
      name: (c) => (c === 1 ? 'ano' : 'anos'),
      abbreviation: 'a',
      matches: ['ano', 'anos', 'a'],
    },
    Decade: {
      name: (c) => (c === 1 ? 'década' : 'décadas'),
      abbreviation: 'dec',
      matches: ['década', 'décadas', 'dec'],
    },
    Century: {
      name: (c) => (c === 1 ? 'século' : 'séculos'),
      abbreviation: 'sec',
      matches: ['século', 'séculos', 'sec'],
    },
    Millennium: {
      name: (c) => (c === 1 ? 'milênio' : 'milênios'),
      abbreviation: 'mil',
      matches: ['milênio', 'milênios', 'mil'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
