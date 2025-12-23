type Unit = keyof typeof UnitsMap;
const UnitsMap = {
  nanosekundy: ['nanosekunda', 'nanosekundy', 'nanosekund'],
  mikrosekundy: ['mikrosekunda', 'mikrosekundy', 'mikrosekund'],
  milisekundy: ['milisekunda', 'milisekundy', 'milisekund'],
  sekundy: ['sekunda', 'sekundy', 'sekund'],
  minuty: ['minuta', 'minuty', 'minut'],
  hodiny: ['hodina', 'hodiny', 'hodin'],
  dny: ['den', 'dny', 'dní'],
  týdny: ['týden', 'týdny', 'týdnů'],
  měsíce: ['měsíc', 'měsíce', 'měsíců'],
  roky: ['rok', 'roky', 'let'],
  dekády: ['dekáda', 'dekády', 'dekád'],
  století: ['století', 'století', 'století'],
  tisíciletí: ['tisíciletí', 'tisíciletí', 'tisíciletí'],
} as const;

function formatTime(unit: Unit, count: number) {
  const words = UnitsMap[unit];

  let word: string;
  if (count === 1) word = words[0]!;
  else if (count >= 2 && count <= 4) word = words[1]!;
  else word = words[2]!;

  return word || '';
}

export default {
  decimal: ',',
  and: 'a',

  units: {
    nanosecond: {
      name: (c) => formatTime('nanosekundy', c),
      abbreviation: 'ns',
      matches: ['ns', 'nanosekunda', 'nanosekundy', 'nanosekund'],
    },
    microsecond: {
      name: (c) => formatTime('mikrosekundy', c),
      abbreviation: 'μs',
      matches: ['μs', 'us', 'mikrosekunda', 'mikrosekundy', 'mikrosekund'],
    },
    millisecond: {
      name: (c) => formatTime('milisekundy', c),
      abbreviation: 'ms',
      matches: ['ms', 'milisekunda', 'milisekundy', 'milisekund'],
    },
    second: {
      name: (c) => formatTime('sekundy', c),
      abbreviation: 's',
      matches: ['s', 'sek', 'sekunda', 'sekundy', 'sekund'],
    },
    minute: {
      name: (c) => formatTime('minuty', c),
      abbreviation: 'min',
      matches: ['m', 'min', 'minuta', 'minuty', 'minut'],
    },
    hour: {
      name: (c) => formatTime('hodiny', c),
      abbreviation: 'h',
      matches: ['h', 'hod', 'hodina', 'hodiny', 'hodin'],
    },
    day: {
      name: (c) => formatTime('dny', c),
      abbreviation: 'd',
      matches: ['d', 'den', 'dny', 'dní'],
    },
    week: {
      name: (c) => formatTime('týdny', c),
      abbreviation: 'týd.',
      matches: ['w', 'týd', 'týden', 'týdny', 'týdnů'],
    },
    month: {
      name: (c) => formatTime('měsíce', c),
      abbreviation: 'měs.',
      matches: ['mo', 'měs', 'měsíc', 'měsíce', 'měsíců'],
    },
    year: {
      name: (c) => formatTime('roky', c),
      abbreviation: 'r.',
      matches: ['y', 'r', 'rok', 'roky', 'let'],
    },
    decade: {
      name: (c) => formatTime('dekády', c),
      abbreviation: 'dek.',
      matches: ['dek', 'dekáda', 'dekády', 'dekád'],
    },
    century: {
      name: (c) => formatTime('století', c),
      abbreviation: 'stol.',
      matches: ['c', 'stol', 'století'],
    },
    millennium: {
      name: (c) => formatTime('tisíciletí', c),
      abbreviation: 'tis.',
      matches: ['mil', 'tis', 'tisíciletí'],
    },
  },
} satisfies import('./helpers/definition-types').LanguageDefinition;
