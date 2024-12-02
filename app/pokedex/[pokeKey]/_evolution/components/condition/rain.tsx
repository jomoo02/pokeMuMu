import React from 'react';

interface RainProps {
  value: boolean;
}

function NeedsOverworldRain({
  value,
}: RainProps) {
  if (!value) {
    return null;
  }

  const content = '비가 오는 필드';

  return <span>{content}</span>;
}

const ConditionRain = {
  NeedsOverworldRain,
};

export default ConditionRain;
