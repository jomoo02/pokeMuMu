import React from 'react';
import { fetchPokeEvolutionAll } from '../api/evolution';
import PokeEvolution from '../_evolution';

export default async function Page() {
  const all = await fetchPokeEvolutionAll();

  return (
    <div className="grid gap-y-2">
      {all?.map((a) => (
        <div key={a.id}>
          {a.id}
          <PokeEvolution evolution={a} />
        </div>
      ))}
    </div>
  );
}
