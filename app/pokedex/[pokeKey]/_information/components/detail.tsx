import React from 'react';
import type { Detail } from '@/app/models/pokev4.type';
import type { GrowthRate } from '@/app/data/growth-rate';
import InfoItem from './info-item';
import {
  formatMeasurement,
  getGrowthRateInfo,
  transformEffortStats,
} from '../lib/detail';
import InfoTitle from './info-title';

interface InforamtionDetailGrowthRateProps {
  growthRate: GrowthRate;
}

interface InformationDetailProps {
  detail: Detail;
}

function InforamtionDetailGrowthRate({
  growthRate,
}: InforamtionDetailGrowthRateProps) {
  const {
    growthRateText,
    expPointAt100,
    expPointAt50,
  } = getGrowthRateInfo(growthRate);

  const atLevel50Text = 'Lv.1 -> Lv.50';

  const atLevel100Text = 'Lv.1 -> Lv.100';

  return (
    <div className="grid gap-y-1">
      <div>{growthRateText}</div>
      <div>
        <span className="text-slate-500/90 text-xs lg:text-sm">
          {atLevel50Text}
        </span>
        {' : '}
        {expPointAt50}
      </div>
      <div>
        <span className="text-slate-500/90 text-xs lg:text-sm">
          {atLevel100Text}
        </span>
        {' : '}
        {expPointAt100}
      </div>
    </div>
  );
}

export default function InformationDetail({
  detail,
}: InformationDetailProps) {
  const height = formatMeasurement(detail.height);

  const weight = formatMeasurement(detail.weight);

  const effortStats = transformEffortStats(detail.effortStats);
  return (
    <div>
      <InfoTitle title="세부 정보" />
      <InfoItem
        subject="분류"
        content={detail.genera}
      />
      <InfoItem
        subject="신장"
        content={`${height} m`}
      />
      <InfoItem
        subject="무게"
        content={`${weight} kg`}
      />
      <InfoItem
        subject="포획률"
        content={detail.captureRate}
      />
      <InfoItem subject="성장">
        <InforamtionDetailGrowthRate growthRate={detail.growthRate} />
      </InfoItem>
      <InfoItem subject="노력치">
        <div className="grid gap-y-1">
          {effortStats.map(({ stat, value }) => (
            <div key={stat}>
              {`${stat} : ${value}`}
            </div>
          ))}
        </div>
      </InfoItem>
    </div>
  );
}
