export const Time = {
  NanoSecond: 0.000_001,
  MicroSecond: 0.001,
  MilliSecond: 1,
  Second: 1_000,
  Minute: 60_000,
  Hour: 3_600_000,
  Day: 86_400_000, // 24 hours
  Week: 604_800_000, // 7 days
  Month: 2_628_000_000, // 28 days
  Year: 31_536_000_000, // 365 days
  Decade: 315_360_000_000, // 10 years
  Century: 3_153_600_000_000, // 100 years
  Millennium: 31_536_000_000_000, // 1000 years
} as const satisfies Record<string, number>;

export namespace Time {
  export type Key = keyof typeof Time;
  export type Value = (typeof Time)[Key];
}
