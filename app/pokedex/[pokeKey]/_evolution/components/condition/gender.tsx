import React from 'react';

interface GenderProps {
  value: string | number | boolean;
}

function Gender({
  value,
}: GenderProps) {
  if (typeof value !== 'number' || (value !== 1 && value !== 2)) {
    return null;
  }

  const genderTextMap: Record<1 | 2, string> = {
    1: '암컷',
    2: '수컷',
  };

  const content = genderTextMap[value];

  return <span>{content}</span>;
}

const ConditionGender = {
  Gender,
};

export default ConditionGender;
