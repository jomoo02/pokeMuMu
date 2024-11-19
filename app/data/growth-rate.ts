const mediumSlow = 'medium-slow';
const medium = 'medium';
const fast = 'fast';
const slow = 'slow';
const slowThenVeryFast = 'slow-then-very-fast';
const fastThenVerySlow = 'fast-then-very-slow';

export type GrowthRate =
  'medium-slow'
  | 'medium'
  | 'fast'
  | 'slow'
  | 'slow-then-very-fast'
  | 'fast-then-very-slow';

const DEFAULT_GROWTH_RATE = medium;

const GROWTH_RATE_LIST: Record<GrowthRate, string> = {
  [slow]: '항상 많음',
  [mediumSlow]: '초반 매우 적음, 후반 보통',
  [medium]: '항상 보통',
  [fast]: '항상 적음',
  [slowThenVeryFast]: '초반 매우 많음, 후반 매우 적음',
  [fastThenVerySlow]: '초반 매우 적음, 후반 매우 많음',
};

const EXP_POINTS_AT_LEVEL50: Record<GrowthRate, number> = {
  [slow]: 156250,
  [mediumSlow]: 117360,
  [medium]: 125000,
  [fast]: 100000,
  [slowThenVeryFast]: 125000,
  [fastThenVerySlow]: 142500,
};

const EXP_POINTS_AT_LEVEL100: Record<GrowthRate, number> = {
  [slow]: 1250000,
  [mediumSlow]: 1059860,
  [medium]: 1000000,
  [fast]: 800000,
  [slowThenVeryFast]: 600000,
  [fastThenVerySlow]: 1640000,
};

export {
  DEFAULT_GROWTH_RATE,
  GROWTH_RATE_LIST,
  EXP_POINTS_AT_LEVEL100,
  EXP_POINTS_AT_LEVEL50,
};
