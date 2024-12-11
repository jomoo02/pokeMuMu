import React from 'react';

export default function PokedexHeader() {
  const headerStatItems = [
    '체력',
    '공격',
    '방어',
    '특수공격',
    '특수방어',
    '스피드',
  ];

  return (
    <div className="w-full sm:w-[420px] md:w-[520px] lg:w-[920px] xl:w-[1100px] text-sm sticky flex h-10 items-stretch top-0 md:top-0 bg-slate-200 border-y border-sky-900 divide-sky-900 z-50 divide-x font-bold text-slate-700">
      <div className="min-w-[4rem] w-[4rem] xl:min-w-[4.5rem] xl:w-[4.5rem] px-2.5 flex items-center justify-center">
        #
      </div>
      <div className="grow px-2 flex items-center">
        이름
      </div>
      <div className="min-w-24 w-24 px-2 flex items-center justify-center">
        타입
      </div>
      <div className="w-20 xl:w-24 px-3 hidden md:flex items-center justify-center">
        종족값
      </div>
      {headerStatItems.map((item) => (
        <div key={item} className="w-20 xl:w-24 px-3 hidden lg:flex items-center justify-center">
          {item}
        </div>
      ))}
    </div>
  );
}
