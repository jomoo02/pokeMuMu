import React from 'react';
import type { StatItem } from '@/app/models/poke.type';
import StatRowBar from './stat-row-bar';
import {
  getStatText,
  getTotalStatValue,
} from '../utils/stat-row';

interface ContainerProps {
  statType: string;
  statValue: number;
  className?: string;
  children?: React.ReactNode;
}

interface BasicStatRowProps {
  statItem: StatItem,
  maxStatValue: number;
  className?: string;
}

interface TotalStatsRowProps {
  statItems: StatItem[];
}

function Container({
  statType,
  statValue,
  className,
  children,
}: ContainerProps) {
  return (
    <div className="grid grid-cols-5 py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center h-[30px]">
      <div className="text-[13px] leading-5 sm:text-sm text-right pr-0.5 sm:pr-1.5 capitalize">
        {statType}
      </div>
      <div className="col-span-3 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className={`min-w-9 max-w-9 text-center text-[13px] leading-5 sm:text-sm ${className}`}>
          {statValue}
        </div>
        {children}
      </div>
    </div>
  );
}

function BasicStatRow({
  statItem,
  maxStatValue,
  className,
}: BasicStatRowProps) {
  const {
    stat,
    value,
  } = statItem;

  const statType = getStatText(stat);

  return (
    <Container
      className={className}
      statType={statType}
      statValue={value}
    >
      <StatRowBar
        value={value}
        max={maxStatValue}
      />
    </Container>
  );
}

function TotalStatRow({
  statItems,
}: TotalStatsRowProps) {
  const totalStatValue = getTotalStatValue(statItems);

  return (
    <Container
      statType="합계"
      statValue={totalStatValue}
      className="font-semibold"
    />
  );
}

const StatRow = {
  Basic: BasicStatRow,
  Total: TotalStatRow,
};

export default StatRow;
