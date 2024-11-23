import {
  STAT_LIST,
  type Stat,
} from '@/app/data/stat';
import type { StatItem } from '@/app/models/poke.type';

function getStatText(stat: Stat) {
  return STAT_LIST[stat];
}

function getTotalStatValue(statItemList: StatItem[]) {
  const totalStatvalue = statItemList
    .reduce((total, { value }) => total + value, 0);

  return totalStatvalue;
}

export {
  getStatText,
  getTotalStatValue,
};
