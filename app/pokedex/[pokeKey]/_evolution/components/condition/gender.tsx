import React from 'react';

interface GenderProps {
  value: 1 | 2;
}

function Gender({
  value,
}: GenderProps) {
  const genderTextMap = {
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
