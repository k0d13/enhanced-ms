export default {
  decimal: '.',
  and: 'me te',

  units: {
    NanoSecond: {
      name: 'hēkona nanomiri',
      matches: [
        'hēkona nanomiri',
        'hēkonananomiri',
        'hekona nanomiri',
        'hekonananomiri',
      ],
    },
    MicroSecond: {
      name: 'hēkona miriona',
      matches: [
        'hēkona miriona',
        'hēkonamiriona',
        'hekona miriona',
        'hekonamiriona',
      ],
    },
    MilliSecond: {
      name: 'hēkona miri',
      matches: ['hēkona miri', 'kākonamiri', 'hekona miri', 'hekonamiri'],
    },
    Second: {
      name: 'hēkona',
      matches: ['hēkona', 'hekona'],
    },
    Minute: {
      name: 'meneti',
      matches: ['meneti'],
    },
    Hour: {
      name: 'hāora',
      matches: ['hāora', 'haora'],
    },
    Day: {
      name: 'rā',
      matches: ['rā', 'ra'],
    },
    Week: {
      name: 'wiki',
      matches: ['wiki'],
    },
    Month: {
      name: 'marama',
      matches: ['marama'],
    },
    Year: {
      name: 'tau',
      matches: ['tau', 'houanga'],
    },
    Decade: {
      name: 'tekau tau',
      matches: ['tekautau', 'tekau tau'],
    },
    Century: {
      name: 'rau tau',
      matches: ['rautau', 'rau tau'],
    },
    Millennium: {
      name: 'mano tau',
      matches: ['manotau', 'mano tau'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
