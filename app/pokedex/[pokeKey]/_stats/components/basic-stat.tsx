import React from 'react';
import type { StatItem } from '@/app/models/pokev4.type';
import StatBar from './stat-bar';
import { getStatText } from '../lib/stat';

interface BasicStatProps {
  statItem: StatItem;
  maxStatValue: number;
}

export default function BasicStat({
  statItem,
  maxStatValue,
}: BasicStatProps) {
  const { stat, value } = statItem;
  const statText = getStatText(stat);

  return (
    <div className="grid grid-cols-5 py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center h-[30px] first:rounded-t-lg">
      <div className="text-[13px] xs:text-sm lg:text-[15px] leading-4 text-right pr-0.5 sm:pr-1.5 font-medium text-slate-800">
        {statText}
      </div>
      <div className="col-span-3 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className="min-w-9 max-w-9 text-center text-[13px] xs:text-sm lg:text-[15px] font-medium text-slate-800">
          {value}
        </div>
        <StatBar
          value={value}
          max={maxStatValue}
        />
      </div>
    </div>
  );
}
