import React from 'react';
import type { Detail } from '@/app/models/poke.type';
import InfoItem from './info-item';

interface InformationDetailProps {
  detail: Detail;
}
export default function InformationDetail({
  detail,
}: InformationDetailProps) {
  return (
    <div>
      <h3>세부 정보</h3>
      <InfoItem
        subject="분류"
        content={detail.genera.ko}
      />
      <InfoItem
        subject="신장"
        content={detail.height}
      />
      <InfoItem
        subject="무게"
        content={detail.weight}
      />
      <InfoItem
        subject="포획률"
        content={detail.captureRate}
      />
      {/* <InfoItem
        subject="무게"
        content={detail.weight}
      /> */}
    </div>
  );
}
