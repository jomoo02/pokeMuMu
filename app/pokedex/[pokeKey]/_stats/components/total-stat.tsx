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
    <div className="grid grid-cols-5 py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center h-[30px] rounded-b-lg">
      <div className="text-[13px] xs:text-sm lg:text-[15px] leading-4 text-right pr-0.5 sm:pr-1.5 font-medium text-slate-800">
        합계
      </div>
      <div className="col-span-3 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 text-center text-[13px] xs:text-sm lg:text-[15px] font-medium text-slate-800">
          {totalStatValue}
        </div>
      </div>
    </div>
  );
}
