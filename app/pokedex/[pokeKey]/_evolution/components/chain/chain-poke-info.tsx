import React, { Fragment } from 'react';
import type { Detail } from '@/app/models/evolution.type';
import EvolutionArrowIcon from '@/app/components/icon/evolution-arrow';
import {
  useChainMaxWidth,
  useChainMaxDepth,
} from './chain.context';
import ConditionList from '../condition-list';
import Trigger from './trigger';

interface ChainPokeDetailProps {
  detail: Detail[];
}

export default function ChainPokeDetail({
  detail,
}: ChainPokeDetailProps) {
  const maxWidth = useChainMaxWidth();
  const maxDepth = useChainMaxDepth();

  const width = (() => {
    if (maxWidth === 8) {
      return 'w-full';
    } if (maxWidth === 4) {
      return 'w-full md:w-80';
    } if (maxDepth === 2) {
      return 'w-full md:max-w-52 md:w-80 md:max-w-80 lg:w-96 lg:max-w-96';
    }
    return 'w-full md:max-w-52 md:w-40 lg:w-52 xl:max-w-72 xl:w-72';
  })();

  const height = (() => {
    if (maxWidth === 8) {
      return 'min-h-40 md:min-h-36';
    }
    return 'min-h-24 md:min-h-28';
  })();

  if (detail.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center justify-center px-5 sm:px-1.5 lg:px-4 ${width} ${height}`}>
      <div className="text-xs lg:text-sm text-center break-words space-x-1 w-full xl:px-4">
        {detail.map(({ trigger, condition }, index) => (
          <Fragment key={`${trigger}-${condition.map(({ key, value }) => `${key}-${value}`).join('/')}`}>
            {index > 0 && <div>or</div>}
            <ConditionList conditionList={condition} />
            <Trigger trigger={trigger} conditionList={condition} />
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-2 md:mt-0.5">
        <EvolutionArrowIcon maxWidth={maxWidth} />
      </div>
    </div>
  );
}
