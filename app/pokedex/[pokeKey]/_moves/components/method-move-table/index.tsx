'use client';

import React from 'react';
import type { Move, MoveMethod } from '@/app/models/pokev4.type';
import TableHead from './table-head';
import {
  getTableHeadItemList,
} from '../../lib/table-head';
import TableRow from './table-row';
import useMethodMoveTable from '../../hooks/useMethodMoveTable';
import TableTitle from './table-title';

interface MethodMoveTableProps {
  methodMoveList: Move[];
  moveMethod: MoveMethod
}

export default function MethodMoveTable({
  methodMoveList,
  moveMethod,
}: MethodMoveTableProps) {
  const {
    moveList,
    targetCellKey,
    isAsc,
    handleSortOrder,
  } = useMethodMoveTable(methodMoveList, moveMethod);

  if (methodMoveList.length === 0) {
    return null;
  }

  const tableHeadItemList = getTableHeadItemList(moveMethod);

  return (
    <div className="py-0.5 my-4 sm:my-3 lg:my-4 lg:mb-10 overflow-x-hidden">
      <TableTitle moveMethod={moveMethod} />
      <div className="overflow-auto">
        <table className="border border-slate-300 table-fixed">
          <TableHead
            headItemList={tableHeadItemList}
            targetCellKey={targetCellKey}
            isAsc={isAsc}
            handleSortOrder={handleSortOrder}
          />
          <tbody>
            {moveList.map((move) => (
              <TableRow key={move.id} move={move} moveMethod={moveMethod} />
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
