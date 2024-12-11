import React from 'react';
import type { StatItem } from '@/app/models/poke.type';

interface PokeCardStatsProps {
  stats: StatItem[];
}

export default function PokeCardStats({
  stats,
}: PokeCardStatsProps) {
  const total = stats.reduce((acc, { value }) => acc + value, 0);

  return (
    <>
      <div className="w-card-stat font-bold text-slate-800 flex justify-end">{total}</div>
      {stats.map(({ stat, value }) => (
        <div key={stat} className="w-card-stat font-semibold text-slate-700/90 hidden lg:flex justify-end">
          {value}
        </div>
      ))}
    </>
  );
}
