import React, { Fragment } from 'react';
import type { Breeding } from '@/app/models/pokev4.type';
import InfoItem from './info-item';
import InfoTitle from './info-title';
import {
  setEggGroups,
  getGenderInfo,
  checkGenderless,
} from '../lib/breeding';

interface BreedingProps {
  breeding: Breeding;
}

function Gender({ genderRate }: { genderRate: number }) {
  const isGenderless = checkGenderless(genderRate);

  if (isGenderless) {
    return <div>무성</div>;
  }

  const {
    maleValue,
    femaleValue,
  } = getGenderInfo(genderRate);

  return (
    <>
      <span className="text-blue-600">
        수컷
      </span>
      {' : '}
      <span className="text-blue-600">
        {maleValue}
      </span>
      {', '}
      <span className="text-pink-600">
        암컷
      </span>
      {' : '}
      <span className="text-pink-600">
        {femaleValue}
      </span>
    </>
  );
}

export default function InformationBreeding({
  breeding,
}: BreedingProps) {
  const eggGroups = setEggGroups(breeding.eggGroups);

  return (
    <div>
      <InfoTitle title="유전 정보" />
      <InfoItem subject="알 그룹">
        {eggGroups.map((eggGroup, index) => (
          <Fragment key={eggGroup}>
            {index > 0 && (
              <span className="mr-1">,</span>
            )}
            <span>{eggGroup}</span>
          </Fragment>
        ))}
      </InfoItem>
      <InfoItem subject="성비">
        <Gender genderRate={breeding.genderRate} />
      </InfoItem>
      <InfoItem
        subject="부화 카운트"
        content={breeding.hatchCounter || '—'}
      />
    </div>
  );
}
