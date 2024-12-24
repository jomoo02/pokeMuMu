import React from 'react';
import CaretIcon from '@/app/components/icon/caret';
import type { TableHeadItem } from '../../data/table-head';
import { CellKey } from '../../data/cell-key';

interface TableHeadProps {
  headItemList: TableHeadItem[];
  targetCellKey: CellKey;
  handleSortOrder: (id: CellKey) => void;
  isAsc: boolean;
}

export default function TableHead({
  headItemList,
  targetCellKey,
  handleSortOrder,
  isAsc,
}: TableHeadProps) {
  const handleTableHeadItemClick = (id: CellKey) => {
    handleSortOrder(id);
  };

  return (
    <thead>
      <tr className="text-nowrap">
        {headItemList.map(({
          className,
          id,
          content,
        }) => (
          <th
            key={id}
            className={`${className} font-bold h-[2.4rem] border p-0 border-slate-400`}
          >
            <button
              type="button"
              className={
                `flex w-full h-full items-center justify-between px-1.5 ${id === targetCellKey ? 'bg-blue-100' : 'bg-slate-100'}`
              }
              onClick={() => handleTableHeadItemClick(id)}
            >
              {content}
              <CaretIcon
                isSelect={id === targetCellKey}
                isAsc={isAsc}
              />
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}
