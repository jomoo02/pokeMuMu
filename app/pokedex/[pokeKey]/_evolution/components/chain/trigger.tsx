import React from 'react';
import type {
  ConditionItem,
  ConditionKey,
  TriggerKey,
} from '@/app/models/evolution.type';
import { getTriggerContent } from '../../lib/trigger';

interface TriggerProps<C extends ConditionKey> {
  trigger: TriggerKey;
  conditionList: ConditionItem<C>[];
}

export default function Trigger<C extends ConditionKey>({
  trigger,
  conditionList,
}: TriggerProps<C>) {
  const triggerContent = getTriggerContent(trigger, conditionList);

  if (!triggerContent) {
    return null;
  }

  return <span className="text-nowrap">{triggerContent}</span>;
}
