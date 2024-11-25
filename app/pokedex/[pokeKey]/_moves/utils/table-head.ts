import type { MachineType } from '@/app/models/detail.type';
import {
  type MoveMethod,
} from '../config/move-method';
import {
  defaultHeadItemList,
  levelHeadItem,
  prePokeHeadItem,
  getMachineHeadItem,
  type TableHeadItem,
} from '../config/table-head';

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
      headItem,
      ...defaultHeadItemList,
    ];
  }

  return [...defaultHeadItemList];
}
