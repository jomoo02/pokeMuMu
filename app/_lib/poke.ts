import type { CardPoke } from '../models/poke.type';

export function fetchPoke() {
  const poke: CardPoke = {
    sprite: '0001',
    name: {
      en: 'Bulbasaur',
      ko: '이상해씨',
    },
    types: ['grass', 'poison'],
    form: '기본 모습',
    pokeKey: 'bulbasaur',
    no: 1,
    order: 1,
    pokedexNumbers: [
      {
        entryNumber: 1,
        pokedex: 'national',
      },
      {
        entryNumber: 1,
        pokedex: 'kanto',
      },
      {
        entryNumber: 226,
        pokedex: 'original-johto',
      },
      {
        entryNumber: 231,
        pokedex: 'updated-johto',
      },
      {
        entryNumber: 80,
        pokedex: 'kalos-central',
      },
      {
        entryNumber: 1,
        pokedex: 'letsgo-kanto',
      },
      {
        entryNumber: 68,
        pokedex: 'isle-of-armor',
      },
      {
        entryNumber: 164,
        pokedex: 'blueberry',
      },
    ],
  };

  return poke;
}
