import { useState } from 'react';
import type { MoveMethod } from '@/app/models/detail.type';
import type { CellKey } from '../config/cell-key';

function setInitialCellKeyWithMethod(method: MoveMethod): CellKey {
  const specialCase: Partial<Record<MoveMethod, CellKey>> = {
    pre: 'prePoke',
    hm: 'machine',
    tm: 'machine',
    tr: 'machine',
    'level-up': 'level',
  };

  const normal = 'name';

  if (specialCase[method]) {
    return specialCase[method];
  }
  return normal;
}

export default function useMethodMoveTable(method: MoveMethod) {
  const initialKey = setInitialCellKeyWithMethod(method);

  const [sortOrder, setSortOrder] = useState({
    targetCellKey: initialKey,
    asc: true,
  });

  const handleSortOrder = (cellKey: CellKey) => {
    const isAsc = sortOrder.targetCellKey === cellKey ? !sortOrder.asc : false;
    setSortOrder({ targetCellKey: cellKey, asc: isAsc });
  };

  return {
    handleSortOrder,
    targetCellKey: sortOrder.targetCellKey,
    isAsc: sortOrder.asc,
  };
}
