import React from 'react';
import { NavPoke } from '@/app/models/pokev4.type';
import NavButton from './components/nav-button';

interface PokeNavigationProps {
  before: NavPoke | null;
  next: NavPoke | null;
}

export default function PokeNavigation({
  before,
  next,
}: PokeNavigationProps) {
  return (
    <nav className="grid gap-y-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-0">
      {before && (
        <NavButton.Before
          poke={before}
        />
      )}
      <div className="lg:col-start-3 xl:col-start-3">
        {next && (
          <NavButton.Next
            poke={next}
          />
        )}
      </div>
    </nav>
  );
}
