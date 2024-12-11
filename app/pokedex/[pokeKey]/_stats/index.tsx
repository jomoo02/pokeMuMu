import React from 'react';
import { StatItem } from '@/app/models/pokev4.type';
import BasicStat from './components/basic-stat';
import TotalStat from './components/total-stat';
import Header from '../components/header';
import { calculateMaxStatValue } from './lib/stat';

interface PokeStatsProps {
  stats: StatItem[];
}

export default function PokeStats({
  stats,
}: PokeStatsProps) {
  const maxStatValue = calculateMaxStatValue(stats);

  return (
    <div>
      <Header text="스탯" />
      <div className="grid border-2 border-t-0 divide-y rounded-b-sm">
        {stats.map((statItem) => (
          <BasicStat
            key={statItem.stat}
            statItem={statItem}
            maxStatValue={maxStatValue}
          />
        ))}
        <TotalStat statItemList={stats} />
      </div>
    </div>
  );
}
