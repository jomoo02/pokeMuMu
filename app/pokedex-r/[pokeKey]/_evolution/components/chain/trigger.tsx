import React from 'react';
import type {
  ConditionItem,
  TriggerKey,
} from '@/app/models/evolution.type';
import { getTriggerContent } from '../../lib/trigger';

interface TriggerProps {
  trigger: TriggerKey;
  conditionList: ConditionItem[];
}

export default function Trigger({
  trigger,
  conditionList,
}: TriggerProps) {
  const triggerContent = getTriggerContent(trigger, conditionList);

  if (!triggerContent) {
    return null;
  }

  return <span className="text-nowrap">{triggerContent}</span>;
}
