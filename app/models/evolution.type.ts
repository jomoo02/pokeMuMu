import type { EvolutionMove } from '../data/evolution-move';
import type { EvolutionItem } from '../data/evolution-item';
import type { PokeType } from '../data/poke-type';
import type {
  PartySpeciesPoke,
  TradeSpeciesPoke,
} from '../data/evolution-poke';
import type { TimeOfDay } from '../data/time-of-day';
import type { Region } from '../data/region';
import type { Area } from '../data/area';

export type TriggerKey =
  'level-up'
  | 'use-item'
  | 'trade'
  | 'other';

export type OtherPoke =
  'sirfetchD'
  | 'shedinja'
  | 'runerigus'
  | 'kingambit'
  | 'urshifu_single'
  | 'urshifu_rapid'
  | 'lets_go'
  | 'maushold'
  | 'palafin'
  | 'gholdengo';

export type ConditionKey =
  'other'
  | 'spin'
  | 'recoil_damage'
  | 'turn_upside_down'
  | 'needs_overworld_rain'
  | 'gender'
  | 'item'
  | 'held_item'
  | 'agile_style'
  | 'strong_style'
  | 'known_move'
  | 'known_move_type'
  | 'use_move'
  | 'min_affection'
  | 'min_beauty'
  | 'min_happiness'
  | 'min_level'
  | 'trade_species'
  | 'relative_nature'
  | 'relative_physical_stats'
  | 'party_species'
  | 'party_type'
  | 'time_of_day'
  | 'location'
  | 'area';

export type ConditionValueMap = {
  other: OtherPoke;
  spin: string;
  turn_upside_down: boolean;
  gender: 1 | 2;
  item: EvolutionItem;
  held_item: EvolutionItem;
  location: Region;
  area: Area;
  min_affection: number;
  min_beauty: number;
  min_happiness: number;
  min_level: number;
  known_move_type: PokeType;
  known_move: EvolutionMove;
  agile_style: EvolutionMove;
  strong_style: EvolutionMove;
  use_move: EvolutionMove;
  needs_overworld_rain: boolean;
  party_type: PokeType;
  party_species: PartySpeciesPoke;
  recoil_damage: number;
  relative_nature: 'amped' | 'lowKey';
  relative_physical_stats: number;
  time_of_day: TimeOfDay;
  trade_species: TradeSpeciesPoke;
};

// export type ConditionItem<C extends ConditionKey> = {
//   key: C;
//   value: ConditionValueMap[C];
// };

export type ConditionValue = number | string | boolean;

export type ConditionItem = {
  key: ConditionKey;
  value: ConditionValue;
};

export type Detail = {
  trigger: TriggerKey;
  condition: ConditionItem[];
};

export type ChainItem = {
  pokeKey: string;
  id: string;
  detail: Detail[] | [];
  from: string;
  name: {
    en: string;
    ko: string;
  };
  to: ChainItem[] | [];
};

export type Evolution = {
  maxWidth: number;
  maxDepth: number;
  pokeKeyList: string[];
  chain: ChainItem[];
  id: number;
};
