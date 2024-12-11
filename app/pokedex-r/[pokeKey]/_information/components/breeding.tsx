import React, { Fragment } from 'react';
import type { Breeding } from '@/app/models/poke.type';
import InfoItem from './info-item';
import InfoTitle from './info-title';
import {
  setEggGroups,
  getGenderInfo,
  checkGenderless,
} from '../utils/breeding';

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
    <div className="text-slate-600 text-sm sm:text-[15px] font-semibold capitalize">
      <span className="text-blue-500">
        {`수컷: ${maleValue}`}
      </span>
      {', '}
      <span className="text-pink-500">
        {`암컷: ${femaleValue}`}
      </span>
    </div>
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
        <div>
          {eggGroups.map((eggGroup, index) => (
            <Fragment key={eggGroup}>
              {index > 0 && (
                <span className="mr-1">,</span>
              )}
              <span>{eggGroup}</span>
            </Fragment>
          ))}
        </div>
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
