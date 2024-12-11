import React from 'react';
import type { ConditionKey, ConditionValue } from '@/app/models/evolution.type';
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

const conditionKeyMap = {
  other: ConditionOther.Other,
  spin: ConditionOther.Spin,
  recoil_damage: ConditionOther.RecoilDamage,
  turn_upside_down: ConditionOther.TurnUpsideDown,
  gender: ConditionGender.Gender,
  item: ConditionItem.UseItem,
  held_item: ConditionItem.HeldItem,
  location: ConditionLocation.Region,
  area: ConditionLocation.Area,
  min_affection: ConditionMin.Affection,
  min_beauty: ConditionMin.Beauty,
  min_happiness: ConditionMin.Happiness,
  min_level: ConditionMin.Level,
  known_move_type: ConditionMove.KnownMoveType,
  known_move: ConditionMove.KnownMove,
  agile_style: ConditionMove.AgileStyle,
  strong_style: ConditionMove.StrongStyle,
  use_move: ConditionMove.UsedMove,
  needs_overworld_rain: ConditionRain.NeedsOverworldRain,
  party_type: ConditionParty.Type,
  party_species: ConditionParty.Species,
  relative_nature: ConditionRelative.Nature,
  relative_physical_stats: ConditionRelative.PhysicalStats,
  time_of_day: ConditionTimeOfDay.TimeOfDay,
  trade_species: ConditionTrade.Species,
};

interface ConditionProps {
  conditionKey: ConditionKey;
  value: ConditionValue;
}

export default function Condition({
  conditionKey,
  value,
}: ConditionProps) {
  const Component = conditionKeyMap[conditionKey];

  if (!Component) {
    return null;
  }

  return <Component value={value} />;
}
