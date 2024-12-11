import React from 'react';
import type { ConditionValue } from '@/app/models/evolution.type';

interface GenderProps {
  value: ConditionValue;
}

const GENDER_TEXT_MAP: Record<1 | 2, string> = {
  1: '암컷',
  2: '수컷',
};

function Gender({
  value,
}: GenderProps) {
  if (typeof value !== 'number' || (value !== 1 && value !== 2)) {
    return null;
  }

  const content = GENDER_TEXT_MAP[value];

  return <span>{content}</span>;
}

const ConditionGender = {
  Gender,
};

export default ConditionGender;
