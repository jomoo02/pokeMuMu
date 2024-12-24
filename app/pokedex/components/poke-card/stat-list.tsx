import React from 'react';

interface StatListProps {
  stats: {
    stat: string;
    value: number;
  }[];
}

export default function StatList({
  stats,
}: StatListProps) {
  const total = stats.reduce((acc, { value }) => acc + value, 0);

  return (
    <>
      <div className="w-20 xl:w-24 px-3 font-bold text-slate-800 flex justify-end">
        {total}
      </div>
      {stats.map(({ stat, value }) => (
        <div key={stat} className="w-20 xl:w-24 px-3 font-semibold text-slate-700/90 hidden lg:flex justify-end">
          {value}
        </div>
      ))}
    </>
  );
}
