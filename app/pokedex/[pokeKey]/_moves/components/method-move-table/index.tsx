'use client';

import React from 'react';
import type { Move } from '@/app/models/detail.type';
import MethodMoveTableHead from './method-move-table-head';
import {
  getTableHeadItemList,
} from '../../utils/table-head';
import TableRow from './table-row';
import useMethodMoveTable from '../../hooks/useMethodMoveTable';
import { MoveMethod } from '../../config/move-method';

interface MethodMoveTableProps {
  targetMoveList: Move[];
  moveMethod: MoveMethod
}

export default function MethodMoveTable({
  targetMoveList,
  moveMethod,
}: MethodMoveTableProps) {
  const {
    targetCellKey,
    isAsc,
    handleSortOrder,
  } = useMethodMoveTable(moveMethod);
  const tableHeadItemList = getTableHeadItemList(moveMethod);

  return (
    <div>
      <table className="border-separate border border-slate-400">
        <MethodMoveTableHead
          headItemList={tableHeadItemList}
          targetCellKey={targetCellKey}
          isAsc={isAsc}
          handleSortOrder={handleSortOrder}
        />
        <tbody>
          {targetMoveList.map((move) => (
            <TableRow key={`${move.level}-${move.move.name.ko}`} move={move} moveMethod={moveMethod} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
