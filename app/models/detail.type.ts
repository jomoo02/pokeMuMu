import type { PokeType } from '../data/poke-type';
import type { DamageClass } from '../data/damage-class';
import type { Version } from '../data/version';

export type Form = {
  name: {
    en: string;
    ko: string;
  };
  id: string;
};

export type Name = {
  en: string;
  ko: string;
};

export type MachineType = 'tm' | 'hm' | 'tr';

export type Move = {
  id: number;
  accuracy: number;
  power: number | null;
  damage_class: DamageClass;
  type: PokeType;
  name: Name;
  level: number;
  machine?: {
    id: number;
    type: MachineType;
    number: number;
  };
  preIds?: number[];
};

export type MachineMove = Omit<Move, 'machine'> & {
  machine: {
    id: number;
    type: MachineType;
    number: number;
  };
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

export type Detail = {
  pokeKey: string;
  chainIndex: number;
  forms: Form[];
  speciesName: Name;
  moves: Moves;
};
