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
      className="flex border-2 rounded-lg items-center h-14 md:h-16"
      prefetch
    >
      <div className="flex justify-center items-center h-full border-r px-4">
        <ArrowLeftIcon />
      </div>
      <div className="flex-1">
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
      className="flex flex-row-reverse border-2 rounded-lg items-center h-14 md:h-16"
      prefetch
    >
      <div className="flex justify-center items-center h-full border-l px-4">
        <ArrowRightIcon />
      </div>
      <div className="flex-1">
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
