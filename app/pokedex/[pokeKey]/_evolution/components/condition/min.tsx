import React from 'react';
import type { ConditionValue } from '@/app/models/evolution.type';

interface MinProps {
  value: ConditionValue;
}

function Affection({
  value,
}: MinProps) {
  const content = `절친도 ${value}단계 이상일 때`;

  return <span>{content}</span>;
}

function Beauty({
  value,
}: MinProps) {
  const content = `아름다움 수치 MAX(${value}) 상태에서`;

  return <span>{content}</span>;
}

function Happiness({
  value,
}: MinProps) {
  if (value && typeof value === 'number' && value > 100) {
    return <span>친밀도가 높은 상태에서</span>;
  }

  return null;
}

function Level({
  value,
}: MinProps) {
  const content = `Level ${value}`;

  return <span>{content}</span>;
}

const ConditionMin = {
  Affection,
  Beauty,
  Happiness,
  Level,
};

export default ConditionMin;
