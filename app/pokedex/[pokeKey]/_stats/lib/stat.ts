import {
  STAT_LIST,
  type Stat,
} from '@/app/data/stat';

function getStatText(stat: Stat) {
  return STAT_LIST[stat];
}

function calculateBarWidth(currentStat: number, referenceStat: number) {
  const scaleFactor = referenceStat < 200 ? 255 : 300;
  const barWidth = `${(currentStat / scaleFactor) * 100}%`;

  return barWidth;
}

function calculateTotalStatValue(statItemList: { value: number }[]) {
  const totalStatvalue = statItemList
    .reduce((total, { value }) => total + value, 0);

  return totalStatvalue;
}

function calculateMaxStatValue(statItemList: { value: number }[]) {
  const maxStatValue = Math.max(...statItemList.map(({ value }) => value));

  return maxStatValue;
}

export {
  getStatText,
  calculateBarWidth,
  calculateTotalStatValue,
  calculateMaxStatValue,
};
