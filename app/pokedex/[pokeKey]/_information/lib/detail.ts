import {
  EXP_POINTS_AT_LEVEL100,
  EXP_POINTS_AT_LEVEL50,
  DEFAULT_GROWTH_RATE,
  GROWTH_RATE_LIST,
  type GrowthRate,
} from '@/app/data/growth-rate';
import {
  STAT_LIST,
  type Stat,
} from '@/app/data/stat';

type EffortStat = {
  stat: Stat;
  value: number;
};

function formatMeasurement(value: number) {
  const meters = value / 10;

  const formattedMeters = meters.toFixed(1);

  return formattedMeters;
}

function getGrowthRateInfo(growthRate: GrowthRate = DEFAULT_GROWTH_RATE) {
  const expPointAt50 = EXP_POINTS_AT_LEVEL50[growthRate];
  const expPointAt100 = EXP_POINTS_AT_LEVEL100[growthRate];

  return {
    growthRateText: GROWTH_RATE_LIST[growthRate],
    expPointAt50: expPointAt50.toLocaleString(),
    expPointAt100: expPointAt100.toLocaleString(),
  };
}

function transformEffortStats(effortStats: EffortStat[]) {
  return effortStats.map(({ stat, value }) => ({
    value,
    stat: STAT_LIST[stat],
  }));
}

export {
  formatMeasurement,
  getGrowthRateInfo,
  transformEffortStats,
};
