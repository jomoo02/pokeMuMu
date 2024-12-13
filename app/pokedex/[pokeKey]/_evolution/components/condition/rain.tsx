import React from 'react';
import type { ConditionValue } from '@/app/models/evolution.type';

interface RainProps {
  value: ConditionValue;
}

function NeedsOverworldRain({
  value,
}: RainProps) {
  if (typeof value === 'boolean' && value) {
    const content = '비가 오는 필드';

    return <span>{content}</span>;
  }

  return null;
}

const ConditionRain = {
  NeedsOverworldRain,
};

export default ConditionRain;
