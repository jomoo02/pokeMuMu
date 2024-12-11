import React from 'react';

interface PokeAbilityProps {
  isHidden: boolean;
  name: string;
  flavorText: string;
}

export default function PokeAbility({
  isHidden,
  name,
  flavorText,
}: PokeAbilityProps) {
  return (
    <div className={`grid grid-cols-10 gap-x-1 min-h-12 ${isHidden ? 'bg-slate-100' : 'bg-white'}`}>
      <h3
        className="col-span-3 xl:col-span-2 border-r py-0.5 px-1 text-sm md:text-[15px] flex flex-col items-center justify-center"
      >
        {name}
        {isHidden && (
          <span className="text-xs md:text-sm text-center">
            (숨겨진 특성)
          </span>
        )}
      </h3>
      <p className="col-span-7 text-pretty text-sm md:text-[15px] p-2 md:px-3 flex items-center">
        {flavorText}
      </p>
    </div>
  );
}
