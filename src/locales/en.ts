export default {
  decimal: '.',
  and: 'and',

  units: {
    NanoSecond: {
      name: (c) => (c === 1 ? 'nanosecond' : 'nanoseconds'),
      abbreviation: 'ns',
      matches: ['nanosecond', 'nanoseconds', 'ns'],
    },
    MicroSecond: {
      name: (c) => (c === 1 ? 'microsecond' : 'microseconds'),
      abbreviation: 'μs',
      matches: ['microsecond', 'microseconds', 'μs'],
    },
    MilliSecond: {
      name: (c) => (c === 1 ? 'millisecond' : 'milliseconds'),
      abbreviation: 'ms',
      matches: ['millisecond', 'milliseconds', 'ms'],
    },
    Second: {
      name: (c) => (c === 1 ? 'second' : 'seconds'),
      abbreviation: 's',
      matches: ['second', 'seconds', 's'],
    },
    Minute: {
      name: (c) => (c === 1 ? 'minute' : 'minutes'),
      abbreviation: 'm',
      matches: ['minute', 'minutes', 'm'],
    },
    Hour: {
      name: (c) => (c === 1 ? 'hour' : 'hours'),
      abbreviation: 'h',
      matches: ['hour', 'hours', 'h'],
    },
    Day: {
      name: (c) => (c === 1 ? 'day' : 'days'),
      abbreviation: 'd',
      matches: ['day', 'days', 'd'],
    },
    Week: {
      name: (c) => (c === 1 ? 'week' : 'weeks'),
      abbreviation: 'w',
      matches: ['week', 'weeks', 'w'],
    },
    Month: {
      name: (c) => (c === 1 ? 'month' : 'months'),
      abbreviation: 'mo',
      matches: ['month', 'months', 'mo'],
    },
    Year: {
      name: (c) => (c === 1 ? 'year' : 'years'),
      abbreviation: 'y',
      matches: ['year', 'years', 'y'],
    },
    Decade: {
      name: (c) => (c === 1 ? 'decade' : 'decades'),
      abbreviation: 'dec',
      matches: ['decade', 'decades', 'dec'],
    },
    Century: {
      name: (c) => (c === 1 ? 'century' : 'centuries'),
      abbreviation: 'c',
      matches: ['century', 'centuries', 'c'],
    },
    Millennium: {
      name: (c) => (c === 1 ? 'millennium' : 'millennia'),
      abbreviation: 'mil',
      matches: ['millennium', 'millennia', 'mil'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
