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
      name: (c) => formatTime('hodiny', c),
      abbreviation: 'h',
      matches: ['h', 'hod', 'hodina', 'hodiny', 'hodin'],
    },
    Day: {
      name: (c) => formatTime('dny', c),
      abbreviation: 'd',
      matches: ['d', 'den', 'dny', 'dní'],
    },
    Week: {
      name: (c) => formatTime('týdny', c),
      abbreviation: 'týd.',
      matches: ['w', 'týd', 'týden', 'týdny', 'týdnů'],
    },
    Month: {
      name: (c) => formatTime('měsíce', c),
      abbreviation: 'měs.',
      matches: ['mo', 'měs', 'měsíc', 'měsíce', 'měsíců'],
    },
    Year: {
      name: (c) => formatTime('roky', c),
      abbreviation: 'r.',
      matches: ['y', 'r', 'rok', 'roky', 'let'],
    },
    Decade: {
      name: (c) => formatTime('dekády', c),
      abbreviation: 'dek.',
      matches: ['dek', 'dekáda', 'dekády', 'dekád'],
    },
    Century: {
      name: (c) => formatTime('století', c),
      abbreviation: 'stol.',
      matches: ['c', 'stol', 'století'],
    },
    Millennium: {
      name: (c) => formatTime('tisíciletí', c),
      abbreviation: 'tis.',
      matches: ['mil', 'tis', 'tisíciletí'],
    },
  },
} satisfies import('../language/definition').LanguageDefinition;
