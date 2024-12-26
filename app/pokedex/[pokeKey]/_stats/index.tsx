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
      <Header text="능력치" />
      <div className="grid border-2 border-slate-500 divide-y divide-slate-300 rounded-lg bg-white">
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
