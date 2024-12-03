import React from 'react';
import CaretIcon from '@/app/components/icon/caret';
import type { TableHeadItem } from '../../config/table-head';
import { CellKey } from '../../config/cell-key';

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
      <tr className="text-sm md:text-base font-medium text-nowrap">
        {headItemList.map(({
          className,
          id,
          content,
        }) => (
          <th
            key={id}
            className={`${className} h-[2.4rem] border p-0 border-slate-300`}
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