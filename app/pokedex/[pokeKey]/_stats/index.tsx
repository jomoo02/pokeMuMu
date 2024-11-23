import React from 'react';
import { StatItem } from '@/app/models/poke.type';
import { PokeType } from '@/app/data/poke-type';
import StatList from './components/stat-list';
import Header from '../components/header';

interface PokeStatsProps {
  stats: StatItem[];
  type: PokeType;
}

export default function PokeStats({
  stats,
  type,
}: PokeStatsProps) {
  return (
    <div>
      <Header text="스탯" type={type} />
      <div className={`grid border-2 border-t-0 ${type}-border divide-y rounded-b-sm`}>
        <StatList
          statItemList={stats}
        />
      </div>
    </div>
  );
}
