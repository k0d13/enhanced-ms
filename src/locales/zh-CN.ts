export default {
  decimal: '.',
  and: '和',
  units: {
    NanoSecond: {
      name: '纳秒',
      abbreviation: 'ns',
      matches: ['纳秒', 'ns'],
    },
    MicroSecond: {
      name: '微秒',
      abbreviation: 'μs',
      matches: ['微秒', 'μs', 'us'],
    },
    MilliSecond: {
      name: '毫秒',
      abbreviation: 'ms',
      matches: ['毫秒', 'ms'],
    },
    Second: {
      name: '秒',
      abbreviation: 's',
      matches: ['秒', 's'],
    },
    Minute: {
      name: '分钟',
      abbreviation: '分',
      matches: ['分钟', '分', 'm', 'min'],
    },
    Hour: {
      name: '小时',
      abbreviation: '时',
      matches: ['小时', '时', 'h', 'hour'],
    },
    Day: {
      name: '天',
      abbreviation: '天',
      matches: ['天', '日', 'd', 'day'],
    },
    Week: {
      name: '周',
      abbreviation: '周',
      matches: ['周', '星期', 'w', 'week'],
    },
    Month: {
      name: '个月',
      abbreviation: '月',
      matches: ['个月', '月', 'mo', 'month'],
    },
    Year: {
      name: '年',
      abbreviation: '年',
      matches: ['年', 'y', 'year'],
    },
    Decade: {
      name: '十年',
      abbreviation: '十年',
      matches: ['十年', 'dec', 'decade'],
    },
    Century: {
      name: '世纪',
      abbreviation: '世纪',
      matches: ['世纪', 'c', 'century'],
    },
    Millennium: {
      name: '千年',
      abbreviation: '千年',
      matches: ['千年', 'mil', 'millennium'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
