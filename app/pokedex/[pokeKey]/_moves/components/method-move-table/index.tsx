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
import Title from './title';

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
      <Title moveMethod={moveMethod} />
      <table className="border border-slate-300 ">
        <MethodMoveTableHead
          headItemList={tableHeadItemList}
          targetCellKey={targetCellKey}
          isAsc={isAsc}
          handleSortOrder={handleSortOrder}
        />
        <tbody>
          {targetMoveList.map((move) => (
            <TableRow key={`${move.level}-${move.name.ko}`} move={move} moveMethod={moveMethod} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
