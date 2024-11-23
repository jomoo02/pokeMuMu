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

export type MoveItem = {
  accuracy: number;
  power: number | null;
  damage_class: DamageClass;
  type: PokeType;
  name: Name;
};

export type MachineType = 'tm' | 'hm' | 'tr';

export type Move = {
  move: MoveItem;
  level?: number;
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

export type VersionMove = {
  'level-up': {
    level: number;
    move: MoveItem;
  }[] | [];
  machine: MachineMove[] | [];
  tutor: {
    move: MoveItem;
  }[] | [];
  egg: {
    move: MoveItem;
  }[] | [];
  pre: {
    move: MoveItem;
    level: number;
    preIds: number[];
  }[] | [];
  reminder: {
    move: MoveItem;
  }[] | [];
};

export type GenMove = {
  version: Version;
  versionMoves: VersionMove;
}[];

export type Moves = {
  gen: number;
  genMoves: GenMove;
}[];

export type Detail = {
  pokeKey: string;
  chainIndex: number;
  forms: Form[];
  speciesName: Name;
  moves: Moves;
};
