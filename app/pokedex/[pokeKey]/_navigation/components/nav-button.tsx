import React from 'react';
import Link from 'next/link';
import type { NavPoke } from '@/app/models/pokev4.type';
import ArrowLeftIcon from '@/app/components/icon/arrow-left';
import ArrowRightIcon from '@/app/components/icon/arrow-right';
import NavButtonInfo from './nav-button-info';

interface NavButtonProps {
  poke: NavPoke;
}

function Before({
  poke,
}: NavButtonProps) {
  const { pokeKey } = poke;
  return (
    <Link
      href={`/pokedex/${pokeKey}`}
      className="flex border-2 rounded-lg h-[52px] md:h-14 lg:h-16 border-slate-500 bg-white hover:bg-slate-100"
      prefetch
    >
      <div className="flex justify-center items-center border-r-2 border-slate-500 px-3 sm:px-4">
        <ArrowLeftIcon />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <NavButtonInfo poke={poke} />
      </div>
    </Link>
  );
}

function Next({
  poke,
}: NavButtonProps) {
  const { pokeKey } = poke;

  return (
    <Link
      href={`/pokedex/${pokeKey}`}
      className="flex flex-row-reverse border-2 rounded-lg h-[52px] md:h-14 lg:h-16 border-slate-500 bg-white hover:bg-slate-100"
      prefetch
    >
      <div className="flex justify-center items-center border-l-2 border-slate-500 px-3 sm:px-4">
        <ArrowRightIcon />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <NavButtonInfo poke={poke} />
      </div>
    </Link>
  );
}

const NavButton = {
  Before,
  Next,
};

export default NavButton;
