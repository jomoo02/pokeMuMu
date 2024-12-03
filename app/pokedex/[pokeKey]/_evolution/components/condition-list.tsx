import React, { Fragment } from 'react';
import type { ConditionItem, ConditionKey } from '@/app/models/evolution.type';
import Condition from './condition';

interface ConditionListProps {
  conditionList: ConditionItem<ConditionKey>[];
}

export default function ConditionList({
  conditionList,
}: ConditionListProps) {
  return (
    <>
      {conditionList.map(({ key, value }, index) => (
        <Fragment key={key}>
          {index > 0 && <span>+</span>}
          <Condition
            conditionKey={key}
            value={value}
          />
        </Fragment>
      ))}
    </>
  );
}
