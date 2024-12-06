import type { Move } from '@/app/models/detail.type';
import type { CellKey } from '../data/cell-key';

const compareFunctionList: Record<CellKey, (a: Move, b: Move) => number> = {
  level: (a, b) => (a.level ?? -1) - (b.level ?? -1),
  type: (a, b) => a.type.localeCompare(b.type),
  damageClass: (a, b) => a.damage_class.localeCompare(b.damage_class),
  name: (a, b) => a.name.ko.localeCompare(b.name.ko),
  machine: (a, b) => (a.machine?.number ?? -1) - (b.machine?.number ?? -1),
  prePoke: (a, b) => {
    const aSumIds = (a.preIds ?? []).reduce((acc, cur) => acc + Number(cur), 0);
    const bSumIds = (b.preIds ?? []).reduce((acc, cur) => acc + Number(cur), 0);
    return aSumIds - bSumIds;
  },
  power: (a, b) => (a.power ?? -1) - (b.power ?? -1),
  accuracy: (a, b) => (a.accuracy ?? -1) - (b.accuracy ?? -1),
};

function sortMethodMoveByCellKey(moveList: Move[], cellKey: CellKey, isAsc: boolean) {
  const compareFunction = compareFunctionList[cellKey];

  const sortedMoves = [...moveList].sort(compareFunction);

  return isAsc ? sortedMoves : sortedMoves.reverse();
}

export {
  sortMethodMoveByCellKey,
};
