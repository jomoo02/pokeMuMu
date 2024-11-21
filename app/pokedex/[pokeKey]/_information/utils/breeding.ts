import {
  NO_EGGS,
  EGG_GROUPS,
  type EggGroup,
} from '@/app/data/egg-group';

function checkGenderless(genderRate: number) {
  return genderRate === -1;
}

function getGenderInfo(genderRate: number) {
  const femaleValue = genderRate * 12.5;
  const maleValue = 100 - femaleValue;

  return {
    maleValue,
    femaleValue,
  };
}

function setEggGroups(eggGroups: EggGroup[]) {
  if (!eggGroups || eggGroups.some((eggGroup) => eggGroup === NO_EGGS)) {
    return [EGG_GROUPS['no-eggs']];
  }

  return eggGroups.map((eggGroup) => EGG_GROUPS[eggGroup]);
}

export {
  checkGenderless,
  getGenderInfo,
  setEggGroups,
};
