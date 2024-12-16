import React from 'react';
import type { StatItem } from '@/app/models/pokev4.type';
import { calculateTotalStatValue } from '../lib/stat';

interface TotalStatProps {
  statItemList: StatItem[];
}

export default function TotalStat({
  statItemList,
}: TotalStatProps) {
  const totalStatValue = calculateTotalStatValue(statItemList);

  return (
    <div className="grid grid-cols-5 py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center h-[30px]">
      <div className="text-[13px] leading-5 sm:text-sm text-right pr-0.5 sm:pr-1.5 capitalize">
        합계
      </div>
      <div className="col-span-3 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 text-center text-[13px] leading-5 sm:text-sm $font-semibold">
          {totalStatValue}
        </div>
      </div>
    </div>
  );
}