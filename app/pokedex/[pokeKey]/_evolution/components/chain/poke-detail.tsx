import React, { Fragment } from 'react';
import type { Detail } from '@/app/models/evolution.type';
import EvolutionArrowIcon from '@/app/components/icon/evolution-arrow';
import {
  useChainMaxWidth,
  useChainMaxDepth,
} from './chain.context';
import { getChainPokeDetail } from '../../lib/chain-poke-detail';
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

  const { width, height } = getChainPokeDetail(maxWidth, maxDepth);

  if (detail.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center justify-center px-5 sm:px-1.5 lg:px-4 ${width} ${height}`}>
      <div className="text-xs md:text-sm text-center break-words space-x-1 w-full xl:px-4">
        {detail.map(({ trigger, condition }, index) => (
          <Fragment key={`${trigger}-${condition.map(({ key, value }) => `${key}-${value}`).join('/')}`}>
            {index > 0 && <div>or</div>}
            <Trigger trigger={trigger} conditionList={condition} />
            <ConditionList conditionList={condition} />
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-2.5 md:mt-0.5 ">
        <EvolutionArrowIcon maxWidth={maxWidth} />
      </div>
    </div>
  );
}
