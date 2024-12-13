import React from 'react';
import {
  TIME_OF_DAY,
  type TimeOfDay,
} from '@/app/data/time-of-day';
import type { ConditionValue } from '@/app/models/evolution.type';

interface TimeOfDayProps {
  value: ConditionValue;
}

const isTimeOfDay = (v: string): v is TimeOfDay => v in TIME_OF_DAY;

function Time({
  value,
}: TimeOfDayProps) {
  if (typeof value === 'string' && isTimeOfDay(value)) {
    const content = TIME_OF_DAY[value];

    return <span>{content}</span>;
  }

  return null;
}

const ConditionTimeOfDay = {
  TimeOfDay: Time,
};

export default ConditionTimeOfDay;
