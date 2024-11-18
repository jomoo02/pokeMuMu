import type { PokeType } from '../data/poke-type';
import type { LocalPokedex } from '../data/local-pokedex';

export type PokedexNumber = {
  pokedex: LocalPokedex;
  entryNumber: number;
};

export type CardPoke = {
  pokeKey: string;
  sprite: string;
  name: {
    ko: string;
    en: string;
  };
  form: string;
  types: PokeType[];
  order: number;
  no: number;
  pokedexNumbers: PokedexNumber[];
};

export type SearchPoke = {
  name: {
    ko: string;
    en: string;
  };
  pokeKey: string;
  form: string;
  no: number;
  order: number;
  sprite: string;
  types: PokeType[];
};
