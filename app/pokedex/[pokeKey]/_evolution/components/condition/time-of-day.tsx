import React from 'react';
import {
  TIME_OF_DAY,
  type TimeOfDay,
} from '@/app/data/time-of-day';

interface TimeOfDayProps {
  value: TimeOfDay;
}

function Time({
  value,
}: TimeOfDayProps) {
  const content = TIME_OF_DAY[value];

  return <span>{content}</span>;
}

const ConditionTimeOfDay = {
  TimeOfDay: Time,
};

export default ConditionTimeOfDay;
