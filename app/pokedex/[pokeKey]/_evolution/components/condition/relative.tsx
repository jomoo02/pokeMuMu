import React from 'react';
import type { ConditionValue } from '@/app/models/evolution.type';

interface RelativeProps {
  value: ConditionValue;
}

function Nature({
  value,
}: RelativeProps) {
  if (typeof value === 'string' && (value === 'amped' || value === 'lowKey')) {
    const natureMap = {
      amped: '노력, 고집, 개구쟁이, 용감, 온순, 장난꾸러기, 촐랑, 덜렁, 변덕, 건방, 성급, 명랑, 천진난만',
      lowKey: '외로움, 대담, 무사태평, 조심, 의젓, 수줍음, 냉정, 차분, 얌전, 신중, 겁쟁이, 성실',
    };

    const natureList = natureMap[value];

    return (
      <span>
        성격에 따라
        (
        <span className="text-xs">{natureList}</span>
        )
      </span>
    );
  }

  return null;
}

function PhysicalStats({
  value,
}: RelativeProps) {
  if (typeof value === 'number') {
    const content = (() => {
      if (value === 1) return '공격 > 방어';
      if (value === -1) return '공격 < 방어';
      return '공격 = 방어';
    })();

    return <span>{content}</span>;
  }

  return null;
}

const ConditionRelative = {
  Nature,
  PhysicalStats,
};

export default ConditionRelative;
