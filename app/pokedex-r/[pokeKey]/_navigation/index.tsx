import React from 'react';
import type { Poke } from '@/app/models/pokev4.type';
import type { PokeType } from '@/app/data/poke-type';
import NavButton from './components/nav-button';

interface PokeNavigationProps {
  before: Poke | null;
  next: Poke | null;
  type: PokeType;
}

export default function PokeNavigation({
  before,
  next,
  type,
}: PokeNavigationProps) {
  return (
    <nav className="grid gap-y-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 lg:gap-x-20 xl:gap-x-0">
      {before && (
        <NavButton.Before
          poke={before}
          type={type}
        />
      )}
      <div className="lg:col-start-2 xl:col-start-3">
        {next && (
          <NavButton.Next
            poke={next}
            type={type}
          />
        )}
      </div>
    </nav>
  );
}
