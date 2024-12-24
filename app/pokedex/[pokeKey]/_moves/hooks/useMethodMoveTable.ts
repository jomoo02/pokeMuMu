import { useState } from 'react';
import type { Move, MoveMethod } from '@/app/models/pokev4.type';
import type { CellKey } from '../data/cell-key';
import { sortMethodMoveByCellKey } from '../lib/method-move-table';

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

export default function useMethodMoveTable(methodMoveList: Move[], method: MoveMethod) {
  const initialKey = setInitialCellKeyWithMethod(method);

  const [sortOrder, setSortOrder] = useState({
    targetCellKey: initialKey,
    asc: true,
  });

  const moveList = sortMethodMoveByCellKey(
    methodMoveList,
    sortOrder.targetCellKey,
    sortOrder.asc,
  );

  const handleSortOrder = (cellKey: CellKey) => {
    const isAsc = sortOrder.targetCellKey === cellKey ? !sortOrder.asc : false;
    setSortOrder({ targetCellKey: cellKey, asc: isAsc });
  };

  return {
    moveList,
    handleSortOrder,
    targetCellKey: sortOrder.targetCellKey,
    isAsc: sortOrder.asc,
  };
}
