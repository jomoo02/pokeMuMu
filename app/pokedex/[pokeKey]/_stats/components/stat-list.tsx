'use client';

import React from 'react';
import type { StatItem } from '@/app/models/poke.type';
import StatRow from './stat-row';

interface StatsProps {
  statItemList: StatItem[];
}

export default function StatList({
  statItemList,
}: StatsProps) {
  const maxStatValue = Math.max(...statItemList.map(({ value }) => value));

  return (
    <>
      {statItemList.map((statItem) => (
        <StatRow.Basic
          key={statItem.stat}
          statItem={statItem}
          maxStatValue={maxStatValue}
        />
      ))}
      <StatRow.Total statItems={statItemList} />
    </>
  );
}
