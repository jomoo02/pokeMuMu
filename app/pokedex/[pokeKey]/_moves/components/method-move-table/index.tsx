'use client';

import React from 'react';
import type { Move, MoveMethod } from '@/app/models/detail.type';
import MethodMoveTableHead from './method-move-table-head';
import {
  getTableHeadItemList,
} from '../../utils/table-head';
import TableRow from './table-row';
import useMethodMoveTable from '../../hooks/useMethodMoveTable';
import Title from './title';
import { sortMethodMoveByCellKey } from '../../utils/method-move';

interface MethodMoveTableProps {
  methodMoveList: Move[];
  moveMethod: MoveMethod
}

export default function MethodMoveTable({
  methodMoveList,
  moveMethod,
}: MethodMoveTableProps) {
  const {
    targetCellKey,
    isAsc,
    handleSortOrder,
  } = useMethodMoveTable(moveMethod);

  if (methodMoveList.length === 0) {
    return null;
  }

  const tableHeadItemList = getTableHeadItemList(moveMethod);

  const sortedMoveList = sortMethodMoveByCellKey(methodMoveList, targetCellKey, isAsc);

  return (
    <div className="py-0.5 my-4 sm:my-3 lg:my-4 overflow-x-hidden">
      <Title moveMethod={moveMethod} />
      <div className="overflow-auto">
        <table className="border border-slate-300 w-[580px] table-fixed ">
          <MethodMoveTableHead
            headItemList={tableHeadItemList}
            targetCellKey={targetCellKey}
            isAsc={isAsc}
            handleSortOrder={handleSortOrder}
          />
          <tbody>
            {sortedMoveList.map((move) => (
              <TableRow key={move.id} move={move} moveMethod={moveMethod} />
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
