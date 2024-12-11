import type { PokeType } from '../data/poke-type';
import type { DamageClass } from '../data/damage-class';
import type { Version } from '../data/version';
import type { Pokedex } from '../data/pokedex';
import type { Stat } from '../data/stat';
import type { EggGroup } from '../data/egg-group';
import type { GrowthRate } from '../data/growth-rate';

export type PokedexNumber = {
  pokedex: Pokedex;
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
  genera: string;
  height: number;
  weight: number;
  captureRate: number;
  growthRate: GrowthRate;
  effortStats: [];
};

export type MachineType = 'tm' | 'hm' | 'tr';

export type Move = {
  id: number;
  accuracy: number;
  power: number | null;
  damage_class: DamageClass;
  type: PokeType;
  name: {
    en: string;
    ko: string;
  };
  level: number;
  machine?: {
    id: number;
    type: MachineType;
    number: number;
  };
  preIds?: number[];
};

export type MoveMethod =
  'level-up'
  | 'pre'
  | 'egg'
  | 'tutor'
  | 'reminder'
  | 'tm'
  | 'hm'
  | 'tr';

export type VersionMove = {
  [K in MoveMethod]: Move[] | [];
};

export type GenMoves = {
  version: Version;
  versionMoves: VersionMove;
}[];

export type Moves = {
  gen: number;
  genMoves: GenMoves;
}[];

export type NavPoke = {
  speciesName: {
    en: string;
    ko: string;
  };
  pokeKey: string;
  no: number;
};

export type PokedexPoke = NavPoke & {
  sprite: string;
  types: PokeType[];
  form: string;
  order: number;
  stats: StatItem[];
  name: {
    en: string;
    ko: string;
  };
};

export type Poke = PokedexPoke & {
  abilities: Ability[];
  breeding: Breeding;
  detail: Detail;
  id: number;
  pokedexNumbers: PokedexNumber[];
  forms: {
    name: {
      en: string;
      ko: string;
    };
    id: string;
  }[];
  moves: Moves;
  label: string;
};
