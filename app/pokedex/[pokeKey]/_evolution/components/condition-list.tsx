import React, { Fragment } from 'react';
import type { ConditionItem } from '@/app/models/evolution.type';
import Condition from './condition';
import { sortConditionList } from '../lib/condition-list';

interface ConditionListProps {
  conditionList: ConditionItem[];
}

export default function ConditionList({
  conditionList,
}: ConditionListProps) {
  const sortedConditionList = sortConditionList(conditionList);

  return (
    <>
      {sortedConditionList.map(({ key, value }, index) => (
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
