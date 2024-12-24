export type TriggerKey =
  'level-up'
  | 'use-item'
  | 'trade'
  | 'other';

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
