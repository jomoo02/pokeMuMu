import React from 'react';
import type {
  ConditionKey,
  ConditionValueMap,
} from '@/app/models/evolution.type';
import ConditionGender from './gender';
import ConditionItem from './item';
import ConditionLocation from './location';
import ConditionMin from './min';
import ConditionMove from './move';
import ConditionOther from './other';
import ConditionParty from './party';
import ConditionRain from './rain';
import ConditionRelative from './relative';
import ConditionTimeOfDay from './time-of-day';
import ConditionTrade from './trade';

const conditionKeyMap: {
  [K in ConditionKey]: React.ComponentType<{ value: ConditionValueMap[K] }>;
} = {
  other: ConditionOther.Other,
  spin: ConditionOther.Spin,
  recoil_damage: ConditionOther.RecoilDamage,
  turn_upside_down: ConditionOther.TurnUpsideDown,
  agile_style: ConditionMove.AgileStyle,
  strong_style: ConditionMove.StrongStyle,
  known_move: ConditionMove.KnownMove,
  known_move_type: ConditionMove.KnownMoveType,
  use_move: ConditionMove.UsedMove,

  gender: ConditionGender.Gender,
  item: ConditionItem.UseItem,
  held_item: ConditionItem.HeldItem,

  location: ConditionLocation.Region,
  area: ConditionLocation.Area,

  min_affection: ConditionMin.Affection,
  min_beauty: ConditionMin.Beauty,
  min_happiness: ConditionMin.Happiness,
  min_level: ConditionMin.Level,
  needs_overworld_rain: ConditionRain.NeedsOverworldRain,
  party_type: ConditionParty.Type,
  party_species: ConditionParty.Species,
  relative_nature: ConditionRelative.Nature,
  relative_physical_stats: ConditionRelative.PhysicalStats,
  time_of_day: ConditionTimeOfDay.TimeOfDay,
  trade_species: ConditionTrade.Species,
};

interface ConditionProps<C extends ConditionKey> {
  conditionKey: C;
  value: ConditionValueMap[C];
}

export default function Condition<C extends ConditionKey>({
  conditionKey,
  value,
}: ConditionProps<C>) {
  const Component = conditionKeyMap[conditionKey];

  // const Component: React.ComponentType<{ value: ConditionValueMap[C] }>
  // | undefined = conditionKeyMap[conditionKey];

  return Component ? <span className="text-balance"><Component value={value} /></span> : null;
}
