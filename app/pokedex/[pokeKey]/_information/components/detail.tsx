import React from 'react';
import type { Detail } from '@/app/models/poke.type';
import type { GrowthRate } from '@/app/data/growth-rate';
import InfoItem from './info-item';
import {
  formatMeasurement,
  getGrowthRateInfo,
  transformEffortStats,
} from '../utils/detail';
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
    <div className="text-slate-600 text-sm sm:text-[15px] font-semibold grid gap-y-1">
      <div>{growthRateText}</div>
      <div className="flex gap-x-2 items-center">
        <span className="text-slate-500/90 text-xs xs:text-[13px] sm:text-sm">
          {atLevel50Text}
        </span>
        :
        <span>{expPointAt50}</span>
      </div>
      <div className="flex gap-x-2 items-center">
        <span className="text-slate-500/90 text-xs xs:text-[13px] sm:text-sm">
          {atLevel100Text}
        </span>
        :
        <span>{expPointAt100}</span>
      </div>
    </div>
  );
}

export default function InformationDetail({
  detail,
}: InformationDetailProps) {
  const height = formatMeasurement(detail.height, 'm');

  const weight = formatMeasurement(detail.weight, 'kg');

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
        content={height}
      />
      <InfoItem
        subject="무게"
        content={weight}
      />
      <InfoItem
        subject="포획률"
        content={detail.captureRate}
      />
      <InfoItem subject="성장">
        <InforamtionDetailGrowthRate growthRate={detail.growthRate} />
      </InfoItem>
      <InfoItem
        subject="노력치"
      >
        <div className="text-slate-600 text-sm sm:text-[15px] font-semibold grid gap-y-1">
          {effortStats.map((effortStat) => <div key={effortStat}>{effortStat}</div>)}
        </div>
      </InfoItem>
    </div>
  );
}
