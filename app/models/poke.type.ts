import type { PokeType } from '../data/poke-type';
import type { LocalPokedex } from '../data/local-pokedex';
import type { EggGroup } from '../data/egg-group';
import type { Stat } from '../data/stat';
import type { GrowthRate } from '../data/growth-rate';

export type PokedexNumber = {
  pokedex: LocalPokedex;
  entryNumber: number;
};

export type StatItem = {
  stat: Stat,
  value: number;
};

export type Ability = {
  isHidden: boolean;
  name: string;
  flavorText: string;
};

export type Breeding = {
  eggGroups: EggGroup[];
  hatchCounter: number;
  genderRate: number;
};

export type Detail = {
  genera: {
    en: string;
    ko: string;
  }; // 수정 예정
  height: number;
  weight: number;
  captureRate: number;
  growthRate: GrowthRate;
  effortStats: StatItem[];
};

export type Poke = {
  sprite: string;
  name: {
    en: string;
    ko: string;
  };
  types: PokeType[];
  form: string;
  order: number;
  abilities: Ability[];
  breeding: Breeding;
  detail: Detail;
  pokeKey: string;
  no: number;
  id: number;
  stats: StatItem[];
  pokedexNumbers: PokedexNumber[];
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
