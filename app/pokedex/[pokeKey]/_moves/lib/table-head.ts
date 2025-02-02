import type {
  MachineType,
  MoveMethod,
} from '@/app/models/pokev4.type';
import {
  defaultHeadItemList,
  levelHeadItem,
  prePokeHeadItem,
  getMachineHeadItem,
  type TableHeadItem,
} from '../data/table-head';

export function getTableHeadItemList(method: MoveMethod): TableHeadItem[] {
  if (method === 'level-up') {
    return [
      { ...levelHeadItem },
      ...defaultHeadItemList,
    ];
  } if (method === 'pre') {
    return [
      { ...prePokeHeadItem },
      ...defaultHeadItemList,
    ];
  }
  if (['hm', 'tm', 'tr'].includes(method)) {
    const headItem = getMachineHeadItem(method as MachineType);

    return [
      { ...headItem },
      ...defaultHeadItemList,
    ];
  }

  return [...defaultHeadItemList];
}
