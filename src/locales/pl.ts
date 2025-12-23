type Unit = keyof typeof UnitsMap;
const UnitsMap = {
  nanosekundy: ['nanosekunda', 'nanosekundy', 'nanosekund'],
  mikrosekundy: ['mikrosekunda', 'mikrosekundy', 'mikrosekund'],
  milisekundy: ['milisekunda', 'milisekundy', 'milisekund'],
  sekundy: ['sekunda', 'sekundy', 'sekund'],
  minuty: ['minuta', 'minuty', 'minut'],
  godziny: ['godzina', 'godziny', 'godzin'],
  dni: ['dzień', 'dni', 'dni'],
  tygodnie: ['tydzień', 'tygodnie', 'tygodni'],
  miesiące: ['miesiąc', 'miesiące', 'miesięcy'],
  lata: ['rok', 'lata', 'lat'],
  dekady: ['dekada', 'dekady', 'dekad'],
  wieki: ['wiek', 'wieki', 'wieków'],
  tysiąclecia: ['tysiąclecie', 'tysiąclecia', 'tysiącleci'],
} as const;

function formatTime(unit: Unit, count: number) {
  const words = UnitsMap[unit];

  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  let word: string;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) word = words[2]!;
  else if (lastDigit === 1) word = words[0]!;
  else if (lastDigit >= 2 && lastDigit <= 4) word = words[1]!;
  else word = words[2]!;

  return word || '';
}

export default {
  decimal: ',',
  and: 'i',

  units: {
    NanoSecond: {
      name: (c) => formatTime('nanosekundy', c),
      abbreviation: 'ns',
      matches: ['ns', 'nanosekunda', 'nanosekundy', 'nanosekund'],
    },
    MicroSecond: {
      name: (c) => formatTime('mikrosekundy', c),
      abbreviation: 'μs',
      matches: ['μs', 'us', 'mikrosekunda', 'mikrosekundy', 'mikrosekund'],
    },
    MilliSecond: {
      name: (c) => formatTime('milisekundy', c),
      abbreviation: 'ms',
      matches: ['ms', 'milisekunda', 'milisekundy', 'milisekund'],
    },
    Second: {
      name: (c) => formatTime('sekundy', c),
      abbreviation: 's',
      matches: ['s', 'sek', 'sekunda', 'sekundy', 'sekund'],
    },
    Minute: {
      name: (c) => formatTime('minuty', c),
      abbreviation: 'min',
      matches: ['m', 'min', 'minuta', 'minuty', 'minut'],
    },
    Hour: {
      name: (c) => formatTime('godziny', c),
      abbreviation: 'godz.',
      matches: ['h', 'godz', 'godzina', 'godziny', 'godzin'],
    },
    Day: {
      name: (c) => formatTime('dni', c),
      abbreviation: 'd',
      matches: ['d', 'dzień', 'dni'],
    },
    Week: {
      name: (c) => formatTime('tygodnie', c),
      abbreviation: 'tydz.',
      matches: ['w', 'tydz', 'tydzień', 'tygodnie', 'tygodni'],
    },
    Month: {
      name: (c) => formatTime('miesiące', c),
      abbreviation: 'mies.',
      matches: ['mo', 'mies', 'miesiąc', 'miesiące', 'miesięcy'],
    },
    Year: {
      name: (c) => formatTime('lata', c),
      abbreviation: 'r.',
      matches: ['y', 'r', 'rok', 'lata', 'lat'],
    },
    Decade: {
      name: (c) => formatTime('dekady', c),
      abbreviation: 'dek.',
      matches: ['dek', 'dekada', 'dekady', 'dekad'],
    },
    Century: {
      name: (c) => formatTime('wieki', c),
      abbreviation: 'w.',
      matches: ['c', 'wiek', 'wieki', 'wieków'],
    },
    Millennium: {
      name: (c) => formatTime('tysiąclecia', c),
      abbreviation: 'tys.',
      matches: ['mil', 'tys', 'tysiąclecie', 'tysiąclecia', 'tysiącleci'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
